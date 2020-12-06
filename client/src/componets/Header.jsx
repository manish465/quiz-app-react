import React from "react";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
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
        <AppBar className={classes.headerAppBar} position='static'>
            <Toolbar>
                <Grid container justify='space-between'>
                    <Grid
                        className={classes.headerHomeButton}
                        component={Link}
                        to='/'
                        item>
                        <Button>
                            {userName === "" ? (
                                <Typography variant='h4' color='secondary'>
                                    QUIZ APP
                                </Typography>
                            ) : (
                                <Typography variant='h4' color='secondary'>
                                    {userName}
                                </Typography>
                            )}
                        </Button>
                    </Grid>
                    <Grid item>
                        <motion.div whileTap={{ scale: 2, rotate: 180 }}>
                            <IconButton
                                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </motion.div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
