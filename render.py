import fitz, os, sys

PDF = r"D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf"
doc = fitz.open(PDF)

def render(page_index, out, zoom=1.0):
    p = doc[page_index]
    mat = fitz.Matrix(zoom, zoom)
    pix = p.get_pixmap(matrix=mat)
    pix.save(out)
    return pix.width, pix.height

if __name__ == "__main__":
    mode = sys.argv[1]
    if mode == "thumbs":
        start = int(sys.argv[2]); end = int(sys.argv[3])
        outdir = sys.argv[4]
        for i in range(start, end):
            w,h = render(i, os.path.join(outdir, f"p{i:03d}.png"), zoom=0.35)
        print("done", start, end)
    elif mode == "page":
        idx = int(sys.argv[2]); out = sys.argv[3]
        zoom = float(sys.argv[4]) if len(sys.argv) > 4 else 2.0
        print(render(idx, out, zoom))
