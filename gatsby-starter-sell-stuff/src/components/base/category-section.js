import React, { useEffect, useContext } from "react";
import { Divider, Flex, Link, Text } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import gsap from "gsap";
import { DispatchContext, StateContext } from "./../context";
import { globalHistory } from "@reach/router";
import Dropdown from "./dropdown";

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
      sx={{
        top: state.navOpen ? 0 : -1000,
        transition: "top 650ms ease-in-out",
        position: "fixed",
        bottom: 0,
        width: "100vw",
        height: "100%",
        padding: 1,
        flexGrow: 1,
        flexBasis: "sidebar",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background",
        zIndex: 100,
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
        <Link
          as={GatsbyLink}
          to="/all-products"
          activeClassName="active"
          variant="linkEffect"
          sx={{
            fontSize: [3, 4],
          }}
        >
          All Products
        </Link>
        <Divider />

          <Dropdown categories={categories} title="Categories"/>
      </Flex>
    </Flex>
  );
};

export default CategorySection;
