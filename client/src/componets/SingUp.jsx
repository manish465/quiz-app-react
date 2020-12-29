import React, { useRef } from "react";

import { Grid, TextField, Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { generate } from "randomstring";

import axios from "axios";

const url = "http://localhost:8000";
const endpoint = "/api/users";

const SingUp = () => {
    const history = useHistory();

    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password_1 = useRef();
    const password_2 = useRef();

    const hadelPublish = (event) => {
        const account = {
            id: generate(8),
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password_1: password_1.current.value,
        };

        axios.post(url + endpoint, account).then((response) => {
            if (response.data) {
                history.push("/");
            }
        });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    inputRef={firstName}
                    name='firstName'
                    variant='outlined'
                    label='Enter Your First Name'
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    inputRef={lastName}
                    name='lastName'
                    variant='outlined'
                    label='Enter Your Last Name'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    inputRef={email}
                    name='email'
                    type='email'
                    variant='outlined'
                    label='Enter Your Email'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    inputRef={password_1}
                    name='password_1'
                    type='password'
                    variant='outlined'
                    label='Create A Password'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    inputRef={password_2}
                    name='password_2'
                    type='password'
                    variant='outlined'
                    label='Re-enter Your Password'
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    color='primary'
                    fullWidth
                    onClick={hadelPublish}
                    variant='contained'>
                    Sign up
                </Button>
            </Grid>
        </Grid>
    );
};

export default SingUp;
