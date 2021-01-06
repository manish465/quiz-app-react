import React, { useState } from "react";

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
    Modal,
    Box,
    Typography,
} from "@material-ui/core";

import axios from "axios";
import { useHistory } from "react-router-dom";

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
    modalPaper: {
        background: theme.palette.secondary.main,
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
    const history = useHistory();

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState(null);

    const { control, register, handleSubmit, watch } = useForm({
        defaultValues: {
            name: "",
            password: "",
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
                testPassword: data.password,
                testDescription: data.description,
                testData: data.testQuestion,
            })
            .then((response) => {
                if (response.data) {
                    setOpenModal(true);
                    setData(response.data);
                }
            });
    };

    return (
        <div className={classes.createPageMaindiv}>
            <Modal
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                    history.push("/");
                }}>
                <Paper
                    className={classes.modalPaper}
                    component={Box}
                    p={2}
                    m={15}>
                    <Typography variant='h5'>
                        TestCode : {data ? data.testCode : "Loading..."}
                    </Typography>
                    <Button
                        onClick={() => {
                            setOpenModal(false);
                            history.push("/");
                        }}
                        variant='contained'
                        color='primary'>
                        Close
                    </Button>
                </Paper>
            </Modal>
            <Paper
                component='form'
                className={classes.createPagePaper}
                onSubmit={handleSubmit(onSubmit)}
                noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            inputRef={register()}
                            fullWidth
                            variant='outlined'
                            placeholder='Enter Test Name'
                            label='Name'
                            name='name'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            inputRef={register()}
                            fullWidth
                            variant='outlined'
                            placeholder='Enter Test Password'
                            type='password'
                            label='Password'
                            name='password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    inputRef={register()}
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
            </Paper>
        </div>
    );
};

export default CreatePage;
