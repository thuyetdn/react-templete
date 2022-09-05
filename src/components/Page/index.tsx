import { Paper } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  /**
   * Title of header
   */
  title: string;
}

/**
 * This is page layout for main content of the dashboard layout
 * You can change title and footer of the website
 */
const index: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <Paper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      {children}
    </Paper>
  );
};

export default index;
