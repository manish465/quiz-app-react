import React from "react";

import { Button, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    thirdStepPaper: {
        marginTop: "50px",
        padding: "30px",
        backgroundColor: theme.palette.primary.main,
    },
    thirdStepPaperOptions: {
        marginTop: "15px",
        padding: "20px",
        backgroundColor: theme.palette.secondary.main,
    },
    ThirdStepOption: {
        marginTop: "5px",
    },
    answer: {
        marginLeft: "20px",
    },
}));

const ThirdStep = ({ hadelPublish }) => {
    return (
        <>
            <Button
                onClick={hadelPublish}
                size='large'
                type='submit'
                color='primary'
                variant='contained'>
                Publish
            </Button>
        </>
    );
};

export default ThirdStep;
