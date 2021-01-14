import React from "react";
import { Grid } from "theme-ui";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Categories from "./categories";

const Layout = ({ children }) => {
  return (
    <Grid variant="grids.layout">
      <Categories />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Grid>
  );
};

export default Layout;
