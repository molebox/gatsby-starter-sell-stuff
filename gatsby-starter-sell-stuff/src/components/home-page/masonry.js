import React, { useRef, useEffect } from "react";
import { Box, Flex, Text } from "theme-ui";
import Image from "gatsby-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLink from "./../base/animated-link";
import Overlay from "../base/overlay";
import { formatCurrencyString } from "use-shopping-cart";

// Inspired by => https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/

const Masonry = ({ products }) => {
  const productsRef = useRef([]);
  productsRef.current = [];

  const addToRefs = (el) => {
    if (el && !productsRef.current.includes(el)) {
      productsRef.current.push(el);
    }
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);

      productsRef.current.forEach((product, index) => {
        gsap.fromTo(
          product,
          {
            autoAlpha: 0,
          },
          {
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: product,
              start: "top top+=500",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: "0 auto",
        maxWidth: 1440,
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Text as="h1" variant="styles.h1">
        All Products
      </Text>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(auto, 300px))",
          width: "100%",
          maxWidth: 1440,
          gap: 3,
          // columnGap: 3,
          // columns: "4 300px",
          p: 2,
        }}
      >
        {products.map((product, index) => (
          <Box key={index} ref={addToRefs}>
            <AnimatedLink to={`/product/${product.slug.current}`}>
              <Flex
                key={index}
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-evenly",
                  p: 3,
                  backgroundColor: "secondary",
                  my: 3,
                }}
              >
                <Overlay text="shop" width={[300, 300]}>
                  <Box
                    sx={{
                      width: [300, 300],
                      height: "auto",
                      p: 2,
                    }}
                  >
                    <Image
                      fluid={product.mainImage.asset.fluid}
                      alt={`product-${product.slug.current}`}
                    />
                  </Box>
                </Overlay>
                <Text as="p" variant="relatedProductHeadingCategory">
                  {product.title}
                </Text>
                <Text as="p" variant="categoryPrice">
                  {formatCurrencyString({
                    value: product.price * 100,
                    currency: product.currency,
                    language: "en-US",
                  })}
                </Text>
              </Flex>
            </AnimatedLink>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default Masonry;
