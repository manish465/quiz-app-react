import React, { useState } from "react";

import { Route } from "react-router-dom";

import Header from "./Componets/Header";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";

const darkTheme = createMuiTheme({
    palette: {
        background: { default: "#222831" },
        primary: { main: "#393e46" },
        secondary: { main: "#00adb5" },
        text: { primary: "#eeeeee" },
    },
    typography: {
        button: {
            textTransform: "none",
        },
    },
    zIndex: { drawer: 1070 },
});

const lightTheme = createMuiTheme({
    palette: {
        background: { default: "#f0f5f9" },
        primary: { main: "#c9d6df" },
        secondary: { main: "#52616b" },
        text: { primary: "#1e2022" },
    },
    typography: {
        button: {
            textTransform: "none",
        },
    },
    zIndex: { drawer: 1070 },
});

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [userName, setUserName] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Header
                userName={userName}
                setUserName={setUserName}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route exact path='/login'>
                <LoginPage userName={userName} setUserName={setUserName} />
            </Route>
        </ThemeProvider>
    );
};

export default App;
