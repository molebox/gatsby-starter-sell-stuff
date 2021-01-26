import React, { useContext, useRef, useEffect, useState } from "react";
import { Flex, Link, Text, Badge } from "theme-ui";
import { DispatchContext, StateContext } from "../context";
import Burger from "./burger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSiteMetadata } from "./../useSiteMetadata";
import { animateObjects, ListTLink, newContent } from "./layout";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
  const { title } = useSiteMetadata();
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const headerRef = useRef(null);
  const { cartCount } = useShoppingCart();

  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -100 },
        {
          scrollTrigger: {
            trigger: headerRef.current,
            toggleActions: "restart none none none",
            start: "center center",
          },
          opacity: 1,
          duration: 1.2,
          y: 0,
          delay: 1,
        }
      );
    }
  }, []);

  return (
    <Flex
      as="header"
      ref={headerRef}
      sx={{
        justifyContent: ["space-between"],
        alignItems: "center",
        gridArea: "nav",
        p: 3,
        zIndex: 9999,
        position: "sticky",
        top: 0,
        height: "80px",
        opacity: 1,
        backgroundColor: "background",
      }}
    >
      <Burger />
      <ListTLink
        to="/"
        activeClass="active"
        exit={{
          length: 0.6,
          trigger: ({ exit, e, node }) => animateObjects(exit, node),
        }}
        entry={{
          delay: 0.5,
          length: 0.6,
          trigger: ({ entry, node }) => newContent(node),
        }}
      >
        <Text as="h1" variant="siteTitle">
          {title}
        </Text>
      </ListTLink>
      <Flex>
        <Link
          sx={{
            fontFamily: "body",
            fontSize: [2, 4],
          }}
          activeClassName="active"
          variant="navLink"
          onClick={() =>
            dispatch({ type: "cartOpen", payload: !state.cartOpen })
          }
        >
          Cart
        </Link>
        {cartCount !== 0 ? (
          <Badge variant="circle" mt={2}>
            {cartCount}
          </Badge>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default Header;
