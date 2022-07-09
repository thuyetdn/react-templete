import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, common } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
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
          divider: deepOrange[700],
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
