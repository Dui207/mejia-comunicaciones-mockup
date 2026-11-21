// CES · mockup · datos de ejemplo
// Una sola fuente de datos: todas las páginas leen de aquí.
// En el sitio real, esto vive en la base de datos y se edita desde el panel de administración.
// Los precios mayoristas del catálogo NO se muestran: el sitio funciona por cotización.

const CATEGORIES = [
  { id: "analogicos", nombre: "Portátiles analógicos", corto: "Analógicos", icono: "i-radio" },
  { id: "digitales",  nombre: "Portátiles digitales DMR", corto: "Digitales DMR", icono: "i-signal" },
  { id: "moviles",    nombre: "Móviles digitales", corto: "Móviles", icono: "i-truck" },
  { id: "repetidores", nombre: "Repetidores", corto: "Repetidores", icono: "i-tower" },
  { id: "poc",        nombre: "Equipos PoC", corto: "PoC", icono: "i-wifi" },
  { id: "bodycam",    nombre: "Bodycam", corto: "Bodycam", icono: "i-cam" },
  { id: "accesorios", nombre: "Accesorios", corto: "Accesorios", icono: "i-plug" },
];

const INDUSTRIES = [
  { id: "construccion", nombre: "Construcción", img: "img/ind-construccion.webp" },
  { id: "educacion",    nombre: "Educación",    img: "img/ind-educacion.webp" },
  { id: "hotel",        nombre: "Hotelería",    img: "img/ind-hotel.webp" },
  { id: "logistica",    nombre: "Logística",    img: "img/ind-logistica.webp" },
  { id: "manufactura",  nombre: "Manufactura",  img: "img/ind-manufactura.webp" },
  { id: "retail",       nombre: "Retail",       img: "img/ind-retail.webp" },
  { id: "seguridad",    nombre: "Seguridad privada", img: "img/ind-seguridad.webp" },
];

