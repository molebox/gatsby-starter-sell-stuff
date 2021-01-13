import React, { useContext, useEffect } from "react";
import { Flex, Text, Close, Grid, Spinner, Link } from "theme-ui";
import { StateContext, DispatchContext } from "../context";
import { gql, useLazyQuery } from "@apollo/client";
import { Link as GatsbyLink } from "gatsby";

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
        height: "calc(100vh - 100px)",
        padding: 1,
        flexGrow: 1,
        flexBasis: "sidebar",
        flexDirection: "column",
        alignItems: "center",
        background: "#ffffff",
      }}
    >
      <Flex>
        <Close
          sx={{
            position: "absolute",
            top: 1,
            left: 1,
            ":hover": {
              cursor: "crosshair",
            },
          }}
          onClick={() => dispatch({ type: "navOpen", payload: false })}
        />
        <Text as="h2" variant="cats">
          Categories
        </Text>
      </Flex>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Text as="p" sx={{ my: 5 }} variant="styles.p">
          {error.message}
        </Text>
      ) : (
        data && (
          <Grid
            columns="repeat(auto-fill, minmax(auto, 100px))"
            mt={5}
            visibility={state.navOpen ? "visible" : "hidden"}
          >
            {subCategories.map(({ title, slug }, index) => (
              <Link
                as={GatsbyLink}
                key={index}
                to={`/category/${slug.current}`}
                activeClassName="active"
                variant="navLink"
                onClick={() => dispatch({ type: "navOpen", payload: false })}
              >
                {title}
              </Link>
            ))}
          </Grid>
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
