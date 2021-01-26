import React, { useRef, useEffect } from "react";
import { Flex, Box, Text } from "theme-ui";
import Image from "gatsby-image";
import { formatCurrencyString } from "use-shopping-cart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Overlay from "../base/overlay";
import AnimatedLink from "./../base/animated-link";

const Showcase = ({ products, imageSize, showMain, text }) => {
  const showcaseTitleRef = useRef();
  const showcaseRef = useRef();
  showcaseRef.current = [];

  const addToRefs = (el) => {
    if (el && !showcaseRef.current.includes(el)) {
      showcaseRef.current.push(el);
    }
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        showcaseTitleRef.current,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: showcaseTitleRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
      showcaseRef.current.forEach((showcase, index) => {
        gsap.fromTo(
          showcase,
          {
            autoAlpha: 0,
          },
          {
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: showcase,
              start: "top center+=100",
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
      }}
    >
      <Text
        ref={showcaseTitleRef}
        as="h2"
        variant="productSubHeading"
        sx={{
          mt: 5,
          width: "max-content",
          alignSelf: "center",
        }}
      >
        {text}
      </Text>
      <Flex
        sx={{
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          my: 4,
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
                }}
              >
                <Overlay text="shop" width={imageSize}>
                  <Box
                    sx={{
                      width: imageSize,
                      height: "auto",
                      p: 2,
                    }}
                  >
                    <Image
                      fluid={
                        showMain
                          ? product.mainImage.asset.fluid
                          : product.images[0].asset.fluid
                      }
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
      </Flex>
    </Flex>
  );
};

export default Showcase;
