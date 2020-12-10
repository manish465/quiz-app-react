import React from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";

import { motion } from "framer-motion";

import SvgBanner from "../Componets/SvgBanner";

const useStyles = makeStyles((theme) => ({
    homePageMainGrid: {
        padding: "10px",
    },
    homePageHeadTypography: {
        marginTop: "150px",
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
                    initial={{ x: -100, y: -100, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className={classes.homePageHeadTypography}>
                    <Typography variant='h2'>
                        A Platform To Create A Quiz <br />
                        And Join Other Quizzes.
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
