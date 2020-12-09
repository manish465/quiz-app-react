import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        button: {
            textTransform: "none",
        },
    },
});

const darkTheme = createMuiTheme({
    ...theme,
    palette: {
        background: { default: "#222831" },
        primary: { main: "#393e46" },
        secondary: { main: "#00adb5" },
        text: { primary: "#eeeeee" },
    },
});

const lightTheme = createMuiTheme({
    ...theme,
    palette: {
        background: { default: "#f0f5f9" },
        primary: { main: "#c9d6df" },
        secondary: { main: "#52616b" },
        text: { primary: "#1e2022" },
    },
});

export { darkTheme, lightTheme };
