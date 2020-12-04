import React, { useState } from "react";

import { Route } from "react-router-dom";

import Header from "./componets/Header";

import HomePage from "./pages/HomePage";

import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";

const darkTheme = createMuiTheme({
    palette: {
        background: { default: "#214252" },
        primary: { main: "#f05454" },
        secondary: { main: "#af2d2d" },
        text: { primary: "#ce6262" },
    },
});

const lightTheme = createMuiTheme({
    palette: {
        background: { default: "#16a596" },
        primary: { main: "#898b8a" },
        secondary: { main: "#fae0df" },
        text: { primary: "#f6f5f1" },
    },
});

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Route exact path='/'>
                <HomePage />
            </Route>
        </ThemeProvider>
    );
};

export default App;
