import React, { useState } from "react";

import { generate } from "randomstring";

import {
    makeStyles,
    Button,
    ButtonGroup,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Divider,
} from "@material-ui/core";

import { FirstStep, SecondStep, ThirdStep } from "../Componets";

const useStyles = makeStyles((theme) => ({
    createPageMaindiv: {
        width: "100%",
        padding: "100px 50px",
    },
    createPagePaper: {
        background: theme.palette.secondary.main,
        padding: "20px",
    },
    upperMargin: { marginTop: "20px" },
}));

const questionFormat = {
    text: "",
    options: [
        { text: "", isAnswer: false },
        { text: "", isAnswer: false },
        { text: "", isAnswer: false },
        { text: "", isAnswer: false },
    ],
};

const CreatePage = () => {
    const classes = useStyles();

    const testCode = generate(6);

    const [activeStep, setActiveStep] = useState(0);

    const [testName, setTestName] = useState("");
    const [testData, setTestData] = useState([
        {
            text: "",
            options: [
                { text: "", isAnswer: false },
                { text: "", isAnswer: false },
                { text: "", isAnswer: false },
                { text: "", isAnswer: false },
            ],
        },
    ]);

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <FirstStep
                        upperMargin={classes.upperMargin}
                        testName={testName}
                        setTestName={setTestName}
                    />
                );
            case 1:
                return (
                    <SecondStep
                        questionFormat={questionFormat}
                        upperMargin={classes.upperMargin}
                        testData={testData}
                        setTestData={setTestData}
                    />
                );
            case 2:
                return (
                    <ThirdStep
                        testName={testName}
                        upperMargin={classes.upperMargin}
                        testData={testData}
                        testCode={testCode}
                    />
                );
            default:
                return "Unknown step";
        }
    }

    return (
        <div className={classes.createPageMaindiv}>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>Hello</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Hello</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Hello</StepLabel>
                </Step>
            </Stepper>
            <Paper className={classes.createPagePaper}>
                {getStepContent(activeStep)}
                <Divider className={classes.upperMargin} />
                <ButtonGroup
                    className={classes.upperMargin}
                    variant='contained'
                    color='primary'
                    size='large'
                    fullWidth>
                    <Button
                        onClick={() => setActiveStep(activeStep - 1)}
                        disabled={activeStep === 0}>
                        Back
                    </Button>
                    <Button
                        onClick={() => setActiveStep(activeStep + 1)}
                        disabled={activeStep === 2}>
                        Next
                    </Button>
                </ButtonGroup>
            </Paper>
        </div>
    );
};

export default CreatePage;

/* <Button
                        className={classes.upperMargin}
                        onClick={() => console.log(testData)}
                        disabled={activeStep !== 2}
                        size='large'
                        color='primary'
                        variant='contained'>
                        Submit
                    </Button> */
