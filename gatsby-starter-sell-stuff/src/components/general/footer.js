import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Link } from "theme-ui";
import { useSiteMetadata } from "../useSiteMetadata";

const Footer = () => {
  const { owner } = useSiteMetadata();
  return (
    <Box
      as="footer"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        p: 2,
        variant: "styles.footer",
      }}
    >
      <Link as={GatsbyLink} to="/" sx={{ variant: "styles.navlink", p: 2 }}>
        Home
      </Link>
      <Link as={GatsbyLink} to="/" sx={{ variant: "styles.navlink", p: 2 }}>
        Blog
      </Link>
      <Link as={GatsbyLink} to="/" sx={{ variant: "styles.navlink", p: 2 }}>
        About
      </Link>
      <Box sx={{ mx: "auto" }} />
      <Box sx={{ p: 2 }}>
        © {new Date().getFullYear()} {owner}
      </Box>
    </Box>
  );
};

export default Footer;
