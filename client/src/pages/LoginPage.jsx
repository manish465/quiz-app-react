import React from "react";

import { Paper, TextField, Button, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    loginPagePaper: {
        margin: "10%",
        marginTop: "15%",
        padding: "25px",
        background: theme.palette.secondary.main,
    },
    loginPageSaveButton: {
        marginTop: "10px",
    },
}));

const LoginPage = ({ userName, setUserName }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.loginPagePaper} variant='outlined'>
            <TextField
                value={userName}
                onChange={(event) => {
                    setUserName(event.target.value);
                }}
                fullWidth
                variant='outlined'
                label='Enter Your User Name'
            />
            <Button
                component={Link}
                to='/'
                className={classes.loginPageSaveButton}
                color='primary'
                fullWidth
                variant='contained'>
                SAVE
            </Button>
        </Paper>
    );
};

export default LoginPage;
