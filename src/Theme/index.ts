import { createTheme } from '@mui/material/styles';
import { ADPROTheme, ERPTheme } from './theme';

// export const SincoTheme = createTheme({
//   ...themeOptions,
// });

// export const AdproSincoTheme = createTheme({
//   ...themeAdproOptions,
// });

export const SincoTheme = createTheme({
  ...ERPTheme
})

export const AdproSincoTheme = createTheme({
  ...ADPROTheme
})
