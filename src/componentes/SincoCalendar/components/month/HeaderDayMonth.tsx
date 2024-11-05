import { Box, Typography } from "@mui/material";

export const HeaderDayMonth = ({ label }) => {

    return (
        <Box height={30} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h6" color="text.primary">
                {label}
            </Typography>
        </Box>
    )
}