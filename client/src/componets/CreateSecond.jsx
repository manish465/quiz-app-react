import React from "react";

import { TextField, Paper, Checkbox } from "@material-ui/core";

const options = ["First", "Second", "Third", "Fourth"];

const CreateSecond = ({
    upperMargin,
    testData,
    setTestData,
    testNumberOfQuestions,
}) => {
    const questions = Array.from(Array(parseInt(testNumberOfQuestions))).map(
        (e, i) => (
            <>
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
            </>
        ),
    );

    return <>{questions}</>;
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
