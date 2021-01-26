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

  const images = data.sanityHomePage.images;
  const hero = data.sanityHomePage.sectionOne.imageOne;
  const sectionTwo = data.sanityHomePage.sectionTwo;
  const brandDescOne = sectionTwo.brandDescriptionOne;
  const brandDescTwo = sectionTwo.brandDescriptionTwo;

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
        <Flex
          as="section"
          sx={{
            flexDirection: "column",
            backgroundColor: "muted",
            p: 2,
          }}
        >
          <Flex variant="homePageBrandDescriptionLayout">
            <Box variant="homePageBrandDescriptionImage">
              <Image fluid={brandDescOne.image.asset.fluid} />
            </Box>
            <Flex variant="homePageBrandDescriptionText" sx={{ order: [0, 1] }}>
              <Text
                as="h3"
                variant="styles.h2"
                sx={{ my: 3, textAlign: ["center", "start"] }}
              >
                {brandDescOne.title}
              </Text>
              <Text as="p" variant="styles.p">
                {brandDescOne.description}
              </Text>
            </Flex>
          </Flex>

          <Flex variant="homePageBrandDescriptionLayout">
            <Flex
              variant="homePageBrandDescriptionText"
              sx={{
                order: [1, 0],
              }}
            >
              <Text
                as="h3"
                variant="styles.h2"
                sx={{ my: 3, textAlign: ["center", "start"] }}
              >
                {brandDescTwo.title}
              </Text>
              <Text as="p" variant="styles.p">
                {brandDescTwo.description}
              </Text>
            </Flex>
            <Box sx={{ width: [300, 400, 800], height: "auto" }}>
              <Image fluid={brandDescTwo.image.asset.fluid} />
            </Box>
          </Flex>
        </Flex>
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
      sectionTwo {
        brandDescriptionOne {
          title
          description
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        brandDescriptionTwo {
          title
          description
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
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
        mainImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
