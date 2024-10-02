import { Button, Checkbox, ListItemIcon, MenuItem, Popover, Stack, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";

export interface MultiSelectProps {
    topPanel?: React.ReactNode;
    acciones?: React.ReactNode;
    anchorEl: HTMLElement | null;
    dense?: boolean;
    open: boolean;
    items: any[];
    onClose?: () => void;
    filterFunction: (items: any[], filtroTexto: string) => any[];
    getItemLabel: (item: any) => string;
}

export const MultiSelect = ({ topPanel, acciones, open, onClose, items, filterFunction, getItemLabel, anchorEl, dense }: MultiSelectProps) => {

    const [filtroTexto, setFiltroTexto] = useState(" ");
    const [itemsSeleccionados, setItemsSeleccionados] = useState<any[]>([]);

    const itemsFiltrados = filterFunction(items, filtroTexto);

    const manejarCambioTextField = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFiltroTexto(e.target.value);
    }, []);

    const manejarCambioCheckbox = useCallback(
        (item: any) => {
            setItemsSeleccionados((prevSeleccionados) =>
                prevSeleccionados.includes(item)
                    ? prevSeleccionados.filter((itemSeleccionado) => itemSeleccionado !== item)
                    : [...prevSeleccionados, item]
            );
        },
        []
    );

    const controlSeleccionarTodos = useCallback(() => {
        const todosSeleccionados = itemsSeleccionados.length === itemsFiltrados.length;
        setItemsSeleccionados(todosSeleccionados ? [] : itemsFiltrados);
    }, [itemsFiltrados, itemsSeleccionados]);

    const todosSeleccionados = itemsFiltrados.length > 0 && itemsSeleccionados.length === itemsFiltrados.length;

    const itemsFiltradosOrdenados = [
        ...itemsFiltrados.filter((item) => itemsSeleccionados.includes(item)),
        ...itemsFiltrados.filter((item) => !itemsSeleccionados.includes(item)),
    ];

    return (
        <Popover
            elevation={8}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            onClose={onClose}
        >
            <Stack height="auto" minWidth="320px">
                <Stack height={"auto"} py={2} px={1}>
                    {topPanel ? (
                        topPanel
                    ) : (
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Escribe algo"
                            label="Buscar"
                            value={filtroTexto}
                            onChange={manejarCambioTextField}
                        />
                    )}
                </Stack>

                <Stack height={"auto"} maxHeight={"300px"} overflow={"auto"} >

                    {itemsFiltradosOrdenados.length > 2 && (
                        <MenuItem dense={dense} onClick={controlSeleccionarTodos}>
                            <ListItemIcon>
                                <Checkbox checked={todosSeleccionados} />
                            </ListItemIcon>
                            Todos los items
                        </MenuItem>
                    )}

                    {itemsFiltradosOrdenados.length > 0 ? (
                        itemsFiltradosOrdenados.map((item, index) => (
                            <MenuItem dense={dense} key={index} onClick={() => manejarCambioCheckbox(item)}>
                                <ListItemIcon>
                                    <Checkbox checked={itemsSeleccionados.includes(item)} />
                                </ListItemIcon>
                                {getItemLabel(item)}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>No se encontraron resultados</MenuItem>
                    )}
                </Stack>
                {acciones ? (
                    acciones
                ) : (
                    <Stack height={"auto"} flexDirection={"row"} justifyContent={"space-between"} py={2} px={1} >
                        <Button size="small" color="primary" variant="text">
                            Limpiar
                        </Button>
                        <Button size="small" color="primary" variant="contained">
                            Aplicar
                        </Button>
                    </Stack>
                )}
            </Stack>
        </Popover>
    );
};
