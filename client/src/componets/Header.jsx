import React from "react";

import HeaderMenu from "./HeaderMenu";
import AppBarContent from "./AppBarContent";

import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

import { AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    headerAppBar: {
        background: "transparent",
        boxShadow: "none",
        zIndex: 1300,
    },
}));

const Header = ({
    userName,
    setUserName,
    isMenuOpen,
    setIsMenuOpen,
    darkMode,
    setDarkMode,
}) => {
    const classes = useStyles();
    return (
        <>
            <AnimatePresence>
                {isMenuOpen ? <HeaderMenu /> : null}
            </AnimatePresence>
            <AppBar className={classes.headerAppBar} position='absolute'>
                <Toolbar>
                    <AppBarContent
                        userName={userName}
                        setUserName={setUserName}
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
