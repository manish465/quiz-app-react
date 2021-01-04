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
    TextField,
    List,
    ListItem,
    Checkbox,
} from "@material-ui/core";

import { useForm, useFieldArray } from "react-hook-form";

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

    const { fields, append, remove } = useFieldArray({
        control,
        name: "testQuestion",
    });

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={register}
                                fullWidth
                                variant='outlined'
                                placeholder='Enter Test Name'
                                label='Name'
                                name='name'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={register}
                                fullWidth
                                variant='outlined'
                                placeholder='Enter Test Description'
                                label='Description'
                                name='description'
                            />
                        </Grid>
                    </>
                );
            case 1:
                return fields.map((field, index) => (
                    <React.Fragment key={field.id}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                inputRef={register}
                                variant='outlined'
                                placeholder='Enter The Question'
                                label='Question'
                                name={`testQuestion[${index}].text`}
                                defaultValue={field.text}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <List>
                                <ListItem>
                                    <Checkbox
                                        inputRef={register}
                                        name={`testQuestion[${index}].options[0].answer`}
                                    />
                                    <TextField
                                        inputRef={register}
                                        variant='outlined'
                                        placeholder='Enter Option'
                                        label='Option'
                                        name={`testQuestion[${index}].options[0].text`}
                                    />
                                </ListItem>
                                <ListItem>
                                    <Checkbox
                                        inputRef={register}
                                        name={`testQuestion[${index}].options[1].answer`}
                                    />
                                    <TextField
                                        inputRef={register}
                                        variant='outlined'
                                        placeholder='Enter Option'
                                        label='Option'
                                        name={`testQuestion[${index}].options[1].text`}
                                    />
                                </ListItem>
                                <ListItem>
                                    <Checkbox
                                        inputRef={register}
                                        name={`testQuestion[${index}].options[2].answer`}
                                    />
                                    <TextField
                                        inputRef={register}
                                        variant='outlined'
                                        placeholder='Enter Option'
                                        label='Option'
                                        name={`testQuestion[${index}].options[2].text`}
                                    />
                                </ListItem>
                                <ListItem>
                                    <Checkbox
                                        inputRef={register}
                                        name={`testQuestion[${index}].options[3].answer`}
                                    />
                                    <TextField
                                        inputRef={register}
                                        variant='outlined'
                                        placeholder='Enter Option'
                                        label='Option'
                                        name={`testQuestion[${index}].options[3].text`}
                                    />
                                </ListItem>
                            </List>
                            <Button
                                className={classes.stepButton}
                                color='primary'
                                variant='contained'
                                onClick={append}>
                                Add Question
                            </Button>
                            <Button
                                className={classes.stepButton}
                                color='primary'
                                variant='contained'
                                onClick={() => remove(index)}>
                                Remove Aboved Question
                            </Button>
                        </Grid>
                    </React.Fragment>
                ));
            case 2:
                return (
                    <Button
                        size='large'
                        type='submit'
                        color='primary'
                        variant='contained'>
                        Publish
                    </Button>
                );
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
