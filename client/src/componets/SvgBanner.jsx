import React from "react";

import { ReactComponent as SVGBase } from "../Assets/blob.svg";
import { ReactComponent as HomeBanner } from "../Assets/undraw_Questions_re_1fy7.svg";

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
        <div>
            <SVGBase className={classes.homePageSvgBase} />
            <HomeBanner className={classes.homePageSvgBase} />
        </div>
    );
};

export default SvgBanner;
