import React from "react";
import { Box } from "theme-ui";

const Main = ({ children }) => {
  return (
    <Box
      as="main"
      p={3}
      sx={{
        gridArea: "main",
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
