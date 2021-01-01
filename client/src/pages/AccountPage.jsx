import React, { useState } from "react";

import { Paper, Tabs, Tab, makeStyles } from "@material-ui/core";

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

const tabList = [
    { index: 0, label: "Sign up", component: <SingUp /> },
    { index: 1, label: "Login", component: <Login /> },
];

const TabPanel = (props) => {
    const { children, value, index } = props;

    return <div hidden={value !== index}>{children}</div>;
};

const AccountPage = ({ userName, setUserName }) => {
    const classes = useStyles();

    const [value, setValue] = useState(1);

    return (
        <div className={classes.mainDiv}>
            <Tabs
                value={value}
                onChange={(event, newValue) => setValue(newValue)}>
                {tabList.map((tab, index) => (
                    <Tab key={index} label={tab.label} />
                ))}
            </Tabs>
            {tabList.map((tab, index) => (
                <TabPanel key={index} value={value} index={tab.index}>
                    <Paper className={classes.pagePaper}>{tab.component}</Paper>
                </TabPanel>
            ))}
        </div>
    );
};

export default AccountPage;
