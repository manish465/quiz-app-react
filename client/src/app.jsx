import React from "react";

import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";

const darkTheme = createMuiTheme({
    palette: {
        background: { default: "#000000" },
        text: { primary: "#ffffff" },
    },
});

const lightTheme = createMuiTheme({
    palette: {
        background: { default: "#ffffff" },
        text: { primary: "#000000" },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Route exact path='/'>
                <HomePage />
            </Route>
        </ThemeProvider>
    );
};

export default App;
