import React from "react";
import { graphql } from "gatsby";
import { Flex, Box, Text, Grid, Link } from "theme-ui";
import Image from "gatsby-image";
import {
  ListTLink,
  animateObjects,
  newContent,
} from "./../components/base/layout";

const Category = ({ data }) => {
  const products = data.category.products;
  const title = data.category.title;
  const description = data.category.description;

  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        m: 2,
      }}
    >
      <Text as="h1" variant="categoryHeading">
        {title}
      </Text>
      <Text as="p" variant="styles.p" sx={{ textAlign: "center" }}>
        {description}
      </Text>
      <Grid
        columns={["1fr", "repeat(auto-fit, minmax(auto, 500px))"]}
        sx={{
          p: 2,
          maxWidth: 1440,
          height: "100%",
        }}
      >
        {products.map((product, index) => {
          const { title, slug, price, mainImage } = product;
          return (
            <ListTLink
              key={index}
              to={`/product/${slug.current}`}
              // sx={{ textDecoration: "none", m: 3 }}
              // activeClass="active"
              exit={{
                length: 0.6,
                trigger: ({ exit, e, node }) => animateObjects(exit, node),
              }}
              entry={{
                delay: 0.5,
                length: 0.6,
                trigger: ({ entry, node }) => newContent(node),
              }}
            >
              <Flex
                // ref={addToRefs}
                key={index}
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-evenly",
                  p: 3,
                  // border: "solid 2px",
                  // borderColor: 'text',
                  backgroundColor: "secondary",
                  // minHeight: 800
                }}
              >
                <Box
                  sx={{
                    width: [250, 400],
                    height: "auto",
                    p: 2,
                  }}
                >
                  <Image fluid={mainImage.asset.fluid} />
                </Box>
                <Text as="p" variant="productHeadingCategory">
                  {title}
                </Text>
                <Text as="p" variant="categoryPrice">
                  ${price}
                </Text>
              </Flex>
            </ListTLink>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Category;

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      title
      description
      products {
        _id
        title
        price
        slug {
          current
        }
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
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
//   query CategoryBySlug($slug: String) {
//     sanityCategory(slug: { current: { eq: $slug } }) {
//       products {
//         id
//         title
//         price
//         currency
//         description {
//           en
//         }
//         images {
//           asset {
//             fluid {
//               src
//             }
//           }
//         }
//         slug {
//           current
//         }
//       }
//     }
//   }
// `;
