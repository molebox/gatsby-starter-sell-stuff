import React from "react";
import { Grid } from "theme-ui";
import Footer from "./footer";
import Header from "../base/header";
import Main from "./main";
import CategorySection from "./../base/category-section";

const Layout = ({ children }) => {
  return (
    <Grid variant="grids.layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Grid>
  );
};

export default Layout;
