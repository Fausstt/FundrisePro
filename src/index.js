import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/fonts/fonts.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 981,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: "#00a1eb",
            light: "#0003be",
            dark: "#0003be",
            contrastText: "#FFF",
        },
        secondary: {
            light: "#fff",
            main: "transparent",
            dark: "#00a1eb50",
            contrastText: "#FFF",
        },
        fild: {
            light: "#fff",
            main: "#FB83C3",
            dark: "#fff",
            contrastText: "#fff",
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
);
