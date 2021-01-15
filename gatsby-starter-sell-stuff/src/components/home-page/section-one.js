import React, { useRef, useEffect } from "react";
import { Box, Flex, Grid, Text } from "theme-ui";
// import BackgroundImage from 'gatsby-background-image'
import Image from "gatsby-image";
import gsap from "gsap";
import ShopNowButton from "./shop-now-button";

const SectionOne = ({ secOne }) => {
  const { title, imageOne, imageTwo } = secOne;
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
    <Flex as="section" sx={{ variant: "homeSections.sectionOne" }}>
      <Box variant="images.heroOne">
        <Image fluid={imageOne.asset.fluid} />
      </Box>

      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: [null, 800],
        }}
      >
        <Text ref={titleRef} variant="homeSections.sectionOneTitle" as="h1">
          {title}
        </Text>

        <Flex
          sx={{
            justifyContent: "space-evenly",
          }}
        >
          <Box variant="images.heroTwo">
            <Image fluid={imageTwo.asset.fluid} />
          </Box>
          <Flex
            sx={{
              flexDirection: "column",
              my: 3,
            }}
          >
            <ShopNowButton />
            <ShopNowButton />
            <ShopNowButton />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionOne;
