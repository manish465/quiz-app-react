import React from "react";

import {
    TextField,
    Container,
    Checkbox,
    Grid,
    IconButton,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CreateSecond = ({ upperMargin, testData, setTestData }) => {
    const handleChangeInput = (index, event) => {
        const values = [...testData];
        values[index][event.target.name] = event.target.value;
        setTestData(values);
    };

    const handleOptionChangeInput = (index, key, event) => {
        const values = [...testData];
        values[index]["options"][key][event.target.name] = event.target.value;
        setTestData(values);
    };

    const handleOptionCheckInput = (index, key, event) => {
        const values = [...testData];
        values[index]["options"][key][event.target.name] = event.target.checked;
        setTestData(values);
    };

    const handelAdd = () => {
        setTestData([
            ...testData,
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
    };

    const handelRemove = (index) => {
        const values = [...testData];
        values.splice(index, 1);
        setTestData(values);
    };

    return testData.map((input, index) => (
        <Grid key={index} container justify='space-between'>
            <Grid item xs={10}>
                <TextField
                    name='text'
                    className={upperMargin}
                    type='text'
                    variant='outlined'
                    label='Enter The Question'
                    fullWidth
                    value={input.text}
                    onChange={(event) => handleChangeInput(index, event)}
                />
                {input.options.map((option, key) => (
                    <Container key={key} className={upperMargin}>
                        <TextField
                            name='text'
                            variant='filled'
                            label='Enter The Option'
                            value={option.text}
                            onChange={(event) =>
                                handleOptionChangeInput(index, key, event)
                            }
                        />
                        <Checkbox
                            color='primary'
                            name='isAnswer'
                            checked={option.isAnswer}
                            onChange={(event) =>
                                handleOptionCheckInput(index, key, event)
                            }
                        />
                    </Container>
                ))}
            </Grid>
            <Grid item xs={2}>
                <IconButton
                    onClick={() => handelRemove(index)}
                    disabled={testData.length === 1}>
                    <RemoveIcon />
                </IconButton>
                <IconButton onClick={handelAdd}>
                    <AddIcon />
                </IconButton>
            </Grid>
        </Grid>
    ));
};

export default CreateSecond;

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
