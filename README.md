# Mejía Comunicaciones · mockup

Maqueta visual del sitio de catálogo y cotización de Mejía Comunicaciones (radios Hytera, Motorola y Kenwood). Es un prototipo de diseño con datos de ejemplo, no el sitio final.

- `index.html` · inicio: categorías, catálogo con filtros (marca, tecnología), industrias, marcas, misión y visión.
- `producto.html?id=bp526` · ficha de producto con galería y especificaciones.
- `cotizacion.html` · lista de cotización y formulario (envío por formulario o WhatsApp).
- `admin.html` · panel de administración de ejemplo.
- `productos.js` · datos de los 22 productos de ejemplo (una sola fuente para todas las páginas).
- `img/` · logo Mc, logos de marca y las publicaciones de Mejía Comunicaciones como fotos de producto.

## Notas
- No hay pago en línea: el cliente arma su lista y pide cotización. No se muestran precios.
- El teléfono/WhatsApp (+52 55 7562 5709) sale de las publicaciones de Mejía. No hay correo de contacto todavía.
- Las fotos de producto son las publicaciones de redes (llevan la marca de agua Mc y el teléfono). Para el sitio final conviene tener fotos limpias del producto.
- Las especificaciones se tomaron de esas publicaciones y del catálogo de Hytera; validarlas antes de publicar.
- La misión y visión son el texto de la carpeta "Misión y visión".
- La lista de cotización se guarda en el navegador (localStorage); en el sitio real se guarda en el servidor.

Para verlo en local: `python -m http.server` dentro de esta carpeta y abrir http://localhost:8000.
