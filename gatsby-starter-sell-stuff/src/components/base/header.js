import React, { useContext, useRef, useEffect } from "react";
import { Button, Box, Flex, Link } from "theme-ui";
import { DispatchContext } from "../context";
import CategoryDropdown from "./category-dropdown";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const dispatch = useContext(DispatchContext);
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
      }}
    >
      <CategoryDropdown />
      {/* <Link
        as={GatsbyLink}
        to="/"
        activeClassName="active"
        variant="navLink"
        sx={{
          alignSelf: ["center", "flex-start"],
        }}
      >
        {title}
      </Link> */}
      <Link
        sx={{
          fontFamily: "body",
        }}
        activeClassName="active"
        variant="navLink"
        onClick={() => dispatch({ type: "cartOpen", payload: true })}
      >
        CART
      </Link>
    </Flex>
  );
};

export default Header;
