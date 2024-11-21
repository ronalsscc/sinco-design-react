import { Mixins } from '@mui/material';
import { breakpoints } from './breakpoints';

export const mixins: Mixins = {
    toolbar: {
        minHeight: 48,
        [breakpoints.down('md')]: {
            minHeight: 52
        }
    }
};