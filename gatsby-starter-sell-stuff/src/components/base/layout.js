/** @jsx jsx */
import { Grid, Flex, Box, jsx } from "theme-ui";
import React, { useRef } from "react";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import CategorySection from "./category-section";
import { graphql, useStaticQuery } from "gatsby";
import Cart from "../cart/cart";
import TransitionLink from "gatsby-plugin-transition-link";
import gsap from "gsap";

// Transition Link Component
export const ListTLink = (props, ...rest) => (
  <TransitionLink
    to={props.to}
    entry={props.entry}
    exit={props.exit}
    trigger={props.trigger}
    {...rest}
  >
    {props.children}
  </TransitionLink>
);

// hidden object animation
export function animateObjects() {
  let tl = gsap.timeline();
  tl.to(".layoutLi", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  });
  tl.to(".layoutLi", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
}

// new content to be faded in after animation
export function newContent(node) {
  return gsap.from(node.querySelectorAll("h1, h2, h3, h4, p, a, img "), {
    opacity: 0,
    delay: 1,
    duration: 2,
    stagger: 0.08,
  });
}

// const LI = () => (
//   <Box
//     as="li"
//     className="transition"
//     sx={{
//       transform: "scaleY(0)",
//       background: "secondary",
//       width: "20%",
//       listStyleType: "none",
//     }}
//   ></Box>
// );

// const TransitionGroup = () => (
//   <Flex
//     as="ul"
//     className="transition"
//     sx={{
//       position: "absolute",
//       zIndex: 10,
//       height: "101vh",
//       width: "100%",
//       top: 0,
//       left: 0,
//       margin: 0,
//       pointerEvents: "none",
//     }}
//   >
//     <LI />
//     <LI />
//     <LI />
//     <LI />
//     <LI />
//   </Flex>
// );

const Layout = ({ children }) => {
  const data = useStaticQuery(query);
  const categories = data.allSanityCategory.nodes || [];

  return (
    <Grid variant="grids.layout">
      {/* <TransitionGroup /> */}
      <ul
        className="transition"
        sx={{
          position: "absolute",
          zIndex: 10,
          height: "101vh",
          width: "100%",
          top: 0,
          left: 0,
          margin: 0,
          pointerEvents: "none",
        }}
      >
        <li
          className="layoutLi"
          sx={{
            transform: "scaleY(0)",
            background: "#fffffffff",
            width: "20%",
            listStyleType: "none",
          }}
        ></li>
        <li
          className="layoutLi"
          sx={{
            transform: "scaleY(0)",
            background: "#ffffff",
            width: "20%",
            listStyleType: "none",
          }}
        ></li>
        <li
          className="layoutLi"
          sx={{
            transform: "scaleY(0)",
            background: "#ffffff",
            width: "20%",
            listStyleType: "none",
          }}
        ></li>
        <li
          className="layoutLi"
          sx={{
            transform: "scaleY(0)",
            background: "#ffffff",
            width: "20%",
            listStyleType: "none",
          }}
        ></li>
        <li
          className="layoutLi"
          sx={{
            transform: "scaleY(0)",
            background: "#ffffff",
            width: "20%",
            listStyleType: "none",
          }}
        ></li>
      </ul>
      <CategorySection categories={categories} />
      <Cart />
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
