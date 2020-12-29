import React from "react";

import { Grid, TextField, Button } from "@material-ui/core";

import { Link } from "react-router-dom";

const SingUp = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    name='firstName'
                    variant='outlined'
                    label='Enter Your First Name'
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    name='lastName'
                    variant='outlined'
                    label='Enter Your Last Name'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    name='email'
                    type='email'
                    variant='outlined'
                    label='Enter Your Email'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    name='password_1'
                    type='password'
                    variant='outlined'
                    label='Create A Password'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    name='password_2'
                    type='password'
                    variant='outlined'
                    label='Re-enter Your Password'
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    component={Link}
                    to='/'
                    color='primary'
                    fullWidth
                    variant='contained'>
                    Sign up
                </Button>
            </Grid>
        </Grid>
    );
};

export default SingUp;
