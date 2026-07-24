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
// DATOS DE CONTACTO
// - whatsapps: números de celular (WhatsApp). `e164` es el número en formato
//   internacional SIN signos ni espacios (para los enlaces wa.me); `label` es
//   como se muestra en pantalla.
// - linkedin: pendiente. Mientras esté vacío, la web muestra "Disponible pronto".
// ---------------------------------------------------------------------------
export const CONTACT: {
  email: string;
  whatsapps: { e164: string; label: string }[];
  linkedin: string;
} = {
  email: "francisco.aguirre@assid.cl",
  whatsapps: [
    { e164: "56978496800", label: "+56 9 7849 6800" },
    { e164: "56993798683", label: "+56 9 9379 8683" },
  ],
  linkedin: "",
};

export const NAV = [
  { href: "#enfoque", label: "Enfoque" },
  { href: "#servicios", label: "Servicios" },
  { href: "#metodo", label: "Método" },
  { href: "#nosotros", label: "Nosotros" },
] as const;
