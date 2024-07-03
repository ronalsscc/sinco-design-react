import { ThemeOptions } from "@mui/material/styles";
import { components } from "./components";
import { palette, paletteAdpro } from "./palette";
import { mixins } from "./mixins";
import { breakpoints } from "./breakpoints";
import { typography } from "./typography";
import { shadows } from "./shadows";

export const themeOptions: ThemeOptions = {
  components,
  typography,
  palette,
  spacing: 8,
  mixins,
  breakpoints,
  shadows,
};

export const themeAdproOptions: ThemeOptions = {
  components,
  typography,
  spacing: 8,
  mixins,
  breakpoints,
  shadows,
  palette: paletteAdpro
};
