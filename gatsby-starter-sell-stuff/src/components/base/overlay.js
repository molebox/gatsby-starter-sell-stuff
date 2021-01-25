import React from "react";
import { Box } from "theme-ui";
import { Flex } from "theme-ui";

const Overlay = ({ children, width, text }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: `${width}`,
        height: "auto",
      }}
    >
      {children}
      <Flex variant="overlay">{text}</Flex>
    </Box>
  );
};

export default Overlay;
