import React from "react";
import { Box } from "theme-ui";

const Main = ({ children }) => {
  return (
    <Box
      as="main"
      p={3}
      sx={{
        flexGrow: 99999,
        flexBasis: 0,
        minWidth: 320,
        marginLeft: [null, 80],
        marginTop: [80, null],
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
