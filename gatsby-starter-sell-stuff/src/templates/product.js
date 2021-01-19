import React from "react";
import { graphql } from "gatsby";
import { Box, Image, Text } from "theme-ui";
import Layout from "./../components/general/layout";
import ProductLayout from "../components/product/product-layout";

const Product = ({ data }) => {
  const product = data.product;
  const { title, price, images } = data.product;
  console.log({ product });

  return (
    <Layout>
      <ProductLayout>
        <Box sx={{ gridRow: 2, gridColumn: "2 / 5", textAlign: "center" }}>
          <Text as="h1" variant="productHeading">
            {title}
          </Text>
        </Box>
        <Box
          sx={{
            gridRow: 4,
            gridColumn: 1,
            textAlign: "center",
          }}
        >
          <Text as="h1" variant="productHeading">
            ${price}
          </Text>
        </Box>
        <Box
          sx={{
            gridRow: [1, 4],
            gridColumn: [5],
            textAlign: "center",
          }}
        >
          <Text as="h1" variant="productHeading">
            BUY
          </Text>
        </Box>
      </ProductLayout>
    </Layout>
  );
};

export default Product;

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      _id
      title
      price
      slug {
        current
      }
      images {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`;
