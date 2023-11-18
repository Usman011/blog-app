import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

export const typography: TypographyOptions = {
  fontFamily: 'Fira Sans, sans-serif',
    h1: {
    fontSize: 40,
  },
  h2: {
    fontSize: 35,
    fontWeight: '500'
  },
  h3: {
    fontSize: 30,
  },
  h4: {
    fontSize: 25,
  },
  body1: {
    fontSize: 20,
  },
  body2: {
    fontSize: 16,
  },
  subtitle1: {
    fontSize: 12,
  },
  caption: {
    fontSize: 10,
  },
  poster: {
    fontSize: 8,
  },
};
