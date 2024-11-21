import { TypographyOptions } from '@mui/material/styles/createTypography';
import { breakpoints } from './breakpoints';
import "./module"
export const typography: TypographyOptions = {
  fontSize: 13,
  body1: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "0.15px",
    '@media(max-width: 885px)': {
      fontSize: 15,
    },
  },
  body2: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "0.17px",
    '@media(max-width: 885px)': {
      fontSize: 14,
    },
  },
  body3: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "16px",
    letterSpacing: "0.17px",
    [breakpoints.down('md')]: {
      fontSize: 11,
    },
  },
  subtitle1: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: "0.15px",
    '@media(max-width: 885px)': {
      fontSize: 15,
    },
  },
  subtitle2: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: "0.1px",
    '@media(max-width: 885px)': {
      fontSize: 14,
    },
  },
  caption: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: 400,
    lineHeight: "14px",
    letterSpacing: "0.4px",
    '@media(max-width: 885px)': {
      fontSize: 12,
    },
  },
  overline: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "1px",
    '@media(max-width: 885px)': {
      fontSize: 12,
    },
  },
  h6: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "16px",
    letterSpacing: "0.15px",
    '@media(max-width: 885px)': {
      fontSize: 17,
    },
  },
  h5: {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "24px",
  },
  h4: {
    fontFamily: 'Nunito',
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: "0.25px",
  },
  h3: {
    fontFamily: 'Nunito',
    fontSize: 28,
    fontWeight: 500,
    lineHeight: "32px",
    letterSpacing: 0,
  },
  h2: {
    fontFamily: 'Nunito',
    fontSize: 32,
    fontWeight: 400,
    lineHeight: "40px",
    letterSpacing: -0.5,
  },
  h1: {
    fontFamily: 'Nunito',
    fontSize: 40,
    fontWeight: 300,
    letterSpacing: -1.5,
    lineHeight: "48px",
  },
};
