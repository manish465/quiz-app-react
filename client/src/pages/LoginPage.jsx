import React from "react";

import { TextField, Button, makeStyles } from "@material-ui/core";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    loginPagePaper: {
        margin: "200px",
        marginTop: "200px",
        padding: "30px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "5px",
    },
    loginTextFeid: {},
    loginPageSaveButton: { marginTop: "10px" },
}));

const LoginPage = ({ userName, setUserName }) => {
    const classes = useStyles();

    return (
        <motion.div
            initial={{ scale: 5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={classes.loginPagePaper}>
            <TextField
                className={classes.loginTextFeid}
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
        </motion.div>
    );
};

export default LoginPage;
