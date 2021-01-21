import React from "react";
import { Box } from "theme-ui";

const Main = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        gridArea: "main",
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
