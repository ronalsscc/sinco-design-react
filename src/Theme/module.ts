
import "@mui/material/Typography";
import "@mui/material/Radio";
import '@mui/material/Chip';
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

// Augment the palette to include the ChipColors
declare module '@mui/material/styles' {
    interface Palette {
        default: Palette['primary'];
        chipPrimary: Palette['primary'];
        chipSecondary: Palette['secondary'];
        chipInfo: Palette['info'];
        chipWarning: Palette['warning'];
        chipError: Palette['error'];
        chipSuccess: Palette['success'];
    }


    interface PaletteOptions {
        default?: Palette['primary'];
        chipPrimary?: Palette['primary'];
        chipSecondary?: Palette['secondary'];
        chipInfo?: Palette['info'];
        chipWarning?: Palette['warning'];
        chipError?: PaletteOptions['error'];
        chipSuccess?: PaletteOptions['success'];
    }
}
// extiende la paleta de los chips agregando las nuevas variantes
declare module '@mui/material/Chip' {
    interface ChipPropsVariantOverrides {
        standard: true;
    }
    interface ChipPropsColorOverrides {
        default: true,
        chipPrimary: true,
        chipSecondary: true,
        chipInfo: true,
        chipWarning: true;
        chipError: true;
        chipSuccess: true;
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
