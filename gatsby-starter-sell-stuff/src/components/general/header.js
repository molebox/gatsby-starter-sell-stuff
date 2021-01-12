import React from "react";
import { Box } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Navbar from "./navbar";

const Header = () => {
  const data = useStaticQuery(query);

  const parents = data.allSanityCategory.nodes
    .reduce((parents, node) => {
      if (node.parents.length) {
        parents.push(node.parents);
      }
      return parents;
    }, [])
    .flat(2);

  const uniqueParents = Array.from(
    new Set(parents.map((parent) => parent.title))
  ).map((title) => parents.find((parent) => parent.title === title));

  return (
    <Box as="header" variant="header">
      <Navbar uniqueParents={uniqueParents} />
    </Box>
  );
};

export default Header;

export const query = graphql`
  query CategoriesQuery {
    allSanityCategory {
      nodes {
        parents {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;
