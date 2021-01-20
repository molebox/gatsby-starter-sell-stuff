import React, { useRef, useEffect } from "react";
import { Box } from "theme-ui";
import Image from "gatsby-image";
import gsap from "gsap";

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
      let TL = gsap.timeline();

      TL.from(imagesRef.current, {
        delay: 1,
        opacity: 0,
        duration: 3,
        ease: "power3",
        x: () => "+=" + getRandomInteger(-100, 100) + "%",
        y: () => "+=" + getRandomInteger(-100, 100) + "%",
        rotation: () => getRandomInteger(-20, 20),
      }).play();
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
      }}
    >
      {images.map((image, index) => (
        <Box ref={addToRefs} key={index}>
          {image.asset ? (
            <Image fixed={image.asset.fixed} loading="eager" />
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default Masonry;
