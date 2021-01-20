import React, { useRef, useEffect } from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Flex, Box, Text, Grid } from "theme-ui";
import Image from "gatsby-image";
import gsap from "gsap";
import Layout from "../components/base/layout";
import Link from "gatsby-plugin-transition-link";

const Category = ({ data }) => {
  const products = data.category.products;
  const title = data.category.title;
  const description = data.category.description;
  // const productRef = useRef([]);
  // productRef.current = [];

  // const getRandomInteger = (min, max) =>
  // Math.floor(Math.random() * (max - min + 1) + min);

  // const addToRefs = (el) => {
  //   if (el && !productRef.current.includes(el)) {
  //     productRef.current.push(el);
  //   }
  // };
  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     let TL = gsap.timeline();

  //     TL.from(productRef.current, {
  //       delay: 1,
  //       opacity: 0,
  //       duration: 3,
  //       ease: "power3",
  //       x: () => "+=" + getRandomInteger(-100, 100) + "%",
  //       y: () => "+=" + getRandomInteger(-100, 100) + "%",
  //       // rotation: () => getRandomInteger(-20, 20),
  //     }).play();
  //   }
  // }, []);

  const handlePageTransition = (exit, node) => {
    // on exit node = current page
    // on entry node = new page
    gsap.to(node, {
      duration: 1,
      scale: 0,
      y: 40,
      ease: "power1.inOut",
    });
  };

  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text as="h1" variant="categoryHeading">
          {title}
        </Text>
        <Text as="p" variant="styles.p">
          {description}
        </Text>
        <Grid
          columns={["repeat(2, 1fr)", "repeat(auto-fit, minmax(auto, 500px))"]}
          sx={{
            p: 2,
            maxWidth: 1440,
            height: "100%",
          }}
        >
          {products.map((product, index) => {
            const { title, slug, price, mainImage } = product;
            return (
              <Link
                key={index}
                to={`/product/${slug.current}`}
                sx={{ textDecoration: "none", m: 3 }}
                activeClass="active"
                exit={{
                  trigger: ({ exit, node }) => handlePageTransition(exit, node),
                  length: 1.5,
                }}
                entry={{
                  delay: 0.6,
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
                      width: [150, 400],
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
              </Link>
            );
          })}
        </Grid>
      </Flex>
    </Layout>
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
