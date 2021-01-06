import React from "react";

import {
    makeStyles,
    Button,
    Paper,
    Grid,
    TextField,
    List,
    ListItem,
    Checkbox,
    FormControlLabel,
} from "@material-ui/core";

import axios from "axios";

import { generate } from "randomstring";

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
    upperMargin: { margin: "20px 0" },
    stepButton: {
        margin: "0 5px",
    },
}));

const url = "http://localhost:8000";
const endpoint = "/api/tests";

const CreatePage = () => {
    const classes = useStyles();

    const { control, register, handleSubmit, watch } = useForm({
        defaultValues: {
            name: "",
            description: { include: false, text: "" },
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
        mode: "onBlur",
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "testQuestion",
    });

    const includeDescpriton = watch(`description.include`);

    const onSubmit = (data) => {
        axios
            .post(url + endpoint, {
                testCode: generate(6),
                testName: data.name,
                testDescription: data.description,
                testData: data.testQuestion,
            })
            .then((response) => console.log(response));
    };

    return (
        <div className={classes.createPageMaindiv}>
            <Paper className={classes.createPagePaper}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={register({ required: true })}
                                fullWidth
                                variant='outlined'
                                placeholder='Enter Test Name'
                                label='Name'
                                name='name'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        inputRef={register}
                                        color='primary'
                                        defaultValue={false}
                                        name={`description.include`}
                                    />
                                }
                                label='Include Description'
                            />
                        </Grid>
                        {includeDescpriton && (
                            <Grid item xs={12}>
                                <TextField
                                    inputRef={register()}
                                    fullWidth
                                    variant='outlined'
                                    placeholder='Enter Test Description'
                                    label='Description'
                                    name={`description.text`}
                                />
                            </Grid>
                        )}
                        {fields.map((field, index) => (
                            <React.Fragment key={field.id}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        inputRef={register()}
                                        variant='outlined'
                                        placeholder='Enter The Question'
                                        label='Question'
                                        name={`testQuestion[${index}].text`}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <List>
                                        <ListItem>
                                            <Checkbox
                                                inputRef={register()}
                                                name={`testQuestion[${index}].options[0].answer`}
                                                color='primary'
                                                defaultValue={false}
                                            />
                                            <TextField
                                                inputRef={register()}
                                                variant='outlined'
                                                placeholder='Enter Option'
                                                label='Option'
                                                name={`testQuestion[${index}].options[0].text`}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <Checkbox
                                                inputRef={register()}
                                                name={`testQuestion[${index}].options[1].answer`}
                                                color='primary'
                                                defaultValue={false}
                                            />
                                            <TextField
                                                inputRef={register()}
                                                variant='outlined'
                                                placeholder='Enter Option'
                                                label='Option'
                                                name={`testQuestion[${index}].options[1].text`}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <Checkbox
                                                inputRef={register()}
                                                name={`testQuestion[${index}].options[2].answer`}
                                                color='primary'
                                                defaultValue={false}
                                            />
                                            <TextField
                                                inputRef={register()}
                                                variant='outlined'
                                                placeholder='Enter Option'
                                                label='Option'
                                                name={`testQuestion[${index}].options[2].text`}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <Checkbox
                                                inputRef={register()}
                                                name={`testQuestion[${index}].options[3].answer`}
                                                color='primary'
                                                defaultValue={false}
                                            />
                                            <TextField
                                                inputRef={register()}
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
                        ))}
                        <Button
                            size='large'
                            type='submit'
                            color='primary'
                            variant='contained'>
                            Publish
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
};

export default CreatePage;
