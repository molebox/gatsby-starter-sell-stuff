import React, { useRef, useEffect } from "react";
import { Box } from "theme-ui";
import Image from "gatsby-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
        // gsap.from(image, {
        //   // delay: 1,
        //   opacity: 0,
        //   duration: 3,
        //   ease: "power3",
        //   x: () => "+=" + getRandomInteger(-100, 100) + "%",
        //   y: () => "+=" + getRandomInteger(-100, 100) + "%",
        //   rotation: () => getRandomInteger(-20, 20),
        //   scrollTrigger: {
        //     id: `section-${index+1}`,
        //     trigger: image,
        //     start: 'top center',
        //     // scrub: 1,
        //     pin: true,
        //     toggleActions: 'play none none reverse'
        // }
        // });
      });

      // TL.from(imagesRef.current, {
      //   delay: 1,
      //   opacity: 0,
      //   duration: 3,
      //   ease: "power3",
      //   x: () => "+=" + getRandomInteger(-100, 100) + "%",
      //   y: () => "+=" + getRandomInteger(-100, 100) + "%",
      //   rotation: () => getRandomInteger(-20, 20),
      //   scrollTrigger: {
      //     // id: `section-${index+1}`,
      //     trigger: imagesRef.current,
      //     start: 'top center+=100',
      //     toggleActions: 'play none none reverse'
      // }
      // });
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
            <Image fixed={image.asset.fixed} loading="eager" />
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default Masonry;
