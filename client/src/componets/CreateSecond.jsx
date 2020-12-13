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

const options = ["First", "Second", "Third", "Fourth"];

const CreateSecond = ({ upperMargin, testData, setTestData }) => {
    const handleChangeInput = (index, event) => {
        const values = [...testData];
        values[index][event.target.name] = event.target.value;
        setTestData(values);
    };

    return (
        <form>
            {testData.map((input, index) => (
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
                            onChange={(event) =>
                                handleChangeInput(index, event)
                            }
                        />
                        <Container className={upperMargin}>
                            <TextField
                                type='text'
                                variant='filled'
                                label='Enter The First Option'
                                value={input.options.option1.text}
                            />
                            <Checkbox value={input.options.option1.isAnswer} />
                        </Container>
                        <Container className={upperMargin}>
                            <TextField
                                type='text'
                                variant='filled'
                                label='Enter The Second Option'
                                value={input.options.option2.text}
                            />
                            <Checkbox value={input.options.option2.isAnswer} />
                        </Container>
                        <Container className={upperMargin}>
                            <TextField
                                type='text'
                                variant='filled'
                                label='Enter The Third Option'
                                value={input.options.option3.text}
                            />
                            <Checkbox value={input.options.option3.isAnswer} />
                        </Container>
                        <Container className={upperMargin}>
                            <TextField
                                type='text'
                                variant='filled'
                                label='Enter The Fourth Option'
                                value={input.options.option4.text}
                            />
                            <Checkbox value={input.options.option4.isAnswer} />
                        </Container>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
        </form>
    );
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
