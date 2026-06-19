import fitz
from PIL import Image
import io, cv2, numpy as np

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

def save(idx, zoom, out):
    pix = doc[idx].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    arr = np.array(Image.open(io.BytesIO(pix.tobytes("png"))))[:,:,::-1]
    ok, buf = cv2.imencode(".png", arr)
    buf.tofile(out)
    print(f"saved p{idx}")

# Render pages 390-400 at readable zoom
for idx in range(390, 401):
    save(idx, 1.6, rf"D:\大學\多益六回聽力\build\_t3\_detail_p{idx}.png")
