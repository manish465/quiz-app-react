import React, { useState } from "react";

import {
    makeStyles,
    Button,
    Paper,
    Divider,
    Grid,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";

import { useForm } from "react-hook-form";

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
    upperMargin: { marginTop: "20px", marginBottom: "20px" },
    stepButton: {
        margin: "0 5px",
    },
}));

const CreatePage = () => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);

    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            description: "",
            testQuestion: [
                {
                    text: "",
                    options: [
                        { text: "", answer: false },
                        { text: "", answer: false },
                        { text: "", answer: false },
                        { text: "", answer: false },
                    ],
                },
            ],
        },
    });

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <FirstStep register={register} />;
            case 1:
                return <SecondStep control={control} register={register} />;
            case 2:
                return <ThirdStep handleSubmit={handleSubmit} />;
            default:
                return "Unknown step";
        }
    };

    return (
        <div className={classes.createPageMaindiv}>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>1</StepLabel>
                </Step>
                <Step>
                    <StepLabel>2</StepLabel>
                </Step>
                <Step>
                    <StepLabel>3</StepLabel>
                </Step>
            </Stepper>
            <Paper className={classes.createPagePaper}>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <Grid container spacing={2}>
                        {getStepContent(activeStep)}
                    </Grid>
                </form>
                <Divider className={classes.upperMargin} />
                <Button
                    onClick={() =>
                        setActiveStep((activeStep) => activeStep - 1)
                    }
                    disabled={activeStep === 0}
                    className={classes.stepButton}
                    color='primary'
                    variant='contained'>
                    Back
                </Button>
                <Button
                    onClick={() =>
                        setActiveStep((activeStep) => activeStep + 1)
                    }
                    disabled={activeStep === 2}
                    className={classes.stepButton}
                    color='primary'
                    variant='contained'>
                    Next
                </Button>
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
