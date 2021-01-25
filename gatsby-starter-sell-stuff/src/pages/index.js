import React from "react";
import { Flex, Box, Text, Divider, Button, Textarea } from "theme-ui";
import SEO from "react-seo-component";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { useSiteMetadata } from "../components/useSiteMetadata";
import Masonry from "../components/home-page/masonry";
import Showcase from "../components/product/showcase";

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
        <Flex
          sx={{
            flexDirection: ["column", "column", "row"],
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            height: "90vh",
          }}
        >
          <Box sx={{ width: [300, 400], height: "auto", position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: [30, 50],
                left: 0,
                borderRadius: "50%",
                width: [300, 400, 400],
                height: [300, 400, 400],
                backgroundColor: "text",
                zIndex: -999,
              }}
            />
            <Image fluid={hero.asset.fluid} loading="lazy" />
          </Box>
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              height: "auto",
              m: 3,
            }}
          >
            <Text as="h2" variant="callToAction">
              Start selling today
            </Text>
            <Flex sx={{ flexDirection: "column", my: 3 }}>
              <Text as="p" variant="styles.p">
                A super fast, static webshop built with Gatsby, Sanity, Stripe
                and Netlify.
              </Text>
            </Flex>
            <Button variant="standard">Shop Now</Button>
          </Flex>
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
