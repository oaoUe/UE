import fitz
from PIL import Image
import io, cv2, numpy as np, os

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)
OUT = r"D:\大學\多益六回聽力\build\_t3"
os.makedirs(OUT, exist_ok=True)

def save(arr, path):
    ok, buf = cv2.imencode(".png", arr)
    buf.tofile(path)
    print("saved", path)

# 1. Answer key TEST 3 - left half of p272, zoom=5
pix = doc[272].get_pixmap(matrix=fitz.Matrix(5, 5))
img = np.array(Image.open(io.BytesIO(pix.tobytes("png"))))[:,:,::-1]
h, w = img.shape[:2]
# TEST 3 is left half
left = img[:, :w//2]
save(left, OUT + r"\_ans_test3.png")

# 2. Part 3/4 question pages for TEST 3 (p100-p111), zoom=1.8
for idx in range(100, 112):
    pix = doc[idx].get_pixmap(matrix=fitz.Matrix(1.8, 1.8))
    arr = np.array(Image.open(io.BytesIO(pix.tobytes("png"))))[:,:,::-1]
    save(arr, OUT + rf"\_q_p{idx}.png")

# 3. Part 1 photo pages p096-p098, zoom=2.0
for idx in range(96, 99):
    pix = doc[idx].get_pixmap(matrix=fitz.Matrix(2.0, 2.0))
    arr = np.array(Image.open(io.BytesIO(pix.tobytes("png"))))[:,:,::-1]
    save(arr, OUT + rf"\_photo_p{idx}.png")

# 4. Part 1 details from listening script - p391 area (TEST3 ~ TEST2+38 = 353+38=391?)
# First render p388-396 to find it
for idx in range(388, 400):
    pix = doc[idx].get_pixmap(matrix=fitz.Matrix(0.25, 0.25))
    arr = np.array(Image.open(io.BytesIO(pix.tobytes("png"))))[:,:,::-1]
    save(arr, OUT + rf"\_detail_p{idx}_thumb.png")
