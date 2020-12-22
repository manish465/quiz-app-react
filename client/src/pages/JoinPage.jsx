import React from "react";

import { Paper, makeStyles, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    joinPageMaindiv: {
        width: "100%",
        padding: "150px 50px",
    },
    mainPaper: {
        width: "100%",
        padding: "20px",
    },
    joinPageButton: {
        marginTop: "20px",
    },
}));

const JoinPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.joinPageMaindiv}>
            <Paper className={classes.mainPaper}>
                <TextField
                    label='Enter Test Code'
                    variant='outlined'
                    fullWidth
                />
                <Button
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
