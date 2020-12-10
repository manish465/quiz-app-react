import React, { useState } from "react";

import { Route, Switch, useLocation } from "react-router-dom";

import Header from "./Componets/Header";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

import { lightTheme, darkTheme } from "./Stylings/themes";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

const App = () => {
    const randomTheme = Boolean(Math.round(Math.random()));

    const [darkMode, setDarkMode] = useState(randomTheme);
    const [userName, setUserName] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

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
            <Switch location={location} key={location.pathname}>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage userName={userName} setUserName={setUserName} />
                </Route>
            </Switch>
        </ThemeProvider>
    );
};

export default App;
