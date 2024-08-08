import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CancelOutlined, UploadFileOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import moment from 'moment';

export interface AdjuntarProps {
    archivo?: string;
    estadoCarga?: string;
}

export const Adjuntar: React.FC<AdjuntarProps> = ({ archivo, estadoCarga: estadoCargaProp }) => {
    const [nombreArchivo, setNombreArchivo] = useState(archivo || '');
    const [tamanoArchivo, setTamanoArchivo] = useState('');
    const [estadoCarga, setEstadoCarga] = useState(estadoCargaProp || 'Seleccione un archivo');
    const [progreso, setProgreso] = useState(0);
    const [fechaCarga, setFechaCarga] = useState('');

    const onDrop = useCallback((archivosAceptados: File[]) => {
        if (archivosAceptados.length > 0) {
            const archivo = archivosAceptados[0];
            setNombreArchivo(archivo.name);
            setTamanoArchivo((archivo.size / 1024).toFixed(2) + ' KB');
            setEstadoCarga('Cargando');

            const simularCarga = () => {
                let progreso = 0;
                const intervalo = setInterval(() => {
                    progreso += 10;
                    setProgreso(progreso);
                    if (progreso >= 100) {
                        clearInterval(intervalo);
                        setEstadoCarga('Completado');
                        setFechaCarga(moment().format('DD/MM/YYYY'));
                    }
                }, 200);
            };
            simularCarga();
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <Card sx={{width: "500px"}}>

            <CardHeader title="Prueba Adjuntar archivos" />
            <CardContent>

                <Stack
                    {...getRootProps()}
                    flexDirection="row"
                    width="100%"
                    gap={1}
                    borderRadius={0.5}
                    sx={{
                        ':hover': {
                            backgroundColor: "primary.50"
                        },
                        border: isDragActive ? '1px dashed grey' : '1px dashed grey'
                    }}
                >
                    <input {...getInputProps()} />
                    <Stack flexDirection="row" width="100%" gap={1}>
                        <Box display="flex" justifyContent={"center"} alignItems="center">
                            <IconButton size="small">
                                <UploadFileOutlined color="primary" fontSize="small" />
                            </IconButton>
                        </Box>
                        <Stack width="100%" alignContent="center">
                            <Stack flexDirection="column" className='Adjuntar'>
                                <Typography variant="body2" color="text.primary">
                                    {nombreArchivo || 'nombre_archivo.etx'}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {fechaCarga || '00 MB'} - {estadoCarga === 'Completado' ? tamanoArchivo : ` ${estadoCarga}`}
                                </Typography>
                                {estadoCarga === 'Completado' ? null : (
                                    <LinearProgress
                                        variant="determinate"
                                        value={progreso}
                                        color="primary"
                                    />
                                )}
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box display="flex" justifyContent={"center"} alignItems="center">
                        <IconButton size="small">
                            <CancelOutlined fontSize="small" />
                        </IconButton>
                    </Box>
                </Stack>

                
            </CardContent>
        </Card>
    );
};


