import React, { useContext, useEffect } from "react";
import { Flex, Text, Spinner, Link } from "theme-ui";
import { StateContext, DispatchContext } from "../context";
import { gql, useLazyQuery } from "@apollo/client";
import { Link as GatsbyLink } from "gatsby";
import { globalHistory } from "@reach/router";

const Categories = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const [loadCategories, { loading, error, data }] = useLazyQuery(
    GET_CATEGORIES,
    {
      variables: {
        title: state.selectedParentCategory,
      },
    }
  );

  useEffect(() => {
    loadCategories();
  }, [state.selectedParentCategory, loadCategories]);

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

  const subCategories =
    data &&
    data.allCategory
      .reduce((subCategories, node) => {
        if (node.subCategories.length) {
          subCategories.push(node.subCategories);
        }
        return subCategories;
      }, [])
      .flat(2);

  return (
    <Flex
      as="aside"
      sx={{
        transition: "right 250ms ease-in-out",
        position: "fixed",
        bottom: 0,
        right: state.navOpen ? 0 : -500,
        width: ["100%", 500],
        // height: "calc(100vh - 120px)",
        height: "100%",
        padding: 1,
        flexGrow: 1,
        flexBasis: "sidebar",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "subtle",
        zIndex: 100,
      }}
    >
      <Flex
        sx={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "90%",
          mt: 6,
          zIndex: 100,
        }}
      >
        {/* <Text as="h2" variant="cats">
          Categories
        </Text> */}
        <Text
          sx={{
            ":hover": {
              cursor: "crosshair",
            },
            mb: 1,
          }}
          as="p"
          onClick={() => dispatch({ type: "navOpen", payload: false })}
        >
          Close
        </Text>
      </Flex>

      {loading ? (
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
          }}
        >
          <Spinner variant="styles.spinner" />
        </Flex>
      ) : error ? (
        <Text as="p" sx={{ my: 5 }} variant="styles.p">
          {error.message}
        </Text>
      ) : (
        data && (
          <Flex
            sx={{
              flexDirection: "column",
              width: "90%",
              justifyContent: "start",
            }}
            mt={5}
            visibility={state.navOpen ? "visible" : "hidden"}
          >
            {subCategories.map(({ title, slug }, index) => (
              <Link
                as={GatsbyLink}
                key={index}
                to={`/category/${slug.current}`}
                activeClassName="active"
                variant="linkEffect"
                sx={{ fontSize: 4 }}
              >
                {title}
              </Link>
            ))}
          </Flex>
        )
      )}
    </Flex>
  );
};

export default Categories;

// export const query = graphql`
// query GetParentCategories {
//   allSanityCategory(filter: {isParent: {eq: true}}) {
//     nodes {
//       title
//       slug {
//         current
//       }
//     }
//   }
// }
// `;

const GET_CATEGORIES = gql`
  query GetCategories($title: String!) {
    allCategory(where: { title: { eq: $title } }) {
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
    }
  }
`;

// export const query = graphql`
//   query GetCategoryChildren($title: String!) {
//     allSanityCategory(
//       filter: { parents: { elemMatch: { title: { eq: $title } } } }
//     ) {
//       nodes {
//         title
//         slug {
//           current
//         }
//       }
//     }
//   }
// `;
