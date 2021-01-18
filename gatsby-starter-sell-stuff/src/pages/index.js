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
          alignItems: "start",
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {categories.map((category) => {
            const numberOfProducts = category.products.length
              ? category.products.length
              : 0;
            return (
              <Flex key={category.id} sx={{ alignItems: "center" }}>
                <Link
                  as={GatsbyLink}
                  to={`/category/${category.slug.current}`}
                  activeClassName="active"
                  variant="navLink"
                  sx={{
                    fontSize: [6, 8],
                  }}
                >
                  {category.title}
                </Link>
                <Text
                  as="p"
                  variant="styles.h2"
                  sx={{
                    ml: 3,
                  }}
                >
                  - {numberOfProducts}
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <Text as="h1" variant="styles.h1" sx={{ my: 5 }}>
            Featured Products
          </Text>
          <Grid
            columns={["auto", "repeat(3, 450px)"]}
            sx={{ height: 400 }}
            gap={1}
          >
            {featuredProducts.map((product, index) => {
              return (
                <Box
                  sx={{
                    width: [200, 450],
                    height: "auto",
                  }}
                  key={index}
                >
                  <Flex
                    sx={{
                      border: "solid 1px",
                      p: 2,
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <Text as="h2" variant="styles.p">
                      {product.title}
                    </Text>
                  </Flex>
                  <Image fluid={product.images[0].asset.fluid} />
                  <Text as="p" variant="styles.p" sx={{ p: 2 }}>
                    {product.description.en}
                  </Text>
                </Box>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allSanityCategory {
      nodes {
        id
        title
        slug {
          current
        }
        products {
          _id
          title
          price
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
    sanityHomePage {
      featuredProducts {
        title
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
