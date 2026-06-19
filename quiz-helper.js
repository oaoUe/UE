// Shared answer-restore helpers. Reads PART, TEST, QS, done from page scope.
let _saveOnce = false;

function applyAnswer(n, picked, ans) {
  const right = picked === ans;
  done[n] = { picked, right };
  if (PART <= 2) {
    const card = document.querySelector(`.opt[data-q="${n}"]`).closest(".card");
    card.querySelectorAll(".opt").forEach(o => {
      o.disabled = true;
      if (o.dataset.k === ans) o.classList.add("correct");
      else if (o.dataset.k === picked) o.classList.add("wrong");
    });
    const r = document.getElementById("r" + n);
    r.textContent = right ? `✓ 答對！正解 (${ans})` : `✗ 答錯，你選 (${picked})，正解 (${ans})`;
    r.className = "result " + (right ? "ok" : "bad");
    const rev = document.getElementById("rev" + n);
    if (rev) {
      rev.querySelectorAll(".ro").forEach(ro => {
        if (ro.dataset.k === ans) ro.classList.add("ans");
        else if (ro.dataset.k === picked) ro.classList.add("miss");
      });
      rev.classList.add("show");
    }
  } else {
    const qDiv = document.querySelector(`.opt[data-q="${n}"]`).closest(".q");
    qDiv.querySelectorAll(".opt").forEach(o => {
      o.disabled = true;
      o.classList.add("reveal");
      if (o.dataset.k === ans) o.classList.add("correct");
      else if (o.dataset.k === picked) o.classList.add("wrong");
    });
    const szEl = document.getElementById("sz" + n);
    if (szEl) szEl.classList.add("show");
    const r = document.getElementById("r" + n);
    r.textContent = right ? `✓ 答對！正解 (${ans})` : `✗ 答錯，你選 (${picked})，正解 (${ans})`;
    r.className = "result " + (right ? "ok" : "bad");
  }
}

function restoreAnswers() {
  const saved = Tracker.loadAnss(TEST);
  QS.forEach(q => { if (saved[q.n]) applyAnswer(q.n, saved[q.n].picked, q.ans); });
}

function showTotalIfComplete() {
  if (PART !== 4) return;
  const parts = [1,2,3,4].map(p => {
    try { return JSON.parse(sessionStorage.getItem('toeic_sess_t'+TEST+'_p'+p)); } catch { return null; }
  });
  if (parts.some(p => !p)) return;
  const totalCorrect = parts.reduce((s,p) => s + p.correct, 0);
  const totalTime = parts.reduce((s,p) => s + p.time, 0);
  const pct = totalCorrect;
  const scoreColor = pct >= 80 ? '#4ade80' : pct >= 60 ? '#fbbf24' : '#f87171';
  const el = document.createElement('div');
  el.style.cssText = 'background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;border-radius:16px;padding:28px 24px;text-align:center';
  el.innerHTML = `
    <div style="font-size:12px;opacity:.75;letter-spacing:.8px;margin-bottom:10px;text-transform:uppercase">TEST ${TEST} · 完整作答成績</div>
    <div style="font-size:48px;font-weight:800;line-height:1;margin-bottom:4px;color:${scoreColor}">${totalCorrect}</div>
    <div style="font-size:15px;opacity:.7;margin-bottom:14px">/ 100 題</div>
    <div style="background:rgba(255,255,255,.15);border-radius:999px;display:inline-block;padding:6px 20px;font-size:13px;font-weight:600">
      總作答時間 ${Tracker.fmt(totalTime)}
    </div>`;
  const nb = document.getElementById('nextBtn');
  if (nb) nb.insertAdjacentElement('afterend', el);
}

function initCountdown() {
  const DEFAULTS = [0, 300, 480, 1020, 840];
  let cfg; try { cfg = JSON.parse(localStorage.getItem('toeic_timer') || 'null'); } catch { cfg = null; }
  const PART_SECS = (Array.isArray(cfg) && cfg.length >= 5) ? cfg : DEFAULTS;
  const secs = PART_SECS[PART] || 0;
  if (!secs) return;

  const modal = document.createElement('div');
  modal.id = 'timeup-modal';
  modal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:999;align-items:center;justify-content:center';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:20px;padding:36px 32px;text-align:center;max-width:320px;width:88%;box-shadow:0 20px 60px rgba(0,0,0,.3)">
      <div style="font-size:44px;margin-bottom:10px">⏰</div>
      <h2 style="font-size:20px;font-weight:800;margin:0 0 8px;color:#1b1f24">時間到！</h2>
      <p style="font-size:13px;color:#6b7280;margin:0 0 22px;line-height:1.6">作答時間已到，你仍可繼續完成剩餘題目。</p>
      <button id="timeup-ok" style="background:#2563eb;color:#fff;border:0;border-radius:12px;padding:12px 0;font-size:14px;font-weight:700;cursor:pointer;width:100%">繼續作答</button>
    </div>`;
  document.body.appendChild(modal);
  document.getElementById('timeup-ok').addEventListener('click', () => { modal.style.display = 'none'; });

  const show = () => { modal.style.display = 'flex'; };
  Tracker.startCountdown(secs, timerEl, show);

  document.getElementById('resetAll').addEventListener('click', () => {
    modal.style.display = 'none';
    Tracker.startCountdown(secs, timerEl, show);
  });
}
