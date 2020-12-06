import React from "react";

import { Paper, makeStyles } from "@material-ui/core";

import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    headerMenuPage: {
        zIndex: theme.zIndex.drawer,
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
        background: theme.palette.primary.main,
    },
}));

const HeaderMenu = () => {
    const classes = useStyles();

    return (
        <motion.div
            initial={{ y: -800 }}
            animate={{ y: [-200, 0], skewY: [0, 4, 0] }}
            exit={{ y: -800, skewY: [0, 4, 0] }}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                damping: 10,
                delay: 0.1,
            }}>
            <Paper className={classes.headerMenuPage}>menu page</Paper>
        </motion.div>
    );
};

export default HeaderMenu;

// {
//     <IconButton
//         className={classes.headerThemeButton}
//         onClick={() => setDarkMode(!darkMode)}
//         size='medium'
//         color='secondary'>
//         {darkMode ? <Brightness4Icon /> : <NightsStayIcon />}
//     </IconButton>;
//     {
//         userName === "" ? (
//             <Button
//                 className={classes.headerHomeLoginButton}
//                 component={Link}
//                 to='/login'
//                 color='secondary'
//                 variant='contained'>
//                 <Typography color='primary'>Login</Typography>
//             </Button>
//         ) : (
//             <Button
//                 className={classes.headerHomeLoginButton}
//                 onClick={() => setUserName("")}
//                 color='secondary'
//                 variant='contained'>
//                 <Typography color='primary'>Log Out</Typography>
//             </Button>
//         );
//     }
// }
