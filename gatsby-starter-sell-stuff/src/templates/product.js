import React, { useState } from "react";
import { graphql } from "gatsby";
import { Box, Text, Flex } from "theme-ui";
import Image from "gatsby-image";
import ProductLayout from "../components/product/product-layout";

const Product = ({ data }) => {
  const { title, price, description, mainImage, images } = data.product;
  const [selectedImage, setSelectedImage] = useState(images[0].asset.fluid);
  return (
    <Flex
      sx={{
        flexDirection: ["column", "row"],
        overflowY: "hidden",
        height: "calc(100% + 80px)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: ["100%", "40%"],
        }}
      >
        <Box sx={{ width: "auto" }}>
          <Image fluid={mainImage.asset.fluid} loading="eager" />
        </Box>
      </Box>

      <Flex
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
          <Image fluid={images[0].asset.fluid} loading="eager" />
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
              ${price}
            </Text>
          </Box>
          <Box
            sx={{
              backgroundColor: "text",
              p: 3,
            }}
          >
            <Text
              as="h1"
              variant="productHeading"
              sx={{ color: "background", textTransform: "uppercase" }}
            >
              buy
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
    // <ProductLayout>
    //   <Box
    //     as="section"
    //     sx={{ gridRow: 1, gridColumn: "2 / 6", textAlign: "center" }}
    //   >
    //     <Text as="h1" variant="productHeading">
    //       {title}
    //     </Text>
    //   </Box>

    //   <Flex sx={{ gridRow: [3, 2], gridColumn: ['2 / 6', 2], flexDirection: ['row', 'column'], justifyContent: 'space-evenly' }}>
    //     {images.map((image, index) => (
    //       <Box
    //         key={index}
    //         sx={{ width: [100, 150], height: "auto", backgroundColor: "text", p: 3, ":hover": {cursor: 'crosshair'} }}
    //         onClick={() => setSelectedImage(image.asset.fluid)}
    //       >
    //         <Image fluid={image.asset.fluid} loading="eager" />
    //       </Box>
    //     ))}
    //   </Flex>

    //   <Flex
    //     as="section"
    //     sx={{
    //       gridRow: 2,
    //       gridColumn: "3 / 6",
    //       justifyContent: "space-evenly",
    //       alignItems: "center",
    //       p: 2,
    //       flexDirection: "column",
    //     }}
    //   >
    //     <Box sx={{ width: [200, 400], height: "auto", backgroundColor: "text", p: 3 }}>
    //       <Image fluid={selectedImage} loading="eager" />
    //     </Box>
    //     <Box sx={{ width: "100%" }}>
    //       <Text as="p" variant="styles.p">
    //         {description.en}
    //       </Text>
    //     </Box>
    //   </Flex>
    //   <Box
    //     as="aside"
    //     sx={{
    //       gridRow: 3,
    //       gridColumn: 1,
    //       textAlign: "center",
    //     }}
    //   >
    //     <Text as="h1" variant="productHeading">
    //       ${price}
    //     </Text>
    //   </Box>
    //   <Box
    //     as="aside"
    //     sx={{
    //       gridRow: 3,
    //       gridColumn: [5],
    //       textAlign: "center",
    //     }}
    //   >
    //     <Text as="h1" variant="productHeading">
    //       BUY
    //     </Text>
    //   </Box>
    // </ProductLayout>
  );
};

export default Product;

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      _id
      title
      price
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
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
