"""Crop just the graphic tables (no question text) for TEST 3."""
import fitz, cv2, numpy as np, os

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)
DST = r"D:\大學\多益六回聽力\build\test3"

def save(arr, path):
    ok, buf = cv2.imencode(".png", arr)
    buf.tofile(path)
    print("saved", os.path.basename(path))

def page_cv(idx, zoom=3.0):
    pix = doc[idx].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    arr = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
    return cv2.cvtColor(arr, cv2.COLOR_RGB2BGR) if pix.n == 3 else cv2.cvtColor(arr, cv2.COLOR_RGBA2BGR)

def autocrop(page_idx, zoom, x_range, y_range, out):
    img = page_cv(page_idx, zoom)
    H, W = img.shape[:2]
    x0 = int(x_range[0]*W); x1 = int(x_range[1]*W)
    y0 = int(y_range[0]*H); y1 = int(y_range[1]*H)
    roi = img[y0:y1, x0:x1]
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    _, thr = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)
    ys, xs = np.where(thr > 0)
    if len(xs) == 0:
        print(f"WARNING: no content for {out}")
        return
    pad = 10
    rx0 = max(0, xs.min()-pad); rx1 = min(roi.shape[1], xs.max()+pad)
    ry0 = max(0, ys.min()-pad); ry1 = min(roi.shape[0], ys.max()+pad)
    save(roi[ry0:ry1, rx0:rx1], out)

# g62: Southwestern Shack table, p102 right col, tighter y
autocrop(102, zoom=3.0, x_range=(0.5, 1.0), y_range=(0.0, 0.165),
         out=os.path.join(DST, "g62.png"))

# g65: Speaker schedule, p103 left col
autocrop(103, zoom=3.0, x_range=(0.0, 0.50), y_range=(0.0, 0.215),
         out=os.path.join(DST, "g65.png"))

# g68: Mortgage type, p103 right col
autocrop(103, zoom=3.0, x_range=(0.5, 1.0), y_range=(0.0, 0.215),
         out=os.path.join(DST, "g68.png"))

# g95: Euro Fest poster, p106 left col
autocrop(106, zoom=3.0, x_range=(0.0, 0.50), y_range=(0.0, 0.315),
         out=os.path.join(DST, "g95.png"))

# g98: DigiEdge reviews, p106 right col
autocrop(106, zoom=3.0, x_range=(0.5, 1.0), y_range=(0.0, 0.265),
         out=os.path.join(DST, "g98.png"))

print("All done.")
