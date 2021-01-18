import React from "react";
import { graphql } from "gatsby";
import { formatCurrencyString } from "use-shopping-cart";
import { Flex, Image, Text } from "theme-ui";
import Layout from "./../components/general/layout";

const Product = ({ data }) => {
  // const products = data.sanityCategory.products;
  console.log({ data });

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
      ></Flex>
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
