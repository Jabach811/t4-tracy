import {
  builderOptions, builderPresets, presetCategories, defaults, findOption, milkApplies,
  normalizeRecipe, composeVisual, describeRecipe, priceRecipe
} from '../data/drink-builder-data.mjs';

const INGREDIENT_PATH = 'assets/builder/ingredients/';
const CUP_PATH = 'M72 81h156l-21 251c-1 16-114 16-116 0z';
const MUG_PATH = 'M72 116h137v176c0 44-137 44-137 0z';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function iceMarkup(count, cls) {
  const cubes = [
    'M112 162l27-16 27 18-8 29-34 4-17-21z',
    'M173 216l25-15 24 17-5 27-31 6-18-19z',
    'M100 235l23-15 26 14-4 29-30 8-18-18z'
  ].slice(0, count);
  if (!cubes.length) return '';
  return `<g data-layer="ice" class="${cls}" fill="rgba(255,255,255,.55)" stroke="rgba(255,255,255,.75)" stroke-width="3">${cubes.map((d) => `<path d="${d}"/>`).join('')}</g>`;
}

// Stand-in for toppings without art: a cluster of colored dots on the cup floor.
function dotCluster(color, offset) {
  const dots = [[0, 0], [18, -6], [36, 2], [9, 14], [27, 12], [-8, 12]];
  return dots.map(([dx, dy]) => `<circle cx="${offset + dx}" cy="${310 + dy}" r="9" fill="${color}" stroke="rgba(60,30,40,.35)" stroke-width="2"/>`).join('');
}

function toppingMarkup(toppings, classes) {
  const slots = [96, 150, 204]; // x centers across the cup floor
  return toppings.map((t, i) => {
    const x = slots[toppings.length === 1 ? 1 : toppings.length === 2 ? i * 2 : i];
    const cls = classes[t.id] || '';
    const body = t.overlay
      ? `<image href="${INGREDIENT_PATH}${t.overlay}.png" x="${x - 48}" y="256" width="96" height="96"/>`
      : dotCluster(t.color, x - 14);
    return `<g data-layer="topping-${esc(t.id)}" class="${cls}">${body}</g>`;
  }).join('');
}

export function cupMarkup(visual, classes = {}) {
  const hot = visual.vessel === 'hot';
  const shell = hot ? MUG_PATH : CUP_PATH;
  const flavor = visual.flavorOverlay
    ? `<g data-layer="flavor" class="${classes.flavor || ''}"><image href="${INGREDIENT_PATH}${visual.flavorOverlay}.png" x="150" y="92" width="110" height="110" transform="rotate(-6 205 147)"/></g>`
    : visual.swirl
      ? `<g data-layer="flavor" class="${classes.flavor || ''}"><path d="M100 150c30 16 70 16 100 0M96 185c34 18 78 18 110 0M104 222c28 14 64 14 92 0" fill="none" stroke="${visual.swirl}" stroke-width="9" stroke-linecap="round" opacity=".55" style="filter:brightness(.85)"/></g>`
      : '';
  const blend = visual.vessel === 'blended'
    ? `<g data-layer="blend" class="${classes.blend || ''}"><path d="M112 132c20 12 54 12 77 0M105 160c30 15 65 14 95-1M98 190c34 16 77 15 108-2" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="5" stroke-linecap="round"/></g>`
    : '';
  const cream = visual.cream
    ? `<g data-layer="cream" class="${classes.cream || ''}"><ellipse cx="150" cy="${hot ? 118 : 96}" rx="72" ry="18" fill="${visual.cream}" stroke="#552344" stroke-width="5"/><path d="M96 ${hot ? 112 : 90}c20-14 88-14 108 0" fill="none" stroke="rgba(255,255,255,.8)" stroke-width="4" stroke-linecap="round"/></g>`
    : '';
  const iceCream = visual.iceCream
    ? `<g data-layer="ice-cream" class="${classes.iceCream || ''}"><circle cx="150" cy="${hot ? 100 : 74}" r="36" fill="${visual.iceCream}" stroke="#552344" stroke-width="5"/><circle cx="136" cy="${hot ? 88 : 62}" r="8" fill="rgba(255,255,255,.55)"/></g>`
    : '';
  const steam = visual.showSteam
    ? `<g data-layer="steam" class="steam ${classes.steam || ''}" fill="none" stroke="rgba(85,35,68,.35)" stroke-width="4" stroke-linecap="round"><path d="M118 92c-8-14 8-22 0-38"/><path d="M146 86c-8-14 8-24 0-40"/><path d="M174 92c-8-14 8-22 0-38"/></g>`
    : '';
  const handle = hot ? `<path d="M205 134h25c42 0 42 92-7 92h-23" fill="none" stroke="#552344" stroke-width="12" stroke-linecap="round"/>` : '';
  const straw = hot ? '' : `<path d="M143 69V14" stroke="#552344" stroke-width="10" stroke-linecap="round"/><path d="M157 69V14" stroke="#fff5df" stroke-width="4" stroke-linecap="round"/>`;
  const rim = hot
    ? `<ellipse cx="140" cy="116" rx="70" ry="22" fill="${visual.liquid}" stroke="#552344" stroke-width="8"/>`
    : `<ellipse cx="150" cy="80" rx="82" ry="18" fill="rgba(255,255,255,.3)" stroke="#552344" stroke-width="7"/>`;
  return `
    <ellipse cx="150" cy="372" rx="70" ry="10" fill="rgba(91,43,56,.15)"/>
    ${handle}
    <defs><clipPath id="cup-clip"><path d="${shell}"/></clipPath></defs>
    <g clip-path="url(#cup-clip)">
      <path data-layer="liquid" class="liquid ${classes.liquid || ''}" d="${shell}" fill="${visual.liquid}"/>
      ${blend}
      ${iceMarkup(visual.iceCubes, classes.ice || '')}
      ${toppingMarkup(visual.toppings, classes)}
      ${flavor}
      <path d="M62 301c60 25 123 27 177 0v57H61z" fill="rgba(68,25,33,.10)"/>
    </g>
    <path d="${shell}" fill="none" stroke="#552344" stroke-width="7" stroke-linejoin="round"/>
    <path d="M94 113l15 195" stroke="rgba(255,255,255,.32)" stroke-width="10" stroke-linecap="round"/>
    ${rim}${straw}${cream}${iceCream}${steam}`;
}

