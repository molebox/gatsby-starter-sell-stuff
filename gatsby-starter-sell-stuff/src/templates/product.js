import React, { useContext, useState } from "react";
import { graphql } from "gatsby";
import { Box, Text, Flex, Button } from "theme-ui";
import Image from "gatsby-image";
import { DispatchContext } from "../components/context";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import RelatedProducts from "../components/product/showcase";

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
    sku,
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
    addItem(
      {
        name: title,
        id: productId.current,
        price: price * 100,
        currency,
        sku: sku,
        image: images[0].asset.url,
      },
      1
    );
    dispatch({ type: "cartOpen", payload: true });
  };

  return (
    <Flex variant="productLayout">
      <Box
        as="section"
        sx={{
          width: ["100%", "50%"],
        }}
      >
        <Box sx={{ width: "auto" }}>
          <Image fluid={mainImage.asset.fluid} loading="lazy" />
        </Box>
      </Box>

      <Flex as="section" variant="productInfoLayout">
        <Text as="h1" variant="productHeading" sx={{ my: 3 }}>
          {title}
        </Text>

        <Flex variant="productImagesOuterLayout">
          <Flex variant="productImageThumbsLayout">
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
          <Box variant="productImageMainLayout">
            <Image fluid={selectedImage} loading="lazy" />
          </Box>
        </Flex>

        <Box>
          <Text as="p" variant="styles.p" sx={{ maxWidth: 700, my: 3 }}>
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
                add to cart
              </Text>
            </Button>
          </Box>
        </Flex>
        <Box sx={{ maxWidth: 700, textAlign: "center" }}>
          <RelatedProducts
            products={categories[0].products}
            imageSize={[100, 200]}
            text="You might also like"
          />
        </Box>
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
      sku
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
          currency
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
