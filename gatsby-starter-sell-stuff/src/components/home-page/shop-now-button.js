import React from "react";
import { Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const ShopNowButton = () => {
  return (
    <Link
      as={GatsbyLink}
      to="/"
      sx={{
        transform: "rotate(-15deg)",
        backgroundColor: "primary",
        color: "background",
        height: 100,
        my: 5,
        zIndex: -100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 6,
        fontFamily: "body",
        textDecoration: "none",
        textTransform: "uppercase",
      }}
    >
      Shop Now
    </Link>
  );
};

export default ShopNowButton;
