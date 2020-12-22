import React from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import { Button, Typography, Paper, makeStyles } from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const url = "http://localhost:8000";
const endpoint = "/api/tests";

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

const ThirdStep = ({ upperMargin, testData, testName, testCode }) => {
    const history = useHistory();

    const classes = useStyles();

    const hadelPublish = () => {
        axios.post(url + endpoint, {
            testName,
            testData,
            testCode,
        });
        history.goBack();
    };

    return (
        <>
            <Typography variant='h2'>{testName}:</Typography>
            <Typography variant='h4'>Test Code : {testCode}</Typography>
            {testData.map((data, index) => (
                <Paper key={index} className={classes.thirdStepPaper}>
                    <Typography variant='h5'>
                        {index + 1}.{data.text}
                    </Typography>
                    <Paper className={classes.thirdStepPaperOptions}>
                        {data.options.map((option, key) => (
                            <Typography
                                key={key}
                                className={classes.ThirdStepOption}
                                variant='h6'>
                                {key + 1}.{option.text}
                                {option.isAnswer ? (
                                    <CheckIcon className={classes.answer} />
                                ) : (
                                    <CloseIcon className={classes.answer} />
                                )}
                            </Typography>
                        ))}
                    </Paper>
                </Paper>
            ))}
            <Button
                className={upperMargin}
                onClick={hadelPublish}
                size='large'
                color='primary'
                variant='contained'>
                Publish
            </Button>
        </>
    );
};

export default ThirdStep;
