import { useState } from "react";
import { AttachFile, CancelOutlined, UploadFileOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";

export const AdjuntarArchivo = () => {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  return (
    <Stack alignItems="center"  bgcolor="background.default" height="100vh" width='100%'gap={1} >
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={1}
        py={2}
        px={3}
        minWidth="450px"
        sx={{ 
            border: "1px dashed grey",
            cursor: "pointer",
            ':hover':{
                backgroundColor: "primary.50"
            }
            }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <img src="src/assets/icons/svgs/AdjuntarArchivos.svg" alt="icon" />
        <Stack gap={0.5}>
          <Typography variant="body2" color={"text.primary"}>
            Arrastrar o adjuntar archivos
          </Typography>
          <Typography variant="caption" color="text.secondary">
            DOCX, XML, PNG, JPG • Max 00 MB
          </Typography>
        </Stack>
        <Button startIcon={<AttachFile fontSize="small" />} size="small">
          Adjuntar archivo
        </Button>
      </Stack>

      <Stack minWidth="500px" overflow="hidden" height="auto" minHeight="300px" gap={1}>
        {files.map((file) => (
          <Stack
            key={file.name}
            flexDirection="row"
            gap={1}
            p={1}
            borderRadius={0.5}
            sx={{
              ":hover": {
                backgroundColor: "primary.50",
              },
            }}
          >
            <Stack flexDirection="row" width="100%" gap={1}>
              <Box display="flex" justifyContent={"center"} alignItems="center">
                <IconButton size="small">
                  <UploadFileOutlined color="primary" fontSize="small" />
                </IconButton>
              </Box>
              <Stack width="100%" alignContent="center">
                <Stack flexDirection="column">
                  <Typography variant="body2" color="text.primary">{file.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date().toLocaleDateString()} ° {Math.round(file.size / 1024)} KB
                  </Typography>
                </Stack>
                <LinearProgress color="primary" value={30} />
              </Stack>
            </Stack>
            <Box display="flex" justifyContent={"center"} alignItems="center">
              <IconButton size="small">
                <CancelOutlined fontSize="small" />
              </IconButton>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
