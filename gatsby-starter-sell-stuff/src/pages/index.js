import React from "react";
import { Flex, Box, Text, Divider, Button, Textarea } from "theme-ui";
import SEO from "react-seo-component";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { useSiteMetadata } from "../components/useSiteMetadata";
import Masonry from "../components/home-page/masonry";
import Showcase from "../components/product/showcase";
import HeroImage from "../components/home-page/hero-image";
import HeroCTA from "./../components/home-page/hero-cta";

export default ({ data }) => {
  const { title, description } = useSiteMetadata();
  console.log({ data });
  const images = data.sanityHomePage.images;
  const hero = data.sanityHomePage.sectionOne.imageOne;
  const heroTwo = data.sanityHomePage.sectionOne.imageTwo;
  const featuredProducts = data.sanityHomePage.featuredProducts;
  // const herosrc = data.sanityHomePage.sectionOne.imageOne.asset.fluid.src;

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
      <Flex variant="homePageLayout">
        <Flex as="section" variant="homePageHero">
          <HeroImage image={hero.asset.fluid} />
          <HeroCTA />
        </Flex>
        <Box as="section" sx={{ my: 5, textAlign: "center" }}>
          <Showcase
            products={featuredProducts}
            showMain
            imageSize={[200, 400]}
            text="Featured Products"
          />
          <Divider />
        </Box>
        <Masonry images={images} />
        <Box sx={{ my: 5, width: "100vw", height: "auto" }}>
          <Image fluid={heroTwo.asset.fluid} loading="lazy" />
        </Box>
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
        imageTwo {
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
        currency
        description {
          en
        }
        mainImage {
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