// img: foto principal · fit: "contain" (foto de producto) o "cover" (imagen de campaña)
// img: null → el mockup muestra un recuadro "foto pendiente"
const PRODUCTS = [
  {
    id: "ap516", nombre: "AP-516", marca: "Hytera", cat: "analogicos", tec: "Analógico", bandas: ["UHF", "VHF"],
    potencia: "4 W UHF · 5 W VHF", destacado: true,
    resumen: "Portátil analógico con mejor audio y gran batería. Resiste polvo y agua.",
    img: "img/ap516-1.webp", fit: "contain",
    galeria: ["img/ap516-1.webp", "img/ap516-2.webp", "img/ap516-4.webp", "img/ap516-5.webp"],
    caracteristicas: ["Cancelación de ruido y audio nítido", "Batería de 4000 mAh", "Carga y programación por puerto USB tipo C", "IP67: resistente al polvo, agua y condensación", "Señalización HDC1200 opcional"],
    ficha: [["Tecnología", "Analógico"], ["Potencia", "4 W (UHF) / 5 W (VHF)"], ["UHF", "400–470 MHz"], ["VHF", "136–174 MHz"], ["Batería", "4000 mAh"], ["Protección", "IP67"]],
    industrias: ["retail", "hotel", "educacion"], accesorios: ["acc-antena-uhf", "acc-base-cargador", "acc-cable-prog"],
  },
  {
    id: "tc320", nombre: "TC-320", marca: "Hytera", cat: "analogicos", tec: "Analógico", bandas: ["UHF"],
    potencia: "0.5 W / 2 W", destacado: true,
    resumen: "Compacto y ligero, ideal para el servicio diario en negocios.",
    img: "img/tc320-1.webp", fit: "contain",
    galeria: ["img/tc320-1.webp", "img/tc320-2.webp", "img/tc320-3.webp", "img/tc320-4.webp"],
    caracteristicas: ["Diseño compacto y ligero", "Batería de iones de litio de 1700 mAh, hasta 10 horas", "Carga y programación por cable Mini-USB", "Resistente a caídas", "Amplio rango de comunicación con 2 W"],
    ficha: [["Tecnología", "Analógico"], ["Potencia", "0.5 W / 2 W"], ["UHF", "400–470 MHz"], ["Batería", "1700 mAh · hasta 10 h"], ["Carga", "Mini-USB"]],
    industrias: ["retail", "hotel", "educacion"], accesorios: ["acc-antena-uhf", "acc-base-cargador", "acc-cable-prog"],
  },
  {
    id: "tc508", nombre: "TC-508", marca: "Hytera", cat: "analogicos", tec: "Analógico", bandas: ["UHF", "VHF"],
    potencia: "5 W", destacado: false,
    resumen: "Nueva generación: más cobertura y más práctico para el trabajo de cada día.",
    img: "img/tc508-1.webp", fit: "cover",
    galeria: ["img/tc508-1.webp", "img/tc508-2.webp", "img/tc508-3.webp", "img/tc508-4.webp"],
    caracteristicas: ["Mayor potencia de transmisión y alta sensibilidad", "Batería de hasta 14 horas", "Certificación IP54", "Programación inalámbrica", "Tamaño compacto y peso ligero"],
    ficha: [["Tecnología", "Analógico"], ["Potencia", "5 W (UHF) / 5 W (VHF)"], ["UHF", "400–470 MHz"], ["VHF", "136–174 MHz"], ["Batería", "Hasta 14 h"], ["Protección", "IP54"]],
    industrias: ["seguridad", "construccion", "educacion", "retail"], accesorios: ["acc-antena-uhf", "acc-base-cargador", "acc-cable-prog"],
  },
  {
    id: "bd506", nombre: "BD-506", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "4 W UHF · 5 W VHF", destacado: true,
    resumen: "Radio analógico y digital: migración fácil a DMR con pseudo-trunking.",
    img: "img/bd506-1.webp", fit: "contain",
    galeria: ["img/bd506-1.webp", "img/bd506-2.webp", "img/bd506-4.webp", "img/bd506-5.webp"],
    caracteristicas: ["Modo analógico y digital en el mismo equipo", "Pseudo-trunking para mejorar la comunicación", "Liviano y ergonómico para jornadas largas", "Audio nítido con cancelación de ruido"],
    ficha: [["Tecnología", "Digital DMR / analógico"], ["Potencia", "4 W (UHF) / 5 W (VHF)"], ["UHF", "400–470 MHz"], ["VHF", "136–174 MHz"], ["Función", "Pseudo-trunking"]],
    industrias: ["manufactura", "logistica", "construccion"], accesorios: ["acc-antena-uhf", "acc-base-cargador", "acc-cable-prog"],
  },
  {
    id: "hp50x", nombre: "HP-50X / HP-56X", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "4 W UHF · 5 W VHF", destacado: true,
    resumen: "Portátil digital profesional con cobertura excepcional y carga por puerto tipo C.",
    img: "img/hp50x-3.webp", fit: "cover",
    galeria: ["img/hp50x-3.webp", "img/hp50x-4.webp", "img/hp50x-1.webp", "img/hp50x-2.webp", "img/hp50x-5.webp"],
    caracteristicas: ["Cobertura excepcional, siempre conectado", "Cancelación de ruido con IA", "Carga y programación por puerto tipo C", "Certificación IP67", "Versiones con GPS e intrínsecamente seguras (UL913)"],
    ficha: [["Tecnología", "Digital DMR"], ["Potencia", "4 W (UHF) / 5 W (VHF)"], ["UHF", "400–470 MHz"], ["VHF", "136–174 MHz"], ["Protección", "IP67"], ["Opciones", "GPS · UL913"]],
    industrias: ["construccion", "hotel", "manufactura", "logistica"], accesorios: ["acc-antena-uhf", "acc-base-cargador", "acc-cable-prog"],
  },
  {
    id: "hp786", nombre: "HP-786 UL913", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "5 W", destacado: true,
    resumen: "Radio digital intrínsecamente seguro, sumergible y con audio superior.",
    img: "img/hp786-1.webp", fit: "cover",
    galeria: ["img/hp786-1.webp", "img/hp786-2.webp", "img/hp786-3.webp", "img/hp786-4.webp", "img/hp786-5.webp"],
    caracteristicas: ["Intrínsecamente seguro (UL913) para ambientes riesgosos", "IP68: sumergible a 2 m durante 4 horas aprox.", "Audio superior con cancelación de ruido basada en IA", "Water-Porting: drena el agua del micrófono", "Versiones con GPS integrado"],
    ficha: [["Tecnología", "Digital DMR"], ["Potencia", "5 W"], ["UHF", "350–470 MHz"], ["VHF", "136–174 MHz"], ["Protección", "IP68"], ["Certificación", "UL913"]],
    industrias: ["manufactura", "construccion", "logistica"], accesorios: ["acc-base-cargador", "acc-cable-prog"],
  },
  {
    id: "hm786", nombre: "HM-786", marca: "Hytera", cat: "moviles", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "Móvil de vehículo", destacado: false,
    resumen: "Móvil digital flexible y escalable, con cancelación de ruido basada en inteligencia artificial.",
    img: "img/hm786-1.webp", fit: "cover",
    galeria: ["img/hm786-1.webp", "img/hm786-2.webp", "img/hm786-3.webp"],
    caracteristicas: ["Instalación flexible en vehículos y bases", "Cancelación de ruido con IA", "Mayor cobertura: mejor sensibilidad de recepción", "Comunicaciones más estables"],
    ficha: [["Tecnología", "Digital DMR"], ["Tipo", "Móvil / base"], ["Función", "Cancelación de ruido con IA"]],
    industrias: ["logistica", "construccion", "manufactura"], accesorios: [],
  },
  {
    id: "pnc360s", nombre: "PNC-360S", marca: "Hytera", cat: "poc", tec: "PoC", bandas: [],
    potencia: "Red celular y Wi-Fi", destacado: true,
    resumen: "Radio por red (PoC): comunicación sin límite de distancia, con pantalla a color.",
    img: "img/pnc360-1.webp", fit: "contain",
    galeria: ["img/pnc360-1.webp"],
    caracteristicas: ["Comunica por red celular y Wi-Fi", "Pantalla a color y teclado de navegación", "Sin límite de distancia entre equipos", "Compatible con el sistema Smart Dispatch"],
    ficha: [["Tecnología", "PoC (Push to Talk over Cellular)"], ["Red", "Celular y Wi-Fi"], ["Pantalla", "Color"]],
    industrias: ["logistica", "seguridad", "retail"], accesorios: [],
  },
  {
    id: "pd416", nombre: "PD-416", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "4 W UHF · 5 W VHF", destacado: false,
    resumen: "Portátil digital compatible con control de rondines y RFID.",
    img: null, fit: "contain", galeria: [],
    caracteristicas: ["Compatible con patrullaje y RFID", "Modo digital y analógico", "Cobertura amplia en 4 W / 5 W"],
    ficha: [["Tecnología", "Digital DMR"], ["Potencia", "4 W (UHF) / 5 W (VHF)"], ["UHF", "400–470 MHz"], ["VHF", "136–174 MHz"]],
    industrias: ["seguridad", "hotel"], accesorios: ["acc-base-cargador"],
  },
  {
    id: "hr656", nombre: "HR-656", marca: "Hytera", cat: "repetidores", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "Repetidor digital", destacado: false,
    resumen: "Repetidor digital DMR para ampliar la cobertura de tus radios.",
    img: null, fit: "contain", galeria: [],
    caracteristicas: ["Repetidor digital DMR", "Amplía la cobertura de los portátiles y móviles", "Instalación en sitio fijo"],
    ficha: [["Tecnología", "Digital DMR"], ["Tipo", "Repetidor"]],
    industrias: ["construccion", "manufactura"], accesorios: [],
  },
  {
    id: "vm780", nombre: "VM-780", marca: "Hytera", cat: "bodycam", tec: "—", bandas: [],
    potencia: "Cámara corporal", destacado: false,
    resumen: "Cámara corporal para registrar la operación de tu personal.",
    img: null, fit: "contain", galeria: [],
    caracteristicas: ["Cámara corporal con grabación de video y audio", "Integra con radios Hytera", "Pensada para seguridad y supervisión"],
    ficha: [["Tipo", "Bodycam"]],
    industrias: ["seguridad"], accesorios: [],
  },
  {
    id: "md626", nombre: "MD-626", marca: "Hytera", cat: "moviles", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "Móvil de vehículo", destacado: false,
    resumen: "Móvil digital DMR para flotillas y bases de operación.",
    img: null, fit: "contain", galeria: [],
    caracteristicas: ["Móvil digital DMR", "Para vehículos y bases", "Modo digital y analógico"],
    ficha: [["Tecnología", "Digital DMR"], ["Tipo", "Móvil / base"]],
    industrias: ["logistica", "construccion"], accesorios: [],
  },
  // Accesorios (ejemplos tomados del catálogo; sin precio)
  { id: "acc-antena-uhf", nombre: "Antena UHF 400–470 MHz", marca: "Hytera", cat: "accesorios", tec: "—", bandas: ["UHF"], potencia: "15 cm", destacado: false, resumen: "Antena flexible para portátiles Hytera.", img: null, fit: "contain", galeria: [], caracteristicas: ["Antena UHF 400–470 MHz", "Largo: 15 cm"], ficha: [["Banda", "UHF 400–470 MHz"], ["Largo", "15 cm"]], industrias: [], accesorios: [] },
  { id: "acc-base-cargador", nombre: "Base cargadora", marca: "Hytera", cat: "accesorios", tec: "—", bandas: [], potencia: "Escritorio", destacado: false, resumen: "Base de carga individual para portátiles.", img: null, fit: "contain", galeria: [], caracteristicas: ["Carga de escritorio", "Para batería y equipo"], ficha: [["Tipo", "Cargador de escritorio"]], industrias: [], accesorios: [] },
  { id: "acc-cable-prog", nombre: "Cable de programación", marca: "Hytera", cat: "accesorios", tec: "—", bandas: [], potencia: "USB", destacado: false, resumen: "Cable para programar el radio desde la computadora.", img: null, fit: "contain", galeria: [], caracteristicas: ["Programación desde PC", "Conexión por USB"], ficha: [["Uso", "Programación"]], industrias: [], accesorios: [] },
];

const findProduct = (id) => PRODUCTS.find((p) => p.id === id);
const findCategory = (id) => CATEGORIES.find((c) => c.id === id);

/* ---------- Lista de cotización (se guarda en el navegador) ---------- */
const QUOTE_KEY = "ces-cotizacion";
const Quote = {
  items() {
    try { return JSON.parse(localStorage.getItem(QUOTE_KEY)) || []; } catch (e) { return []; }
  },
  save(items) {
    try { localStorage.setItem(QUOTE_KEY, JSON.stringify(items)); } catch (e) { /* sin almacenamiento */ }
    document.dispatchEvent(new CustomEvent("quote-changed"));
  },
  add(id, qty = 1) {
    const items = this.items();
    const row = items.find((i) => i.id === id);
    if (row) row.qty += qty; else items.push({ id, qty });
    this.save(items);
  },
  setQty(id, qty) {
    const items = this.items().map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
    this.save(items);
  },
  remove(id) { this.save(this.items().filter((i) => i.id !== id)); },
  clear() { this.save([]); },
  count() { return this.items().reduce((n, i) => n + i.qty, 0); },
};
