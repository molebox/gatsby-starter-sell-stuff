import React, { useRef, useEffect, useState } from "react";
import { Box, Flex, Link, Text, Grid } from "theme-ui";
import Layout from "../components/general/layout";
import { graphql, Link as GatsbyLink } from "gatsby";
import Image from "gatsby-image";
import gsap from "gsap";

export default ({ data }) => {
  console.log({ data });
  const categories = data.allSanityCategory.nodes || [];
  const featuredProducts = data.sanityHomePage.featuredProducts;
  console.log({ featuredProducts });

  // const getRandomInteger = (min, max) =>
  //   Math.floor(Math.random() * (max - min + 1) + min);

  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     let TL = gsap.timeline({
  //       duration: 1,
  //       ease: 'expo',
  //       startAt: {y: '10%'},
  //       y: '0%',
  //     });

  //     if (images.length) {
  //       TL.from(imageRef.current, {
  //         duration: 2.5,
  //         ease: 'power3',
  //         x: () => '+='+getRandomInteger(-100,100)+'%',
  //         y: () => '+='+getRandomInteger(-100,100)+'%',
  //         rotation: () => getRandomInteger(-20,20)
  //         // duration: 1,
  //         // ease: 'power3',
  //         // x: 0,
  //         // y: 0,
  //         // opacity: 1,
  //         // rotation: () => getRandomInteger(-20,20),
  //         // delay: 1
  //       }).play()
  //     }

  //   }
  // }, [images]);

  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          alignItems: ["center"],
          justifyContent: ["start", "space-around"],
          height: "100%",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        ></Flex>
      </Flex>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    sanityHomePage {
      featuredProducts {
        title
        price
        slug {
          current
        }
        description {
          en
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

// export const query = graphql`
//   query MyQuery {
//     sanityHomePage {
//       sectionOne {
//         title
//         imageOne {
//           asset {
//             fluid(maxWidth: 1000) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//         imageTwo {
//           asset {
//             fluid(maxWidth: 1000) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//       sectionTwo {
//         images {
//           asset {
//             fluid {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//         title
//       }
//       sectionThree {
//         image {
//           asset {
//             fluid {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//         title
//       }
//       featuredProducts {
//         title
//         slug {
//           current
//         }
//         images {
//           asset {
//             fluid {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
