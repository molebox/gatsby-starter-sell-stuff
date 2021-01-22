import React, { useRef, useEffect } from "react";
import { Flex, Text, Box } from "theme-ui";
import SEO from "react-seo-component";
import { graphql } from "gatsby";
import gsap from "gsap";
import Image from "gatsby-image";
import { useSiteMetadata } from "../components/useSiteMetadata";
import Masonry from "../components/home-page/masonry";

export default ({ data }) => {
  const { title, description } = useSiteMetadata();
  const titleRef = useRef();
  const images = data.sanityHomePage.images;
  const hero = data.sanityHomePage.sectionOne.imageOne;

  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.from(
        titleRef.current,
        {
          delay: 1,
          duration: 1.5,
          y: 30,
          ease: "power4",
          opacity: 0,
        },
        "text"
      );
    }
  }, []);

  return (
    <>
      <SEO
        title={title}
        titleTemplate=""
        titleSeparator=""
        description={description}
        image=""
        pathname={`https://gatsby-starter-sell-stuff.netlify.app/`}
        twitterUsername="@studio_hungry"
        author="Rich Haines"
      />
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          maxWidth: 1440,
          m: "0 auto",
        }}
      >
        <Box sx={{ my: 5, width: "100vw", height: "auto" }}>
          {/* <Text ref={titleRef} as="h1" variant="styles.h1">
            {title}
          </Text> */}
          <Image fluid={hero.asset.fluid} />
        </Box>
        <Masonry images={images} />
      </Flex>
    </>
  );
};

export const query = graphql`
  query IndexQuery {
    sanityHomePage {
      sectionOne {
        imageOne {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      images {
        asset {
          fixed(width: 300) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`;
