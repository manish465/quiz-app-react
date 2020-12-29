import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import {
    AboutUsPage,
    CreatePage,
    HomePage,
    JoinPage,
    AccountPage,
    OptionPage,
    AttemptPage,
} from "./Pages";

import { Header } from "./Componets";

import { lightTheme, darkTheme } from "./Stylings/themes";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

const App = () => {
    const randomTheme = Boolean(Math.round(Math.random()));

    const [darkMode, setDarkMode] = useState(randomTheme);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const routes = [
        { to: "/", page: <HomePage /> },
        { to: "/acc", page: <AccountPage /> },
        { to: "/create-test", page: <CreatePage /> },
        { to: "/join-test", page: <JoinPage /> },
        { to: "/option", page: <OptionPage /> },
        { to: "/about-us", page: <AboutUsPage /> },
        { to: "/attempt/:id", page: <AttemptPage /> },
    ];

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <Switch>
                {routes.map((route, key) => (
                    <Route key={key} exact path={route.to}>
                        {route.page}
                    </Route>
                ))}
            </Switch>
        </ThemeProvider>
    );
};

export default App;
