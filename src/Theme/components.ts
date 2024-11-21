import React from "react";
import type { } from "@mui/x-data-grid/themeAugmentation";
import { Components, Theme, alpha } from "@mui/material";
import {
  InfoRounded,
  CheckCircleRounded,
  WarningRounded,
  ErrorRounded,
} from "@mui/icons-material";

export const components: Components<Theme> = {
  MuiSelect: {
    styleOverrides: {
      icon: {
        width: 16,
        height: 16,
        top: "calc(50% - .4em)",
      },
      root: {
        fontSize: 13,
        fontStyle: "normal",
        fontWeight: 400,
        letterSpacing: "0.15px",
        lineHeight: "19px",
      },
    },
  },
  MuiSpeedDialIcon: {
    styleOverrides: {
      icon: {
        height: 24,
        width: 24,
      },
    },
  },
  MuiSpeedDialAction: {
    styleOverrides: {
      fab: {
        height: 40,
        width: 40,
      },
    },
  },
  MuiSpeedDial: {
    styleOverrides: {
      fab: {
        height: 56,
        width: 56,
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        ".MuiButtonBase-root.MuiAccordionSummary-root": {
          minHeight: 44,
          height: 44,
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: 40,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      labelIcon: {
        paddingBlock: 10,
      },
      root: {
        textTransform: "none",
        minHeight: 40,
      },
    },
  },
  MuiDataGrid: {
    defaultProps: {
      // columnHeaderHeight: 35,
      // rowHeight: 32,
      density: "compact",
    },
    styleOverrides: {
      iconButtonContainer: {
        fontSize: 16,
      },
      columnHeader: {
        variants: [
          {
            props: { density: "compact" },
            style: {
              "--height": "24px",
              minHeight: "24px !important",
              maxHeight: "24px !important",
            },
          },
          {
            props: { density: "standard" },
            style: {
              "--height": "36px",
              minHeight: "36px !important",
              maxHeight: "36px !important",
            },
          },
          {
            props: { density: "comfortable" },
            style: {
              "--height": "52px",
              minHeight: "52px !important",
              maxHeight: "52px !important",
            },
          },
        ],
      },
      columnSeparator: {
        variants: [
          {
            props: { density: "compact" },
            style: {
              "--height": "24px",
              minHeight: "24px !important",
              maxHeight: "24px !important",
            },
          },
          {
            props: { density: "standard" },
            style: {
              "--height": "36px",
              minHeight: "36px !important",
              maxHeight: "36px !important",
            },
          },
          {
            props: { density: "comfortable" },
            style: {
              "--height": "52px",
              minHeight: "52px !important",
              maxHeight: "52px !important",
            },
          },
        ],
      },
      columnHeaderDraggableContainer: {
        variants: [
          {
            props: { density: "compact" },
            style: {
              "--height": "24px",
              minHeight: "24px !important",
              maxHeight: "24px !important",
            },
          },
          {
            props: { density: "standard" },
            style: {
              "--height": "36px",
              minHeight: "36px !important",
              maxHeight: "36px !important",
            },
          },
          {
            props: { density: "comfortable" },
            style: {
              "--height": "52px",
              minHeight: "52px !important",
              maxHeight: "52px !important",
            },
          },
        ],
      },
      row: {
        variants: [
          {
            props: { density: "compact" },
            style: {
              "--height": "22px",
              minHeight: "22px !important",
              maxHeight: "22px !important",
            },
          },
          {
            props: { density: "standard" },
            style: {
              "--height": "28px",
              minHeight: "28px !important",
              maxHeight: "28px !important",

            },
          },
          {
            props: { density: "comfortable" },
            style: {
              "--height": "48px",
              minHeight: "48px !important",
              maxHeight: "48px !important",
            },
          },
        ],
      },
      columnHeaderTitle: {
        fontFamily: "Roboto",
        fontWeight: 500,
        fontSize: 13,
        lineHeight: 1.5,
        letterSpacing: 0.17,
      },
      cell: {
        fontFamily: "Roboto",
        fontWeight: 300,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: 0.17,
        display: "flex",
        alignItems: "center",
        variants: [
          {
            props: { density: "compact" },
            style: {
              "--height": "22px",
              minHeight: "22px !important",
              maxHeight: "22px !important",
            },
          },
          {
            props: { density: "standard" },
            style: {
              "--height": "28px",
              minHeight: "28px !important",
              maxHeight: "28px !important",
            },
          },
          {
            props: { density: "comfortable" },
            style: {
              "--height": "48px",
              minHeight: "48px !important",
              maxHeight: "48px !important",
            },
          },
        ],
        // COMPONENTES DENTRO DE CELDAS
        ".MuiButtonBase-root": {
          lineHeight: 0,
          textTransform: "capitalize",
        },
        // CELDA ENFOCADA
        ".MuiDataGrid-cell": {
          "&:focus": {
            outline: "transparent",
            borderWidth: 0,
          },
        },
      },
      // BOTOM MENU EN LAS CABECERA DE CADA COLUMNA
      menuIconButton: {
        svg: {
          fontSize: "16px",
        },
      },
      menu: {
        svg: {
          fontSize: "16px !important",
        },
        ".MuiMenuItem-root": {
          minHeight: "28px",
          height: "28px",
        },
      },
      pinnedRows: {
        borderTop: "1px solid rgba(228, 236, 244, 1)",
      },
      root: ({ theme }) => ({
        variants: [
          {
            props: { density: "standard" }, style: {
              "& .MuiDataGrid-scrollbar": {
                "--DataGrid-topContainerHeight": "35px"
              },
            }
          },
          {
            props: { density: "compact" }, style: {
              "& .MuiDataGrid-scrollbar": {
                "--DataGrid-topContainerHeight": "24px"
              },
            }
          },
          {
            props: { density: "comfortable" }, style: {
              "& .MuiDataGrid-scrollbar": {
                "--DataGrid-topContainerHeight": "52px"
              },
            }
          }
        ],
        //Hover sobre linea editable
        '.MuiDataGrid-row': {
          "&:hover>.MuiDataGrid-cell--editable": {
            backgroundColor: theme.palette.background.paper,
            borderLeft: `0.5px solid rgba(224, 224, 224, 1)`,
            borderRight: `0.5px solid rgba(224, 224, 224, 1)`
          }
        },

      }),
    },
  },

  MuiRating: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      sizeSmall: {
        fontSize: 18,
      },
      sizeMedium: {
        fontSize: 24,
      },
      sizeLarge: {
        fontSize: 30,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      root: {
        boxShadow:
          "0px 3px 1px -2px rgba(24, 39, 75, 0.20), 0px 2px 2px 0px rgba(24, 39, 75, 0.14), 0px 1px 5px 0px rgba(24, 39, 75, 0.12)",
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: "#424242",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        ".MuiPaper-elevation": {
          boxShadow:
            "0px 1px 5px rgba(24, 39, 75, 0.12), 0px 2px 2px rgba(24, 39, 75, 0.14), 0px 3px 1px -2px rgba(24, 39, 75, 0.2) ",
        },
        ".MuiBackdrop-root": {
          backgroundColor: "#f0f0f099",
          backdropFilter: "blur(2px) !important",
        },
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: "8px 16px !important",
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "8px 16px !important",
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "12px 16px !important",
      },
    },
  },

  MuiCheckbox: {
    variants: [
      {
        props: { size: "large" },
        style: {
          padding: 9,
          "& .MuiSvgIcon-fontSizeLarge": {
            height: 24,
            width: 24,
            fontSize: 24,
          },
        },
      },
      {
        props: { size: "small" },
        style: {
          padding: 3,
        },
      },
      {
        props: { size: "medium" },
        style: {
          padding: 4,
        },
      },
    ],
    defaultProps: {
      size: "small",
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      sizeSmall: {
        height: 32,
      },
      sizeMedium: {
        height: 38,
      },
      sizeLarge: {
        height: 48,
      },
    },
  },
  MuiChip: {
    defaultProps: {
      size: "small",
      variant: "standard",
      color: "default",
    },
    styleOverrides: {
      icon: {
        opacity: "70%",
      },
      deleteIconSmall: {
        height: 16,
        width: 16,
      },
      deleteIconMedium: {
        height: 20,
        width: 20,
      },
      sizeSmall: {
        height: 16,
      },
      sizeMedium: {
        height: 20,
      },
      avatarMedium: {
        height: 18,
        width: 18,
      },
      colorDefault: ({ theme }) => ({
        backgroundColor: theme.palette.default.main,
        color: theme.palette.default.contrastText,
      }),
      deleteIcon: ({ theme }) => ({
        variants: [
          {
            props: { variant: "filled" },
            style: {
              color: theme.palette.background.paper,
              opacity: "50%",
            },
          },
          {
            props: { variant: "standard" },
            style: {
              color: theme.palette.default.contrastText,
              opacity: "30%",
              ":hover": {
                color: theme.palette.default.contrastText,
                opacity: "30%",
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              color: theme.palette.action.active,
              opacity: "54%",
              ":hover": {
                color: theme.palette.action.active,
                opacity: "54%",
              }
            }
          },
          {
            props: { variant: "filled", color: "default" },
            style: {
              color: theme.palette.default.contrastText,
              opacity: "30%"
            },
          },
        ]
      }),

      avatar: ({ theme }) => ({
        lineHeight: 1.8,
        variants: [
          {
            props: { variant: "filled" },
            style: {
              backgroundColor: theme.palette.background.paper,
              opacity: "70%",
              color: theme.palette.default.contrastText,
            },
          },
          {
            props: { variant: "standard" },
            style: {
              backgroundColor: theme.palette.default.contrastText,
              color: theme.palette.primary.contrastText,
            },
          },
          {
            props: { variant: "outlined", color: "error" },
            style: {
              backgroundColor: theme.palette.error.main,
              color: theme.palette.background.paper,
            },
          },
          {
            props: { variant: "outlined", color: "success" },
            style: {
              backgroundColor: theme.palette.success.main,
              color: theme.palette.background.paper,
            },
          },
          {
            props: { variant: "outlined", color: "info" },
            style: {
              backgroundColor: theme.palette.info.main,
              color: theme.palette.background.paper,
            },
          },
          {
            props: { variant: "outlined", color: "warning" },
            style: {
              backgroundColor: theme.palette.warning.main,
              color: theme.palette.background.paper,
            },
          },
          {
            props: { variant: "outlined", color: "default" },
            style: {
              backgroundColor: theme.palette.grey[400],
              color: theme.palette.background.paper,
            },
          },
          {
            props: { variant: "filled", color: "default" },
            style: {
              backgroundColor: theme.palette.default.contrastText,
              color: theme.palette.background.paper,
            },
          },


        ],
      }),
      label: ({ theme }) => ({
        ...theme.typography.caption,
      }),
      root: ({ theme }) => ({
        height: "inherit",
        borderRadius: 4,

        variants: [
          {
            props: { variant: "outlined", color: "default" },
            style: {
              border: `1px solid ${theme.palette.grey[400]}`,
              backgroundColor: "transparent !important",
              color: theme.palette.default.contrastText,
              ":hover": {
                backgroundColor: theme.palette.default.main
              }
            },
          },
          {
            props: { variant: "standard", color: "default" },
            style: {
              backgroundColor: theme.palette.default.main,
              color: theme.palette.default.contrastText,
              ":hover": {
                backgroundColor: theme.palette.default.dark
              }
            },
          },
          {
            props: { variant: "filled", color: "default" },
            style: {
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.default.contrastText,
              ":hover": {
                backgroundColor: theme.palette.grey[100],
              }
            },
          },
          {
            props: { variant: "filled", color: "default" },
            style: {
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.default.contrastText,
              ":hover": {
                backgroundColor: theme.palette.grey[100],
              }
            },
          },
          {
            props: { variant: "standard", avatar: true },
            style: {
              backgroundColor: theme.palette.default.contrastText,
              color: theme.palette.default.contrastText,
            },
          },
          {
            props: { variant: "standard" },
            style: {
              backgroundColor: theme.palette.default.contrastText,
              color: theme.palette.default.contrastText,
            },
          },
          {
            props: { variant: "standard", color: "primary" },
            style: {
              backgroundColor: theme.palette.chipPrimary.main,
              ":hover": {
                backgroundColor: theme.palette.chipPrimary.dark,
              },
            },
          },
          {
            props: { variant: "standard", color: "secondary" },
            style: {
              backgroundColor: theme.palette.chipSecondary.main,
              ":hover": {
                backgroundColor: theme.palette.chipSecondary.dark,
              },
            },
          },
          {
            props: { variant: "standard", color: "info" },
            style: {
              backgroundColor: theme.palette.chipInfo.main,
              ":hover": {
                backgroundColor: theme.palette.chipInfo.dark,
              },
            },
          },
          {
            props: { variant: "standard", color: "error" },
            style: {
              backgroundColor: theme.palette.chipError.main,
              ":hover": {
                backgroundColor: theme.palette.chipError.dark,
              },
            },
          },
          {
            props: { variant: "standard", color: "success" },
            style: {
              backgroundColor: theme.palette.chipSuccess.main,
              ":hover": {
                backgroundColor: theme.palette.chipSuccess.dark,
              },
            },
          },
          {
            props: { variant: "standard", color: "warning" },
            style: {
              backgroundColor: theme.palette.chipWarning.main,
              ":hover": {
                backgroundColor: theme.palette.chipWarning.dark,
              },
            },
          },
        ],
      }),
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        display: "flex",
        alignContent: "center",
      },
    },
  },
  MuiAlert: {
    defaultProps: {
      iconMapping: {
        success: React.createElement(CheckCircleRounded),
        error: React.createElement(ErrorRounded),
        warning: React.createElement(WarningRounded),
        info: React.createElement(InfoRounded),
      },
    },

    variants: [
      {
        props: { variant: "filled" },
        style: {
          color: "#fff",
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          padding: "7px 12px 7px 12px",
        },
      },
    ],
    styleOverrides: {
      message: {
        padding: "0px 0px",
        minWidth: 0,
      },
      icon: {
        padding: "4px",
        marginRight: 0,
        display: "flex",
        alignItems: "center",
      },
      action: {
        display: "flex",
        gap: 1.5,
        padding: "0px",
      },

      root: {
        padding: "8px 12px 8px 12px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        minWidth: "296px",
      },
    },
  },
  MuiAlertTitle: {
    defaultProps: {
      variant: "subtitle2",
    },
    styleOverrides: {
      root: {
        marginBottom: 0,
        marginTop: 2.5
      }
    }
  },
  // MuiButton: {
  //   styleOverrides: {
  //     root: {
  //       fontFamily: "Roboto",
  //       textTransform: "unset",
  //       fontWeightLight: 300,
  //       fontSize: "13px",
  //       lineHeight: "normal",
  //       "@media(max-width: 885px)": {
  //         fontSize: 14,
  //       },
  //     },
  //     startIcon: {
  //       marginLeft: 2,
  //     },
  //     endIcon: {
  //       marginRight: 2,
  //     },
  //     sizeSmall: {
  //       height: 26,
  //       ".MuiSvgIcon-fontSizeSmall": {
  //         height: 16,
  //         width: 16,
  //       },
  //       ".MuiSvgIcon-fontSizeMedium": {
  //         height: 18,
  //         width: 18,
  //       },
  //       ".MuiSvgIcon-fontSizeLarge": {
  //         height: 20,
  //         width: 20,
  //       },
  //     },
  //     sizeMedium: {
  //       height: 32,
  //       ".MuiSvgIcon-fontSizeSmall": {
  //         height: 16,
  //         width: 16,
  //       },
  //       ".MuiSvgIcon-fontSizeMedium": {
  //         height: 18,
  //         width: 18,
  //       },
  //       ".MuiSvgIcon-fontSizeLarge": {
  //         height: 20,
  //         width: 20,
  //       },
  //     },
  //     sizeLarge: {
  //       height: 38,
  //       ".MuiSvgIcon-fontSizeSmall": {
  //         height: 16,
  //         width: 16,
  //       },
  //       "&.MuiSvgIcon-fontSizeMedium": {
  //         height: 18,
  //         width: 18,
  //       },
  //     },
  //   },
  // },
  MuiButton: {
    defaultProps: {
      color: "primary"
    },
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: "Roboto",
        textTransform: "unset",
        fontWeightLight: 300,
        fontSize: "13px",
        lineHeight: "normal",
        "@media(max-width: 885px)": {
          fontSize: 14,
        },
      }),
      startIcon: {
        marginLeft: 2,
      },
      endIcon: {
        marginRight: 2,
      },
      sizeSmall: {
        height: 26,
        ".MuiSvgIcon-fontSizeSmall": {
          height: 16,
          width: 16,
        },
        ".MuiSvgIcon-fontSizeMedium": {
          height: 18,
          width: 18,
        },
        ".MuiSvgIcon-fontSizeLarge": {
          height: 20,
          width: 20,
        },
      },
      sizeMedium: {
        height: 32,
        ".MuiSvgIcon-fontSizeSmall": {
          height: 16,
          width: 16,
        },
        ".MuiSvgIcon-fontSizeMedium": {
          height: 18,
          width: 18,
        },
        ".MuiSvgIcon-fontSizeLarge": {
          height: 20,
          width: 20,
        },
      },
      sizeLarge: {
        height: 38,
        ".MuiSvgIcon-fontSizeSmall": {
          height: 16,
          width: 16,
        },
        "&.MuiSvgIcon-fontSizeMedium": {
          height: 18,
          width: 18,
        },
      },
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      size: "small",
    },
  },
  MuiFab: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      circular: {
        boxShadow:
          "0px 1px 18px 0px rgba(24, 39, 75, 0.12), 0px 6px 10px 0px rgba(24, 39, 75, 0.14), 0px 3px 5px -1px rgba(24, 39, 75, 0.20)"
      },
      extended: {
        gap: 1,
        boxShadow:
          " 0px 1px 18px 0px rgba(24, 39, 75, 0.12), 0px 6px 10px 0px rgba(24, 39, 75, 0.14), 0px 3px 5px -1px rgba(24, 39, 75, 0.20)",
      },
      root: {
        textTransform: "capitalize",
        variants: [
          {
            props: { variant: "circular", size: "small" },
            style: {
              width: 32,
              height: 32,
              minHeight: 32,
              svg: {
                height: 20,
                width: 20,
              },
            }
          },
          {
            props: { variant: "circular", size: "medium" },
            style: {
              width: 34,
              height: 34,
              minHeight: 34,
              svg: {
                height: 20,
                width: 20,
              },
            }
          },
          {
            props: { variant: "circular", size: "large" },
            style: {
              width: 44,
              height: 44,
              minHeight: 44,
              svg: {
                height: 20,
                width: 20
              },
            }
          },
          {
            props: { variant: "extended", size: "small" },
            style: {
              height: 32,
              minHeight: 32,
              svg: {
                height: 20,
                width: 20
              },
            }
          },
          {
            props: { variant: "extended", size: "medium" },
            style: {
              height: 36,
              minHeight: 36,
              svg: {
                height: 20,
                width: 20
              },
            }
          },
          {
            props: { variant: "extended", size: "large" },
            style: {
              height: 46,
              minHeight: 46,
              svg: {
                height: 20,
                width: 20
              },
            }
          },
        ]
      },
    },
  },
  MuiFormControl: {
    defaultProps: {
      size: "small",
      margin: "none",
    },
  },
  MuiFormHelperText: {
    defaultProps: {
      margin: "dense",
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeLarge: {
        width: 35,
        height: 35,
        fontSize: 35,
      },
      fontSizeMedium: {
        width: 20,
        height: 20,
        fontSize: 20,
      },
      fontSizeSmall: {
        width: 16,
        height: 16,
        fontSize: 16,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.action.active,
        "&:hover": {
          backgroundColor: alpha(theme.palette.action.active, 0.04),
        }
      }),
      sizeSmall: {
        padding: 3,
      },
      sizeMedium: {
        padding: 8,
      },
      sizeLarge: {
        padding: 12,
      },
    },

  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        height: 48,
      },
      sizeSmall: {
        height: 38,
      },
    },
  },
  // MuiInputBase: {
  //   defaultProps: {
  //     margin: "none",
  //   },
  //   styleOverrides: {
  //     root: {
  //       "&.MuiInput-underline": {
  //         marginTop: 9,
  //       },
  //       ".MuiOutlinedInput-input.MuiInputBase-inputSizeSmall": {
  //         paddingBlock: 6.66,
  //       },
  //       ".MuiOutlinedInput-input": {
  //         paddingBlock: 14,
  //       },
  //       ".MuiFilledInput-input.MuiInputBase-inputSizeSmall": {
  //         padding: "0 4px !important",
  //       },
  //       ".MuiFilledInput-input": {
  //         paddingTop: 22,
  //         paddingBottom: 6,
  //       },
  //     },
  //   },
  // },

  MuiInputBase: {
    defaultProps: {
      margin: "none",
    },
    styleOverrides: {
      root: {
        "&.MuiInput-underline": {
          marginTop: 9,
        },
        ".MuiOutlinedInput-input.MuiInputBase-inputSizeSmall": {
          paddingBlock: 6.66,
        },
        ".MuiOutlinedInput-input": {
          paddingBlock: 14,
        },
        ".MuiFilledInput-input.MuiInputBase-inputSizeSmall": {
          padding: "0 4px !important",
        },
        ".MuiFilledInput-input": {
          paddingTop: 22,
          paddingBottom: 6,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        borderColor: "rgba(16, 24, 64, 0.23)",
      },
    },
  },
  MuiAutocomplete: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        "&.MuiAutocomplete-root .MuiOutlinedInput-root": {
          padding: "6px 14px 6px 10px",
        },
        "& .MuiAutocomplete-endAdornment": {
          top: "calc(50% - 12px)",
          transform: "none",
        },
        "&.MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall":
        {
          paddingBlock: 2.72,
          paddingRight: 14,
          ".MuiIconButton-sizeSmall .MuiAutocomplete-popupIndicator": {
            padding: 5,
          },
        },
      },
    },
  },
  // MuiInputLabel: {
  //   styleOverrides: {
  //     asterisk: {
  //       color: "#D14343",
  //     },
  //     root: {
  //       display: "flex",
  //       gap: ".2rem",
  //       flexDirection: "row-reverse",
  //       fontSize: 13,
  //       fontStyle: "normal",
  //       fontWeight: 400,
  //       letterSpacing: "0.15px",
  //     },
  //     filled: {
  //       "&.MuiInputLabel-filled.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)":
  //       {
  //         transform: "translate(12px,9px) scale(1)",
  //       },
  //     },
  //     standard: {
  //       "&.MuiInputLabel-standard.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)":
  //       {
  //         transform: "translate(0, 15px) scale(1)",
  //       },
  //     },
  //     outlined: {
  //       "&.MuiInputLabel-outlined.MuiInputLabel-sizeSmall ": {
  //         transform: "translate(14px,7px) scale(1)",
  //       },
  //       "&.MuiInputLabel-outlined ": {
  //         transform: "translate(14px, 14px) scale(1)",

  //         "&.MuiInputLabel-shrink": {
  //           transform: "translate(14px, -7px) scale(0.75)",
  //         },
  //       },
  //     },
  //   },
  //   defaultProps: {
  //     margin: "dense",
  //   },
  // },

  MuiInputLabel: {
    styleOverrides: {
      asterisk: {
        color: "#D14343",
      },
      root: {
        display: "flex",
        gap: ".2rem",
        flexDirection: "row-reverse",
        fontSize: 13,
        fontStyle: "normal",
        fontWeight: 400,
        letterSpacing: "0.15px",
      },
      filled: {
        "&.MuiInputLabel-filled.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)":
        {
          transform: "translate(12px,9px) scale(1)",
        },
      },
      standard: {
        "&.MuiInputLabel-standard.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)":
        {
          transform: "translate(0, 15px) scale(1)",
        },
      },
      outlined: {
        "&.MuiInputLabel-outlined.MuiInputLabel-sizeSmall ": {
          transform: "translate(14px,7px) scale(1)",
        },
        "&.MuiInputLabel-outlined ": {
          transform: "translate(14px, 14px) scale(1)",

          "&.MuiInputLabel-shrink": {
            transform: "translate(14px, -7px) scale(0.75)",
          },
        },
      },
    },
    defaultProps: {
      margin: "dense",
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        overflow: "initial",
        boxShadow:
          "0px 2px 1px -2px rgba(24, 39, 75, 0.20), 0px 1px 1px -1px rgba(24, 39, 75, 0.14), 0px 1px 3px 0px rgba(24, 39, 75, 0.12)",
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: "8px 16px !important",
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: "8px 16px !important",
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: "8px 16px !important",
      },
    },
  },
  MuiRadio: {
    variants: [
      {
        props: { size: "small" },
        style: {
          padding: 3,
        },
      },
      {
        props: { size: "medium" },
        style: {
          padding: 4,
        },
      },
      {
        props: { size: "large" },
        style: {
          padding: 9,
          "& .MuiSvgIcon-fontSizeLarge": {
            width: 24,
            height: 24,
            fontSize: 24,
          },
        },
      },
    ],
    defaultProps: {
      size: "small",
    },
  },
  MuiSwitch: {
    variants: [
      {
        props: { size: "small" },
        style: {
          height: 22,
          ".MuiSwitch-switchBase": {
            padding: 3,
          },
        },
      },
    ],
    defaultProps: {
      size: "small",
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
      margin: "none",
    },
    variants: [
      {
        props: { variant: "standard" },
        style: {
          ".MuiInputBase-input.MuiInputBase-inputSizeSmall": {
            padding: 1.5,
          },
        },
      },
    ],
  },
  MuiList: {
    defaultProps: {
      dense: false,
    },
    styleOverrides: {
      root: {},
      dense: {},
    },
  },

  MuiListItemText: {
    styleOverrides: {
      multiline: {},
      root: {
        marginBlock: " 4.4px ",
        lineHeight: "20px",
        letterSpacing: 0.17,
      },
      dense: {
        lineHeight: "14.3px",
        letterSpacing: 0.15,
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        padding: "8px 16px 8px 16px",
      },
      dense: {
        padding: "4px 16px 4px 16px",
      },
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      dense: {
        marginBlock: 0,
        padding: 0,
      },
      root: {
        marginBlock: 0,
        padding: 0,
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      dense: {
        height: 30,
        minHeight: 30,
        ".MuiListItemText-root > .MuiTypography-root": {
          lineHeight: "14.3px",
          letterSpacing: 0.15,
        },
      },
      root: {
        padding: "7px 16px 7px 16px",
        ".MuiMenuList-root": {
          height: 34,
          minHeight: 34,
        },
        ".MuiListItemText-root > .MuiTypography-root": {
          lineHeight: "20px",
          letterSpacing: 0.17,
        },
        ".MuiListItemIcon-root": {
          minWidth: 32,
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        ".MuiTableCell-body.MuiTableCell-sizeMedium": {
          padding: "16px !important",
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      sizeMedium: {
        padding: 13,
      },
    },
  },
  MuiTable: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        minWidth: 630,
      },
    },
  },
};
