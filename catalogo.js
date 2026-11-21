// Mejía Comunicaciones · mockup · portada: categorías, filtros, productos e industrias.
const norm = (s) => s.toLowerCase().replace(/[-\s]/g, "");

/* ---------- Categorías y industrias ---------- */
$("#cat-grid").innerHTML = CATEGORIES.map((c) => {
  const n = PRODUCTS.filter((p) => p.cat === c.id).length;
  return `<a class="cat-card" href="?cat=${c.id}#catalogo" data-cat="${c.id}">
    ${icon(c.icono)}<strong>${c.nombre}</strong><small>${n} ${n === 1 ? "producto" : "productos"} de ejemplo</small></a>`;
}).join("");

$("#ind-grid").innerHTML = INDUSTRIES.map((i) => {
  const n = PRODUCTS.filter((p) => p.industrias.includes(i.id)).length;
  return `<button type="button" class="ind-card" data-ind="${i.id}">
    <img src="${i.img}" alt="" loading="lazy"><span>${i.nombre}<small>${n} equipos</small></span></button>`;
}).join("");

/* ---------- Filtros ---------- */
const state = { q: "", cat: "", marca: "", tec: "", ind: "" };
const params = new URLSearchParams(location.search);
state.q = params.get("q") || "";
state.cat = params.get("cat") || "";
state.ind = params.get("ind") || "";
state.marca = BRANDS.includes(params.get("marca")) ? params.get("marca") : "";

const chipsEl = $("#chips");
chipsEl.innerHTML =
  `<button type="button" class="chip" data-cat="">Todos</button>` +
  CATEGORIES.map((c) => `<button type="button" class="chip" data-cat="${c.id}">${c.corto}</button>`).join("");

function applyFilters() {
  const q = state.q.trim();
  const list = PRODUCTS.filter((p) => {
    if (state.cat && p.cat !== state.cat) return false;
    if (state.marca && p.marca !== state.marca) return false;
    if (state.tec && p.tec !== state.tec) return false;
    if (state.ind && !p.industrias.includes(state.ind)) return false;
    if (q) {
      const hay = norm([p.nombre, p.resumen, p.tec, p.marca, ...p.caracteristicas].join(" "));
      if (!hay.includes(norm(q))) return false;
    }
    return true;
  });

  $("#product-grid").innerHTML = list.map(cardHTML).join("");
  $("#empty").hidden = list.length > 0;
  $("#results-count").textContent = list.length ? `${list.length} ${list.length === 1 ? "equipo" : "equipos"}` : "";

  $$(".chip", chipsEl).forEach((c) => c.classList.toggle("is-active", c.dataset.cat === state.cat));
  $("#f-q").value = state.q;
  $("#f-marca").value = state.marca;
  $("#f-tec").value = state.tec;

  const note = $("#ind-note");
  const ind = INDUSTRIES.find((i) => i.id === state.ind);
  note.hidden = !ind;
  if (ind) {
    note.innerHTML = `Mostrando equipos para <strong>${ind.nombre}</strong> <button type="button" class="btn btn-ghost btn-sm" id="ind-clear">Quitar</button>`;
  }
}

chipsEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  state.cat = chip.dataset.cat;
  applyFilters();
});
$("#f-q").addEventListener("input", (e) => { state.q = e.target.value; applyFilters(); });
$("#f-marca").addEventListener("change", (e) => { state.marca = e.target.value; applyFilters(); });
$("#f-tec").addEventListener("change", (e) => { state.tec = e.target.value; applyFilters(); });
$("#f-reset").addEventListener("click", () => {
  Object.assign(state, { q: "", cat: "", marca: "", tec: "", ind: "" });
  applyFilters();
});

// Las tarjetas de categoría filtran sin recargar la página
$("#cat-grid").addEventListener("click", (e) => {
  const link = e.target.closest("[data-cat]");
  if (!link) return;
  e.preventDefault();
  state.cat = link.dataset.cat;
  applyFilters();
  $("#catalogo").scrollIntoView({ behavior: "smooth" });
});
$("#ind-grid").addEventListener("click", (e) => {
  const card = e.target.closest("[data-ind]");
  if (!card) return;
  state.ind = card.dataset.ind;
  state.cat = "";
  applyFilters();
  $("#catalogo").scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("click", (e) => {
  if (e.target.id === "ind-clear") { state.ind = ""; applyFilters(); }
  const add = e.target.closest("[data-add]");
  if (add) addToQuote(add.dataset.add);
});

applyFilters();
if (params.has("cat") || params.has("q") || params.has("ind") || params.has("marca")) {
  requestAnimationFrame(() => $("#catalogo").scrollIntoView());
}
