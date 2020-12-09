import React, { useState } from "react";

import { Route } from "react-router-dom";

import Header from "./Componets/Header";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

import { lightTheme, darkTheme } from "./Stylings/themes";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
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
