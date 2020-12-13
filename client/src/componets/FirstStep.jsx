import React, { useState } from "react";

import { TextField } from "@material-ui/core";

const FirstStep = ({ upperMargin, testName, setTestName }) => {
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
        </>
    );
};

export default FirstStep;
