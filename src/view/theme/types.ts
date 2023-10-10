import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    title?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    title?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1?: true;
    body2?: true;
    title?: true;
    subtitle1?: true;
    subtitle2?: true;
    subtitle3?: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    accent: {
      orange: string;
      lightGreen: string;
      purple: string;
      coral: string;
      brown: string;
      green: string;
      blue: string;
      darkYellow: string;
      pink: string;
      darkGreen: string;
      black: string;
      slimyGreen: string;
      white: string;
    };
    bgColor: {light: string; medium: string; dark: string; extraLight: string};
    textColor: {main: string; faded: string, lightFaded: string};
    gradients: {
      orangeGradient: string;
      purpleGradient: string;
      greenGradient: string;
      purpleRadialGradient: string;
      pinkRadialGradient: string;
      blueRadialGradient: string;
    };
  }

  interface PaletteOptions {
    accent: {
      orange: string;
      lightGreen: string;
      purple: string;
      coral: string;
      brown: string;
      green: string;
      blue: string;
      darkYellow: string;
      pink: string;
      darkGreen: string;
      black: string;
      white: string;
      slimyGreen: string;
    };
    bgColor: {light: string; medium: string; dark: string; extraLight: string};
    textColor: {main: string; faded: string, lightFaded: string};
    gradients: {
      orangeGradient: string;
      purpleGradient: string;
      greenGradient: string;
      purpleRadialGradient: string;
      pinkRadialGradient: string;
      blueRadialGradient: string;
    };
  }
}
