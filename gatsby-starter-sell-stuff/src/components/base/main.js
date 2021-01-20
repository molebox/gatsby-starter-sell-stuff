import React from "react";
import { Box } from "theme-ui";

const Main = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        gridArea: "main",
        maxWidth: 1440,
        m: "0 auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
