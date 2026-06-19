import shutil, os

SRC = r"D:\大學\多益六回聽力\03 單題分割MP3\TEST 3"
DST = r"D:\大學\多益六回聽力\build\test3"
os.makedirs(DST, exist_ok=True)

# Part 1: q1-q6
for i in range(1, 7):
    src = os.path.join(SRC, "TEST 3_Part 1", f"Test 3_{i:02d}.mp3")
    dst = os.path.join(DST, f"q{i}.mp3")
    shutil.copy2(src, dst)
    print(f"q{i}.mp3")

# Part 2: q7-q31
for i in range(7, 32):
    src = os.path.join(SRC, "TEST 3_Part 2", f"Test 3_{i:02d}.mp3")
    dst = os.path.join(DST, f"q{i}.mp3")
    shutil.copy2(src, dst)
    print(f"q{i}.mp3")

# Part 3: sets
p3_sets = ["32-34","35-37","38-40","41-43","44-46","47-49","50-52","53-55","56-58","59-61","62-64","65-67","68-70"]
for s in p3_sets:
    src = os.path.join(SRC, "TEST 3_Part 3", f"Test 3_{s}.mp3")
    dst = os.path.join(DST, f"q{s}.mp3")
    shutil.copy2(src, dst)
    print(f"q{s}.mp3")

# Part 4: sets
p4_sets = ["71-73","74-76","77-79","80-82","83-85","86-88","89-91","92-94","95-97","98-100"]
for s in p4_sets:
    src = os.path.join(SRC, "TEST 3_Part 4", f"Test 3_{s}.mp3")
    dst = os.path.join(DST, f"q{s}.mp3")
    shutil.copy2(src, dst)
    print(f"q{s}.mp3")

print("Done. Total:", 6+25+13+10, "files")
