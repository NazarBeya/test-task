import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  spacing: 8,

  breakpoints: {
    values: {
      xs: 321,
      sm: 480,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
  },

  palette: {
    accent: {
      orange: "#FF782D",
      lightGreen: "#68F244",
      green: "#41842F",
      darkGreen: "#2F4931",
      slimyGreen: "#26A17B",
      purple: "#835CF2",
      coral: "#B24B75",
      brown: "#4B181C",
      blue: "#266BD3",
      darkYellow: "#D39826",
      pink: "#E5BAFF",
      black: "#000000",
      white: "#FFFFFF",
    },
    bgColor: {
      extraLight: "rgba(129, 106, 166, 0.08)",
      light: "#322A49",
      medium: "#1B152A",
      dark: "#120E1F",
    },
    textColor: {
      main: "#FFFFFF",
      faded: "#816AA6",
      lightFaded: "#816AA63D",
    },
    error: {
      main: "#E52A41",
    },
    gradients: {
      orangeGradient: "linear-gradient(180deg, #FFB067 0%, #FF782D 100%)",
      purpleGradient: "linear-gradient(180deg, #A889FF 0%, #835CF2 100%)",
      greenGradient: "linear-gradient(180deg, #99FF7E 0%, #68F244 100%)",
      purpleRadialGradient: "radial-gradient(100% 183.76% at 0% 100%, #341165 0%, #1C162D 100%)",
      pinkRadialGradient: "radial-gradient(100% 183.76% at 0% 100%, #49094D 0%, #1E162C 100%)",
      blueRadialGradient: "radial-gradient(100% 183.76% at 0% 100%, #0D3052 0%, #1A182C 100%)",
    },
  },

  typography: {
    fontFamily: "Rubik, sans-serif",
    h1: {
      fontSize: "64px",
      fontWeight: 700,
      style: "italic",
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      style: "italic",
    },
    h3: {
      fontSize: "42px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "26px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 700,
    },
    title: {
      fontSize: "16px",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: "24px",
      fontWeight: 700,
    },
    subtitle3: {
      fontSize: "24px",
    },
  },
  components: {
    // Global Styles
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          WebKItBackfaceVisibility: "hidden",
          WebKitPerspective: 1000,
          backfaceVisibility: "hidden",
          height: "calc(var(--vh, 1vh) * 100)",
          maxHeight: "-webkit-fill-available",
        },
        body: {
          WebKItBackfaceVisibility: "hidden",
          WebKitPerspective: 1000,
          backfaceVisibility: "hidden",
        },
      },
    },
  },
});

export default theme;
