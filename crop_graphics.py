# 自動偵測圖表題的圖：在指定欄(左/右半)的上半部找深色像素外接框，加邊距裁出。
# 中文路徑用 imencode+tofile。
import fitz
import numpy as np, cv2

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

def page_img(page_index, zoom=3.0):
    p = doc[page_index]
    pix = p.get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
    return cv2.cvtColor(img, cv2.COLOR_RGBA2BGR if pix.n == 4 else cv2.COLOR_RGB2BGR)

def autocrop(page_index, xr, yr, out, pad=18, thr=205):
    """xr,yr = (x0,x1),(y0,y1) 比例搜尋範圍；在範圍內找深色外接框。"""
    img = page_img(page_index)
    H, W = img.shape[:2]
    x0, x1 = int(xr[0]*W), int(xr[1]*W)
    y0, y1 = int(yr[0]*H), int(yr[1]*H)
    region = img[y0:y1, x0:x1]
    gray = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)
    mask = gray < thr
    ys, xs = np.where(mask)
    ry0, ry1 = ys.min(), ys.max()
    rx0, rx1 = xs.min(), xs.max()
    cx0 = max(0, x0 + rx0 - pad); cy0 = max(0, y0 + ry0 - pad)
    cx1 = min(W, x0 + rx1 + pad); cy1 = min(H, y0 + ry1 + pad)
    sub = img[cy0:cy1, cx0:cx1]
    ok, buf = cv2.imencode('.png', sub)
    buf.tofile(out)
    print(out, sub.shape)

# (page, x範圍, y搜尋範圍, 輸出)  y範圍上限設在題目開始前
jobs = [
    (15, (0.49, 0.92), (0.02, 0.215), r"build\test1\g68.png"),  # 服務時間表 Q68-70
    (18, (0.04, 0.49), (0.02, 0.235), r"build\test1\g95.png"),  # 功能表格 Q95-97
    (18, (0.49, 0.92), (0.02, 0.185), r"build\test1\g98.png"),  # 夏季特賣 Q98-100
]
if __name__ == "__main__":
    for pg, xr, yr, out in jobs:
        autocrop(pg, xr, yr, out)
