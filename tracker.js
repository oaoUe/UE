const Tracker = (() => {
  const KEY = 'toeic_scores';
  const ANS = t => 'toeic_ans_t' + t;
  let _start = null, _iv = null, _timerEl = null;
  let _totalPaused = 0, _pausedAt = null;
  let _cdIv = null, _cdTotal = 0, _cdRemaining = 0;
  let _cdEl = null, _cdOnExpire = null;
  let _visListening = false;

  const fmt = s => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
  const elapsed = () => _start ? Math.floor((Date.now() - _start - _totalPaused) / 1000) : 0;

  function _cdTick() {
    _cdRemaining--;
    if (_cdEl) _cdEl.textContent = fmt(_cdRemaining);
    if (_cdRemaining <= 0) {
      clearInterval(_cdIv); _cdIv = null;
      if (_cdOnExpire) _cdOnExpire();
    }
  }

  function _onVis() {
    if (document.hidden) {
      _pausedAt = Date.now();
      clearInterval(_iv); _iv = null;
      clearInterval(_cdIv); _cdIv = null;
    } else {
      if (_pausedAt) { _totalPaused += Date.now() - _pausedAt; _pausedAt = null; }
      if (_start && !_cdIv && _timerEl) {
        _iv = setInterval(() => { _timerEl.textContent = fmt(elapsed()); }, 1000);
      }
      if (_cdRemaining > 0) {
        _cdIv = setInterval(_cdTick, 1000);
      }
    }
  }

  function _addVis() {
    if (!_visListening) {
      document.addEventListener('visibilitychange', _onVis);
      _visListening = true;
    }
  }

  function start(el) {
    if (_start) return;
    _start = Date.now();
    _timerEl = el;
    if (!_cdIv) {
      _iv = setInterval(() => { if(el) el.textContent = fmt(elapsed()); }, 1000);
    }
    _addVis();
  }

  function reset(el) {
    clearInterval(_iv); clearInterval(_cdIv);
    if (_visListening) { document.removeEventListener('visibilitychange', _onVis); _visListening = false; }
    _start = null; _iv = null; _timerEl = null;
    _totalPaused = 0; _pausedAt = null;
    _cdIv = null; _cdRemaining = 0; _cdEl = null; _cdOnExpire = null;
    if(el) el.textContent = _cdTotal ? fmt(_cdTotal) : '0:00';
  }

  function startCountdown(totalSecs, el, onExpire) {
    clearInterval(_cdIv);
    _cdTotal = totalSecs;
    _cdRemaining = totalSecs;
    _cdEl = el; _cdOnExpire = onExpire;
    if (el) el.textContent = fmt(_cdRemaining);
    _cdIv = setInterval(_cdTick, 1000);
    _addVis();
  }

  function save(test, part, correct, total) {
    clearInterval(_iv);
    const secs = elapsed();
    try { sessionStorage.setItem('toeic_sess_t'+test+'_p'+part, JSON.stringify({correct, total, time:secs})); } catch {}
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
