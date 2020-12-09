import React from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";

import { motion } from "framer-motion";

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
                <motion.div
                    initial={{ y: -500, scale: 2, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    className={classes.homePageHeadTypography}>
                    <Typography variant='h2'>
                        A platform to create a quiz <br />
                        and join other quizzes.
                    </Typography>
                </motion.div>
            </Grid>
            <Grid item>
                <SvgBanner />
            </Grid>
        </Grid>
    );
};

export default HomePage;
