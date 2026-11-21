// Mejía Comunicaciones · mockup · lista de cotización y formulario de envío.
// En el sitio real, el envío guarda la solicitud en el panel y avisa por correo al equipo de Mejía Comunicaciones.

const root = $("#quote-root");
const escapeHTML = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function rowHTML(item) {
  const p = findProduct(item.id);
  if (!p) return "";
  return `
    <div class="q-row" data-id="${p.id}">
      <a class="q-thumb" href="producto.html?id=${p.id}">${mediaHTML(p)}</a>
      <div class="q-name"><strong>${p.nombre}</strong><small>${p.marca} · ${findCategory(p.cat).corto}</small></div>
      <div class="qty">
        <button type="button" data-minus="${p.id}" aria-label="Menos">−</button>
        <output>${item.qty}</output>
        <button type="button" data-plus="${p.id}" aria-label="Más">+</button>
      </div>
      <button type="button" class="btn btn-ghost btn-sm" data-remove="${p.id}" aria-label="Quitar ${p.nombre}">${icon("i-trash")} Quitar</button>
    </div>`;
}

function render() {
  const items = Quote.items().filter((i) => findProduct(i.id));
  if (!items.length) {
    root.innerHTML = `
      <div class="done">
        ${icon("i-list")}
        <h1>Tu cotización está vacía</h1>
        <p>Agrega los equipos que necesitas desde el catálogo y aquí podrás enviar tu solicitud.</p>
        <a class="btn btn-red" href="index.html#catalogo">Ver catálogo</a>
      </div>`;
    return;
  }
  const total = items.reduce((n, i) => n + i.qty, 0);
  root.innerHTML = `
    <div class="section-head" style="margin-bottom:20px">
      <div><span class="eyebrow">Paso 1 de 2</span><h2>Mi cotización</h2></div>
      <p>${items.length} ${items.length === 1 ? "producto" : "productos"} · ${total} ${total === 1 ? "pieza" : "piezas"}</p>
    </div>
    <div class="quote-layout">
      <div>
        <div class="quote-list">${items.map(rowHTML).join("")}</div>
        <p style="margin-top:14px"><a href="index.html#catalogo" class="btn btn-ghost">← Seguir agregando equipos</a></p>
      </div>
      <form class="form-card" id="quote-form">
        <span class="eyebrow">Paso 2 de 2</span>
        <h2>Tus datos</h2>
        <p>Te respondemos con precios y existencias. Sin compromiso.</p>
        <div class="form-grid">
          <label class="field">Empresa<input name="empresa" required autocomplete="organization"></label>
          <label class="field">Nombre<input name="nombre" required autocomplete="name"></label>
          <label class="field">Correo<input name="correo" type="email" required autocomplete="email"></label>
          <label class="field">Teléfono<input name="tel" type="tel" required autocomplete="tel"></label>
          <label class="field">Comentarios<textarea name="coment" placeholder="Banda, uso, tiempo de entrega, accesorios…"></textarea></label>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-red btn-block">Enviar solicitud</button>
          <button type="button" class="btn btn-wa btn-block" id="wa-btn">${icon("i-chat")} Enviar por WhatsApp</button>
        </div>
      </form>
    </div>`;
}

function message(extra = {}) {
  const lines = Quote.items().map((i) => {
    const p = findProduct(i.id);
    return p ? `• ${i.qty} × ${p.nombre}` : null;
  }).filter(Boolean);
  const head = extra.empresa ? `Hola, soy ${extra.nombre} de ${extra.empresa}.` : "Hola, quiero pedir una cotización.";
  return `${head}\n\nEquipos:\n${lines.join("\n")}${extra.coment ? `\n\nComentarios: ${extra.coment}` : ""}`;
}

root.addEventListener("click", (e) => {
  const t = e.target.closest("button");
  if (!t) return;
  const items = Quote.items();
  if (t.dataset.plus) Quote.setQty(t.dataset.plus, items.find((i) => i.id === t.dataset.plus).qty + 1);
  if (t.dataset.minus) Quote.setQty(t.dataset.minus, items.find((i) => i.id === t.dataset.minus).qty - 1);
  if (t.dataset.remove) Quote.remove(t.dataset.remove);
  if (t.id === "wa-btn") {
    const f = Object.fromEntries(new FormData($("#quote-form")));
    window.open(`https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(message(f))}`, "_blank", "noopener");
  }
});

root.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  const folio = "COT-" + String(Math.floor(Math.random() * 9000) + 1000);
  Quote.clear();
  root.innerHTML = `
    <div class="done">
      ${icon("i-check")}
      <h1>¡Solicitud enviada!</h1>
      <p>Gracias, <strong>${escapeHTML(f.nombre)}</strong>. Recibimos la solicitud de <strong>${escapeHTML(f.empresa)}</strong> con el folio <strong>${folio}</strong>. Te escribiremos a <strong>${escapeHTML(f.correo)}</strong> con tu cotización.</p>
      <p style="font-size:.82rem">Esto es un mockup: no se envió nada realmente.</p>
      <a class="btn btn-red" href="index.html">Volver al inicio</a>
    </div>`;
});

document.addEventListener("quote-changed", () => {
  // Si se vacía o cambia la lista, repinta sin perder lo que ya escribió la persona
  const form = $("#quote-form");
  const saved = form ? Object.fromEntries(new FormData(form)) : null;
  if (!$(".done") || Quote.items().length) render();
  const newForm = $("#quote-form");
  if (saved && newForm) Object.entries(saved).forEach(([k, v]) => { if (newForm.elements[k]) newForm.elements[k].value = v; });
});

render();
