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

    const fieldArray = useFieldArray({ control, name: "testQuestion" });

    const questionFormat = (field, index) => (
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
                    onClick={fieldArray.append}>
                    Add Question
                </Button>
                <Button
                    className={classes.stepButton}
                    color='primary'
                    variant='contained'
                    onClick={() => fieldArray.remove(index)}>
                    Remove Aboved Question
                </Button>
            </Grid>
        </React.Fragment>
    );

    return fieldArray.fields.map((field, index) =>
        questionFormat(field, index),
    );
};

export default SecondStep;

//{
/* <>
            <TextField
                className={upperMargin}
                variant='outlined'
                label='Enter Qustion'
                fullWidth
            />
            {options.map((option, key) => (
                <Paper key={key} className={upperMargin}>
                    <TextField
                        variant='filled'
                        label={`Enter ${option} Option`}
                    />
                    <Checkbox />
                </Paper>
            ))}
        </> */
//}
