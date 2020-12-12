import React, { useState } from "react";

import { TextField } from "@material-ui/core";

const CreateFirst = ({
    upperMargin,
    testName,
    setTestName,
    testNumberOfQuestions,
    setTestNumberOfQuestions,
}) => {
    return (
        <>
            <TextField
                className={upperMargin}
                variant='outlined'
                label='Enter Name Of The Test'
                fullWidth
                value={testName}
                onChange={(event) => setTestName(event.target.value)}
            />
            <TextField
                className={upperMargin}
                variant='outlined'
                label='Enter Numebr Of Questions'
                fullWidth
                type='number'
                value={testNumberOfQuestions}
                onChange={(event) =>
                    setTestNumberOfQuestions(event.target.value)
                }
            />
        </>
    );
};

export default CreateFirst;
