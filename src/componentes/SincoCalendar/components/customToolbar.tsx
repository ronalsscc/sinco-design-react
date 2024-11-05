import { ChevronLeft, ChevronRight, Delete } from '@mui/icons-material';
import { ButtonGroup, IconButton, Stack } from '@mui/material';
import { ToolbarProps } from 'react-big-calendar';


export const CalendarToolbar = ({ label, onNavigate, onView }: ToolbarProps) => {

    return (
        <Stack direction="row" width={"100%"} spacing={2} alignItems="center" justifyContent="space-between" >
            <ButtonGroup>
                <IconButton size="small" aria-label="delete" onClick={() => onNavigate('PREV')}>
                    <ChevronLeft fontSize='small' />
                </IconButton>
                <IconButton size="small" aria-label="delete" onClick={() => onNavigate('TODAY')}>
                    <Delete fontSize='small' />
                </IconButton>
                <IconButton size="small" aria-label="delete" onClick={() => onNavigate('NEXT')}>
                    <ChevronRight fontSize='small' />
                </IconButton>
            </ButtonGroup>
                {/* <Typography variant="h6" color="textPrimary">
                    {label} 
                </Typography>  */}
        </Stack>
    );
};
