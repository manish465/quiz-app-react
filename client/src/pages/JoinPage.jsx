import React, { useRef } from "react";

import { Paper, makeStyles, TextField, Button } from "@material-ui/core";

import axios from "axios";

const url = "http://localhost:8000";
const endpoint = "/api/tests/";

const useStyles = makeStyles((theme) => ({
    joinPageMaindiv: {
        width: "100%",
        padding: "150px 50px",
    },
    mainPaper: {
        width: "100%",
        padding: "20px",
        backgroundColor: theme.palette.secondary.main,
    },
    joinPageButton: {
        marginTop: "20px",
    },
}));

const JoinPage = ({ setTestData }) => {
    const classes = useStyles();
    const textfeildRef = useRef();

    const hadelJoin = () => {
        axios
            .get(url + endpoint + textfeildRef.current.value)
            .then((response) => setTestData(response.data));
    };

    return (
        <div className={classes.joinPageMaindiv}>
            <Paper className={classes.mainPaper}>
                <TextField
                    inputRef={textfeildRef}
                    label='Enter Test Code'
                    variant='outlined'
                    fullWidth
                />

                <Button
                    onClick={hadelJoin}
                    className={classes.joinPageButton}
                    variant='contained'
                    color='primary'
                    fullWidth>
                    Join
                </Button>
            </Paper>
        </div>
    );
};

export default JoinPage;
