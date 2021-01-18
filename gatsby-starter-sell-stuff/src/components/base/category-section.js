import React, { useContext, useEffect } from "react";
import { Flex } from "theme-ui";
import gsap from "gsap";

const CategorySection = () => {
  return (
    <Flex
      as="section"
      sx={{
        flexDirection: "column",
        gridArea: "cat",
        borderBottom: "solid 2px",
      }}
    >
      <Flex></Flex>
      {/* This section is hidden unless a parent category is selected */}
      <Flex></Flex>
    </Flex>
  );
};

export default CategorySection;

// const GET_CATEGORIES = gql`
//   query GetCategories($title: String!) {
//     allCategory(where: { title: { eq: $title } }) {
//       title
//       slug {
//         current
//       }
//       subCategories {
//         title
//         slug {
//           current
//         }
//       }
//     }
//   }
// `;
