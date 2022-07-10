import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, common } from "@mui/material/colors";

const color = {
  primary: {
    500: "#0D5AE5",
    900: "#242051",
    100: "#8986a8",
  },
  secondary: {
    900: "#7daaff",
    700: "#96bbff",
    500: "#b0cbff",
    100: "#c9dcff",
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            contrastText: grey[900],
            main: common["white"],
            light: common["white"],
          },
          divider: common["black"],
          background: {
            default: common["white"],
            paper: common["white"],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: grey[500],
          background: {
            default: common["black"],
            paper: common["black"],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
