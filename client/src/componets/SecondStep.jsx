import React from "react";

import {
    TextField,
    Button,
    Checkbox,
    Grid,
    ListItem,
    List,
    makeStyles,
} from "@material-ui/core";

import { useFieldArray } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    stepButton: {
        margin: "0 5px",
    },
}));

const SecondStep = ({ control, register }) => {
    const classes = useStyles();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "testQuestion",
    });

    const questionFormat = ({ id, text, options }, index) => (
        <React.Fragment key={id}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    inputRef={register()}
                    variant='outlined'
                    placeholder='Enter The Question'
                    label='Question'
                    name={`testQuestion[${index}].text`}
                    defaultValue={text}
                />
            </Grid>
            <Grid item xs={12}>
                <List>
                    {options.map((option, key) => (
                        <ListItem key={key}>
                            <Checkbox
                                inputRef={register()}
                                name={`testQuestion[${index}].options[${key}].answer`}
                                defaultChecked={option.answer}
                            />
                            <TextField
                                inputRef={register()}
                                variant='outlined'
                                placeholder='Enter Option'
                                label='Option'
                                name={`testQuestion[${index}].options[${key}].text`}
                                defaultChecked={option.text}
                            />
                        </ListItem>
                    ))}
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
    );

    return fields.map((field, index) => questionFormat(field, index));
};

export default SecondStep;
