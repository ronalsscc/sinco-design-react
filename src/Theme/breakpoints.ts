import { Breakpoints } from '@mui/material';
import { createBreakpoints } from '@mui/system';

export const breakpoints: Breakpoints = createBreakpoints({
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
});
