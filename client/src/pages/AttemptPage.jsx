import React, { useState, useEffect } from "react";

import {
    Paper,
    Typography,
    makeStyles,
    List,
    ListItem,
    ListItemText,
    Divider,
    ButtonGroup,
    Button,
} from "@material-ui/core";

import axios from "axios";
import { useParams } from "react-router-dom";

const url = "http://localhost:8000";
const endpoint = "/api/tests/";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        height: "100vh",
        padding: theme.spacing(10),
    },
    mainPaper: {
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(3),
        paddingTop: "5px",
        borderRadius: "20px",
        display: "flex",
        position: "relative",
        flexDirection: "column",
    },
    question: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
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
    options: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px",
    },
    option: {
        height: "40px",
        textAlign: "center",
        padding: theme.spacing(1),
    },
    page: {
        marginTop: theme.spacing(3),
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
                <List className={classes.options}>
                    {data
                        ? data.testData[number].options.map((option, key) => (
                              <div key={key}>
                                  <ListItem className={classes.option} button>
                                      <ListItemText primary={option.text} />
                                  </ListItem>
                                  <Divider />
                              </div>
                          ))
                        : "Loading..."}
                </List>
                {data ? (
                    <ButtonGroup className={classes.page} fullWidth>
                        <Button
                            onClick={() => setNumber(number - 1)}
                            disabled={number === 0}>
                            Back
                        </Button>
                        <Button
                            onClick={() => setNumber(number + 1)}
                            disabled={number + 1 === data.testData.length}>
                            Next
                        </Button>
                    </ButtonGroup>
                ) : (
                    "Loading..."
                )}
            </Paper>
        </div>
    );
};

export default AttemptPage;
