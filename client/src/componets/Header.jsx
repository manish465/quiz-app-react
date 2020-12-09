import React from "react";

import HeaderMenu from "./HeaderMenu";
import AppBarContent from "./AppBarContent";

import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

import { AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    headerAppBar: {
        background: "transparent",
        boxShadow: "none",
        zIndex: theme.zIndex.appBar,
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
            <AnimatePresence>
                {isMenuOpen ? <HeaderMenu /> : null}
            </AnimatePresence>
        </>
    );
};

export default Header;
