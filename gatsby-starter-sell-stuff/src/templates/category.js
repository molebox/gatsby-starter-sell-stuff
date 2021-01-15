import React from "react";
import { graphql } from "gatsby";
import { formatCurrencyString } from "use-shopping-cart";
import { Flex, Image, Text } from "theme-ui";
import Layout from "./../components/general/layout";

const Category = ({ data }) => {
  const products = data.sanityCategory.products;

  return (
    <Layout>
      <Flex
        sx={{
          maxWidth: 1000,
          minHeight: 500,
          m: "0 auto",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          flexDirection: "column",
        }}
      >
        {products.map((product, index) => (
          <Flex
            sx={{
              justifyContent: "space-between",
              border: "solid 1px",
              flexDirection: ["column", "row"],
            }}
            key={index}
          >
            <Image
              variant="mainProduct"
              src={product.images[0].asset.fluid.src}
            />
            {/* <Img fluid={product.images[0].asset.fluid} /> */}
            <Flex
              sx={{
                flexDirection: "column",
                maxWidth: 300,
              }}
            >
              <Text>{product.title}</Text>
              <Text>
                {formatCurrencyString({
                  value: product.price,
                  currency: product.currency,
                })}
              </Text>
              <Text>{product.description.en}</Text>
            </Flex>
          </Flex>
        ))}
        {/* <Image src={images[0].assets} alt={}/> */}
      </Flex>
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query CategoryBySlug($slug: String) {
    sanityCategory(slug: { current: { eq: $slug } }) {
      products {
        id
        title
        price
        currency
        description {
          en
        }
        images {
          asset {
            fluid {
              src
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`;
