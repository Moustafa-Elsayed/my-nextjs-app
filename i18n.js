import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./public/locales/en/common.json";
import arTranslation from "./public/locales/ar/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: "en", // سيتم تحديثها ديناميكيًا بناءً على locale
  fallbackLng: "en", // اللغة الاحتياطية
  interpolation: { escapeValue: false },
  react: { useSuspense: false }, // لمنع الوميض
});

export default i18n;
