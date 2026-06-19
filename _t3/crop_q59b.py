import fitz
from PIL import Image
import io, cv2, numpy as np

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

def save(arr, path):
    ok, buf = cv2.imencode(".png", arr)
    buf.tofile(path)

zoom = 3.5
pix = doc[102].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
arr = np.array(Image.open(io.BytesIO(pix.tobytes("png"))))[:,:,::-1]
h, w = arr.shape[:2]

# Q59 area
q59_area = arr[int(h*0.28):int(h*0.55), :w//2]
save(q59_area, r"D:\大學\多益六回聽力\build\_t3\_q59_text.png")
print("done")
