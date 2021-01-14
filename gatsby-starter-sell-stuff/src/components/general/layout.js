import React from "react";
import { Box } from "theme-ui";
import Footer from "./footer";
import Header from "./header";
import Main from './main';
import Categories from './categories';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        p: 2,
        width: "100%",
        gap: 0,
        display: "grid",
        gridTemplateAreas: [
          `
       'nav'
       'main'
       'footer'
       `,
          `
       'nav   nav   nav   nav'
       'main  main  main  main'
       'footer  footer  footer footer'
       `,
        ],
        gridTemplateColumns: ["auto", "repeat(4, 1fr)"],
        gridTemplateRows: "minmax(auto, 100px) 1fr minmax(auto, 50px)",
        height: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Categories />
      <Header />
      <Main>
        {children}  
      </Main>
      <Footer />
    </Box>
  );
};

export default Layout;
