import React from "react";

import { TextField, Paper, Checkbox } from "@material-ui/core";

const CreateSecond = ({
    upperMargin,
    testData,
    setTestData,
    testNumberOfQuestions,
}) => {
    return (
        <>
            <TextField
                className={upperMargin}
                variant='outlined'
                label='Enter Qustion'
                fullWidth
            />
            <Paper>
                <TextField variant='filled' label='Enter Option'></TextField>
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
};

export default CreateSecond;
