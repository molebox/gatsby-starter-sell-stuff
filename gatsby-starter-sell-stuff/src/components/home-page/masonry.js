import React, { useRef, useEffect } from "react";
import { Box } from "theme-ui";
import Image from "gatsby-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Inspired by => https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/

const Masonry = ({ images }) => {
  const imagesRef = useRef([]);
  imagesRef.current = [];

  const getRandomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);

      imagesRef.current.forEach((image, index) => {
        gsap.fromTo(
          image,
          {
            autoAlpha: 0,
          },
          {
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: image,
              start: "top center+=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <Box
      sx={{
        columnGap: "0",
        columns: "6 300px",
        p: 2,
        textAlign: "center",
        maxWidth: 1440,
        height: "100%",
      }}
    >
      {images.map((image, index) => (
        <Box ref={addToRefs} key={index}>
          {image.asset ? (
            <Image fixed={image.asset.fixed} loading="lazy" />
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default Masonry;
