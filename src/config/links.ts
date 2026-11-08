// Enlaces de las tiendas. Mientras estén vacíos, los botones muestran "Próximamente"
// y no son enlaces. Pega aquí la URL pública de cada ficha cuando exista, por ejemplo:
//   APP_STORE_URL = "https://apps.apple.com/app/id6819096613"
//   PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=<package>"
export const APP_STORE_URL = "";
export const PLAY_STORE_URL = "";

export const CONTACT_EMAIL = "info@folioapp.lat";

// Dónde cancelar una suscripción (eliminar la cuenta no la cancela).
export const MANAGE_SUBSCRIPTION = {
  apple: "https://apps.apple.com/account/subscriptions",
  appleHelpEs: "https://support.apple.com/es-lamr/118428",
  appleHelpEn: "https://support.apple.com/en-us/118428",
  google: "https://play.google.com/store/account/subscriptions",
  googleHelpEs: "https://support.google.com/googleplay/answer/7018481?hl=es-419",
  googleHelpEn: "https://support.google.com/googleplay/answer/7018481?hl=en",
} as const;

export const storesLive = Boolean(APP_STORE_URL || PLAY_STORE_URL);
