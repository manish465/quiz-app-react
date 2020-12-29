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

import { Login, SingUp } from "../Componets";

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
                    <SingUp />
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper className={classes.pagePaper}>
                    <Login />
                </Paper>
            </TabPanel>
        </div>
    );
};

export default AccountPage;
