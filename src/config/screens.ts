// Capturas de la app que se muestran dentro de los marcos de teléfono.
// TODO: hoy son marcadores ("Captura pendiente"). Para poner las reales, reemplaza cada archivo
// en public/screens/ con el mismo nombre (PNG, vertical, captura completa de la pantalla):
//   iPhone 17 Pro Max: 1320 × 2868 px · Pixel: 1344 × 2992 px (sirve cualquier tamaño con esa proporción).
export const screens = {
  // Hero · iPhone · Inicio: espacios y próximas facturas
  home: { src: "/screens/iphone-inicio.png", altEs: "Folio: pantalla de inicio", altEn: "Folio: home screen" },
  // Espacios · Pixel · Un espacio abierto con su lista de facturas
  space: { src: "/screens/pixel-espacio.png", altEs: "Folio: un espacio con sus facturas", altEn: "Folio: a space with its bills" },
  // Compartir · iPhone · Espacio compartido con el saldo "quién le debe a quién"
  shared: { src: "/screens/iphone-compartido.png", altEs: "Folio: espacio compartido y saldo entre personas", altEn: "Folio: shared space and balance between people" },
  // Día de pago · Pixel · Tarjeta o pantalla de Día de pago con "Te quedarían"
  payday: { src: "/screens/pixel-dia-de-pago.png", altEs: "Folio: día de pago y lo que te quedaría", altEn: "Folio: payday and what you'd have left" },
  // Resumen · iPhone · Resumen del mes (solo se ve la mitad de arriba)
  summary: { src: "/screens/iphone-resumen.png", altEs: "Folio: resumen del mes", altEn: "Folio: monthly summary" },
} as const;
