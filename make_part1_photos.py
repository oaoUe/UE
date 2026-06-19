"""裁 TEST 1 Part 1 照片 Q1-Q6 → test1/qN.png
Q1,2→p008  Q3,4→p009  Q5,6→p010 ; boxes[0]=上題, boxes[1]=下題
用法: python make_part1_photos.py
"""
import cv2, os, sys
from crop_photos import find_photos

OUT = os.path.join(os.path.dirname(__file__), "test1")
PAD = 12
# (題號, 頁index, slot)  slot 0=上 1=下
JOBS = [
    (1, 8, 0), (2, 8, 1),
    (3, 9, 0), (4, 9, 1),
    (5, 10, 0), (6, 10, 1),
]

for q, page, slot in JOBS:
    img, boxes = find_photos(page, zoom=3.0)
    if len(boxes) <= slot:
        print(f"!! Q{q} p{page} slot{slot}: 只找到 {len(boxes)} 個框", boxes)
        continue
    x, y, w, h = boxes[slot]
    H, W = img.shape[:2]
    x0, y0 = max(0, x - PAD), max(0, y - PAD)
    x1, y1 = min(W, x + w + PAD), min(H, y + h + PAD)
    crop = img[y0:y1, x0:x1]
    ok, buf = cv2.imencode(".png", crop)
    path = os.path.join(OUT, f"q{q}.png")
    buf.tofile(path)
    print(f"Q{q} p{page} slot{slot} -> {crop.shape[1]}x{crop.shape[0]}  {path}")
