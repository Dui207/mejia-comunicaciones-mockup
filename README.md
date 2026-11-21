# CES · mockup

Maqueta visual del sitio de catálogo y cotización de CES (distribuidor mayorista Hytera). Es un prototipo de diseño con datos de ejemplo, no el sitio final.

- `index.html` · inicio: categorías, catálogo con filtros, industrias, marcas.
- `producto.html?id=hp786` · ficha de producto con galería y especificaciones.
- `cotizacion.html` · lista de cotización y formulario (envío por formulario o WhatsApp).
- `admin.html` · panel de administración de ejemplo.
- `productos.js` · datos de los productos de ejemplo (una sola fuente para todas las páginas).
- `img/` · fotos optimizadas, tomadas del material de apoyo y del catálogo de CES.

## Notas
- No hay pago en línea: el cliente arma su lista y pide cotización. Los precios mayoristas del catálogo no se publican.
- Los productos PD-416, HR-656, VM-780, MD-626 y los accesorios no tienen foto todavía y muestran "Foto pendiente".
- El teléfono es el que aparece en el catálogo; el correo y el WhatsApp son de ejemplo. Confirmar con CES antes de publicar.
- La lista de cotización se guarda en el navegador (localStorage); en el sitio real se guarda en el servidor.

Para verlo en local: `python -m http.server` dentro de esta carpeta y abrir http://localhost:8000.
