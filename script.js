(() => {
  const D = window.DECK, S = D.sections, N = S.length, STEP = 360 / N, OFF = -90 + STEP / 2;
  const $ = id => document.getElementById(id), app = $('app'), wheel = $('wheel');
  const esc = s => s;  // content is pre-escaped HTML generated from the document

  // small decor icons, one per section, chosen to match each section's topic
  const ICONS = [
    '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.01"/>',                                           // 1 overview
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',          // 2 objectives
    '<path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="m3 13 9 5 9-5"/>',                                            // 3 features
    '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h4a2 2 0 0 1 2 2v7"/>', // 4 flow
    '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',                                          // 5 outside scope
    '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 12h6M9 16h4"/>',                 // 6 needs
    '<rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 7h.01M7 17h.01"/>', // 7 stack
    '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',                                               // 8 delivery tests
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',                     // 9 timeline
    '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 0 1 0 5M18 14c2 .7 3 2.6 3 6"/>', // 10 team
    '<path d="M21 12a9 9 0 0 1-15.5 6.2M3 12A9 9 0 0 1 18.5 5.8"/><path d="M18.5 2v4h-4M5.5 22v-4h4"/>',      // 11 changes
    '<path d="m12 3 8 4v10l-8 4-8-4V7l8-4z"/><path d="m4 7 8 4 8-4M12 11v10"/>'                                // 12 deliverables
  ];
  const svg = i => `<svg viewBox="0 0 24 24">${ICONS[i % ICONS.length]}</svg>`;

  // ---- title page
  $('t-head').textContent = D.title.h1;
  $('t-meta').innerHTML = D.title.meta.map(m => `<dt>${m.k}</dt><dd>${m.v}</dd>`).join('');
  $('hub').textContent = D.outline;


  // ---- 3D wifi icons emanating from the title circle
  const emit = $('emit'), COUNT = 10;
  for (let i = 0; i < COUNT; i++) {
    const a = (70 + i * (220 / (COUNT - 1)) + (i % 3) * 4) * Math.PI / 180, d = 17 + (i % 4) * 3.4;   // fan out over the open left/top/bottom side; distance in --u units
    const w = document.createElement('div'); w.className = 'w3d';
    w.style.cssText = `--dx:calc(var(--u)*${(Math.cos(a) * d).toFixed(2)});--dy:calc(var(--u)*${(Math.sin(a) * d).toFixed(2)});` +
      `--dur:${(5.2 + (i % 4) * .7).toFixed(1)}s;--del:${(-i * 0.6).toFixed(1)}s;--rot:${(a * 180 / Math.PI + 90).toFixed(0)}deg`;
    w.innerHTML = '<div class="w3dr"><div class="w3di">' + '<svg viewBox="0 0 24 24"><use href="#wf"/></svg>'.repeat(5) + '</div></div>';
    emit.appendChild(w);
  }

  // ---- wheel (one node per numbered section)
  const nodes = S.map((s, i) => {
    const n = document.createElement('button');
    n.className = 'node neo'; n.style.setProperty('--a', i * STEP + OFF);
    n.setAttribute('aria-label', s.title);
    n.innerHTML = `${i + 1}<span class="lbl">${s.title.replace(/^\d+\.\s*/, '')}</span>`;
    const ang = (i * STEP + OFF) * Math.PI / 180, R = 19, nn = 5, Dd = R + nn * .62;
    const gap = Math.sqrt(Math.max(0, Dd * Dd - (R * Math.sin(ang)) ** 2)) - Math.abs(R * Math.cos(ang)) - nn / 2 + 1.8;
    n.querySelector('.lbl').style.setProperty('--gap', Math.max(1.6, gap).toFixed(2));
    n.onclick = () => go(secFirst[i]); wheel.appendChild(n); return n;
  });

  // ---- block -> html
  const blockHTML = b => {
    if (b.t === 'h3') return `<h3>${b.html}</h3>`;
    if (b.t === 'lead') return `<div class="lead">${b.html}</div>`;
    if (b.t === 'p') return `<div><p>${b.html}</p></div>`;
    if (b.t === 'li') return `<div class="li">${b.n ? `<b>${b.n}.</b>` : '<i></i>'}<span>${b.html}</span></div>`;
    if (b.t === 'table') return `<div><table><thead><tr>${b.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${
      b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  };
  // units: headings / lead-ins / "...:" lines stay glued to what follows; tables are never split
  const unitsOf = sec => {
    const u = []; let hold = [];
    sec.blocks.forEach(b => {
      hold.push(b);
      if (b.t === 'h3' || b.keep) return;
      u.push(hold.map(blockHTML).join('')); hold = [];
    });
    if (hold.length) u.push(hold.map(blockHTML).join(''));
    return u;
  };

  // ---- pagination (measured against a hidden twin of the real card)
  const gBody = $('g-body'), SCALES = [1.1, 1.04, 1, .94, .88];
  const overflows = () => {                       // bottom edge of the last block vs. the body, with a small safety margin
    const last = gBody.lastElementChild; if (!last) return false;
    return last.getBoundingClientRect().bottom - gBody.getBoundingClientRect().top > gBody.clientHeight - 6;
  };
  function paginate(units, s, t = false) {
    gBody.style.setProperty('--s', s); gBody.classList.toggle('tight', t); gBody.innerHTML = '';
    const pages = []; let cur = [], bad = 0;
    units.forEach(h => {
      gBody.insertAdjacentHTML('beforeend', h); cur.push(h);
      if (overflows() && cur.length > 1) {
        cur.pop(); pages.push(cur); cur = [h]; gBody.innerHTML = ''; gBody.insertAdjacentHTML('beforeend', h);
        if (overflows()) bad++;                       // a unit (e.g. a table) that cannot fit even alone
      } else if (cur.length === 1 && overflows()) bad++;
    });
    if (cur.length) pages.push(cur);
    return { p: pages, bad, s, t };
  }
  // each page takes the largest size (within a narrow band) at which it fits, so sizes never swing wildly
  const PAGE_SCALES = [1.1, 1.06, 1.02, .98, .94, .9, .86, .82, .8, .76, .72];
  function fitPage(units, t) {
    gBody.classList.toggle('tight', t);
    for (const s of PAGE_SCALES) { gBody.style.setProperty('--s', s); gBody.innerHTML = units.join(''); if (!overflows()) return s; }
    return PAGE_SCALES[PAGE_SCALES.length - 1];
  }
  // fewest unfittable pages, then fewest pages, then the largest text
  const better = (a, b) => !b || a.bad < b.bad || (a.bad === b.bad && (a.bad                  // nothing fits: smallest text, least scrolling
    ? (a.s < b.s) : (a.p.length < b.p.length || (a.p.length === b.p.length && a.s > b.s))));
  function build() {
    pages = [{ type: 'title' }, { type: 'outline' }]; secFirst = [];
    S.forEach((sec, i) => {
      $('g-title').textContent = sec.title + ' (cont.)';
      const units = unitsOf(sec); let best = null;
      SCALES.forEach(s => { const r = paginate(units, s); if (better(r, best)) best = r; });
      const tail = best.p.length > 1 && best.p[best.p.length - 1].length <= 2;   // stray last lines on a nearly empty page
      if (best.bad || tail) {                    // try a little smaller text, then compact spacing, before giving up a page
        [.84, .8].forEach(s => { const r = paginate(units, s); if (better(r, best)) best = r; });
        [.94, .9, .86, .82, .8, .76, .72].forEach(s => { const r = paginate(units, s, true); if (better(r, best)) best = r; });
      }
      best.p.forEach(u => { u.t = best.t; u.s = fitPage(u, best.t); });
      secFirst[i] = pages.length;
      best.p.forEach((u, k) => pages.push({ type: 'sec', i, k, s: u.s, t: u.t, html: u.join('') }));
    });
  }
  let pages = [], secFirst = [];

  // ---- navigation
  let cur = -1;
  function go(p) {
    p = Math.max(0, Math.min(pages.length - 1, p)); if (p === cur) return;
    const pg = pages[p], view = pg.type === 'title' ? 'title' : pg.type === 'outline' ? 'outline' : 'content';
    const prevSec = cur >= 0 && pages[cur] && pages[cur].type === 'sec' ? pages[cur].i : null;
    cur = p; app.dataset.view = view;
    const idx = pg.type === 'sec' ? pg.i : -1;
    const rot = idx >= 0 ? -(idx * STEP + OFF) : 0;
    wheel.style.setProperty('--rot', rot);
    nodes.forEach((n, i) => {
      n.classList.toggle('active', i === idx);
      n.querySelector('.lbl').classList.toggle('l', Math.cos((i * STEP + OFF + rot) * Math.PI / 180) < -0.05);
    });
    if (idx >= 0) {
      const sec = S[idx];
      $('c-title').textContent = sec.title + (pg.k ? ' (cont.)' : '');
      $('c-ico').innerHTML = svg(idx);
      const body = $('c-body'), c = $('card'); c.classList.remove('in');
      body.style.setProperty('--s', pg.s); body.classList.toggle('tight', !!pg.t); body.innerHTML = pg.html; body.classList.remove('scroll');
      body.classList.toggle('scroll', body.lastElementChild.getBoundingClientRect().bottom - body.getBoundingClientRect().top > body.clientHeight + 1); body.scrollTop = 0;  // only if a table can't fit even alone
      void c.offsetWidth; c.classList.add('in');
    }
    $('count').textContent = `${String(p + 1).padStart(2, '0')} / ${String(pages.length).padStart(2, '0')}`;
    $('prev').style.opacity = p ? 1 : .35; $('next').style.opacity = p < pages.length - 1 ? 1 : .35;
    history.replaceState(null, '', '#' + (p + 1));
  }
  $('t-btn').onclick = () => go(1); $('hub').onclick = () => go(1);
  $('prev').onclick = () => go(cur - 1); $('next').onclick = () => go(cur + 1);
  addEventListener('keydown', e => {
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) go(cur + 1);
    if (['ArrowLeft', 'PageUp'].includes(e.key)) go(cur - 1);
    if (e.key === 'Home') go(0); if (e.key === 'End') go(pages.length - 1);
  });
  let sx = 0, sy = 0;
  addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1));
  });

  // ---- (re)paginate when the window or fonts change, staying on the same section
  function refresh(first) {
    const here = cur >= 0 ? pages[cur] : null, want = first ? (parseInt(location.hash.slice(1), 10) || 1) - 1 : null;
    build(); cur = -1;
    if (want !== null) return go(want);
    if (!here || here.type === 'title') return go(0);
    if (here.type === 'outline') return go(1);
    let last = secFirst[here.i]; while (pages[last + 1] && pages[last + 1].i === here.i) last++;
    go(Math.min(secFirst[here.i] + here.k, last));
  }
  let tm; addEventListener('resize', () => { clearTimeout(tm); tm = setTimeout(() => refresh(false), 200); });
  refresh(true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => refresh(false));
})();
