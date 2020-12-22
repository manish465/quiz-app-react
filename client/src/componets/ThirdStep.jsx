import React from "react";

import axios from "axios";

import { generate } from "randomstring";

import { Button, Typography, Paper, makeStyles } from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

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

const ThirdStep = ({ upperMargin, testData, testName }) => {
    const classes = useStyles();

    const finalData = {
        name: testName,
        question: testData,
        testCode: generate(6),
    };

    const hadelPublish = () => {
        axios
            .post("http://localhost:8000/api/tests", finalData)
            .then((response) => console.log(response.data, response.status))
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Typography variant='h2'>{finalData.name}:</Typography>
            {finalData.question.map((data, index) => (
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
