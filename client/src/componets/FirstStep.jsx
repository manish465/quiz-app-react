import React from "react";

import { TextField, Grid } from "@material-ui/core";

const FirstStep = ({ register }) => {
    return (
        <>
            <Grid item xs={12}>
                <TextField
                    inputRef={register}
                    fullWidth
                    variant='outlined'
                    placeholder='Enter Test Name'
                    label='Name'
                    name='name'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    inputRef={register}
                    fullWidth
                    variant='outlined'
                    placeholder='Enter Test Description'
                    label='Description'
                    name='description'
                />
            </Grid>
        </>
    );
};

export default FirstStep;
