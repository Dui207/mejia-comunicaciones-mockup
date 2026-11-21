// CES · mockup · ficha de producto (producto.html?id=hp786)

const id = new URLSearchParams(location.search).get("id");
const p = findProduct(id);

if (!p) {
  document.title = "Producto no encontrado · CES";
  $("#crumbs").innerHTML = `<a href="index.html">Inicio</a>`;
  $("#pdp").innerHTML = `<div class="empty"><p><strong>No encontramos ese producto.</strong></p><p><a href="index.html#catalogo" style="color:var(--red);font-weight:700">Volver al catálogo</a></p></div>`;
} else {
  const cat = findCategory(p.cat);
  document.title = `${p.nombre} · CES`;
  $("#crumbs").innerHTML = `<a href="index.html">Inicio</a> / <a href="index.html?cat=${cat.id}#catalogo">${cat.nombre}</a> / ${p.nombre}`;

  const fotos = p.galeria.length ? p.galeria : [];
  const specs = [p.tec !== "—" ? p.tec : null, ...p.bandas].filter(Boolean);
  const inds = p.industrias.map((i) => INDUSTRIES.find((x) => x.id === i)).filter(Boolean);

  $("#pdp").innerHTML = `
    <div class="pdp">
      <div>
        <div class="gallery-main" id="gal-main">
          ${fotos.length ? `<img class="${p.fit}" src="${fotos[0]}" alt="${p.nombre}">` : placeholderHTML(p)}
        </div>
        ${fotos.length > 1 ? `<div class="thumbs" id="thumbs">${fotos.map((f, i) =>
          `<button type="button" class="thumb ${i === 0 ? "is-active" : ""}" data-src="${f}" aria-label="Foto ${i + 1}"><img src="${f}" alt=""></button>`).join("")}</div>` : ""}
      </div>
      <div class="pdp-info">
        <span class="eyebrow">${p.marca} · ${cat.nombre}</span>
        <h1>${p.nombre}</h1>
        <div class="specs">${specs.map((s) => `<span class="spec">${s}</span>`).join("")}<span class="spec">${p.potencia}</span></div>
        <p class="resumen" style="margin-top:16px">${p.resumen}</p>
        <ul class="feature-list">${p.caracteristicas.map((c) => `<li>${icon("i-check")}<span>${c}</span></li>`).join("")}</ul>
        <div class="buy-box">
          <div class="qty" aria-label="Cantidad">
            <button type="button" id="q-minus" aria-label="Menos">−</button>
            <output id="q-val">1</output>
            <button type="button" id="q-plus" aria-label="Más">+</button>
          </div>
          <button type="button" class="btn btn-red" id="add-btn">${icon("i-list")} Agregar a cotización</button>
          <a class="btn btn-line" href="cotizacion.html">Ver mi cotización</a>
          <p class="note">Sin precio en línea: te enviamos la cotización con precio y existencias.</p>
        </div>
        ${inds.length ? `<div class="tags-ind">${inds.map((i) => `<a class="spec" href="index.html?ind=${i.id}#catalogo">${i.nombre}</a>`).join("")}</div>` : ""}
      </div>
    </div>
    <h2 style="font-size:1.4rem;color:var(--navy)">Especificaciones</h2>
    <table class="spec-table" style="max-width:760px;margin-bottom:48px">
      ${p.ficha.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("")}
    </table>`;

  let qty = 1;
  const setQty = (n) => { qty = Math.max(1, Math.min(999, n)); $("#q-val").textContent = qty; };
  $("#q-minus").addEventListener("click", () => setQty(qty - 1));
  $("#q-plus").addEventListener("click", () => setQty(qty + 1));
  $("#add-btn").addEventListener("click", () => {
    Quote.add(p.id, qty);
    showToast(`${qty} × ${p.nombre} agregado a tu cotización`);
  });

  const thumbs = $("#thumbs");
  if (thumbs) {
    thumbs.addEventListener("click", (e) => {
      const t = e.target.closest(".thumb");
      if (!t) return;
      $("#gal-main img").src = t.dataset.src;
      $$(".thumb", thumbs).forEach((b) => b.classList.toggle("is-active", b === t));
    });
  }

  const related = p.accesorios.map(findProduct).filter(Boolean);
  if (related.length) {
    $("#related-wrap").hidden = false;
    $("#related").innerHTML = related.map(cardHTML).join("");
    $("#related").addEventListener("click", (e) => {
      const add = e.target.closest("[data-add]");
      if (add) addToQuote(add.dataset.add);
    });
  }
}
