import React from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";

import SvgBanner from "../Componets/SvgBanner";

const useStyles = makeStyles((theme) => ({
    homePageMainGrid: {
        padding: "30px",
    },
    homePageHeadTypography: {
        marginTop: "100px",
        marginLeft: "30px",
    },
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <Grid
            className={classes.homePageMainGrid}
            container
            justify='space-between'>
            <Grid item>
                <Typography
                    variant='h2'
                    className={classes.homePageHeadTypography}>
                    A platform to create a quiz <br />
                    and join other quizzes.
                </Typography>
            </Grid>
            <Grid item>
                <SvgBanner />
            </Grid>
        </Grid>
    );
};

export default HomePage;
