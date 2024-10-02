import { useState, useCallback, useEffect } from "react";
import { AttachFile, Autorenew, CancelOutlined, Delete, DeleteOutline, UploadFileOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, LinearProgress, Stack, SxProps, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";

export interface AdjuntarProps {
  fecthDB: (archivos: File[]) => any;
  compact?: boolean;
  sx?: SxProps;
}

export const AdjuntarArchivo = ({ compact, sx, fecthDB }: AdjuntarProps) => {

  const [archivos, setArchivos] = useState<
    { file: File; progress: number; loadingComplete: boolean }[]
  >(() => {
    const guardarArchivo = localStorage.getItem("archivos");
    return guardarArchivo
      ? JSON.parse(guardarArchivo).map((file: File) => ({
        file: new File([file], file.name),
        progress: 0,
        loadingComplete: false,
      }))
      : [];
  });

  useEffect(() => {
    setArchivos([])
  }, []);

  useEffect(() => {
    archivos.forEach((archivo, index) => {
      if (archivo.progress < 100) {
        const intervalo = setInterval(() => {
          setArchivos((prevArchivos) =>
            prevArchivos.map((item, idx) =>
              idx === index
                ? {
                  ...item,
                  progress: Math.min(item.progress + 10, 100),
                  loadingComplete: Math.min(item.progress + 10, 100) === 100,
                }
                : item
            )
          );
        }, 1000);

        return () => clearInterval(intervalo);
      }
    });
  }, [archivos]);

  const validarArchivoDuplicado = (file: File) => {
    const archivoDuplicado = archivos.some(
      (archivoExistente) => archivoExistente.file.name === file.name
    );
    if (archivoDuplicado) {
      return {
        code: "archivo-duplicado",
        message:
          "No se puede elegir el mismo archivo, seleccione otro por favor",
      };
    }
    return null;
  };

  const { getRootProps, getInputProps } = useDropzone({
    validator: validarArchivoDuplicado,
    multiple: true,
    onDrop: (acceptedFiles) => {
      setArchivos((prev) => {
        const actualizarArchivos = [
          ...prev,
          ...acceptedFiles.map((file) => ({
            file,
            progress: 0,
            loadingComplete: false,
          })),
        ];
        localStorage.setItem(
          "archivos",
          JSON.stringify(actualizarArchivos.map(({ file }) => file))
        );
        return actualizarArchivos;
      });
    },
  });

  const Eliminar = useCallback(
    (index: number) => {
      setArchivos((prevFiles) => {
        const actualizarArchivos = prevFiles.filter(
          (_, indexIteration) => indexIteration !== index
        );
        localStorage.setItem(
          "archivos",
          JSON.stringify(actualizarArchivos.map(({ file }) => file))
        );
        return actualizarArchivos;
      });
    },
    [setArchivos]
  );

  const Editar = useCallback(
    (index: number) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.onchange = (event: any) => {
        const newFile = event.target.files[0];
        if (newFile) {
          setArchivos((prevFiles) => {
            const actualizarArchivos = prevFiles.map((archivo, idx) =>
              idx === index
                ? {
                  ...archivo,
                  file: newFile,
                  progress: 0,
                  loadingComplete: false,
                }
                : archivo
            );
            localStorage.setItem(
              "archivos",
              JSON.stringify(actualizarArchivos.map(({ file }) => file))
            );
            return actualizarArchivos;
          });
        }
      };
      input.click();
    },
    [setArchivos]
  );

  const controlEventoAdjuntar = (e: React.MouseEvent) => {
    e.stopPropagation();
    fecthDB(archivos.map((e) => e.file));
    setArchivos([]);
    localStorage.removeItem("archivos");
  };

  return (
    <Stack width="100%" alignItems="center" bgcolor="transparent" height="100%" gap={1} >
      <Stack
        id="dropzone"
        alignItems="center"
        flexDirection={compact === true ? "row" : "column"}
        justifyContent="center"
        bgcolor="transparent"
        width="100%"
        boxShadow={1}
        gap={1}
        borderRadius={1}
        py={3}
        sx={{
          border: (theme) => `1px dashed ${theme.palette.grey[500]}`,
          cursor: "pointer",
          ":hover": {
            backgroundColor: "action.hover",
          },
          ...sx
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <img src="src/assets/icons/svgs/logoAdjuntarArchivos.svg" alt="icon" />
        <Stack gap={0.5}>
          <Typography variant="body2" color={"text.primary"}>
            Arrastrar o adjuntar archivos
          </Typography>
          <Typography variant="caption" color="text.secondary">
            DOCX, XML, PNG, JPG • Max 00 MB
          </Typography>
        </Stack>

        <Button size="small" startIcon={<AttachFile fontSize="inherit" />}
          onClick={controlEventoAdjuntar}
        >
          Adjuntar
        </Button>
      </Stack>

      <Stack
        id="informacion"
        width="100%"
        height="auto"
        gap={1}

        sx={{
          overflowY: "auto",
        }}
      >
        {archivos.map(({ file, progress, loadingComplete }, index) => (
          <Stack
            flexDirection="row"
            key={`${file.name}-${index}`}
            width="100%"
            gap={1}
            borderRadius={0.5}
            sx={{
              ":hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <Stack
              width="100%"
              alignItems="center"
              flexDirection="row"
              gap={2}
              p={1}
            >
              <Stack
                width="100%"
                flexDirection="row"
                alignItems="center"
                gap={0.5}
              >
                <UploadFileOutlined color="primary" fontSize="small" />

                <Stack flexDirection="column" width="100%">
                  <Typography variant="body2" color="text.primary">
                    {file.name}
                  </Typography>
                  <Typography id="estado-carga-completo" variant="caption" color="text.secondary">
                    {loadingComplete
                      ? `${new Date().toLocaleDateString()} • ${Math.round(file.size / 1024)} KB`
                      : `  Cargando... • ${Math.round(file.size / 1024)} KB`
                    }
                  </Typography>
                  {!loadingComplete && (
                    <LinearProgress
                      id="barra-progreso"
                      color="primary"
                      variant="determinate"
                      value={progress}
                      sx={{ width: "100%" }}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>
            <Box display="flex" justifyContent={"center"} alignItems="center">
              {!loadingComplete ? (
                <>
                  <IconButton
                    id="editarArchivo"

                    size="small"
                    onClick={() => Editar(index)}
                  >
                    <Autorenew fontSize="small" color="action" />
                  </IconButton>
                  <IconButton

                    id="EliminarArchivo"
                    size="small"
                    onClick={() => Eliminar(index)}
                  >
                    <CancelOutlined fontSize="small" color="action" />
                  </IconButton>
                </>
              ) : (
                <IconButton size="medium" onClick={() => Eliminar(index)}>
                  <DeleteOutline fontSize="small"
                    color="action"
                  />
                </IconButton>
              )}
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
