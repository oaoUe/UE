const Tracker = (() => {
  const KEY = 'toeic_scores';
  const ANS = t => 'toeic_ans_t' + t;
  let _start = null, _iv = null;
  let _cdIv = null, _cdTotal = 0;

  const fmt = s => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
  const elapsed = () => _start ? Math.floor((Date.now()-_start)/1000) : 0;

  function start(el) {
    if (_start) return;
    _start = Date.now();
    if (!_cdIv) {
      _iv = setInterval(() => { if(el) el.textContent = fmt(elapsed()); }, 1000);
    }
  }

  function reset(el) {
    clearInterval(_iv);
    clearInterval(_cdIv);
    _start = null; _iv = null; _cdIv = null;
    if(el) el.textContent = _cdTotal ? fmt(_cdTotal) : '0:00';
  }

  function startCountdown(totalSecs, el, onExpire) {
    clearInterval(_cdIv);
    _cdTotal = totalSecs;
    let remaining = totalSecs;
    if (el) el.textContent = fmt(remaining);
    _cdIv = setInterval(() => {
      remaining--;
      if (el) el.textContent = fmt(remaining);
      if (remaining <= 0) {
        clearInterval(_cdIv);
        _cdIv = null;
        if (onExpire) onExpire();
      }
    }, 1000);
  }

  function save(test, part, correct, total) {
    clearInterval(_iv);
    const secs = elapsed();
    const all = load();
    all.push({ test, part, correct, total, time: secs, date: new Date().toISOString() });
    try { localStorage.setItem(KEY, JSON.stringify(all)); } catch(e) {}
    return secs;
  }

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)||'[]'); } catch { return []; }
  }

  function clear() {
    localStorage.removeItem(KEY);
    for (let t = 1; t <= 6; t++) localStorage.removeItem(ANS(t));
  }

  function saveAns(test, qn, picked, right) {
    const key = ANS(test);
    let obj; try { obj = JSON.parse(localStorage.getItem(key)||'{}'); } catch { obj = {}; }
    obj[qn] = { picked, right };
    try { localStorage.setItem(key, JSON.stringify(obj)); } catch {}
  }

  function loadAnss(test) {
    try { return JSON.parse(localStorage.getItem(ANS(test))||'{}'); } catch { return {}; }
  }

  function clearTestAnss(test) { localStorage.removeItem(ANS(test)); }

  function clearQnAnss(test, qnums) {
    const key = ANS(test);
    let obj; try { obj = JSON.parse(localStorage.getItem(key)||'{}'); } catch { obj = {}; }
    qnums.forEach(n => delete obj[n]);
    try { localStorage.setItem(key, JSON.stringify(obj)); } catch {}
  }

  function clearTestScores(test) {
    const all = load().filter(r => r.test !== test);
    try { localStorage.setItem(KEY, JSON.stringify(all)); } catch {}
  }

  return { start, reset, save, load, clear, fmt, saveAns, loadAnss, clearTestAnss, clearQnAnss, clearTestScores, startCountdown };
})();
