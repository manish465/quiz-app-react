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

import { Link } from "react-router-dom";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import NightsStayIcon from "@material-ui/icons/NightsStay";

const useStyles = makeStyles((theme) => ({
    headerHomeButton: {
        textDecoration: "none",
    },
    headerThemeButton: {
        marginRight: "10px",
    },
}));

const Header = ({ darkMode, setDarkMode }) => {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid container justify='space-between'>
                    <Grid
                        className={classes.headerHomeButton}
                        component={Link}
                        to='/'
                        item>
                        <Button>
                            <Typography variant='h4' color='secondary'>
                                QUIZ APP
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <IconButton
                            className={classes.headerThemeButton}
                            onClick={() => setDarkMode(!darkMode)}
                            size='medium'
                            color='secondary'>
                            {darkMode ? (
                                <Brightness4Icon />
                            ) : (
                                <NightsStayIcon />
                            )}
                        </IconButton>
                        <Button color='secondary' variant='contained'>
                            <Typography color='primary'>Login</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
