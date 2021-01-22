import React from "react";
import { Flex, Box, Text, Divider } from "theme-ui";
import SEO from "react-seo-component";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { useSiteMetadata } from "../components/useSiteMetadata";
import Masonry from "../components/home-page/masonry";
import Showcase from "../components/product/showcase";

export default ({ data }) => {
  const { title, description } = useSiteMetadata();
  const images = data.sanityHomePage.images;
  const hero = data.sanityHomePage.sectionOne.imageOne;
  const featuredProducts = data.sanityHomePage.featuredProducts;

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
          <Image fluid={hero.asset.fluid} loading="lazy" />
        </Box>
        <Text as="h2" variant="styles.h3">
          Featured Products
        </Text>
        <Showcase products={featuredProducts} />
        <Divider />
        <Masonry images={images} />
        <Divider />
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
      featuredProducts {
        title
        slug {
          current
        }
        price
        images {
          asset {
            fluid {
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
