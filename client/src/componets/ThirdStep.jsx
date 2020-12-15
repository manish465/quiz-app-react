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
}));

const ThirdStep = ({ upperMargin, testData, testName }) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h2'>{testName}:</Typography>
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
                            </Typography>
                        ))}
                    </Paper>
                </Paper>
            ))}
            <Button
                className={upperMargin}
                onClick={() => console.log(testData)}
                size='large'
                color='primary'
                variant='contained'>
                Publish
            </Button>
        </>
    );
};

export default ThirdStep;