// Decide which layers animate by comparing the previous visual to the new one.
export function reactionClasses(prev, next) {
  const c = {};
  if (!prev) return c;
  if (prev.liquid !== next.liquid || prev.vessel !== next.vessel) c.liquid = 'pour';
  if (prev.flavorOverlay !== next.flavorOverlay || prev.swirl !== next.swirl) c.flavor = next.flavorOverlay ? 'drop' : 'fade';
  for (const t of next.toppings) {
    if (!prev.toppings.some((p) => p.id === t.id)) c[t.id] = 'drop';
  }
  if (prev.iceCubes !== next.iceCubes) c.ice = 'fade';
  if (prev.cream !== next.cream) c.cream = 'settle';
  if (prev.iceCream !== next.iceCream) c.iceCream = 'settle';
  if (prev.vessel !== next.vessel) { c.blend = 'fade'; c.steam = 'fade'; }
  return c;
}

// ---------- DOM (skipped under Node tests) ----------
if (typeof document !== 'undefined') {
  const rowsEl = document.querySelector('#choice-rows');
  const stage = document.querySelector('#cup-stage');
  const totalEl = document.querySelector('#price-total');

  let state = normalizeRecipe();
  let prevVisual = null;
  let menuCategory = presetCategories[0].id;
  let menuOpen = false;

  const money = (n) => `$${n.toFixed(2)}`;

  const chip = (field, entry, pressed, extra = '') =>
    `<button class="chip" type="button" data-field="${field}" data-value="${esc(entry.id)}" aria-pressed="${pressed}"${extra}>${esc(entry.label)}${entry.price ? `<small>+${money(entry.price)}</small>` : ''}${entry.note ? `<small>${esc(entry.note)}</small>` : ''}</button>`;

  function rowMarkup(field, label, note, chips) {
    return `<section class="row" aria-labelledby="${field}-label">
      <div class="row-head"><span class="row-label" id="${field}-label">${label}</span><span class="row-note">${note}</span></div>
      <div class="strip" role="group" aria-labelledby="${field}-label" data-row="${field}">${chips}</div>
    </section>`;
  }

  function startRow() {
    const fresh = `<button class="chip" type="button" data-action="fresh" aria-pressed="${state.start === 'fresh'}">Fresh cup</button>`;
    const menu = `<button class="chip" type="button" data-action="menu" aria-pressed="${state.start !== 'fresh'}" aria-expanded="${menuOpen}" aria-controls="menu-picker">From the menu</button>`;
    const tabs = presetCategories.map((c) => `<button class="chip" type="button" data-category="${c.id}" aria-pressed="${menuCategory === c.id}">${c.label}</button>`).join('');
    const cards = builderPresets.filter((p) => p.category === menuCategory).map((p) =>
      `<button class="menu-card" type="button" data-preset="${p.id}" aria-pressed="${state.start === p.id}">
        <img src="assets/products/boba/${p.image}.png" alt="" loading="lazy"><span>${esc(p.label)}</span><span>${money(p.price)}</span>
      </button>`).join('');
    return `<section class="row" aria-labelledby="start-label">
      <div class="row-head"><span class="row-label" id="start-label">Start</span><span class="row-note">Build from scratch or tweak a favorite.</span></div>
      <div class="strip" role="group" aria-labelledby="start-label" data-row="start">${fresh}${menu}</div>
      <div id="menu-picker"${menuOpen ? '' : ' hidden'}>
        <div class="menu-tabs" role="group" aria-label="Menu categories" data-row="menu-tabs">${tabs}</div>
        <div class="strip" role="group" aria-label="Menu drinks" data-row="menu-cards">${cards}</div>
      </div>
    </section>`;
  }

  function renderRows() {
    const scrolls = {};
    for (const s of rowsEl.querySelectorAll('[data-row]')) scrolls[s.dataset.row] = s.scrollLeft;
    const focused = document.activeElement?.closest('#choice-rows button');
    const focusKey = focused && (focused.dataset.field ? `[data-field="${focused.dataset.field}"][data-value="${focused.dataset.value}"]`
      : focused.dataset.action ? `[data-action="${focused.dataset.action}"]`
        : focused.dataset.category ? `[data-category="${focused.dataset.category}"]`
          : focused.dataset.preset ? `[data-preset="${focused.dataset.preset}"]` : null);
    const single = (field, group) => builderOptions[group].map((e) => chip(field, e, state[field] === e.id)).join('');
    const iceChips = builderOptions.ice.map((e) => chip('ice', e, state.ice === e.id, state.finish === 'hot' ? ' disabled' : '')).join('');
    const toppingChips = builderOptions.toppings.map((e) => {
      const on = state.toppings.includes(e.id);
      return chip('toppings', e, on, !on && state.toppings.length >= 3 ? ' disabled' : '');
    }).join('');
    rowsEl.innerHTML = [
      startRow(),
      rowMarkup('base', 'Base', 'The main flavor of the cup.', single('base', 'bases')),
      rowMarkup('flavor', 'Flavor', 'Fruit or syrup accent.', single('flavor', 'flavors')),
      milkApplies(state.base) ? rowMarkup('milk', 'Milk', 'Swaps are +$0.70.', single('milk', 'milks')) : '',
      rowMarkup('sweetness', 'Sweetness', 'How sweet to make it.', single('sweetness', 'sweetness')),
      rowMarkup('ice', 'Ice', state.finish === 'hot' ? 'Hot drinks have no ice.' : 'How much ice.', iceChips),
      rowMarkup('toppings', 'Toppings', `Up to three, +$0.70 each. ${state.toppings.length}/3 picked.`, toppingChips),
      rowMarkup('finish', 'Finish', 'Iced, hot, or blended.', single('finish', 'finishes')),
      rowMarkup('addon', 'Add-on', 'Cream or ice cream, +$1.00.', single('addon', 'addons'))
    ].join('');
    for (const s of rowsEl.querySelectorAll('[data-row]')) { if (scrolls[s.dataset.row]) s.scrollLeft = scrolls[s.dataset.row]; }
    if (focusKey) rowsEl.querySelector(focusKey)?.focus({ preventScroll: true });
  }

  function renderCup() {
    const visual = composeVisual(state);
    stage.innerHTML = cupMarkup(visual, reactionClasses(prevVisual, visual));
    stage.setAttribute('aria-label', describeRecipe(state));
    prevVisual = visual;
    totalEl.textContent = money(priceRecipe(state).total);
  }

  function update(next) {
    state = normalizeRecipe(next);
    renderRows();
    renderCup();
  }

  rowsEl.addEventListener('click', (event) => {
    const btn = event.target.closest('button');
    if (!btn || btn.disabled) return;
    if (btn.dataset.action === 'fresh') { menuOpen = false; update({ ...defaults }); return; }
    if (btn.dataset.action === 'menu') { menuOpen = !menuOpen; renderRows(); return; }
    if (btn.dataset.category) { menuCategory = btn.dataset.category; renderRows(); return; }
    if (btn.dataset.preset) {
      const p = builderPresets.find((x) => x.id === btn.dataset.preset);
      update(p.recipe);
      return;
    }
    const { field, value } = btn.dataset;
    if (field === 'toppings') {
      const toppings = state.toppings.includes(value) ? state.toppings.filter((t) => t !== value) : [...state.toppings, value];
      update({ ...state, toppings });
      return;
    }
    update({ ...state, [field]: value });
  });

  const sheet = document.querySelector('#ticket-sheet');
  const ticketCup = document.querySelector('#ticket-cup');
  const ticketLine = document.querySelector('#ticket-line');
  const ticketBreakdown = document.querySelector('#ticket-breakdown');
  const openBtn = document.querySelector('#open-ticket');
  const closeBtn = document.querySelector('#close-ticket');
  document.querySelector('#ticket-note').textContent = 'Prices may change without notice. Show this at the counter.';

  function ticketText() {
    return `${describeRecipe(state)} ${money(priceRecipe(state).total)}`;
  }

  function openTicket() {
    const price = priceRecipe(state);
    ticketCup.innerHTML = cupMarkup(composeVisual(state));
    ticketLine.textContent = describeRecipe(state);
    const rows = [
      [price.label, price.drink],
      price.milk ? [`${findOption('milks', state.milk).label} milk`, price.milk] : null,
      price.toppings ? ['Toppings', price.toppings] : null,
      price.addon ? [findOption('addons', state.addon).label, price.addon] : null
    ].filter(Boolean);
    ticketBreakdown.innerHTML = rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${money(v)}</dd></div>`).join('')
      + `<div class="total"><dt>Total</dt><dd>${money(price.total)}</dd></div>`;
    sheet.hidden = false;
    closeBtn.focus();
  }

  function closeTicket() {
    sheet.hidden = true;
    openBtn.focus();
  }

  openBtn.addEventListener('click', openTicket);
  closeBtn.addEventListener('click', closeTicket);
  sheet.addEventListener('click', (e) => { if (e.target === sheet) closeTicket(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) closeTicket(); });

  document.querySelector('#copy-ticket').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    try {
      await navigator.clipboard.writeText(ticketText());
      btn.textContent = 'Copied';
    } catch {
      ticketLine.textContent = ticketText();
      btn.textContent = 'Select the line above';
    }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
  });

  const dataUrlCache = new Map();
  async function toDataUrl(src) {
    if (src.startsWith('data:')) return src;
    if (!dataUrlCache.has(src)) {
      const blob = await (await fetch(src)).blob();
      dataUrlCache.set(src, await new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(blob); }));
    }
    return dataUrlCache.get(src);
  }

  async function inlinedSvg() {
    const clone = ticketCup.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', '600');
    clone.setAttribute('height', '800');
    for (const img of clone.querySelectorAll('image')) {
      img.setAttribute('href', await toDataUrl(img.getAttribute('href')));
    }
    return new XMLSerializer().serializeToString(clone);
  }

  function loadImage(src) {
    return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });
  }

  function wrapText(ctx, text, maxWidth) {
    const lines = []; let line = '';
    for (const w of text.split(' ')) {
      const test = line ? `${line} ${w}` : w;
      if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = w; } else line = test;
    }
    if (line) lines.push(line);
    return lines;
  }

  async function savePicture() {
    const price = priceRecipe(state);
    const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(await inlinedSvg())}`;
    const cup = await loadImage(svgUrl);
    const canvas = document.createElement('canvas');
    canvas.width = 900; canvas.height = 1400;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff9ed'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cup, 150, 60, 600, 800);
    ctx.fillStyle = '#552344'; ctx.textAlign = 'center';
    ctx.font = '900 38px Georgia, serif';
    let y = 940;
    for (const line of wrapText(ctx, describeRecipe(state), 780)) { ctx.fillText(line, 450, y); y += 48; }
    ctx.font = '900 64px Inter, system-ui, sans-serif';
    ctx.fillText(money(price.total), 450, y + 70);
    ctx.font = '600 26px Inter, system-ui, sans-serif'; ctx.fillStyle = '#8a7183';
    ctx.fillText('T4 Tracy · Prices may change without notice', 450, y + 130);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png'); a.download = 't4-my-drink.png';
    document.body.append(a); a.click(); a.remove();
  }

  document.querySelector('#save-ticket').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true;
    try { await savePicture(); } finally { btn.disabled = false; }
  });

  renderRows();
  renderCup();
}
