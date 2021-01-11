import React, { useState } from "react";
import { Flex, Text, Box } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";

const Categories = () => {
  const [open, setOpen] = useState(false);
  const data = useStaticQuery(query);
  // const categories = [...new Set(data.allStripePrice.nodes)];
  const categories = data.allStripePrice.nodes;
  console.log({ categories });
  const openSidebar = () => setOpen(!open);

  const uniqueCategories = categories.reduce((unique, item) => {
    console.log({ item });
    console.log({ unique });
    return unique.includes(item.product.metadata.Category)
      ? unique
      : [...unique, item];
  }, []);
  console.log({ uniqueCategories });

  return (
    <Flex
      as="aside"
      sx={{
        transition: ["height 250ms ease-in-out", "left 250ms ease-in-out"],
        position: ["fixed"],
        top: [0],
        left: [null, open ? 0 : -420],
        width: ["100%", 500],
        height: [open ? 200 : 80, "100%"],
        padding: 1,
        borderRight: [null, "solid 1px"],
        flexGrow: 1,
        flexBasis: "sidebar",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: 'center',
        // alignItems: ['center', 'flex-end'],
        background: "#ffffff",
      }}
      // sx={{
      //     flexGrow: 1,
      //     flexBasis: 'sidebar',
      //     flexDirection: 'column',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     borderRight: [null, 'solid 1px']
      // }}
    >
      <Flex
        onClick={openSidebar}
        sx={{
          marginRight: -20,
          height: "100%",
          ":hover": {
            cursor: "crosshair",
          },
        }}
      >
        <Text as="h2" variant="cats">
          Categories
        </Text>
      </Flex>
      <Flex
        sx={{
          visibility: open ? "visible" : "hidden",
          flexDirection: "column",
        }}
      >
        {categories.map(({ product }, index) => (
          <Text as="p" variant="styles.p" key={index}>
            {product.metadata.Category}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Categories;

export const query = graphql`
  query GetCategories {
    allStripePrice {
      nodes {
        product {
          metadata {
            Category
          }
        }
      }
    }
  }
`;
