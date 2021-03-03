import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 13,
    fontFamily: [
      'Roboto'
    ],
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(162, 162, 162, 1)",
      main: "rgba(97, 97, 97, 1)",
      dark: "rgba(66, 66, 66, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(75, 169, 254, 1)",
      main: "rgba(33, 150, 243, 1)",
      dark: "rgba(22, 100, 161, 1)",
      contrastText: "#424242",
    },
    error: {
      light: "rgba(242, 64, 87, 1)",
      main: "rgba(208, 2, 27, 1)",
      dark: "rgba(165, 0, 20, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
