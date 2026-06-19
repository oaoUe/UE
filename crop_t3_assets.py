"""Crop Part 1 photos and all 5 graphics for TEST 3."""
import fitz, cv2, numpy as np, os
from PIL import Image
import io

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

def find_photos(idx, zoom=3.0):
    img = page_cv(idx, zoom)
    H, W = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, thr = cv2.threshold(gray, 245, 255, cv2.THRESH_BINARY_INV)
    thr = cv2.morphologyEx(thr, cv2.MORPH_CLOSE, np.ones((25,25), np.uint8))
    cnts, _ = cv2.findContours(thr, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    boxes = []
    for c in cnts:
        x,y,w,h = cv2.boundingRect(c)
        if w*h > 0.05*W*H and w > 0.3*W and h > 0.12*H:
            boxes.append((x,y,w,h))
    boxes.sort(key=lambda b: b[1])
    return img, boxes

# === Part 1 photos: p96 (Q1,Q2), p97 (Q3,Q4), p98 (Q5,Q6) ===
pad = 12
q = 1
for page_idx in [96, 97, 98]:
    img, boxes = find_photos(page_idx, zoom=3.0)
    print(f"p{page_idx}: {len(boxes)} boxes")
    for box in boxes:
        x,y,w,h = box
        x1 = max(0, x-pad); y1 = max(0, y-pad)
        x2 = min(img.shape[1], x+w+pad); y2 = min(img.shape[0], y+h+pad)
        crop = img[y1:y2, x1:x2]
        save(crop, os.path.join(DST, f"q{q}.png"))
        q += 1

# === Graphics crop using autocrop approach ===
def autocrop(page_idx, zoom, x_range, y_range, out):
    """Find the bounding box of non-white content within x_range, y_range and save."""
    img = page_cv(page_idx, zoom)
    H, W = img.shape[:2]
    x0 = int(x_range[0]*W); x1 = int(x_range[1]*W)
    y0 = int(y_range[0]*H); y1 = int(y_range[1]*H)
    roi = img[y0:y1, x0:x1]
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    _, thr = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)
    ys, xs = np.where(thr > 0)
    if len(xs) == 0:
        print(f"WARNING: no content found for {out}")
        return
    pad = 10
    rx0 = max(0, xs.min()-pad); rx1 = min(roi.shape[1], xs.max()+pad)
    ry0 = max(0, ys.min()-pad); ry1 = min(roi.shape[0], ys.max()+pad)
    save(roi[ry0:ry1, rx0:rx1], out)

# g62: Southwestern Shack table - p102 right column upper area
autocrop(102, zoom=3.0, x_range=(0.5, 1.0), y_range=(0.0, 0.30),
         out=os.path.join(DST, "g62.png"))

# g65: Speaker schedule - p103 left column upper area
autocrop(103, zoom=3.0, x_range=(0.0, 0.50), y_range=(0.0, 0.28),
         out=os.path.join(DST, "g65.png"))

# g68: Mortgage type table - p103 right column upper area
autocrop(103, zoom=3.0, x_range=(0.5, 1.0), y_range=(0.0, 0.28),
         out=os.path.join(DST, "g68.png"))

# g95: Euro Fest poster - p106 left column upper area
autocrop(106, zoom=3.0, x_range=(0.0, 0.50), y_range=(0.0, 0.40),
         out=os.path.join(DST, "g95.png"))

# g98: DigiEdge reviews - p106 right column upper area
autocrop(106, zoom=3.0, x_range=(0.5, 1.0), y_range=(0.0, 0.35),
         out=os.path.join(DST, "g98.png"))

print("All done.")
