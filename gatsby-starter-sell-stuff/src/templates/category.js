import React from "react";
import { graphql } from "gatsby";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { Flex, Image, Text } from "theme-ui";
import Layout from "./../components/general/layout";
import Main from "../components/general/main";
import Img from "gatsby-image";
import Categories from "./../components/general/categories";

const Category = ({ data }) => {
  console.log({ data });
  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    addItem,
    removeItem,
    clearCart,
  } = useShoppingCart();
  const products = data.sanityCategory.products;

  // console.log(
  //   props.data.sanityCategory
  // )

  return (
    <Layout>
      <Categories />
      <Main>
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
          {products.map((product) => (
            <Flex
              sx={{
                justifyContent: "space-between",
                border: "solid 1px",
              }}
            >
              <Image src={product.images[0].asset.fluid.src} />
              {/* <Img fluid={product.images[0].asset.fluid} /> */}
              <Flex
                sx={{
                  flexDirection: "column",
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
      </Main>
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
