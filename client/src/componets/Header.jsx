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
    headerHomeLoginButton: {
        textDecoration: "none",
    },
}));

const Header = ({ userName, setUserName, darkMode, setDarkMode }) => {
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
                        {userName === "" ? (
                            <Button
                                className={classes.headerHomeLoginButton}
                                component={Link}
                                to='/login'
                                color='secondary'
                                variant='contained'>
                                <Typography color='primary'>Login</Typography>
                            </Button>
                        ) : (
                            <Button
                                className={classes.headerHomeLoginButton}
                                onClick={() => setUserName("")}
                                color='secondary'
                                variant='contained'>
                                <Typography color='primary'>Log Out</Typography>
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
