// Mejía Comunicaciones · mockup · datos de ejemplo
// Una sola fuente de datos: todas las páginas leen de aquí.
// En el sitio real, esto vive en la base de datos y se edita desde el panel de administración.
// El sitio funciona por cotización: no se muestran precios.
// Las imágenes de cada producto son las publicaciones de Mejía Comunicaciones.

const CATEGORIES = [
  { id: "analogicos", nombre: "Portátiles analógicos", corto: "Analógicos", icono: "i-radio" },
  { id: "digitales",  nombre: "Portátiles digitales DMR", corto: "Digitales DMR", icono: "i-signal" },
  { id: "moviles",    nombre: "Móviles para vehículo", corto: "Móviles", icono: "i-truck" },
  { id: "poc",        nombre: "Equipos PoC y multimodo", corto: "PoC", icono: "i-wifi" },
  { id: "bodycam",    nombre: "Bodycam", corto: "Bodycam", icono: "i-cam" },
  { id: "accesorios", nombre: "Accesorios", corto: "Accesorios", icono: "i-plug" },
];

const BRANDS = ["Hytera", "Motorola", "Kenwood"];

const INDUSTRIES = [
  { id: "construccion", nombre: "Construcción", img: "img/ind-construccion.webp" },
  { id: "educacion",    nombre: "Educación",    img: "img/ind-educacion.webp" },
  { id: "hotel",        nombre: "Hotelería",    img: "img/ind-hotel.webp" },
  { id: "logistica",    nombre: "Logística",    img: "img/ind-logistica.webp" },
  { id: "manufactura",  nombre: "Manufactura",  img: "img/ind-manufactura.webp" },
  { id: "retail",       nombre: "Retail",       img: "img/ind-retail.webp" },
  { id: "seguridad",    nombre: "Seguridad privada", img: "img/ind-seguridad.webp" },
];

// img: foto principal · fit: "cover" (publicación cuadrada) o "contain" (foto de producto sobre blanco)
// nuevo: true → etiqueta "Nuevo"
const gal = (id, n) => Array.from({ length: n }, (_, i) => `img/${id}-${i + 1}.webp`);

