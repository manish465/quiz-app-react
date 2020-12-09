import React from "react";

import { ReactComponent as SVGBase } from "../Assets/blob.svg";
import { ReactComponent as HomeBanner } from "../Assets/undraw_Questions_re_1fy7.svg";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    homePageSvgBase: {
        width: "500px",
        position: "absolute",
        transform: "translateX(-500px)",
    },
    homePageSvgBanner: {
        width: "500px",
        position: "absolute",
        transform: "translateX(-500px)",
    },
}));

const SvgBanner = () => {
    const classes = useStyles();

    return (
        <div>
            <SVGBase className={classes.homePageSvgBase} />
            <HomeBanner className={classes.homePageSvgBanner} />
        </div>
    );
};

export default SvgBanner;
