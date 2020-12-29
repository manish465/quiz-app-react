import React, { useState } from "react";

import {
    TextField,
    Button,
    Paper,
    Tabs,
    Tab,
    makeStyles,
    Grid,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        padding: "100px 150px",
    },
    pagePaper: {
        padding: "30px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "5px",
    },
}));

const TabPanel = (props) => {
    const { children, value, index } = props;

    return <div hidden={value !== index}>{children}</div>;
};

const AccountPage = ({ userName, setUserName }) => {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    return (
        <div className={classes.mainDiv}>
            <Tabs
                value={value}
                onChange={(event, newValue) => setValue(newValue)}>
                <Tab label='Sign up' />
                <Tab label='Login' />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Paper className={classes.pagePaper}>
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
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper className={classes.pagePaper}>
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
                </Paper>
            </TabPanel>
        </div>
    );
};

export default AccountPage;
