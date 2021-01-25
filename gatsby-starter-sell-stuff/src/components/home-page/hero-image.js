import React from "react";
import { Box } from "theme-ui";
import Image from "gatsby-image";

const HeroImage = ({ image }) => {
  return (
    <Box variant="homePageHeroImage">
      <Box variant="homePageHeroImageCircle" />
      <Image fluid={image} loading="lazy" />
    </Box>
  );
};

export default HeroImage;
