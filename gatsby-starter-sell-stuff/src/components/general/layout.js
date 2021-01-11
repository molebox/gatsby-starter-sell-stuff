import React from "react";
import { Flex } from "theme-ui";

const Layout = ({ children }) => {
  return (
    <Flex
      sx={{
        flexWrap: "wrap",
        height: "100vh",
        // minHeight: '100vh'
      }}
    >
      {children}
    </Flex>
  );
};

export default Layout;
