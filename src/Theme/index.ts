import { createTheme } from '@mui/material/styles';
import { themeAdproOptions, themeOptions } from './theme';

export const SincoTheme = createTheme({
  ...themeOptions,
});

export const AdproSincoTheme = createTheme({
  ...themeAdproOptions,
});