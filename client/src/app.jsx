import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import {
    AboutUsPage,
    CreatePage,
    HomePage,
    JoinPage,
    LoginPage,
    OptionPage,
} from "./Pages";

import Header from "./Componets/Header";

import { lightTheme, darkTheme } from "./Stylings/themes";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

const App = () => {
    const randomTheme = Boolean(Math.round(Math.random()));

    const [darkMode, setDarkMode] = useState(randomTheme);
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
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage userName={userName} setUserName={setUserName} />
                </Route>
                <Route exact path='/create-test'>
                    <CreatePage />
                </Route>
                <Route exact path='/join-test'>
                    <JoinPage />
                </Route>
                <Route exact path='/option'>
                    <OptionPage />
                </Route>
                <Route exact path='/about-us'>
                    <AboutUsPage />
                </Route>
            </Switch>
        </ThemeProvider>
    );
};

export default App;
