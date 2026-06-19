# 製作流程筆記（刷題 HTML 產生器）

> 給「下一次的自己」看的操作手冊。記錄如何從 PDF＋MP3 產生一題（或一回）的線上刷題 HTML。
> 已驗證可行：`build\test1\q1.html`（TEST 1 · Part 1 · Q1）。

---

## 0. 環境（已確認可用）

| 工具 | 狀態 | 備註 |
|------|------|------|
| `python` | ✅ `C:\Python314\python.exe` | 主要用這支 |
| PyMuPDF (`import fitz`) | ✅ 1.27.2 | PDF 渲染、抽頁 |
| Pillow (`import PIL`) | ✅ | 縮圖、接圖（contact sheet） |
| OpenCV (`import cv2`) | ✅ 4.13 | 自動偵測照片邊框 |
| numpy | ✅ | |
| magick / pdftoppm / ffmpeg / ghostscript | ❌ 沒裝 | **不要**依賴這些，全部用 Python |

PDF 主檔路徑（含全形字，程式裡用 raw string）：
```
D:\大學\多益六回聽力\全新！新制多益TOEIC題庫解析, 狠準 6 回聽力＋閱讀模擬試題，完全反映最新命題趨勢、全方位建立新制多益實戰能力！（附音檔）.pdf
```
- 共 **602 頁**，純圖片型（無文字層），原頁約 1767×2500。
- 渲染用 `fitz.Matrix(zoom, zoom)`：`zoom=0.2~0.35` 做縮圖定位，`zoom=2~3` 做正式裁圖。

---

## 1. ⚠️ 必踩的坑

1. **`cv2.imwrite()` 遇中文路徑會「靜默失敗」**（回傳 False 但不報錯，檔案根本沒寫出）。
   一律改用：
   ```python
   ok, buf = cv2.imencode('.png', img)
   buf.tofile(r'D:\...\out.png')          # tofile 支援 unicode 路徑
   ```
2. **PDF「頁碼」= 0-based index**。本筆記所有 `pXXX` 指的是 `doc[XXX]`，書本印刷頁碼會差幾頁。
3. PowerShell 下 `python -c "..."` 裡讀 PDF 路徑，最穩做法是用 `os.environ['PDF']` 或直接 raw string，避免引號轉義地獄。

---

## 2. 全書結構（已盤點，最重要的資產）

每回「試題本」依序排列，**解析與答案在全書最後段**：

| 區段 | 頁 index | 說明 |
|------|----------|------|
| 封面 / 目錄 | p000–005 | |
| **TEST 1 試題** | **p006–049** | 見下方細項 |
| TEST 2 試題 | p050–093 | 每回約 44 頁 |
| TEST 3 試題 | p094–137 | 規律：T(n) 起始 ≈ 6 + (n−1)×44 |
| … TEST 6 | 到 ~p269 | |
| **解析區開始（粉色分隔頁）** | **p270** | |
| **正確答案 Answer Key** | **p271 = TEST 1+2，p272 = TEST 3+4 …** | 一頁兩回 |
| 中譯與解析（含聽力 script） | p271 之後往下 | 還沒細切，待辦 |

### TEST 1 試題本細項（已確認）
| 內容 | 頁 index |
|------|----------|
| 「TEST 1」分隔頁 | p006 |
| LISTENING 說明 + Part 1 範例題（sample，**非正式題**） | p007 |
| **Part 1 照片 Q1–Q6** | **p008–p010**（每頁 2 張，Q1、Q2 在 p008） |
| Part 2–4（只有指示文字，選項全在音檔） | p011–p012… |
| Reading Part 5–7 | 到 p045 |
| TEST 1 分數換算表（聽力 / 閱讀） | p047 / p048 |
| 空白頁 | p049 |

> 其他回的對應頁，用「起始頁 + 相同偏移」推算後，務必再渲染一頁肉眼確認。

---

## 3. 聽力音檔對應

