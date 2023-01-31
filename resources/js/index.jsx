import React from "react";
import App from "./app";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { createRoot } from "react-dom/client";

const container = document.getElementById('App');
const root = createRoot(container);
root.render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
);
