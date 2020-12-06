import React from "react";

import HeaderMenu from "./HeaderMenu";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    Paper,
    IconButton,
    makeStyles,
} from "@material-ui/core";

import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    headerHomeButton: {
        textDecoration: "none",
    },

    headerAppBar: {
        background: "transparent",
        boxShadow: "none",
        zIndex: theme.zIndex.appBar,
    },
}));

const Header = ({
    userName,
    setUserName,
    darkMode,
    setDarkMode,
    isMenuOpen,
    setIsMenuOpen,
}) => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.headerAppBar} position='absolute'>
                <Toolbar>
                    <Grid container justify='space-between'>
                        <Grid className={classes.headerHomeButton} item>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ rotateX: 40 }}>
                                <Button
                                    component={Link}
                                    to='/'
                                    onClick={() => setIsMenuOpen(false)}>
                                    {userName === "" ? (
                                        <Typography
                                            variant='h4'
                                            color='secondary'>
                                            QUIZ APP
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant='h4'
                                            color='secondary'>
                                            {userName}
                                        </Typography>
                                    )}
                                </Button>
                            </motion.div>
                        </Grid>
                        <Grid item>
                            <motion.div
                                whileTap={{
                                    scale: 2,
                                    rotate: 180,
                                    opacity: 0,
                                }}>
                                <IconButton
                                    color='secondary'
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                                </IconButton>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AnimatePresence>
                {isMenuOpen ? <HeaderMenu /> : null}
            </AnimatePresence>
        </>
    );
};

export default Header;
