import fitz
from PIL import Image
import io, cv2, numpy as np

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

def save(arr, path):
    ok, buf = cv2.imencode(".png", arr)
    buf.tofile(path)

zoom = 5.0
pix = doc[396].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
arr = np.array(Image.open(io.BytesIO(pix.tobytes("png"))))[:,:,::-1]
h, w = arr.shape[:2]
# Q25 is in the right column, upper portion
q25 = arr[int(h*0.23):int(h*0.48), w//2:]
save(q25, r"D:\大學\多益六回聽力\build\_t3\_q25.png")
print("done")
