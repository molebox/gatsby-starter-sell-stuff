import React, { useRef, useEffect } from "react";
import { Flex, Box, Text } from "theme-ui";
import Image from "gatsby-image";
import { ListTLink, animateObjects, newContent } from "../base/layout";
import { formatCurrencyString } from "use-shopping-cart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Showcase = ({ products, imageSize }) => {
  const showcaseRef = useRef();
  showcaseRef.current = [];

  const getRandomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const addToRefs = (el) => {
    if (el && !showcaseRef.current.includes(el)) {
      showcaseRef.current.push(el);
    }
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.registerPlugin(ScrollTrigger);

      let TL = gsap.timeline();

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
            stagger: {
              amount: 1.5,
            },
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: showcase,
              start: "center center+=100",
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
        gap: 2,
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        my: 4,
      }}
    >
      {products.map((product, index) => (
        <Box ref={addToRefs}>
          <ListTLink
            key={index}
            to={`/product/${product.slug.current}`}
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
              <Box
                sx={{
                  width: imageSize,
                  height: "auto",
                  p: 2,
                }}
              >
                <Image fluid={product.images[0].asset.fluid} />
              </Box>
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
          </ListTLink>
        </Box>
      ))}
    </Flex>
  );
};

export default Showcase;
