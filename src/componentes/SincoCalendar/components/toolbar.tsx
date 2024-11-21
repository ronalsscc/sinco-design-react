import { ChevronLeft, ChevronRight, Delete } from '@mui/icons-material';
import { Button, ButtonGroup, IconButton, Stack, Typography } from '@mui/material';
import { ToolbarProps } from 'react-big-calendar';


export const CalendarToolbar = ({ label, onNavigate, onView }: ToolbarProps) => {

    return (
        <Stack direction="row" width={"100%"} spacing={2} alignItems="center" justifyContent="space-between" gap={1} >
            <ButtonGroup>
                <IconButton aria-label="delete" onClick={() => onNavigate('PREV')}>
                    <ChevronLeft fontSize='small' />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => onNavigate('TODAY')}>
                    <Delete fontSize='small' />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => onNavigate('NEXT')}>
                    <ChevronRight fontSize='small' />
                </IconButton>
            </ButtonGroup>

            <Typography variant="h6" color="textPrimary">
                {label}
            </Typography>

            <ButtonGroup >
                <Button onClick={() => { onView('month') }}  >Mes</Button>
                <Button onClick={() => { onView('week') }} >Semana</Button>
                <Button onClick={() => { onView('day') }} >Dia</Button>
                <Button onClick={() => { onView('agenda') }} >Agenda</Button>
            </ButtonGroup>
        </Stack>
    );
};
