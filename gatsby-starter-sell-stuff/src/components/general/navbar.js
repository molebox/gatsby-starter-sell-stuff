import React, { useContext } from "react";
import { Box, Flex, Link, Grid, Text } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { DispatchContext } from "../context";
import { useSiteMetadata } from "./../useSiteMetadata";

const Navbar = ({ uniqueParents }) => {
  const { title } = useSiteMetadata();
  const dispatch = useContext(DispatchContext);

  const selectedCategory = (cat) => {
    dispatch({ type: "navOpen", payload: true });
    dispatch({ type: "selectedParentCategory", payload: cat });
  };

  return (
    <Grid as="nav" variant="grids.navbar">
      <Link
        as={GatsbyLink}
        to="/"
        activeClassName="active"
        variant="navLink"
        sx={{
          fontSize: [3, 6],
          fontFamily: "heading",
          textDecoration: "none",
          textTransform: "uppercase",
          alignSelf: ["center", "flex-start"],
        }}
      >
        {title}
      </Link>
      <Box sx={{ mx: "auto", gridColumn: [null, 2] }} />
      <Flex sx={{ justifyContent: "space-around" }}>
        {uniqueParents.map((parentCategory, index) => (
          <Link
            key={index}
            activeClassName="active"
            variant="navLink"
            onClick={() => selectedCategory(parentCategory.title)}
          >
            {parentCategory.title}
          </Link>
        ))}
        <Text variant="navLink">Cart</Text>
      </Flex>
    </Grid>
  );
};

export default Navbar;
