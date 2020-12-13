import React, { useState } from "react";

import {
    makeStyles,
    Button,
    ButtonGroup,
    Paper,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";

import CreateFirst from "../Componets/FirstStep";
import CreateSecond from "../Componets/SecondStep";
import ThirdStep from "./../Componets/ThirdStep";

const useStyles = makeStyles((theme) => ({
    createPageMaindiv: {
        width: "100%",
        padding: "150px 100px",
    },
    createPagePaper: {
        background: theme.palette.secondary.main,
        padding: "20px",
    },
    upperMargin: { marginTop: "20px" },
}));

const CreatePage = () => {
    const classes = useStyles();

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
                    <CreateFirst
                        upperMargin={classes.upperMargin}
                        testName={testName}
                        setTestName={setTestName}
                    />
                );
            case 1:
                return (
                    <CreateSecond
                        upperMargin={classes.upperMargin}
                        testData={testData}
                        setTestData={setTestData}
                    />
                );
            case 2:
                return <ThirdStep />;
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
                <ButtonGroup>
                    <Button
                        className={classes.upperMargin}
                        onClick={() => setActiveStep(activeStep - 1)}
                        disabled={activeStep === 0}
                        size='large'
                        color='primary'
                        variant='contained'>
                        Back
                    </Button>
                    <Button
                        className={classes.upperMargin}
                        onClick={() => setActiveStep(activeStep + 1)}
                        disabled={activeStep === 2}
                        size='large'
                        color='primary'
                        variant='contained'>
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
