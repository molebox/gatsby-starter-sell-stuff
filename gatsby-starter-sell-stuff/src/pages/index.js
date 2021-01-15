import React from "react";
import { Box, Heading } from "theme-ui";
import Layout from "../components/general/layout";
import { graphql } from "gatsby";
import SectionOne from "../components/home-page/section-one";
import SectionTwo from "../components/home-page/section-two";
import SectionThree from "../components/home-page/section-three";

export default ({ data }) => {
  const sections = data.sanityHomePage;
  return (
    <Layout>
      <SectionOne secOne={sections.sectionOne} />
      <SectionTwo secTwo={sections.sectionTwo} />
      <SectionThree secThree={sections.sectionThree} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    sanityHomePage {
      sectionOne {
        title
        imageOne {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageTwo {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      sectionTwo {
        images {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
      }
      sectionThree {
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
      }
      featuredProducts {
        title
        slug {
          current
        }
        images {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
