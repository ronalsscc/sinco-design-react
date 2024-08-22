import { ThemeOptions } from "@mui/material/styles";
import { components } from "./components";
import { palette, paletteAdpro } from "./palette";
import { mixins } from "./mixins";
import { breakpoints } from "./breakpoints";
import { typography } from "./typography";
import { shadows } from "./shadows";

// export const themeOptions: ThemeOptions = {
//   components,
//   typography,
//   palette,
//   spacing: 8,
//   mixins,
//   breakpoints,
//   shadows,
// };

// export const themeAdproOptions: ThemeOptions = {
//   components,
//   typography,
//   spacing: 8,
//   mixins,
//   breakpoints,
//   shadows,
//   palette: paletteAdpro
// };

// Opcion 1
type ThemeType = {
  ADPRO: "ADPRO",
  ERP: "ERP"
}

const GenerateTheme = (theme: keyof ThemeType): ThemeOptions => ({
  components,
  typography,
  spacing: 8,
  mixins,
  breakpoints,
  shadows,
  palette: theme === "ADPRO"
    ? paletteAdpro
    : palette
})

export const ADPROTheme = GenerateTheme("ADPRO");
export const ERPTheme = GenerateTheme("ERP");
// END opcion 1

// Opcion 2
// const BasicTheme: Partial<ThemeOptions> = {
//   components,
//   typography,
//   spacing: 8,
//   mixins,
//   breakpoints,
//   shadows,
// }

// const ERPTheme: ThemeOptions = {
//   palette: palette,
//   ...BasicTheme
// }

// const ADPROTheme: ThemeOptions = {
//   palette: paletteAdpro,
//   ...BasicTheme
// }
// END Opcion 2



