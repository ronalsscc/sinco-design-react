import { TypographyOptions } from '@mui/material/styles/createTypography';
import { breakpoints } from './breakpoints';
import "./module"
export const typography: TypographyOptions = {
  fontSize: 13,
  body1: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.15,
    lineHeight: 1.4,
    '@media(max-width: 885px)': {
      fontSize: 15,
    },
  },
  body2: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: 0.17,
    lineHeight: 1.2,
    '@media(max-width: 885px)': {
      fontSize: 14,
    },
  },
  body3: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    fontSize: 12,
    letterSpacing: 0.17,
    lineHeight: 1.2,
    [breakpoints.down('md')]: {
      fontSize: 11,
    },
  },
  subtitle1: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.15,
    lineHeight: 1.4,
    '@media(max-width: 885px)': {
      fontSize: 15,
    },
  },
  subtitle2: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 0.1,
    lineHeight: 1.4,
    '@media(max-width: 885px)': {
      fontSize: 14,
    },
  },
  caption: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: 400,
    letterSpacing: 0.4,
    lineHeight: 1.4,
    '@media(max-width: 885px)': {
      fontSize: 12,
    },
  },
  overline: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: 400,
    letterSpacing: 1,
    lineHeight: 2.66,
    '@media(max-width: 885px)': {
      fontSize: 12,
    },
  },
  h6: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0.009rem",
    '@media(max-width: 885px)': {
      fontSize: 17,
    },
  },
  h5: {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.8,
  },
  h4: {
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: 0.25,
    lineHeight: 1,
  },
  h3: {
    fontFamily: 'Nunito',
    fontSize: 28,
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h2: {
    fontFamily: 'Nunito',
    fontSize: 32,
    fontWeight: 400,
    letterSpacing: -0.5,
    lineHeight: 1.2,
  },
  h1: {
    fontFamily: 'Nunito',
    fontSize: 40,
    fontWeight: 300,
    letterSpacing: -1.5,
    lineHeight: 1.4,
  },
};
