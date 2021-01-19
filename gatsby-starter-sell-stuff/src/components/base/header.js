import React, { useContext } from "react";
import { Box, Flex, Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { useSiteMetadata } from "./../useSiteMetadata";
import { DispatchContext } from "../context";

const Header = () => {
  const { title } = useSiteMetadata();
  const dispatch = useContext(DispatchContext);

  return (
    <Flex
      as="header"
      sx={{
        flexDirection: ["row"],
        justifyContent: ["space-between"],
        alignItems: "center",
        gridArea: "nav",
        p: 3,
        // borderBottom: "solid 2px",
      }}
    >
      <Box
        onClick={() => dispatch({ type: "navOpen", payload: true })}
        sx={{
          cursor: "crosshair",
        }}
      >
        <Box
          sx={{ backgroundColor: "text", height: 2, width: "20px", my: 2 }}
        />
        <Box sx={{ backgroundColor: "text", height: 2, width: "20px" }} />
      </Box>
      {/* <Link
        as={GatsbyLink}
        to="/"
        activeClassName="active"
        variant="navLink"
        sx={{
          alignSelf: ["center", "flex-start"],
        }}
      >
        {title}
      </Link> */}
      <Link
        sx={{
          fontFamily: "body",
        }}
        activeClassName="active"
        variant="navLink"
        onClick={() => dispatch({ type: "cartOpen", payload: true })}
      >
        CART
      </Link>
    </Flex>
  );
};

export default Header;
