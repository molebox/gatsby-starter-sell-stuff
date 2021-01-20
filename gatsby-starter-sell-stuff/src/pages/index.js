import React, { useRef, useEffect } from "react";
import { Flex, Text, Box } from "theme-ui";
import SEO from "react-seo-component";
import Layout from "../components/base/layout";
import { graphql } from "gatsby";
import gsap from "gsap";
import { useSiteMetadata } from "../components/useSiteMetadata";
import Masonry from "../components/home-page/masonry";

export default ({ data }) => {
  const { title, description } = useSiteMetadata();
  const titleRef = useRef();
  const images = data.sanityHomePage.images;

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
    <Layout>
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
        }}
      >
        <Box sx={{ my: 5 }}>
          <Text ref={titleRef} as="h1" variant="styles.h1">
            {title}
          </Text>
        </Box>
        <Masonry images={images} />
      </Flex>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    sanityHomePage {
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
