import React, { useContext, useRef, useEffect } from "react";
import { Flex, Link, Text } from "theme-ui";
import { DispatchContext, StateContext } from "../context";
import Burger from "./burger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSiteMetadata } from "./../useSiteMetadata";
import { animateObjects, ListTLink, newContent } from "./layout";

const Header = () => {
  const { title } = useSiteMetadata();
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const headerRef = useRef(null);

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
        opacity: 0.2,
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
      <Link
        sx={{
          fontFamily: "body",
          textTransform: "uppercase",
          fontSize: [2, 4],
        }}
        activeClassName="active"
        variant="navLink"
        onClick={() => dispatch({ type: "cartOpen", payload: !state.cartOpen })}
      >
        cart
      </Link>
    </Flex>
  );
};

export default Header;
