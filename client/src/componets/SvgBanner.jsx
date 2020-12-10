import React from "react";

import { ReactComponent as SVGBase } from "../Assets/blob.svg";
import { ReactComponent as HomeBanner } from "../Assets/undraw_Questions_re_1fy7.svg";

import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    homePageSvgBase: {
        width: "500px",
        position: "absolute",
        transform: "translateX(-500px)",
        zIndex: -1,
    },
}));

const SvgBanner = () => {
    const classes = useStyles();

    return (
        <motion.div
            initial={{ x: 500, opacity: 0, scale: 2 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}>
            <SVGBase className={classes.homePageSvgBase} />
            <HomeBanner className={classes.homePageSvgBase} />
        </motion.div>
    );
};

export default SvgBanner;
