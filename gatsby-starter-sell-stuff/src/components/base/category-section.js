import React, { useEffect, useContext } from "react";
import { Flex, Link, Text, Box } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import gsap from "gsap";
import { DispatchContext, StateContext } from "./../context";
import { globalHistory } from "@reach/router";

const CategorySection = ({ categories }) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    if (typeof window !== undefined) {
      let TL = gsap.timeline();
    }
  }, []);

  useEffect(() => {
    // If the route has changed it means the user has clicked on a category and we want to wait half a second then close the pop out
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        const timer = setTimeout(() => {
          dispatch({ type: "navOpen", payload: false });
        }, 500);

        return () => clearTimeout(timer);
      }
    });
  }, [state.navOpen, dispatch]);

  return (
    <Flex
      as="section"
      variant="categorySection"
      sx={{
        top: state.navOpen ? 0 : -1000,
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          maxWidth: 1440,
        }}
      >
        {categories.map((category, index) => {
          const numberOfProducts = category.products.length
            ? category.products.length
            : 0;
          return (
            <Flex
              key={index}
              sx={{ alignItems: "center", width: "max-content" }}
            >
              <Box variant="linkEffect">
                <Link
                  as={GatsbyLink}
                  to={`/category/${category.slug.current}`}
                  activeClassName="active"
                  variant="navLink"
                  sx={{
                    fontSize: [6, 8],
                  }}
                >
                  {category.title}
                </Link>
              </Box>
              <Text
                as="p"
                variant="styles.h2"
                sx={{
                  ml: 3,
                }}
              >
                - {numberOfProducts}
              </Text>
            </Flex>
          );
        })}
      </Flex>
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
