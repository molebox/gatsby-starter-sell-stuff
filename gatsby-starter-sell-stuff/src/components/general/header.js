import React from "react";
import { Box } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Navbar from "./navbar";

const Header = () => {
  const data = useStaticQuery(query);

  const parentCategories = data.allSanityCategory.nodes
    .reduce((parents, node) => {
      if (node.isParentCategory) {
        parents.push(node);
      }
      return parents;
    }, [])
    .flat(2);

  // const uniqueSubCategories = Array.from(
  //   new Set(subCategories.map((parent) => parent.title))
  // ).map((title) => subCategories.find((parent) => parent.title === title));

  return (
    <Box as="header" variant="header">
      <Navbar uniqueParents={parentCategories} />
    </Box>
  );
};

export default Header;

export const query = graphql`
  query GetCategories {
    allSanityCategory {
      nodes {
        title
        slug {
          current
        }
        subCategories {
          title
          slug {
            current
          }
        }
        isParentCategory
      }
    }
  }
`;
