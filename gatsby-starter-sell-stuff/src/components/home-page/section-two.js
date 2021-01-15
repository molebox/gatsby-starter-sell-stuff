import React, { useRef, useEffect } from "react";
import { Box } from "theme-ui";
import Image from "gatsby-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionTwo = ({ secTwo }) => {
  console.log({ secTwo });
  gsap.registerPlugin(ScrollTrigger);
  const imageOneRef = useRef();
  const imageTwoRef = useRef();
  const imageThreeRef = useRef();

  const imageOne = secTwo.images[0];
  const imageTwo = secTwo.images[1];
  const imageThree = secTwo.images[2];

  useEffect(() => {
    if (typeof window !== undefined) {
      let TL = gsap.timeline();

      TL.from(imageOneRef.current, {
        x: window.innerWidth * 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: imageOneRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      });
      TL.from(imageTwoRef.current, {
        scrollTrigger: {
          trigger: imageTwoRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
      TL.from(imageThreeRef.current, {
        scrollTrigger: {
          trigger: imageThreeRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <Box variant="homeSections.sectionTwo">
      <Box variant="images.sectionTwo" ref={imageOneRef}>
        <Image fluid={imageOne.asset.fluid} />
      </Box>
      <Box variant="images.sectionTwo" ref={imageTwoRef}>
        <Image fluid={imageTwo.asset.fluid} />
      </Box>
      <Box variant="images.sectionTwo" ref={imageThreeRef}>
        <Image fluid={imageThree.asset.fluid} />
      </Box>
    </Box>
  );
};

export default SectionTwo;
