import React, { useContext, useState } from "react";
import { graphql } from "gatsby";
import { Box, Text, Flex, Button } from "theme-ui";
import Image from "gatsby-image";
import ProductLayout from "../components/product/product-layout";
import { DispatchContext } from "../components/context";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const Product = ({ data }) => {
  const {
    title,
    productId,
    price,
    currency,
    description,
    mainImage,
    images,
  } = data.product;
  const dispatch = useContext(DispatchContext);
  const { addItem } = useShoppingCart();

  const formattedPrice = formatCurrencyString({
    value: price * 100,
    currency: currency,
    language: "en-US",
  });

  const addToCart = () => {
    dispatch({ type: "cartOpen", payload: true });
    addItem(
      {
        name: title,
        // description: description.en,
        id: productId.current,
        price: price * 100,
        currency,
        image: images[0].asset.url,
      },
      1
    );
  };

  return (
    <Flex
      sx={{
        flexDirection: ["column", "row"],
        overflowY: "hidden",
        height: "100%",
        height: "calc(100% + 80px)",
        position: "relative",
      }}
    >
      <Box
        as="section"
        sx={{
          width: ["100%", "40%"],
        }}
      >
        <Box sx={{ width: "auto" }}>
          <Image fluid={mainImage.asset.fluid} loading="lazy" />
        </Box>
      </Box>

      <Flex
        as="section"
        sx={{
          width: ["100%", "60%"],
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
          p: 3,
        }}
      >
        <Text as="h1" variant="productHeading" sx={{ my: 2 }}>
          {title}
        </Text>
        <Box
          sx={{
            width: [200, 400],
            height: "auto",
            backgroundColor: "text",
            p: 3,
          }}
        >
          <Image fluid={images[0].asset.fluid} loading="lazy" />
        </Box>

        <Box>
          <Text as="p" variant="styles.p" sx={{ maxWidth: 800, my: 3 }}>
            {description.en}
          </Text>
        </Box>

        <Flex
          sx={{
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "text",
              p: 3,
            }}
          >
            <Text as="h1" variant="productHeading" sx={{ color: "background" }}>
              {formattedPrice}
            </Text>
          </Box>
          <Box
            sx={{
              backgroundColor: "text",
              p: 3,
            }}
          >
            <Button
              sx={{
                backgroundColor: "text",
                cursor: "crosshair",
              }}
              onClick={addToCart}
            >
              <Text
                as="h1"
                variant="productHeading"
                sx={{ color: "background", textTransform: "uppercase" }}
              >
                buy
              </Text>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Product;

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      productId {
        current
      }
      title
      price
      currency
      description {
        en
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
          url
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
