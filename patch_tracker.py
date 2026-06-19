"""
Batch-patch all testN/partM.html to add:
  - stopwatch timer
  - progress bar (questions answered)
  - score saved to localStorage via tracker.js
"""
import re
from pathlib import Path

BASE = Path(__file__).parent

TIMER_CSS = """\
  .timerbox{display:flex;align-items:center;gap:6px}
  .timer{font-size:13px;color:var(--muted);font-weight:600;font-variant-numeric:tabular-nums}
  .progress-wrap{height:4px;background:var(--line);border-radius:4px;overflow:hidden;margin:-8px 0 2px}
  .progress-bar{height:100%;background:var(--brand);border-radius:4px;width:0%;transition:width .3s}"""

TIMER_SPAN = '    <span class="timerbox"><span class="timer" id="timer">0:00</span></span>'

PROGRESS_BAR = '  <div class="progress-wrap"><div class="progress-bar" id="pbar"></div></div>'

def patch(test_n, part_n, text):
    # 1. Timer CSS  (insert before first .btn{)
    if '.timer{' not in text:
        text = text.replace('  .btn{', TIMER_CSS + '\n  .btn{', 1)

    # 2. Timer span in topbar (after score span)
    text = re.sub(
        r'(<span class="score" id="score">.*?</span>)',
        r'\1\n' + TIMER_SPAN,
        text, count=1
    )

    # 3. Progress bar (after topbar closing tag)
    if 'id="pbar"' not in text:
        text = text.replace('  </div>\n  <div id="list">', '  </div>\n' + PROGRESS_BAR + '\n  <div id="list">', 1)

    # 4. Add tracker.js script include
    if 'tracker.js' not in text:
        text = text.replace('<script src="data.js"></script>', '<script src="../tracker.js"></script>\n<script src="data.js"></script>', 1)

    # 5. Add TEST constant after PART constant
    if f'const TEST = {test_n};' not in text:
        text = re.sub(r'(const PART = \d+;)', rf'\1\nconst TEST = {test_n};', text, count=1)

    # 6. Add timerEl + pbarEl after scoreEl
    if 'timerEl' not in text:
        text = text.replace(
            'const scoreEl = document.getElementById("score");',
            'const scoreEl = document.getElementById("score");\n'
            'const timerEl = document.getElementById("timer");\n'
            'const pbarEl  = document.getElementById("pbar");',
            1
        )

    # 7. Start timer on first answer (right after done[n] guard)
    if 'Tracker.start' not in text:
        text = text.replace(
            '  if(done[n]) return;\n',
            '  if(done[n]) return;\n  Tracker.start(timerEl);\n',
            1
        )

    # 8. Save score + update progress bar in updateScore
    if 'Tracker.save' not in text:
        old_complete = (
            'if(Object.keys(done).length===QS.length){\n'
            '    const nb=document.getElementById("nextBtn");\n'
            '    if(nb) nb.hidden=false;\n'
            '  }'
        )
        new_complete = (
            'if(Object.keys(done).length===QS.length){\n'
            '    const nb=document.getElementById("nextBtn");\n'
            '    if(nb) nb.hidden=false;\n'
            '    Tracker.save(TEST, PART, Object.values(done).filter(v=>v.right).length, QS.length);\n'
            '  }'
        )
        text = text.replace(old_complete, new_complete, 1)

    # 9. Update progress bar in updateScore (before the if-complete block)
    if 'pbarEl.style.width' not in text:
        text = text.replace(
            "  scoreEl.textContent = `${Object.values(done).filter(v=>v.right).length} / ${QS.length}`;",
            "  const _c=Object.values(done).filter(v=>v.right).length;\n"
            "  scoreEl.textContent = `${_c} / ${QS.length}`;\n"
            "  if(pbarEl) pbarEl.style.width = `${Math.round(Object.keys(done).length/QS.length*100)}%`;",
            1
        )
        # Fix the duplicate filter call in Tracker.save
        text = text.replace(
            'Tracker.save(TEST, PART, Object.values(done).filter(v=>v.right).length, QS.length);',
            'Tracker.save(TEST, PART, _c, QS.length);',
            1
        )

    # 10. Reset timer + progress bar on resetAll
    if 'Tracker.reset' not in text:
        text = text.replace(
            'document.getElementById("resetAll").addEventListener("click", ()=>{\n'
            '  for(const k in done) delete done[k];\n'
            '  render(); updateScore();\n'
            '});',
            'document.getElementById("resetAll").addEventListener("click", ()=>{\n'
            '  for(const k in done) delete done[k];\n'
            '  Tracker.reset(timerEl);\n'
            '  if(pbarEl) pbarEl.style.width="0%";\n'
            '  render(); updateScore();\n'
            '});',
            1
        )

    return text


ok = 0
fail = 0
for t in range(1, 7):
    for p in range(1, 5):
        fp = BASE / f"test{t}" / f"part{p}.html"
        if not fp.exists():
            print(f"MISSING  {fp.name}")
            fail += 1
            continue
        original = fp.read_text(encoding='utf-8')
        patched  = patch(t, p, original)
        if patched == original:
            print(f"SKIP     test{t}/part{p}.html  (already patched or no change)")
        else:
            fp.write_text(patched, encoding='utf-8')
            print(f"OK       test{t}/part{p}.html")
            ok += 1

print(f"\nDone: {ok} patched, {fail} missing")
