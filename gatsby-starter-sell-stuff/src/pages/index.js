import React from "react";
import { Box, Heading, Text } from "theme-ui";
import Categories from "../components/general/categories";
import Layout from "../components/general/layout";
import Main from "../components/general/main";

export default () => {
  return (
    <Layout>
      <Categories />
      <Main>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {/* <Heading as="h1" variant="styles.h1">
            {title}
          </Heading>
          <Heading as="h2" variant="styles.h2">
            This is a secondary heading
          </Heading>
          <Text as="p" variant="styles.p">
            This is a paragraph
          </Text> */}
        </Box>
      </Main>
    </Layout>
  );
};
