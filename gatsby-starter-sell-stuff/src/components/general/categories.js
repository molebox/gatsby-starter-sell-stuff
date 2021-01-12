import React, { useContext } from "react";
import { Flex, Text, Close, Grid } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import { StateContext, DispatchContext } from "./../context";

const Categories = () => {
  const data = useStaticQuery(query);
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const categories = data.allSanityCategory.nodes;

  return (
    <Flex
      as="aside"
      sx={{
        transition: "right 250ms ease-in-out",
        position: "fixed",
        bottom: 0,
        right: state.navOpen ? 0 : -500,
        width: ["100%", 500],
        height: "calc(100vh - 100px)",
        padding: 1,
        flexGrow: 1,
        flexBasis: "sidebar",
        flexDirection: "column",
        alignItems: "center",
        background: "#ffffff",
      }}
    >
      <Flex>
        <Close
          sx={{
            position: "absolute",
            top: 1,
            left: 1,
            ":hover": {
              cursor: "crosshair",
            },
          }}
          onClick={() => dispatch({ type: "navOpen", payload: false })}
        />
        <Text as="h2" variant="cats">
          Categories
        </Text>
      </Flex>
      <Grid
        columns="repeat(auto-fill, minmax(auto, 100px))"
        mt={5}
        visibility={state.navOpen ? "visible" : "hidden"}
      >
        {categories.map(({ title }, index) => (
          <Text as="p" variant="styles.p" key={index}>
            {title}
          </Text>
        ))}
      </Grid>
    </Flex>
  );
};

export default Categories;

export const query = graphql`
  query GetCategories {
    allSanityCategory {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`;
