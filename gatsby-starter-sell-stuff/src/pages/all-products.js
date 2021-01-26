import React from "react";
import { Flex } from "theme-ui";
import { graphql } from "gatsby";
import Masonry from "../components/home-page/masonry";

const AllProducts = ({ data }) => {
  return (
    <Flex>
      <Masonry products={data.allSanityProduct.nodes} />
    </Flex>
  );
};

export default AllProducts;

export const query = graphql`
  query AllProductsQuery {
    allSanityProduct {
      nodes {
        title
        slug {
          current
        }
        price
        currency
        mainImage {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
