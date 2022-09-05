import { Box, LinearProgress } from "@mui/material";
import { Drawer, Header } from "components";
import React, { Suspense } from "react";
import { styled } from "@mui/material/styles";
import { DrawerHeader } from "components/DashBoard/Drawer";
import { renderRoutes } from "react-router-config";
import { DashBoardProps } from "lib/interfaces";

const drawerwidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    marginLeft: `${drawerwidth}px`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

/**
 * This is dashboard layout for the web application
 * - It contains :
 * + header
 * + drawer left
 * + main content page
 */
const DashBoard: React.FC<DashBoardProps> = ({ route }) => {
  const [open, setOpen] = React.useState(true);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Header
        open={open}
        handleToggleDrawer={handleToggleDrawer}
        drawerwidth={drawerwidth}
      />
      <Drawer
        open={open}
        handleToggleDrawer={handleToggleDrawer}
        drawerwidth={drawerwidth}
      />
      <Main open={open}>
        <DrawerHeader />
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route?.routes)}
        </Suspense>
      </Main>
    </Box>
  );
};

export default DashBoard;
