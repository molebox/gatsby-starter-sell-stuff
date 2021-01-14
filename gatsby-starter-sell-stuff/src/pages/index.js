import React from "react";
import { Box, Heading, Text } from "theme-ui";
import Categories from "../components/general/categories";
import Layout from "../components/general/layout";
import Main from "../components/general/main";

export default () => {
  return (
    <Layout>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Heading as="h1" variant="styles.h1">
            Home page yo!
          </Heading>
        </Box>
    </Layout>
  );
};
