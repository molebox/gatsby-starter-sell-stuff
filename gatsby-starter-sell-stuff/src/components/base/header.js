import React, { useContext } from "react";
import { Flex, Link } from "theme-ui";
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
        borderBottom: "solid 2px",
      }}
    >
      <Link
        as={GatsbyLink}
        to="/"
        activeClassName="active"
        variant="navLink"
        sx={{
          alignSelf: ["center", "flex-start"],
        }}
      >
        {title}
      </Link>
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
