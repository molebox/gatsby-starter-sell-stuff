import React, { useContext } from "react";
import { Box, Flex, Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { DispatchContext } from "../context";
import { useSiteMetadata } from "./../useSiteMetadata";

const Navbar = ({ uniqueParents }) => {
  const { title } = useSiteMetadata();
  const dispatch = useContext(DispatchContext);
  return (
    <Box
      as="nav"
      sx={{
        display: "grid",
        gridTemplateColumns: [
          "auto",
          "minmax(auto, 500px) auto minmax(auto, 500px)",
        ],
        gridAutoRows: "1fr",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Link
        as={GatsbyLink}
        to="/"
        activeClassName="active"
        variant="navLink"
        sx={{
          fontSize: 5,
          fontFamily: "heading",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        {title}
      </Link>
      <Box sx={{ mx: "auto", gridColumn: [null, 2] }} />
      <Flex sx={{ justifyContent: "space-around" }}>
        {uniqueParents.map((parentCategory, index) => (
          <Link
            // as={GatsbyLink}
            key={index}
            // to={parentCategory.slug.current}
            activeClassName="active"
            variant="navLink"
            onClick={() => dispatch({ type: "navOpen", payload: true })}
          >
            {parentCategory.title}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Navbar;
