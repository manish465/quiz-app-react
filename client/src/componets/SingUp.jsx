import React from "react";

import { Grid, TextField, Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

import axios from "axios";

const url = "http://localhost:8000";
const endpoint = "/api/users/register";

const SingUp = () => {
    const history = useHistory();

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const account = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        };

        axios.post(url + endpoint, account).then((response) => {
            if (response.data) {
                console.log(response.data);
                history.push("/");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        inputRef={register}
                        name='firstName'
                        variant='outlined'
                        label='Enter Your First Name'
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        inputRef={register}
                        name='lastName'
                        variant='outlined'
                        label='Enter Your Last Name'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        inputRef={register}
                        name='email'
                        type='email'
                        variant='outlined'
                        label='Enter Your Email'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        inputRef={register}
                        name='password'
                        type='password'
                        variant='outlined'
                        label='Create A Password'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        color='primary'
                        fullWidth
                        type='submit'
                        variant='contained'>
                        Sign up
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SingUp;

// const hadelPublish = (event) => {
//     const account = {
//         id: generate(8),
//         firstName: firstName.current.value,
//         lastName: lastName.current.value,
//         email: email.current.value,
//         password: password.current.value,
//     };

//     axios.post(url + endpoint, account).then((response) => {
//         if (response.data) {
//             history.push("/");
//         }
//     });
// };
