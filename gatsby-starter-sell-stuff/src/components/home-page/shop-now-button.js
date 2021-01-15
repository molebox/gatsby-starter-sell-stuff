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
        height: [60, 100],
        p: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: [2, 6],
        fontFamily: "body",
        textDecoration: "none",
        textTransform: "uppercase",
        my: [2, 3],
        ":hover": {
          cursor: "crosshair",
        },
      }}
    >
      Shop Now
    </Link>
  );
};

export default ShopNowButton;
