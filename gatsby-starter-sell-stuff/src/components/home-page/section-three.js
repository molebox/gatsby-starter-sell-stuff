import React from "react";
import { Box, Text, Image } from "theme-ui";

const SectionThree = ({ secThree }) => {
  const { title, image } = secThree;
  return (
    <Box variant="homeSections.sectionThree">
      <Text as="h2">{title}</Text>
      {/* <Image src={image.asset.fluid.src} /> */}
    </Box>
  );
};

export default SectionThree;
