import React, { useContext, useState } from "react";
import { graphql } from "gatsby";
import { Box, Text, Flex, Button } from "theme-ui";
import Image from "gatsby-image";
import ProductLayout from "../components/product/product-layout";
import { DispatchContext } from "../components/context";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import RelatedProducts from "../components/product/related-products";

const Product = ({ data }) => {
  const {
    title,
    productId,
    price,
    currency,
    description,
    mainImage,
    images,
    categories,
  } = data.product;
  const dispatch = useContext(DispatchContext);
  const [selectedImage, setSelectedImage] = useState(images[0].asset.fluid);
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
          alignSelf: "start",
          p: 3,
          gap: 1,
        }}
      >
        <Text as="h1" variant="productHeading" sx={{ my: 3 }}>
          {title}
        </Text>

        <Flex
          sx={{
            gap: 1,
            justifyContent: ["space-around"],
            alignItems: "center",
            width: [300, 600, 800],
            flexDirection: ["column", "row"],
          }}
        >
          <Flex
            sx={{
              flexDirection: ["row", "column"],
              justifyContent: "space-evenly",
              gap: 1,
              my: [3, null],
            }}
          >
            {images.map((image, index) => (
              <Box
                sx={{
                  width: [100, 200],
                  height: "auto",
                  backgroundColor: "text",
                  p: 2,
                  cursor: "crosshair",
                }}
                key={index}
                onClick={() => setSelectedImage(image.asset.fluid)}
              >
                <Image fluid={image.asset.fluid} loading="lazy" />
              </Box>
            ))}
          </Flex>
          <Box
            sx={{
              width: [200, 400],
              height: "auto",
              backgroundColor: "text",
              p: 3,
              boxShadow: "7px 8px 2px 0px hsla(0,0%,0%,0.2)",
            }}
          >
            <Image fluid={selectedImage} loading="lazy" />
          </Box>
        </Flex>

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
          <Flex
            sx={{
              alignItems: "flex-end",
            }}
          >
            <Text as="h1" variant="productHeading" sx={{ color: "text" }}>
              {formattedPrice}
            </Text>
          </Flex>
          <Box
            sx={{
              backgroundColor: "text",
              p: 3,
              boxShadow: "7px 8px 2px 0px hsla(0,0%,0%,0.2)",
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
        <Text as="h2" variant="productSubHeading" sx={{ mt: 5 }}>
          You might also like
        </Text>
        <RelatedProducts products={categories[0].products} />
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
      categories {
        products {
          title
          slug {
            current
          }
          price
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
  }
`;
