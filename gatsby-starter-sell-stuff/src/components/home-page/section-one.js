import React, { useRef, useEffect } from "react";
import { Box, Flex, Text } from "theme-ui";
// import BackgroundImage from 'gatsby-background-image'
import Image from "gatsby-image";
import gsap from "gsap";
import ShopNowButton from "./shop-now-button";

const SectionOne = ({ secOne }) => {
  const { title, image } = secOne;
  const titleRef = useRef();

  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.from(titleRef.current, {
        x: window.innerWidth * 1,
        duration: 1.5,
      });
    }
  }, []);

  return (
    <Box as="section" sx={{ variant: "homeSections.sectionOne" }}>
      {/* <BackgroundImage
        Tag="section"
        fluid={image.asset.fluid}
        // backgroundColor={`#040e18`}

        >
        <Text as="h1">{title}</Text>
        </BackgroundImage> */}
      <Image fluid={image.asset.fluid} />
      <Flex ref={titleRef} variant="homeSections.sectionOneTitle">
        <Text as="h1">{title}</Text>
        {/* <ShopNowButton/> */}
      </Flex>
    </Box>
  );
};

export default SectionOne;
