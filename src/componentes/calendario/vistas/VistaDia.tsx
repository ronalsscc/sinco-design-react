import { Stack, Typography, Divider } from "@mui/material";
import { useMemo } from "react";
import moment from "moment";

export const VistaDia = () => {
    const timeIntervals = useMemo(() => {
        const horaInicio = moment().startOf('day').hour(8);
        const horaFin = moment().startOf('day').hour(18);
        const hours = [];

        let currentHour = horaInicio.clone();
        while (currentHour <= horaFin) {
            hours.push(currentHour.format('H'));
            currentHour.add(1, 'hour');
        }
        return hours;
    }, []);

    return (
        <Stack width="100%" height="100%" bgcolor="background.paper" p={1} spacing={1}>
            {timeIntervals.map((hour) => (
                <Stack key={hour} direction="row" spacing={1} alignItems="center">
                    <Typography variant="body2" color="textSecondary" width={60}>
                        {hour}:00
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Stack flex={1} bgcolor="background.default" height={60} borderRadius={1} />
                </Stack>
            ))}
        </Stack>
    );
};

