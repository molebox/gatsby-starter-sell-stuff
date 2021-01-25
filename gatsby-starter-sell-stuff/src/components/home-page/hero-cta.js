import React from "react";
import { Flex, Text, Button } from "theme-ui";
import { useSiteMetadata } from "./../useSiteMetadata";

const HeroCTA = () => {
  const { homePage } = useSiteMetadata();
  const {
    callToActionTitle,
    callToActionDescription,
    callToActionBtnText,
  } = homePage;
  return (
    <Flex variant="homePageHeroCallToAction">
      <Text as="h2" variant="callToAction">
        {callToActionTitle}
      </Text>
      <Flex
        sx={{ flexDirection: "column", my: 3, textAlign: ["center", null] }}
      >
        <Text as="p" variant="styles.p">
          {callToActionDescription}
        </Text>
      </Flex>
      <Button variant="standard">{callToActionBtnText}</Button>
    </Flex>
  );
};

export default HeroCTA;
