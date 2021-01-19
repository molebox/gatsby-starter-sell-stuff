import React from "react";
import { Grid } from "theme-ui";
import Footer from "./footer";
import Header from "../base/header";
import Main from "./main";
import CategorySection from "./../base/category-section";
import { graphql, useStaticQuery } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(query);
  const categories = data.allSanityCategory.nodes || [];
  return (
    <Grid variant="grids.layout">
      <CategorySection categories={categories} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Grid>
  );
};

export default Layout;

export const query = graphql`
  query AllCategoriesQuery {
    allSanityCategory {
      nodes {
        title
        slug {
          current
        }
        products {
          _id
        }
      }
    }
  }
`;
