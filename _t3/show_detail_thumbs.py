import fitz
from PIL import Image
import io, cv2, numpy as np

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

# TEST 2 listening detail was p353-358
# TEST 3 should be ~39 pages later, around p391-396
# Let's render p386-402 as a contact sheet
pages = list(range(386, 403))
zoom = 0.22
imgs = []
for p in pages:
    pix = doc[p].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    imgs.append((p, img))

W, H = imgs[0][1].size
cols = 6
rows = (len(imgs)+cols-1)//cols
sheet = Image.new("RGB", (W*cols, H*rows), "white")
for i,(p,img) in enumerate(imgs):
    sheet.paste(img, ((i%cols)*W, (i//cols)*H))

out = r"D:\大學\多益六回聽力\build\_t3\_detail_sheet.png"
ok, buf = cv2.imencode(".png", np.array(sheet)[:,:,::-1])
buf.tofile(out)
print("saved", out)
