import fitz
from PIL import Image
import io, cv2, numpy as np

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

# Render specific pages at higher zoom for reading
def save_page(idx, zoom, out):
    pix = doc[idx].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    arr = np.array(img)[:,:,::-1]
    ok, buf = cv2.imencode(".png", arr)
    buf.tofile(out)
    print(f"saved p{idx} -> {out}")

# Answer key pages - TEST 3+4 at p272
save_page(272, 3.0, r"D:\大學\多益六回聽力\build\_t3_anskey.png")

# Part 3/4 question pages - around p103-112 for TEST 3
pages_34 = list(range(100, 114))
zoom = 0.25
imgs = []
for p in pages_34:
    pix = doc[p].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    imgs.append((p, img))

W, H = imgs[0][1].size
cols = 7
rows = (len(imgs)+cols-1)//cols
sheet = Image.new("RGB", (W*cols, H*rows), "white")
for i,(p,img) in enumerate(imgs):
    sheet.paste(img, ((i%cols)*W, (i//cols)*H))

out = r"D:\大學\多益六回聽力\build\_t3_questions.png"
ok, buf = cv2.imencode(".png", np.array(sheet)[:,:,::-1])
buf.tofile(out)
print("saved questions sheet")
