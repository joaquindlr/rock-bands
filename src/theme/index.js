import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  overrides: {},

  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1600,
    },
  },
  typography: {
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#11579C",
      textAlign: "center",
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 700,
      textAlign: "center",
      color: "#1C8269",
    },
    subtitle1: {
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "#727272",
    },
    subtitle2: {
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "#242424",
    },
    h4: {
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "#242424",
      lineHeight: 1.5,
    },
    caption: {
      fontSize: "1.1rem",
      color: "#11579C",
      fontWeight: 700,
      marginTop: "0.2rem",
    },
  },
  palette: {
    primary: {
      main: "#1c1c1c",
    },
    secondary: {
      main: "rgba(163,40,5,1)",
    },
    backgroundBlue: {
      main: "#3984A4",
    },
    // tertiary: {
    //   main: "#6BA49F",
    // },
    background: {
      main: "#F0F0F0",
    },
    backgroundGrey: {
      main: "#727272",
    },
    backgroundWhite: {
      main: "#fefefe",
    },
    success: {
      main: "#1C8269",
    },
    error: {
      main: "#D1001F",
    },
    tonalOffset: 0.2,
  },
});

export default Theme;
