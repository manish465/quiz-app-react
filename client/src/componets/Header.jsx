import React from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Button onClick={() => setDarkMode(!darkMode)}>
                    <Typography variant='h4' color='secondary'>
                        QUIZ APP
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
