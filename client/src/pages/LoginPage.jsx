import React from "react";

import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    loginPagePaper: {
        margin: "10%",
        height: "100px",
        background: theme.palette.secondary.main,
    },
}));

const LoginPage = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.loginPagePaper} variant='outlined'>
            Login Page
        </Paper>
    );
};

export default LoginPage;
