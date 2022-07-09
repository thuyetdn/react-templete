import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./store";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "lib/themes";
import { renderRoutes } from "react-router-config";
import { SnackbarProvider } from "notistack";
import { RootState } from "store/reducers";
import cookie from "cookie";
import routes from "routes";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  const mode = useSelector((state: RootState) => state.Web.mode);
  const dispatch = useDispatch();

  // Get mode from cookie in the first access page
  useEffect(() => {
    const currentBrowserTheme =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
        ? "dark"
        : "light";
    dispatch(
      Actions.Web.update({
        key: "mode",
        value:
          cookie.parse(document?.cookie)?.mode?.toString() ||
          currentBrowserTheme,
      })
    );
  }, []);
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <Router history={history}>{renderRoutes(routes)}</Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