最細顆粒在 `03 單題分割MP3\TEST n\TEST n_Part k\`，檔名 `Test n_NN.mp3`：

| Part | 題號 | 檔案 | 一檔 |
|------|------|------|------|
| Part 1 | 1–6 | `Test 1_01.mp3` … `_06.mp3` | 每題一檔 |
| Part 2 | 7–31 | `Test 1_07.mp3` … `_31.mp3` | 每題一檔 |
| Part 3 | 32–70 | `Test 1_32-34.mp3` … | 每段一檔（3 題） |
| Part 4 | 71–100 | `Test 1_71-73.mp3` … | 每段一檔（3 題） |

> ⚠️ `._` 開頭、4096 bytes 的是 macOS 中繼資料，**過濾掉**（取 `Length > 10000` 或排除 `._*`）。

---

## 4. 答案來源

- 不要自己判讀照片猜答案；直接查 **Answer Key（p271 起）**。
- **TEST 1 全 100 題已抄齊 → `build\test1_answers.json`**（含 part 範圍/選項數）。
- ⚠️ 早期手記 Part 1 `3(B)` 是**誤抄**，緊裁核對後正解 `3(D)`。Part 1 = `1C 2A 3D 4D 5B 6C`。
- 查法（已驗證最準）：`doc[271].get_pixmap(Matrix(4,4))` → PIL 依 Part 緊裁該小塊 → `Read` 肉眼讀。整頁讀容易把 B/D 看混，**務必逐 Part 緊裁**。

---

## 5. 產一題的標準步驟（SOP）

以「TEST t, Part 1, 第 q 題」為例：

1. **定位頁**：照片在 `p008–010`（Q1,2→p008；Q3,4→p009；Q5,6→p010）。
2. **裁照片**：用 `crop_photos.py` 的 `find_photos(page, zoom=3.0)` 自動抓邊框，
   `boxes[0]`=該頁上題、`boxes[1]`=下題，加 `pad=12`，用 imencode 存 `qN.png`。
3. **複製音檔**：`03 單題分割MP3\TEST t\TEST t_Part 1\Test t_0q.mp3` → 輸出夾 `qN.mp3`。
4. **查答案**：Answer Key 頁。
5. **套 HTML 模板**（見 `build\test1\q1.html`）：改 `<img src>`、`<audio src>`、`const ANSWER`。
6. 用相對路徑，圖/音/html 放同一夾 → 整夾可搬移、可部署。

---

## 6. 現成腳本

| 檔案 | 用途 |
|------|------|
| `build\render.py` | `thumbs start end outdir`（批量縮圖定位）／`page idx out zoom`（單頁高清） |
| `build\crop_photos.py` | `find_photos(idx, zoom)` 自動偵測 Part 1 照片邊框；直接執行 `python crop_photos.py 8 3.0` 印出 boxes |
| `build\crop_graphics.py` | 裁 Part 3/4 圖表題的圖。`autocrop(page, x範圍, y搜尋範圍, out)`：在該欄上半部找深色像素外接框＋pad 裁出。改 `jobs` 清單即可批次裁。**坑：y 搜尋上限若設太低，表格下半列會被截掉**（TEST 1 踩過：服務表/功能表要拉到 ~0.22～0.235）。 |

定位頁面的小技巧：用 PIL 把一批縮圖拼成 contact sheet 一次看（見對話紀錄做法），比一頁頁開快很多。

照片偵測原理（`crop_photos.py`）：灰階 → `threshold(245, INV)` 找非白區 → `morphologyEx CLOSE (25×25)` 合併 → `findContours` 取「面積>5% 且 寬>30%頁寬 且 高>12%頁高」的方框 → 依 y 排序（上題在前）。

---

## 7. 進度 / 待辦

**架構決定**：改成「一個 Part 一頁、資料驅動」。題庫抽成每回一個 `data.js`（`window.QUIZ.q[題號]={part,ans,ask?{en,zh},opts:[{k,en,zh}]}`），`partN.html` 用 `<script src="data.js">` 載入後依 part 過濾渲染（file:// 下用 script 載入可避開 fetch 的 CORS 限制）。素材 `q{n}.png/.mp3` 全放該回資料夾、相對路徑。舊 `q1.html`（單題樣本）已被 `part1.html` 取代，保留作參考。

**內容豐富度決定**：作答後揭曉時，每題展開選項「英文原句＋中文翻譯」；Part 2/3/4 另含 `ask`（聽到的問句/題目，英＋中）。來源＝解析本（p315 起，逐題緊裁核對；詞彙/解析暫不收）。可用 node 驗：`node -e "global.window={};require('./data.js');…"`。

**Part 3/4 讀題決定**：不裝 OCR（tesseract/easyocr 皆未裝）。Part 3/4 的「題幹＋四個選項」**本來就印在試題頁上**（p012–018），渲染後視覺直接轉錄即可，**不需翻解析本**（解析本只在需要聽力 script／中譯參考時用；TEST 1 的中譯是我直接翻的）。圖表題另用 `crop_graphics.py` 裁圖。

**Part 3/4 資料模型**：`q[題號]={part:3|4, ans, set:"32-34", stem:{en,zh}, opts:[{k,en,zh}], graphic?:"g62.png"}`。
- `set` = 共用音檔的 3 題組；音檔複製成 `q{set}.mp3`（如 `q32-34.mp3`）。`partN.html` 依 set 分組、每組一個 audio player。
- `graphic` 只掛在該組「Look at the graphic」那題（或組內任一題），HTML 會把圖顯示在該組音檔上方。
- Part 3/4 選項是**文字題**（要閱讀），所以按鈕顯示整句英文，作答後揭曉中譯與題幹中譯（與 Part1/2 的「字母按鈕」不同）。

**TEST 1 全回完成 ✅（階段 0+ 與 階段 2-T1 都完成，可整回刷）**：
- [x] Part 1 Q1–6 → `test1\part1.html`（照片題 A–D，選項英＋中）
- [x] Part 2 Q7–31 → `test1\part2.html`（純音檔 A–C，問句＋回應英＋中）
- [x] Part 3 Q32–70 → `test1\part3.html`（對話，A–D，題幹＋選項英中；含 3 組圖表題 g62/g65/g68）
- [x] Part 4 Q71–100 → `test1\part4.html`（獨白，A–D，題幹＋選項英中；含 2 組圖表題 g95/g98）
- [x] 全 100 題答案 → `test1_answers.json`；完整題庫 → `test1\data.js`（node 驗證：100 題答案全對、選項數對、set/圖/音檔零缺漏）
- [x] 目錄 `test1\index.html`（四個 Part 全部「可作答」）
- 圖表題 5 張：g62 樓層圖、g65 圓餅圖(Austin5/Phila20/Denver30/Miami45)、g68 服務表、g95 SwiftX 功能表、g98 夏季特賣公告。

**TEST 2 整回完成 ✅（2026-06-07，Part 1–4, Q1–100，可整回刷）**：
- [x] 答案全 100 題 → `test2_answers.json`（程式洞數法＋目視交叉核對，已定讞）
- [x] 音檔全 54 檔複製進 `test2\`：Part1/2 為 `q{題號}.mp3`、Part3/4 為 `q{set}.mp3`（零缺漏）
- [x] Part 1 照片 Q1–6 → `test2\q1–6.png`＋選項英中（來源：聽力詳解 doc p353–354）
- [x] Part 2 Q7–31 → 問句＋三回應英中（來源：聽力詳解 doc p354–358，逐題以答案卡字母核對對位）
- [x] Part 3 Q32–70（13 組）＋ Part 4 Q71–100（10 組）→ 題幹＋四選項（來源：試題頁 doc p56–62，文字清晰直接轉錄；中譯自譯）
- [x] 5 張圖表 → `test2\{g62,g65,g68,g95,g98}.png`（g62 商品價目表/g65 公園地圖/g68 分店選址表/g95 行銷時程/g98 Apex 通訊錄；命名沿用組首題號）
- [x] `test2\data.js`（**100 題；node 驗證：答案全對、選項數對、音圖 0 缺漏**）＋ 4 個 `partN.html`＋`index.html`（標題 TEST 2、四 Part 全可作答）
- ⚠️ Part 2 少數誘答選項源自詳解小字（如 Q12/26/30/31 的 B/C 誘答、Q30 公司名 Polson），英文拼字可日後肉眼複核；答案選項皆已對答案卡確認無誤。
- 踩雷紀錄：Part 2 詳解雙欄＋長解析，題號極易位移一格（Q15「product displays」vs Q16「display monitors」是設計來混淆的高難度對）。**對位法＝每抄一題就比對 `test2_answers.json` 的字母**，對不上就是抄錯題號。
- 暫存檔在 `build\_t2\`（試題頁 p50–62、詳解頁、答案卡裁圖、contact sheet、5 張圖表來源頁、各種切欄圖）；確認無誤後可整夾刪除。
- ⚠️ doc 頁碼定位心得（供 TEST 3–6）：聽力**試題頁**＝每回起始+(約)6 起、Part3/4 題目在 `起始+6…12`；**聽力詳解**在全書詳解區，順序「每回 聽力詳解→閱讀詳解」，TEST 1 聽力詳解 doc p315、TEST 2 doc p353–358（每回詳解約 38–40 頁，下一回 +約 39 推算後務必渲染確認）。

**下一步（TEST 3–6，照此 SOP）**：
- [ ] 階段 1+2：橫掃 TEST 2–6，每回做完整 4 個 Part（建議一次做完一整回再換下一回，比分 Part 橫掃省事，因為渲染/答案頁是同一批）
  - **頁碼推算**：TEST n 試題起始 ≈ p006+(n−1)×44。Part 1 照片在試題本第 3–5 頁、Part 3/4 題目頁在 Part 2 指示頁之後（TEST 1 是 p012–018，TEST 2 ≈ +44）。**務必先渲染確認**。
  - **答案**：Answer Key p271=TEST1+2、p272=TEST3+4…（一頁兩回，逐 Part 緊裁核對，B/D 易混）。
  - **音檔**：`03 單題分割MP3\TEST n\TEST n_Part k\`，過濾 `._*`。Part1/2 複製成 `q{題號}.mp3`、Part3/4 複製成 `q{set}.mp3`。
  - **流程**：複製整個 `test1\` 當模板 → 換素材（png/mp3）→ 改 `data.js`（答案查 Answer Key、Part3/4 選項轉錄試題頁、Part1/2 選項＋中譯查解析本、中譯可自譯）→ 改 4 個 `partN.html` 與 `index.html` 的標題＝「TEST n」。
- ⚠️ Part 1/2 解析本起始頁：TEST 1 ≈ p315（Part1 p315–316、Part2 p316–320）。其他回往後推，先渲染確認。
- 驗法（每回必跑）：`node -e "global.window={};require('./testN/data.js');…"` 比對答案 json＋檢查 set/graphic 音圖檔存在（見對話用過的檢查腳本）。

---

## 8. 版權提醒

市售書隨附素材，僅供**個人學習**；做成網站請勿公開散布。
