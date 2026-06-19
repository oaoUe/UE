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
