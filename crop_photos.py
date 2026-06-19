import fitz, cv2, numpy as np, os, sys

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

def page_to_cv(idx, zoom=3.0):
    pix = doc[idx].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    arr = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
    if pix.n == 4:
        arr = cv2.cvtColor(arr, cv2.COLOR_RGBA2BGR)
    else:
        arr = cv2.cvtColor(arr, cv2.COLOR_RGB2BGR)
    return arr

def find_photos(idx, zoom=3.0):
    img = page_to_cv(idx, zoom)
    H, W = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # photos are large rectangular regions that are NOT pure white
    _, thr = cv2.threshold(gray, 245, 255, cv2.THRESH_BINARY_INV)
    thr = cv2.morphologyEx(thr, cv2.MORPH_CLOSE, np.ones((25,25), np.uint8))
    cnts, _ = cv2.findContours(thr, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    boxes = []
    for c in cnts:
        x,y,w,h = cv2.boundingRect(c)
        area = w*h
        if area > 0.05*W*H and w > 0.3*W and h > 0.12*H:
            boxes.append((x,y,w,h))
    boxes.sort(key=lambda b: b[1])  # top to bottom
    return img, boxes

if __name__ == "__main__":
    idx = int(sys.argv[1]); zoom = float(sys.argv[2]) if len(sys.argv)>2 else 3.0
    img, boxes = find_photos(idx, zoom)
    print("page", idx, "size", img.shape[1], img.shape[0])
    for i,b in enumerate(boxes):
        print(i, b)
