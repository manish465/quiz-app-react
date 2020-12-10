import React from "react";

import { Paper, makeStyles, Button, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    headerMenuPage: {
        zIndex: 1200,
        width: "100%",
        height: "100vh",
        background: theme.palette.primary.main,
        padding: "150px 30px",
    },
    headerMenuPageButtonGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
    },
    headerMenuPageButton: {
        marginTop: "10px ",
    },
}));

const HeaderMenu = ({ setIsMenuOpen }) => {
    const classes = useStyles();

    return (
        <Paper
            component={motion.div}
            initial={{ y: -800 }}
            animate={{ y: [-200, 0], skewY: [6, 0] }}
            exit={{ y: -800, skewY: 6 }}
            transition={{
                ease: "anticipate",
                duration: 0.5,
            }}
            className={classes.headerMenuPage}>
            <div className={classes.headerMenuPageButtonGroup}>
                <Button
                    component={Link}
                    to='/'
                    className={classes.headerMenuPageButton}
                    onClick={() => setIsMenuOpen(false)}
                    variant='text'>
                    <Typography
                        component={motion.div}
                        whileHover={{ skewY: 4 }}
                        whileTap={{ rotateX: 40 }}
                        variant='h3'>
                        CREATE
                    </Typography>
                </Button>
                <Button
                    component={Link}
                    to='/'
                    className={classes.headerMenuPageButton}
                    onClick={() => setIsMenuOpen(false)}
                    variant='text'>
                    <Typography
                        component={motion.div}
                        whileHover={{ skewY: 4 }}
                        whileTap={{ rotateX: 40 }}
                        variant='h3'>
                        JOIN
                    </Typography>
                </Button>
                <Button
                    component={Link}
                    to='/'
                    className={classes.headerMenuPageButton}
                    onClick={() => setIsMenuOpen(false)}
                    variant='text'>
                    <Typography
                        component={motion.div}
                        whileHover={{ skewY: 4 }}
                        whileTap={{ rotateX: 40 }}
                        variant='h3'>
                        OPTION
                    </Typography>
                </Button>
                <Button
                    component={Link}
                    to='/'
                    className={classes.headerMenuPageButton}
                    onClick={() => setIsMenuOpen(false)}
                    variant='text'>
                    <Typography
                        component={motion.div}
                        whileHover={{ skewY: 4 }}
                        whileTap={{ rotateX: 40 }}
                        variant='h3'>
                        ABOUT US
                    </Typography>
                </Button>
            </div>
        </Paper>
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
