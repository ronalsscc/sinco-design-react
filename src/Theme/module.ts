
import "@mui/material/Typography";
import "@mui/material/Radio";
import "@mui/material/Checkbox";
import "@mui/material/styles";
declare module '@mui/material/styles' {
    interface TypographyVariants {
        body3: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        body3?: React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body3: true;
    }

}
declare module "@mui/material/Radio" {
    interface RadioPropsSizeOverrides {
        large: true;
    }
}
declare module "@mui/material/Checkbox" {
    interface CheckboxPropsSizeOverrides {
        large: true;
    }
}
declare module "@mui/material/styles" {
    interface PaletteColor {
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        600?: string;
        700?: string;
        800?: string;
    }
}