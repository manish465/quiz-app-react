import React, { useState } from "react";

import {
    makeStyles,
    TextField,
    Button,
    ButtonGroup,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Checkbox,
} from "@material-ui/core";

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
    const [testNumberOfQuestions, setTestNumberOfQuestions] = useState(0);

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <>
                        <TextField
                            className={classes.upperMargin}
                            variant='outlined'
                            label='Enter Name Of The Test'
                            fullWidth
                        />
                        <TextField
                            className={classes.upperMargin}
                            variant='outlined'
                            label='Enter Numebr Of Questions'
                            fullWidth
                            type='number'
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <TextField
                            className={classes.upperMargin}
                            variant='outlined'
                            label='Enter Qustion'
                            fullWidth
                        />
                        <Paper>
                            <TextField
                                variant='filled'
                                label='Enter Option'></TextField>
                            <Checkbox size='large' />
                        </Paper>
                        <Paper>
                            <TextField variant='filled' label='Enter Option' />
                            <Checkbox size='large' />
                        </Paper>
                        <Paper>
                            <TextField variant='filled' label='Enter Option' />
                            <Checkbox size='large' />
                        </Paper>
                        <Paper>
                            <TextField variant='filled' label='Enter Option' />
                            <Checkbox size='large' />
                        </Paper>
                    </>
                );
            case 2:
                return "This is the bit I really care about!";
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

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// function getSteps() {
//   return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return 'Select campaign settings...';
//     case 1:
//       return 'What is an ad group anyways?';
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown step';
//   }
// }

// export default function HorizontalLinearStepper() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());
//   const steps = getSteps();

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = <Typography variant="caption">Optional</Typography>;
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       <div>
//         {activeStep === steps.length ? (
//           <div>
//             <Typography className={classes.instructions}>
//               All steps completed - you&apos;re finished
//             </Typography>
//             <Button onClick={handleReset} className={classes.button}>
//               Reset
//             </Button>
//           </div>
//         ) : (
//           <div>
//             <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//             <div>
//               <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
//                 Back
//               </Button>
//               {isStepOptional(activeStep) && (
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleSkip}
//                   className={classes.button}
//                 >
//                   Skip
//                 </Button>
//               )}

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleNext}
//                 className={classes.button}
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </div>
//           </div>
