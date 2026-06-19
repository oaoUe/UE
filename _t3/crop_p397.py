import fitz
from PIL import Image
import io, cv2, numpy as np

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

def save(arr, path):
    ok, buf = cv2.imencode(".png", arr)
    buf.tofile(path)

zoom = 4.0
pix = doc[397].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
arr = np.array(Image.open(io.BytesIO(pix.tobytes("png"))))[:,:,::-1]
h, w = arr.shape[:2]

# Left column only (Q28-31 area), top half
left_top = arr[:h//2, :w//2]
save(left_top, r"D:\大學\多益六回聽力\build\_t3\_p397_left.png")
print("saved")
