// Configuración central del sitio ASSID.
// Cambia aquí los datos de contacto y verás el efecto en toda la web.

export const SITE = {
  name: "ASSID",
  tagline: "Soluciones Industriales y Digitales",
  signature: "Juntos crecemos",
  url: "https://assid.cl",
  domain: "assid.cl",
  locale: "es_CL",
  description:
    "Consultora industrial y digital en Chile. Convertimos la fricción operativa en crecimiento continuo con transformación digital, consultoría de procesos y una red de alianzas estratégicas.",
} as const;

// ---------------------------------------------------------------------------
// DATOS DE CONTACTO — PENDIENTES
// Completar con la información real cuando esté disponible. Mientras estén
// vacíos, la web muestra "Disponible pronto" y no expone datos sensibles.
//   whatsapp / phone: formato internacional. Ej: whatsapp "56900000000",
//                     phone "+56900000000".
// ---------------------------------------------------------------------------
export const CONTACT: {
  email: string;
  whatsapp: string;
  whatsappLabel: string;
  phone: string;
  phoneLabel: string;
  linkedin: string;
} = {
  email: "",
  whatsapp: "",
  whatsappLabel: "",
  phone: "",
  phoneLabel: "",
  linkedin: "",
};

export const NAV = [
  { href: "#enfoque", label: "Enfoque" },
  { href: "#servicios", label: "Servicios" },
  { href: "#metodo", label: "Método" },
  { href: "#nosotros", label: "Nosotros" },
] as const;
