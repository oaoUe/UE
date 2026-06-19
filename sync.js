const GHSync = (() => {
  const OWNER = 'oaoUe', REPO = 'UE', BRANCH = 'main', PATH = 'records.json';
  const RAW = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${PATH}`;
  const API = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`;

  const pat = () => localStorage.getItem('gh_pat') || '';

  function collect() {
    const scores = JSON.parse(localStorage.getItem('toeic_scores') || '[]');
    const answers = {};
    for (let t = 1; t <= 6; t++) {
      try {
        const a = JSON.parse(localStorage.getItem('toeic_ans_t' + t) || 'null');
        if (a && Object.keys(a).length) answers['t' + t] = a;
      } catch {}
    }
    return { scores, answers };
  }

  async function pull() {
    try {
      const res = await fetch(RAW + '?_=' + Date.now());
      if (!res.ok) return false;
      const d = await res.json();
      if (Array.isArray(d.scores)) localStorage.setItem('toeic_scores', JSON.stringify(d.scores));
      if (d.answers) {
        for (let t = 1; t <= 6; t++) {
          const a = d.answers['t' + t];
          if (a) localStorage.setItem('toeic_ans_t' + t, JSON.stringify(a));
        }
      }
      return true;
    } catch { return false; }
  }

  async function push() {
    const token = pat();
    if (!token) return false;
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(collect(), null, 2))));
    let sha = '';
    try {
      const r = await fetch(API, { headers: { Authorization: 'token ' + token } });
      if (r.ok) sha = (await r.json()).sha;
    } catch {}
    try {
      const body = { message: 'sync quiz records', content, branch: BRANCH };
      if (sha) body.sha = sha;
      const r = await fetch(API, {
        method: 'PUT',
        headers: { Authorization: 'token ' + token, 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      return r.ok;
    } catch { return false; }
  }

  return { pull, push };
})();
