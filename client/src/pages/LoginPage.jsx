import React, { useState } from "react";

import {
    TextField,
    Button,
    Paper,
    Tabs,
    Tab,
    makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        padding: "150px 200px",
    },
    pagePaper: {
        padding: "30px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "5px",
    },
    loginTextFeid: {},
    loginPageSaveButton: { marginTop: "10px" },
}));

const TabPanel = (props) => {
    const { children, value, index } = props;

    return <div hidden={value !== index}>{children}</div>;
};

const LoginPage = ({ userName, setUserName }) => {
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
                icjq
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper className={classes.pagePaper}>
                    <TextField
                        fullWidth
                        variant='outlined'
                        label='Enter Your User Name'
                    />
                    <Button
                        component={Link}
                        to='/'
                        className={classes.loginPageSaveButton}
                        color='primary'
                        fullWidth
                        variant='contained'>
                        SAVE
                    </Button>
                </Paper>
            </TabPanel>
        </div>
    );
};

export default LoginPage;
