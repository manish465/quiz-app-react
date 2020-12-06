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

import { motion, AnimatePresence } from "framer-motion";

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
        zIndex: theme.zIndex.appBar,
    },
    headerMenuPage: {
        zIndex: theme.zIndex.drawer,
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
        background: theme.palette.primary.main,
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
                {isMenuOpen ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}>
                        <Paper className={classes.headerMenuPage}>
                            menu page
                        </Paper>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
};

export default Header;
