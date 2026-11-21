// Mejía Comunicaciones · mockup · cabecera, pie, íconos y avisos que comparten todas las páginas.
// Requiere productos.js cargado antes.

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

// Datos de contacto: el teléfono/WhatsApp sale de las publicaciones de Mejía Comunicaciones
const CONTACTO = { telefono: "+52 55 7562 5709", whatsapp: "525575625709" };

const ICONS = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/></symbol>
  <symbol id="i-list" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/></symbol>
  <symbol id="i-radio" viewBox="0 0 24 24"><rect x="7" y="8" width="10" height="14" rx="2"/><path d="M10 8V2M10 12h4M10 16h4"/></symbol>
  <symbol id="i-signal" viewBox="0 0 24 24"><path d="M5 19a10 10 0 0 1 0-14M8.5 15.5a5 5 0 0 1 0-7M19 5a10 10 0 0 1 0 14M15.5 8.5a5 5 0 0 1 0 7"/><circle cx="12" cy="12" r="1.3"/></symbol>
  <symbol id="i-truck" viewBox="0 0 24 24"><path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/></symbol>
  <symbol id="i-tower" viewBox="0 0 24 24"><path d="M12 9v12M8 21l4-12 4 12M9.5 15h5"/><circle cx="12" cy="7" r="1.5"/><path d="M8 4a6 6 0 0 0 0 6M16 4a6 6 0 0 1 0 6"/></symbol>
  <symbol id="i-wifi" viewBox="0 0 24 24"><path d="M3 9a14 14 0 0 1 18 0M6 12.5a9.5 9.5 0 0 1 12 0M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19" r="1"/></symbol>
  <symbol id="i-cam" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="12" rx="2"/><circle cx="12" cy="13" r="3.2"/><path d="M8 7l1.2-2h5.6L16 7"/></symbol>
  <symbol id="i-plug" viewBox="0 0 24 24"><path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></symbol>
  <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></symbol>
  <symbol id="i-cap" viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/></symbol>
  <symbol id="i-tag" viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></symbol>
  <symbol id="i-image" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5-5 4 4 3-3 4 4"/></symbol>
  <symbol id="i-trash" viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></symbol>
</defs></svg>`;

const icon = (id) => `<svg class="i" aria-hidden="true"><use href="#${id}"/></svg>`;

function renderHeader() {
  const page = document.body.dataset.page || "";
  const navLinks = CATEGORIES.map(
    (c) => `<a href="index.html?cat=${c.id}#catalogo">${c.corto}</a>`
  ).join("");
  $("#site-header").innerHTML = `
    ${ICONS}
    <div class="topbar"><div class="wrap">
      <span>Radiocomunicación Hytera · Motorola · Kenwood</span>
      <span class="topbar-right"><a href="tel:${CONTACTO.telefono.replace(/\s/g, "")}">${icon("i-phone")} ${CONTACTO.telefono}</a></span>
    </div></div>
    <header class="site-header">
      <div class="wrap head-main">
        <a class="brand" href="index.html" aria-label="Mejía Comunicaciones, inicio"><img src="img/mc-logo.webp" alt="Mejía Comunicaciones" width="56" height="56"></a>
        <form class="head-search" id="head-search" role="search">
          <input id="head-search-input" type="search" placeholder="Busca un modelo: HP786, TC-508, BD506…" aria-label="Buscar productos">
          <button type="submit" aria-label="Buscar">${icon("i-search")}</button>
        </form>
        <a class="quote-btn ${page === "cotizacion" ? "is-active" : ""}" href="cotizacion.html" aria-label="Ver mi cotización">
          ${icon("i-list")}<span class="quote-label">Mi cotización</span><span class="count" id="quote-count" hidden>0</span>
        </a>
      </div>
      <nav class="catnav" aria-label="Categorías"><div class="wrap">${navLinks}</div></nav>
    </header>`;

  $("#head-search").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = $("#head-search-input").value.trim();
    location.href = "index.html" + (q ? "?q=" + encodeURIComponent(q) : "") + "#catalogo";
  });
  updateQuoteCount();
}

function renderFooter() {
  $("#site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="wrap foot-grid">
        <div>
          <img class="foot-logo" src="img/mc-logo.webp" alt="Mejía Comunicaciones" width="64" height="64">
          <p>Mejía Comunicaciones: equipos de radiocomunicación para empresas, con asesoría para elegir el radio adecuado y cotización por WhatsApp.</p>
        </div>
        <div>
          <h4>Catálogo</h4>
          <ul>${CATEGORIES.map((c) => `<li><a href="index.html?cat=${c.id}#catalogo">${c.nombre}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li>${icon("i-phone")} ${CONTACTO.telefono}</li>
            <li>${icon("i-chat")} <a href="https://wa.me/${CONTACTO.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="cotizacion.html">Pedir cotización</a></li>
            <li><a href="admin.html">Panel de administración (ejemplo)</a></li>
          </ul>
        </div>
        <div>
          <h4>Marcas</h4>
          <ul><li>Hytera</li><li>Motorola Solutions</li><li>Kenwood</li></ul>
        </div>
      </div>
      <div class="wrap foot-base">
        <span>Mockup de ejemplo, no es el sitio final.</span>
        <span>Precios en cotización, sujetos a cambio sin previo aviso.</span>
      </div>
    </footer>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
}

/* ---------- Aviso breve ---------- */
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function updateQuoteCount() {
  const badge = $("#quote-count");
  if (!badge) return;
  const n = Quote.count();
  badge.textContent = n;
  badge.hidden = n === 0;
}

function addToQuote(id) {
  const p = findProduct(id);
  Quote.add(id);
  showToast(`${p.nombre} agregado a tu cotización`);
}

// Recuadro cuando todavía no hay foto del producto
function placeholderHTML(p) {
  const cat = findCategory(p.cat);
  return `<div class="ph">${icon(cat.icono)}<span>${p.nombre}</span><small>Foto pendiente</small></div>`;
}

function mediaHTML(p) {
  return p.img
    ? `<img class="${p.fit}" src="${p.img}" alt="${p.nombre}" loading="lazy">`
    : placeholderHTML(p);
}

function cardHTML(p) {
  const specs = [p.tec !== "—" ? p.tec : null, ...p.bandas, p.potencia].filter(Boolean);
  return `
    <article class="card" data-id="${p.id}">
      <a class="card-media" href="producto.html?id=${p.id}" aria-label="Ver ${p.nombre}">
        ${mediaHTML(p)}
        ${p.nuevo ? '<span class="tag tag-new">Nuevo</span>' : p.destacado ? '<span class="tag">Destacado</span>' : ""}
      </a>
      <div class="card-body">
        <span class="brand-line">${p.marca} · ${findCategory(p.cat).corto}</span>
        <h3><a href="producto.html?id=${p.id}">${p.nombre}</a></h3>
        <p>${p.resumen}</p>
        <div class="specs">${specs.map((s) => `<span class="spec">${s}</span>`).join("")}</div>
        <div class="card-actions">
          <a class="btn btn-line btn-sm" href="producto.html?id=${p.id}">Ver ficha</a>
          <button type="button" class="btn btn-red btn-sm" data-add="${p.id}">Agregar</button>
        </div>
      </div>
    </article>`;
}

document.addEventListener("quote-changed", updateQuoteCount);
window.addEventListener("storage", updateQuoteCount);
renderHeader();
renderFooter();
