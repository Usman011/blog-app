import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

export const lightModePalette: PaletteOptions = {
  primary: {
    main: "#fff",
    light: "#f6685e",
    dark: "#aa2e25",
    darker: "#512da8",
  },
  secondary: {
    main: "#0a192f",
    light: "#aea09b",
    dark: "#404040",
  },
  neutral: {
    main: "#0000FF",
    light: "#F0F8FF",
    dark: "#00308F",
  },
};

export const darkModePalette: PaletteOptions = {
  primary: {
    main: "#0a192f",
    light: "#63C5DA",
    dark: "#3944BC",
    darker: "#3944BC",
  },
  secondary: {
    main: "#fff",
    light: "#90EE90",
    dark: "#d3d3d3",
  },
  neutral: {
    main: "#0000FF",
    light: "#F0F8FF",
    dark: "#00308F",
  },
};
