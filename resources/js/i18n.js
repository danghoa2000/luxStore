import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translationEN from "../js/assets/locales/en/translation.json";

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
};

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
