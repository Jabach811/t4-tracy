const fmt = p => p.toFixed(2);

function renderCats(cats, mount) {
  mount.innerHTML = cats.map(cat => `
    <div class="cat" id="cat-${cat.id}" data-cat="${cat.id}">
      <div class="cathead">
        <h2>${cat.name}</h2>
        ${cat.base ? `<span class="base">$${fmt(cat.base)}</span>` : ""}
      </div>
      ${cat.note ? `<p class="catnote">${cat.note}</p>` : ""}
      <div class="items">
        ${cat.items.map(it => `
          <div class="item">
            ${it.i ? `<img class="ic" src="assets/products/boba/${it.i}.png" alt="" loading="lazy" width="192" height="192">` : ""}
            <span class="n">${it.n}${it.ct ? ` <span class="ct">(${it.ct})</span>` : ""}</span>
            <span class="leader"></span>
            <span class="pr">${fmt(it.p ?? cat.base)}</span>
          </div>`).join("")}
      </div>
    </div>`).join("");
}

function wireFilters(bar, mount) {
  bar.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    bar.querySelectorAll(".chip").forEach(c => c.classList.remove("on"));
    chip.classList.add("on");
    const want = chip.dataset.cat;
    mount.querySelectorAll(".cat").forEach(c =>
      c.classList.toggle("hide", want !== "all" && c.dataset.cat !== want));
  });
}

function renderFilterChips(cats, bar) {
  bar.innerHTML = `<button class="chip on" data-cat="all">All</button>` +
    cats.map(c => `<button class="chip" data-cat="${c.id}">${c.name}</button>`).join("");
}

function openStatus() {
  const d = new Date();
  const closeHr = (d.getDay() >= 1 && d.getDay() <= 4) ? 20 : 21;
  const mins = d.getHours() * 60 + d.getMinutes();
  const open = mins >= 660 && mins < closeHr * 60;
  const label = closeHr === 20 ? "8PM" : "9PM";
  document.querySelectorAll("[data-open-status]").forEach(el => {
    el.innerHTML = open
      ? `<b>Open today</b> 11AM – ${label}`
      : `<b>Closed now</b> · opens 11AM`;
  });
}

openStatus();
