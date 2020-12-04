import React, { useState } from "react";

import { Route } from "react-router-dom";

import Header from "./componets/Header";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";

const darkTheme = createMuiTheme({
    palette: {
        background: { default: "#222831" },
        primary: { main: "#393e46" },
        secondary: { main: "#ffd369" },
        text: { primary: "#eeeeee" },
    },
});

const lightTheme = createMuiTheme({
    palette: {
        background: { default: "#eeeeee" },
        primary: { main: "#222831" },
        secondary: { main: "#4f8a8b" },
        text: { primary: "#fbd46d" },
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
            <Route exact path='/login'>
                <LoginPage />
            </Route>
        </ThemeProvider>
    );
};

export default App;
