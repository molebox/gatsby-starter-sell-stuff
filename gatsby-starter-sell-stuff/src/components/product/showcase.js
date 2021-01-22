import React from "react";
import { Flex, Box, Text } from "theme-ui";
import Image from "gatsby-image";
import { ListTLink, animateObjects, newContent } from "../base/layout";

const Showcase = ({ products }) => {
  return (
    <Flex
      sx={{
        gap: 2,
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        my: 4,
      }}
    >
      {products.map((product, index) => (
        <ListTLink
          key={index}
          to={`/product/${product.slug.current}`}
          activeClass="active"
          exit={{
            length: 0.6,
            trigger: ({ exit, e, node }) => animateObjects(exit, node),
          }}
          entry={{
            delay: 0.5,
            length: 0.6,
            trigger: ({ entry, node }) => newContent(node),
          }}
        >
          <Flex
            key={index}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-evenly",
              p: 3,
              backgroundColor: "secondary",
            }}
          >
            <Box
              sx={{
                width: [100, 200],
                height: "auto",
                p: 2,
              }}
            >
              <Image fluid={product.images[0].asset.fluid} />
            </Box>
            <Text as="p" variant="relatedProductHeadingCategory">
              {product.title}
            </Text>
            <Text as="p" variant="categoryPrice">
              ${product.price}
            </Text>
          </Flex>
        </ListTLink>
      ))}
    </Flex>
  );
};

export default Showcase;
