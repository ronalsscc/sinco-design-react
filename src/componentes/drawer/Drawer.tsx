import React, { ReactNode, useState } from "react";
import { IconButton, Stack, Typography, Drawer, SxProps } from "@mui/material";
import { Close } from "@mui/icons-material";

export type DrawerPosition = "left" | "right";

const borderStyles: Record<
  DrawerPosition,
  { borderTopRightRadius?: string; borderTopLeftRadius?: string }
> = {
  left: { borderTopRightRadius: "4px" },
  right: { borderTopLeftRadius: "4px" },
};

export interface DrawerComponentProperties {
  title: string;
  children: ReactNode;
  actions: ReactNode;
  showActions?: boolean;
  anchor?: DrawerPosition;
  anchorActions: "flex-end" | "flex-start";
  width: string;
  open: boolean;
  onClose: () => void;
  sx?: SxProps;
  backgroundColor?: string;
  color?: string;
  headerColor?: string;
}

export const DrawerComponent = ({
  title,
  backgroundColor,
  color,
  headerColor,
  children,
  actions,
  showActions,
  anchor = "left",
  anchorActions = "flex-end",
  width,
  open,
  onClose,
  sx,
}: DrawerComponentProperties) => {
  const [stateActions, setActionsState] = useState(showActions);

  const handleDrawerActions = () => {
    setActionsState(true);
  };

  const paperSx: SxProps = borderStyles[anchor];

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "#F0f0f099 !important",
          backdropFilter: "blur(4px)",
        },

        "& .MuiDrawer-paper": {
          width: width,
          ...paperSx,
        },
        ...sx,
      }}
    >
      <Stack height="100%">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          py={1.5}
          px={1}
          bgcolor={headerColor}
        >
          <Typography color={color} variant="h6">
            {title}
          </Typography>

          <IconButton onClick={onClose} size="small">
            <Close fontSize="small"  />
          </IconButton>
        </Stack>

        <Stack
          sx={{
            backgroundColor: backgroundColor,
          }}
          py={1.5}
          px={1}
          overflow="auto"
          flex={1}
          onClick={handleDrawerActions}
        >
          {children}
        </Stack>

        {stateActions && (
          <Stack
            alignItems={anchorActions}
            gap={1}
            py={1.5}
            px={1}
            bgcolor="background.default"
          >
            {actions}
          </Stack>
        )}
      </Stack>
    </Drawer>
  );
};
export { DrawerComponent as Drawer };
