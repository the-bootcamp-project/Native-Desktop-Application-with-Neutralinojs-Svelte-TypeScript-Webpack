import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import * as en from "./en/translation.json";
import * as de from "./de/translation.json";

// the translations
// (tip move them in a JSON file and import them)

const resources = {
    en: { translation: en },
    de: { translation: de },
};

i18n.use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "en",
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        detection: {
            // order and from where user language should be detected
            order: ["navigator", "localStorage", "sessionStorage", "querystring", "cookie", "htmlTag", "path", "subdomain"],
            // cache user language on
            caches: ["localStorage"],
            // keys or params to lookup language from
            // lookupQuerystring: 'lng',
            // lookupCookie: 'i18next',
            lookupLocalStorage: "i18nextLng",
            // lookupSessionStorage: 'i18nextLng',
            // lookupFromPathIndex: 0,
            // lookupFromSubdomainIndex: 0,
        },
    });

export default i18n;
