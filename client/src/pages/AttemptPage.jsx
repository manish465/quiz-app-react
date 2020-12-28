import React, { useState, useEffect } from "react";

import { Paper, Typography, makeStyles } from "@material-ui/core";

import axios from "axios";
import { useParams } from "react-router-dom";

const url = "http://localhost:8000";
const endpoint = "/api/tests/";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        height: "100vh",
        padding: "100px 70px",
    },
    mainPaper: {
        backgroundColor: theme.palette.secondary.main,
        padding: "30px 40px",
        borderRadius: "20px",
        display: "flex",
        position: "relative",
        flexDirection: "column",
    },
    question: {
        backgroundColor: theme.palette.primary.main,
        padding: "20px 50px",
        borderRadius: "20px",
        position: "relative",
    },

    questionNumber: {
        backgroundColor: theme.palette.primary.main,
        padding: "3px 10px",
        borderRadius: "20px",
        margin: "auto",
        position: "relative",
        top: "15px",
        zIndex: "100",
        boxShadow: theme.shadows[11],
    },
}));

const AttemptPage = () => {
    const classes = useStyles();

    const [data, setData] = useState(null);
    const [number, setNumber] = useState(0);

    const params = useParams();

    useEffect(() => {
        axios.get(url + endpoint + params.id).then((response) => {
            setData(response.data[params.id]);
        });
    }, [params.id]);

    console.log(data);

    return (
        <div className={classes.mainDiv}>
            <Paper variant='outlined' className={classes.mainPaper}>
                <span className={classes.questionNumber}>
                    <Typography variant='button'>
                        Question-{number + 1}
                    </Typography>
                </span>
                <Paper variant='outlined' className={classes.question}>
                    <Typography variant='h6'>
                        {data ? data.testData[number].text : "Loading..."}
                    </Typography>
                </Paper>
            </Paper>
        </div>
    );
};

export default AttemptPage;
