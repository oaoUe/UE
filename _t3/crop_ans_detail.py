import fitz
from PIL import Image
import io, cv2, numpy as np

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

def save(arr, path):
    ok, buf = cv2.imencode(".png", arr)
    buf.tofile(path)
    print("saved", path)

# Crop top portion of p392 (answer summary) at very high zoom
zoom = 5.0
pix = doc[392].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
arr = np.array(Image.open(io.BytesIO(pix.tobytes("png"))))[:,:,::-1]
h, w = arr.shape[:2]
# Top ~35% has the answer summary table
top = arr[:int(h*0.38), :]
save(top, r"D:\大學\多益六回聽力\build\_t3\_ans_summary.png")

# Also save left half and right half separately for readability
left = top[:, :w//2]
right = top[:, w//2:]
save(left, r"D:\大學\多益六回聽力\build\_t3\_ans_summary_L.png")
save(right, r"D:\大學\多益六回聽力\build\_t3\_ans_summary_R.png")
