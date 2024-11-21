import { ThemeOptions } from "@mui/material/styles";
import { components } from "./components";
import { paletteERP, paletteADPRO } from "./palette";
import { mixins } from "./mixins";
import { breakpoints } from "./breakpoints";
import { typography } from "./typography";
import { shadows } from "./shadows";


// Opcion 2

const BasicTheme: Partial<ThemeOptions> = {
  components,
  typography,
  spacing: 8,
  mixins,
  breakpoints,
  shadows,
}

export const ERPTheme: ThemeOptions = {
  palette: paletteERP,
  ...BasicTheme
}

export const ADPROTheme: ThemeOptions = {
  palette: paletteADPRO,
  ...BasicTheme
}
// END Opcion 2



