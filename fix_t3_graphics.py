"""Fine-tune the 5 graphics by re-rendering with precise y ranges."""
import fitz, cv2, numpy as np, os

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

def smart_crop(page_idx, zoom, x_range, y_range, out, scan_from_bottom=True):
    """Auto-detect where question text starts (bold number '62.' etc) and stop there."""
    img = page_cv(page_idx, zoom)
    H, W = img.shape[:2]
    x0 = int(x_range[0]*W); x1 = int(x_range[1]*W)
    y0 = int(y_range[0]*H); y1 = int(y_range[1]*H)
    roi = img[y0:y1, x0:x1]

    # Detect rows with significant dark content (text) row-by-row
    # The graphic table has lines/borders; blank rows between table and question
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    row_darkness = (gray < 100).sum(axis=1)  # dark pixels per row

    # Find the first long gap (blank region) after the table content
    # A "blank" row has <5 dark pixels in the column width
    col_w = x1 - x0
    blank_threshold = max(3, col_w // 200)

    # Find table bottom: scan from top, find last row of table content
    # Then find first blank gap, then detect if next content is question number
    in_table = False
    table_end = 0
    blank_start = 0
    for r in range(len(row_darkness)):
        if row_darkness[r] > blank_threshold:
            if not in_table:
                in_table = True
            table_end = r
        else:
            if in_table and blank_start == 0:
                blank_start = r

    # Crop to table_end + small padding
    cut = min(table_end + 20, roi.shape[0])
    roi_cut = roi[:cut, :]

    # Autocrop whitespace
    gray2 = cv2.cvtColor(roi_cut, cv2.COLOR_BGR2GRAY)
    _, thr = cv2.threshold(gray2, 240, 255, cv2.THRESH_BINARY_INV)
    ys, xs = np.where(thr > 0)
    if len(xs) == 0:
        save(roi_cut, out)
        return
    pad = 8
    rx0 = max(0, xs.min()-pad); rx1 = min(roi_cut.shape[1], xs.max()+pad)
    ry0 = max(0, ys.min()-pad); ry1 = min(roi_cut.shape[0], ys.max()+pad)
    save(roi_cut[ry0:ry1, rx0:rx1], out)

# Generous y ranges so table is fully included, smart_crop will cut before questions
smart_crop(102, 3.0, x_range=(0.5, 1.0), y_range=(0.0, 0.22), out=os.path.join(DST, "g62.png"))
smart_crop(103, 3.0, x_range=(0.0, 0.50), y_range=(0.0, 0.22), out=os.path.join(DST, "g65.png"))
smart_crop(103, 3.0, x_range=(0.5, 1.0), y_range=(0.0, 0.22), out=os.path.join(DST, "g68.png"))
smart_crop(106, 3.0, x_range=(0.0, 0.50), y_range=(0.0, 0.35), out=os.path.join(DST, "g95.png"))
smart_crop(106, 3.0, x_range=(0.5, 1.0), y_range=(0.0, 0.30), out=os.path.join(DST, "g98.png"))
print("All done.")
