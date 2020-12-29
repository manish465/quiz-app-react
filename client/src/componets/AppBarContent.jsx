import React from "react";

import {
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

import Brightness6Icon from "@material-ui/icons/Brightness6";
import NightsStayIcon from "@material-ui/icons/NightsStay";

const useStyles = makeStyles((theme) => ({
    headerHomeButton: {
        textDecoration: "none",
    },
    headerMotion: {
        display: "inline-block",
    },
}));

const AppBarContent = ({
    isMenuOpen,
    setIsMenuOpen,
    darkMode,
    setDarkMode,
}) => {
    const classes = useStyles();
    return (
        <Grid container justify='space-between'>
            <Grid className={classes.headerHomeButton} item>
                <motion.div
                    className={classes.headerMotion}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ rotateX: 40 }}>
                    <Button
                        component={Link}
                        to='/'
                        onClick={() => setIsMenuOpen(false)}>
                        <Typography variant='h4' color='secondary'>
                            QUIZ APP
                        </Typography>
                    </Button>
                </motion.div>
            </Grid>
            <Grid className={classes.headerRightGrid} item>
                <motion.div
                    className={classes.headerMotion}
                    whileTap={{
                        scale: 1.1,
                        rotate: 180,
                        opacity: 0,
                    }}
                    whileHover={{ rotateX: 180 }}>
                    <IconButton
                        color='secondary'
                        onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Brightness6Icon /> : <NightsStayIcon />}
                    </IconButton>
                </motion.div>
                <motion.div
                    className={classes.headerMotion}
                    whileTap={{
                        scale: 1.1,
                        rotate: 180,
                        opacity: 0,
                    }}
                    whileHover={{ rotateX: 180 }}>
                    <IconButton
                        color='secondary'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </motion.div>
                <Button
                    component={Link}
                    to='/login'
                    color='secondary'
                    variant='contained'>
                    Login
                </Button>
            </Grid>
        </Grid>
    );
};

export default AppBarContent;
