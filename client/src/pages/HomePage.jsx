import React from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";

import { motion } from "framer-motion";

import { SvgBanner } from "../Componets";

const useStyles = makeStyles((theme) => ({
    homePageMainGrid: {
        padding: "10px",
    },
    homePageHeadTypography: {
        marginTop: "150px",
        marginLeft: "30px",
    },
}));

const homePageTypographyVariant = {
    initial: { x: -350, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { ease: "easeOut", duration: 0.3 },
};

const HomePage = () => {
    const classes = useStyles();
    return (
        <Grid
            className={classes.homePageMainGrid}
            container
            justify='space-between'>
            <Grid item>
                <Typography
                    component={motion.div}
                    variants={homePageTypographyVariant}
                    initial='initial'
                    animate='animate'
                    transition='transition'
                    className={classes.homePageHeadTypography}
                    variant='h2'>
                    A Platform To Create A Quiz <br />
                    And Join Other Quizzes.
                </Typography>
            </Grid>
            <Grid item>
                <SvgBanner />
            </Grid>
        </Grid>
    );
};

export default HomePage;
