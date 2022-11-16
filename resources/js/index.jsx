import React from "react";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const container = document.getElementById('App');
const root = createRoot(container);
const theme = createTheme({
    palette: {
        mode: "light",
    }
});
root.render(
    <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>,
    </I18nextProvider>
);
