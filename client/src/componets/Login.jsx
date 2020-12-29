import React from "react";

import { Grid, TextField, Button } from "@material-ui/core";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    name='userName'
                    variant='outlined'
                    label='Enter Your User Name'
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    type='password'
                    name='password'
                    variant='outlined'
                    label='Enter Your Password'
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    component={Link}
                    to='/'
                    color='primary'
                    fullWidth
                    variant='contained'>
                    Login
                </Button>
            </Grid>
        </Grid>
    );
};

export default Login;
