# CES · mockup de catálogo y cotización — diseño

**Cliente:** CES, distribuidor mayorista Hytera (desde 1992). **Referencia:** mockup y cotización de PRANA.

## Decisiones (aprobadas)
- Modelo: catálogo + cotización, sin pago en línea.
- Alcance: Hytera protagonista; otras marcas (Standard Horizon, Yaesu, AOR, Rocket Science) como franja secundaria.
- Organización: por tipo de equipo (como el catálogo), con franja "Soluciones por industria" que filtra.

## Piezas
- HTML/CSS/JS estáticos, sin framework, publicable en GitHub Pages.
- `productos.js` (datos y lista de cotización), `site.js` (cabecera, pie, tarjetas), una página por vista.
- 15 productos de ejemplo (12 equipos + 3 accesorios). Sin precios.

## Fuera de alcance del mockup
Envío real de solicitudes, base de datos, panel funcional, resto del catálogo (70+ páginas).

## Verificación
Prueba en Chrome (escritorio y celular): agregar a cotización, cantidades, envío, filtros, búsqueda, sin errores de consola ni scroll horizontal.
