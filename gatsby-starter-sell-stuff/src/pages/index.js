import React, { useRef, useEffect } from "react";
import { Flex, Text } from "theme-ui";
import Layout from "../components/general/layout";
import { graphql, Link as GatsbyLink } from "gatsby";

import gsap from "gsap";
import { useSiteMetadata } from "../components/useSiteMetadata";
import Masonry from "../components/home-page/masonry";

export default ({ data }) => {
  const { title } = useSiteMetadata();
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
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Text ref={titleRef} as="h1" variant="styles.h1">
          {title}
        </Text>
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
          fixed(width: 400) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`;
