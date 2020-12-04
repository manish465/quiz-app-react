import React from "react";

import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <Route exact path='/'>
            <HomePage />
        </Route>
    );
};

export default App;
