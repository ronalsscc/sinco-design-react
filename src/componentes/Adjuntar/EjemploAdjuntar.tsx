import { Card, CardContent, CardHeader, Stack } from "@mui/material"
import { AdjuntarArchivo } from "."

export const EjemploAdjuntar = () => {

    return (
        <Stack
            height={'100vh'}
            width='100%'
            alignItems={"center"}
        >
            <Card sx={{ width: "400px" }}>
                <CardHeader title="Adjuntar archivos" />
                <CardContent sx={{
                    height: "100%",
                    maxHeight: "450px",
                }}>
                    <AdjuntarArchivo />
                </CardContent>

            </Card>
        </Stack>
    )
}