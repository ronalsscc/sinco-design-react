import { Button, Card, CardContent, CardHeader, Chip, Alert, Stack, Radio, Fab } from "@mui/material";
import React, { useCallback } from "react";
import { AdjuntarArchivo, Calendario, MultiSelect } from "..";
import { CheckCircleRounded } from "@mui/icons-material";

export const EjemploAdjuntar = () => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleOpen = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(true);
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        setAnchorEl(null);
    }, []);

    const items = [
        { id: '1', name: 'Manzana', color: 'Rojo' },
        { id: '2', name: 'Banana', color: 'Amarillo' },
        { id: '3', name: 'Pera', color: 'Verde' },
        { id: '4', name: 'Uva', color: 'Morado' },
    ];

    const customFilterFunction = (items: any[], filterText: string): any[] => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(filterText.toLowerCase())
        );
    };

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


                    {/*      Inicio componente Adjuntar */}
                    {/* <AdjuntarArchivo fecthDB={console.log} /> */}
                    {/*      Fin componente Adjuntar */}

                    {/*      Inicio componente MultiSelect */}

                    <MultiSelect
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        items={items}
                        getItemLabel={(item) => item.color}
                        filterFunction={customFilterFunction}
                    /> 
                    {/* fin del componente multiSelect */}

                </CardContent>
            </Card>
        </Stack>
    );
}
