import React from "react";

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

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    headerHomeButton: {
        textDecoration: "none",
    },
    headerThemeButton: {
        marginRight: "10px",
    },
    headerHomeLoginButton: {
        textDecoration: "none",
    },
    headerAppBar: {
        background: "transparent",
        boxShadow: "none",
        zIndex: "4",
    },
    headerMenuPage: {
        zIndex: "2",
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
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
                        <Grid
                            className={classes.headerHomeButton}
                            component={Link}
                            to='/'
                            item>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ rotateX: 40 }}>
                                <Button>
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
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                                </IconButton>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {isMenuOpen ? (
                <Paper className={classes.headerMenuPage}>csbj</Paper>
            ) : null}
        </>
    );
};

export default Header;