const PRODUCTS = [
  {
    id: "bp526", nombre: "BP526", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: [],
    potencia: "Audio de 3 W", nuevo: true, destacado: true,
    resumen: "Lanzamiento: radio digital robusto con cancelación de ruido con IA y botón de emergencia.",
    img: "img/bp526-1.webp", fit: "cover", galeria: gal("bp526", 6),
    caracteristicas: ["Audio potente de 3 W", "Cancelación de ruido con IA", "Diseño robusto IP67", "Botón de emergencia", "Batería de alta capacidad con carga USB tipo C"],
    ficha: [["Tecnología", "Digital DMR"], ["Audio", "3 W"], ["Protección", "IP67"], ["Carga", "USB tipo C"], ["Extra", "Botón de emergencia"]],
    industrias: ["seguridad", "construccion", "logistica", "manufactura"], accesorios: [],
  },
  {
    id: "bp36x", nombre: "BP36X", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: ["UHF"],
    potencia: "3 W", destacado: true,
    resumen: "Radio digital ultraligero de solo 135 g, con un puerto para todo.",
    img: "img/bp36x-1.webp", fit: "cover", galeria: gal("bp36x", 4),
    caracteristicas: ["Diseño de solo 135 g", "Un solo puerto USB tipo C para cargar y programar", "Transmisión manos libres (VOX)", "256 canales en 8 zonas", "Batería de 2,200 mAh"],
    ficha: [["Tecnología", "Digital DMR"], ["Potencia", "3 W"], ["UHF", "430–470 MHz"], ["Peso", "135 g"], ["Canales", "256 en 8 zonas"], ["Batería", "2,200 mAh"]],
    industrias: ["hotel", "retail", "educacion"], accesorios: [],
  },
  {
    id: "hp606", nombre: "HP606", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "Radio profesional", destacado: true,
    resumen: "Radio digital profesional con GPS integrado, pantalla OLED y robustez militar.",
    img: "img/hp606-1.webp", fit: "cover", galeria: gal("hp606", 4),
    caracteristicas: ["Robustez militar (IP67 y MIL-STD-810G)", "Rango extendido en UHF y VHF", "GPS integrado", "Cancelación de ruido con IA", "Conexión Bluetooth 5.0"],
    ficha: [["Tecnología", "Digital DMR"], ["VHF", "136–174 MHz"], ["Canales", "1,024"], ["Pantalla", "OLED de 0.91 pulgadas"], ["Protección", "IP67"]],
    industrias: ["construccion", "manufactura", "seguridad"], accesorios: [],
  },
  {
    id: "hp50x", nombre: "HP50X / HP56X", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "4 W UHF · 5 W VHF",
    resumen: "Portátil digital profesional con cobertura excepcional y carga por puerto tipo C.",
    img: "img/hp50x-1.webp", fit: "cover", galeria: ["img/hp50x-1.webp", "img/hp50x-c1.webp", "img/hp50x-c2.webp", "img/hp50x-c3.webp"],
    caracteristicas: ["Cobertura excepcional, siempre conectado", "Cancelación de ruido con IA", "Carga y programación por puerto tipo C", "Certificación IP67", "Versiones con GPS e intrínsecamente seguras (UL913)"],
    ficha: [["Tecnología", "Digital DMR"], ["Potencia", "4 W (UHF) / 5 W (VHF)"], ["UHF", "400–470 MHz"], ["VHF", "136–174 MHz"], ["Protección", "IP67"], ["Opciones", "GPS · UL913"]],
    industrias: ["construccion", "hotel", "manufactura", "logistica"], accesorios: [],
  },
  {
    id: "hp786", nombre: "HP786 UL913", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "5 W", destacado: true,
    resumen: "Radio digital intrínsecamente seguro, sumergible y con audio superior.",
    img: "img/hp786-1.webp", fit: "cover", galeria: [...gal("hp786", 6), "img/hp786-c1.webp"],
    caracteristicas: ["Intrínsecamente seguro (UL913) para ambientes riesgosos", "IP68: sumergible a 2 m durante 4 horas aprox.", "Audio superior con cancelación de ruido basada en IA", "Water-Porting: drena el agua del micrófono", "Identificador de batería Ex"],
    ficha: [["Tecnología", "Digital DMR"], ["Potencia", "5 W"], ["UHF", "350–470 MHz"], ["VHF", "136–174 MHz"], ["Protección", "IP68"], ["Certificación", "UL913"]],
    industrias: ["manufactura", "construccion", "logistica"], accesorios: [],
  },
  {
    id: "bd506", nombre: "BD506", marca: "Hytera", cat: "digitales", tec: "Digital DMR", bandas: ["UHF", "VHF"],
    potencia: "4 W UHF · 5 W VHF",
    resumen: "Radio analógico y digital: migración fácil a DMR, ligero y ergonómico.",
    img: "img/bd506-c1.webp", fit: "contain", galeria: ["img/bd506-c1.webp", ...gal("bd506", 4), "img/bd506-c2.webp"],
    caracteristicas: ["Modo dual: analógico y digital", "Voz clara y sin ruidos", "Batería de hasta 22 horas", "Resistente IP54 y MIL-STD-810G", "Pseudo-trunking y modo repetidor"],
    ficha: [["Tecnología", "Digital DMR / analógico"], ["Potencia", "4 W (UHF) / 5 W (VHF)"], ["UHF", "400–470 MHz"], ["VHF", "136–174 MHz"], ["Batería", "Hasta 22 h"]],
    industrias: ["manufactura", "logistica", "seguridad", "construccion"], accesorios: [],
  },
  {
    id: "r2", nombre: "MOTOTRBO R2", marca: "Motorola", cat: "digitales", tec: "Digital DMR", bandas: [],
    potencia: "Portátil de dos vías",
    resumen: "Radio portátil de dos vías: delgado, ligero y de batería duradera.",
    img: "img/r2-1.webp", fit: "cover", galeria: gal("r2", 2),
    caracteristicas: ["Comunicación profesional sin interrupciones", "Resistente al polvo y al agua (IP55 / MIL-STD)", "Cancelación de ruido", "Batería de larga duración", "Diseño delgado y ligero"],
    ficha: [["Marca", "Motorola Solutions"], ["Tecnología", "Digital"], ["Protección", "IP55"]],
    industrias: ["construccion", "retail", "hotel"], accesorios: ["acc-mototrbo"],
  },
  {
    id: "r5", nombre: "MOTOTRBO R5", marca: "Motorola", cat: "digitales", tec: "Digital DMR", bandas: [],
    potencia: "Batería hasta 32 h",
    resumen: "Nueva generación de comunicación crítica: audio, batería y conectividad de primer nivel.",
    img: "img/r5-1.webp", fit: "cover", galeria: gal("r5", 4),
    caracteristicas: ["Batería de hasta 32 horas", "Bluetooth 5.2 y Wi-Fi integrados", "Resistente al polvo y al agua (IP67)", "Supresión de ruido con inteligencia artificial", "Controles táctiles con botones programables P1/P2"],
    ficha: [["Marca", "Motorola Solutions"], ["Tecnología", "Digital"], ["Conectividad", "Bluetooth 5.2 y Wi-Fi"], ["Protección", "IP67"], ["Batería", "Hasta 32 h"]],
    industrias: ["seguridad", "manufactura", "logistica"], accesorios: ["acc-mototrbo"],
  },
  {
    id: "tc320", nombre: "TC-320", marca: "Hytera", cat: "analogicos", tec: "Analógico", bandas: ["UHF"],
    potencia: "0.5 W / 2 W", destacado: true,
    resumen: "Compacto y ligero: el aliado ideal para el servicio diario en negocios.",
    img: "img/tc320-1.webp", fit: "cover", galeria: gal("tc320", 6),
    caracteristicas: ["Diseño compacto y ligero", "Resistente a caídas de 1.5 m", "Batería de hasta 10 horas", "Carga y programación por Mini-USB", "16 canales y potencia ajustable (0.5 W / 2 W)"],
    ficha: [["Tecnología", "Analógico"], ["Potencia", "0.5 W / 2 W"], ["UHF", "400–470 MHz"], ["Canales", "16"], ["Batería", "1700 mAh · hasta 10 h"], ["Carga", "Mini-USB"]],
    industrias: ["retail", "hotel", "educacion", "seguridad"], accesorios: [],
  },
  {
    id: "tc508", nombre: "TC-508", marca: "Hytera", cat: "analogicos", tec: "Analógico", bandas: ["UHF", "VHF"],
    potencia: "5 W",
    resumen: "Radio profesional de uso diario: más cobertura y más práctico.",
    img: "img/tc508-1.webp", fit: "cover", galeria: gal("tc508", 4),
    caracteristicas: ["Mayor potencia de transmisión y alta sensibilidad", "Batería de alto rendimiento, hasta 14 horas", "Certificación IP54", "Programación inalámbrica", "Tamaño compacto y peso ligero"],
    ficha: [["Tecnología", "Analógico"], ["Potencia", "5 W (UHF) / 5 W (VHF)"], ["UHF", "400–470 MHz"], ["VHF", "136–174 MHz"], ["Batería", "Hasta 14 h"], ["Protección", "IP54"]],
    industrias: ["seguridad", "construccion", "educacion", "retail"], accesorios: [],
  },
  {
    id: "ap516", nombre: "AP516", marca: "Hytera", cat: "analogicos", tec: "Analógico", bandas: ["UHF", "VHF"],
    potencia: "4 W UHF · 5 W VHF",
    resumen: "Radio analógico de gran batería y mejor audio, para cualquier terreno.",
    img: "img/ap516-c1.webp", fit: "contain", galeria: ["img/ap516-c1.webp", "img/ap516-1.webp", "img/ap516-2.webp", "img/ap516-c2.webp"],
    caracteristicas: ["Batería de 4000 mAh", "Carga y programación por USB tipo C", "Cargador de escritorio", "Cancelación de ruido y audio nítido", "Señalización HDC1200 opcional"],
    ficha: [["Tecnología", "Analógico"], ["Potencia", "4 W (UHF) / 5 W (VHF)"], ["UHF", "400–470 MHz"], ["VHF", "136–174 MHz"], ["Batería", "4000 mAh"]],
    industrias: ["retail", "hotel", "educacion", "logistica"], accesorios: [],
  },
  {
    id: "tk2000", nombre: "TK-2000", marca: "Kenwood", cat: "analogicos", tec: "Analógico", bandas: [],
    potencia: "16 canales",
    resumen: "Radio Kenwood compacto con 16 canales, función Scan y VOX.",
    img: "img/tk2000-1.webp", fit: "cover", galeria: gal("tk2000", 4),
    caracteristicas: ["16 canales con función Scan", "Diseño compacto y ligero", "Cumplimiento militar MIL-STD-810 e IP54", "Función VOX y alerta de hombre caído (opcional)", "Alcance de hasta 5 km y batería de 12 horas"],
    ficha: [["Marca", "Kenwood"], ["Tecnología", "Analógico"], ["Canales", "16"], ["Protección", "IP54"], ["Batería", "12 h"]],
    industrias: ["retail", "hotel", "educacion"], accesorios: [],
  },
  {
    id: "hm786", nombre: "HM786", marca: "Hytera", cat: "moviles", tec: "Digital DMR", bandas: [],
    potencia: "Móvil de vehículo",
    resumen: "Móvil digital flexible: conectividad sin límites y cancelación de ruido con IA.",
    img: "img/hm786-1.webp", fit: "cover", galeria: gal("hm786", 4),
    caracteristicas: ["Instalación flexible en vehículos y bases", "Cancelación de ruido con IA", "Diseño resistente para condiciones exigentes", "Comunicación más estable y con menos ruido"],
    ficha: [["Tecnología", "Digital DMR"], ["Tipo", "Móvil / base"], ["Función", "Cancelación de ruido con IA"]],
    industrias: ["logistica", "construccion", "manufactura"], accesorios: [],
  },
  {
    id: "hm686", nombre: "HM686", marca: "Hytera", cat: "moviles", tec: "Digital DMR", bandas: [],
    potencia: "Móvil de vehículo",
    resumen: "Comunicación confiable en movimiento, con gran capacidad de canales y zonas.",
    img: "img/hm686-1.webp", fit: "cover", galeria: gal("hm686", 4),
    caracteristicas: ["Instalación flexible con cabezal de control", "Gran capacidad de canales y zonas (512 canales)", "Cancelación de ruido con IA", "Durable y con protección IP54", "Programación por Bluetooth"],
    ficha: [["Tecnología", "Digital DMR"], ["Tipo", "Móvil / base"], ["Canales", "512"], ["Protección", "IP54"]],
    industrias: ["logistica", "hotel", "construccion"], accesorios: [],
  },
  {
    id: "pnc360s", nombre: "PNC360S", marca: "Hytera", cat: "poc", tec: "PoC", bandas: [],
    potencia: "4G / 5G / WLAN", destacado: true,
    resumen: "Radio PoC (PTT sobre celular) ultradelgado y con plataforma Android abierta.",
    img: "img/pnc360s-1.webp", fit: "cover", galeria: gal("pnc360s", 4),
    caracteristicas: ["Tamaño ultradelgado: 26.5 mm", "Plataforma abierta (Android)", "Conexión 4G, 5G y WLAN", "Resistencia MIL-STD-810H", "Localización con GPS, GLONASS y Galileo"],
    ficha: [["Tecnología", "PoC (PTT sobre celular)"], ["Red", "4G / 5G / WLAN"], ["Sistema", "Android"], ["Resistencia", "MIL-STD-810H"]],
    industrias: ["logistica", "seguridad", "retail"], accesorios: ["acc-pnc360s"],
  },
  {
    id: "pnc380", nombre: "PNC380", marca: "Hytera", cat: "poc", tec: "PoC", bandas: [],
    potencia: "4G · cámara 5 MP",
    resumen: "Radio PoC con video en tiempo real, cámara de 5 MP y botón de emergencia.",
    img: "img/pnc380-1.webp", fit: "cover", galeria: gal("pnc380", 6),
    caracteristicas: ["Video en tiempo real por 4G", "Cámara de 5 MP con flash", "Batería de 4000 mAh", "Botón de emergencia dedicado", "IP67 y MIL-STD-810G"],
    ficha: [["Tecnología", "PoC (PTT sobre celular)"], ["Red", "2G / 3G / 4G y Wi-Fi"], ["Batería", "4000 mAh"], ["Cámara", "5 MP con flash"], ["Protección", "IP67"]],
    industrias: ["seguridad", "logistica", "construccion"], accesorios: ["acc-pnc360s"],
  },
  {
    id: "pnc560", nombre: "PNC560", marca: "Hytera", cat: "poc", tec: "PoC", bandas: [],
    potencia: "Smartphone PTT",
    resumen: "Más que un teléfono: smartphone de grado militar con PTT y solución para flotas.",
    img: "img/pnc560-1.webp", fit: "cover", galeria: gal("pnc560", 1),
    caracteristicas: ["Smartphone de grado militar con PoC + PTT", "Resistencia IP68 y MIL-STD-810H", "Batería de 5040 mAh", "Audio cristalino con IA", "Solución integral para flotas"],
    ficha: [["Tecnología", "PoC + smartphone"], ["Batería", "5040 mAh"], ["Protección", "IP68"], ["Resistencia", "MIL-STD-810H"]],
    industrias: ["logistica", "seguridad"], accesorios: ["acc-pnc560"],
  },
  {
    id: "pdc680", nombre: "PDC680", marca: "Hytera", cat: "poc", tec: "Multimodo", bandas: [],
    potencia: "DMR + PoC",
    resumen: "Radio multimodo inteligente: comunicaciones unificadas en un solo equipo.",
    img: "img/pdc680-1.webp", fit: "cover", galeria: gal("pdc680", 4),
    caracteristicas: ["Audio nítido con cancelación de ruido por IA", "IP68 y ESD nivel 4, resiste caídas de 1.5 m", "Posicionamiento preciso (GPS, GLONASS, LBS)", "Transmisión de video HD y fotos", "Gestión remota de lotes"],
    ficha: [["Tecnología", "Multimodo (DMR + PoC)"], ["Protección", "IP68"], ["Posicionamiento", "GPS, GLONASS, LBS"]],
    industrias: ["seguridad", "hotel", "construccion"], accesorios: [],
  },
  {
    id: "vm780", nombre: "VM780", marca: "Hytera", cat: "bodycam", tec: "—", bandas: [],
    potencia: "Cámara corporal",
    resumen: "Cámara corporal ideal para entornos profesionales.",
    img: "img/vm780-1.webp", fit: "cover", galeria: gal("vm780", 1),
    caracteristicas: ["Cámara corporal para entornos profesionales", "Pensada para policía y seguridad", "También para industria, logística y servicios públicos"],
    ficha: [["Tipo", "Bodycam"]],
    industrias: ["seguridad", "logistica"], accesorios: [],
  },
  // Accesorios (publicaciones de Mejía; sin precio)
  { id: "acc-pnc360s", nombre: "Accesorios PNC360S", marca: "Hytera", cat: "accesorios", tec: "—", bandas: [], potencia: "Baterías, cargador, auriculares", resumen: "Baterías, cargador, clip, antena, adaptador y auricular para PNC360S.", img: "img/acc-pnc360s-1.webp", fit: "cover", galeria: gal("acc-pnc360s", 1), caracteristicas: ["Baterías y cargador", "Cables y adaptadores", "Clip y auricular"], ficha: [["Compatible con", "PNC360S"]], industrias: [], accesorios: [] },
  { id: "acc-pnc560", nombre: "Accesorios PNC560", marca: "Hytera", cat: "accesorios", tec: "—", bandas: [], potencia: "Auriculares, baterías, clips", resumen: "Auricular, PTT, clip, batería y base cargadora para PNC560.", img: "img/acc-pnc560-1.webp", fit: "cover", galeria: gal("acc-pnc560", 1), caracteristicas: ["Auriculares con cancelación de ruido", "Baterías y base cargadora", "Clip portaradio"], ficha: [["Compatible con", "PNC560"]], industrias: [], accesorios: [] },
  { id: "acc-mototrbo", nombre: "Accesorios MOTOTRBO", marca: "Motorola", cat: "accesorios", tec: "—", bandas: [], potencia: "Audio, energía, antenas", resumen: "Audio, energía, transporte y antenas opcionales para radios MOTOTRBO.", img: "img/acc-mototrbo-1.webp", fit: "cover", galeria: gal("acc-mototrbo", 1), caracteristicas: ["Audio claro, cómodo y práctico", "Energía: baterías y cargadores", "Transporte y antenas"], ficha: [["Compatible con", "MOTOTRBO"]], industrias: [], accesorios: [] },
];

const findProduct = (id) => PRODUCTS.find((p) => p.id === id);
const findCategory = (id) => CATEGORIES.find((c) => c.id === id);

/* ---------- Lista de cotización (se guarda en el navegador) ---------- */
const QUOTE_KEY = "mejia-cotizacion";
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
    this.save(this.items().map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  },
  remove(id) { this.save(this.items().filter((i) => i.id !== id)); },
  clear() { this.save([]); },
  count() { return this.items().reduce((n, i) => n + i.qty, 0); },
};
