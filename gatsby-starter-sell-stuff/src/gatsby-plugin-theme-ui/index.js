export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Montserrat",
    heading: "Montserrat",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96, 110],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#edeae3",
    background: "#212529",
    primary: "#DE3C4B",
    secondary: "#E7E3DA",
    muted: "#1B1F22",
    subtle: "#e9ecef",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    productHeading: {
      variant: "text.body",
      fontSize: [3, 6],
      borderBottom: "solid 2px",
    },
    productSubHeading: {
      variant: "text.body",
      fontSize: [3, 4],
      borderBottom: "solid 2px",
    },
    productHeadingCategory: {
      variant: "text.body",
      fontSize: [3, 6],
      // transform: [null, "rotate(270deg)", "rotate(270deg)"],
    },
    relatedProductHeadingCategory: {
      variant: "text.body",
      fontSize: [1, 3],
      // transform: [null, "rotate(270deg)", "rotate(270deg)"],
    },
    categoryHeading: {
      variant: "text.heading",
      fontSize: [5, 8],
      borderBottom: "solid 2px",
      mb: 4,
    },
    categoryPrice: {
      fontSize: [3, 4],
    },
    siteTitle: {
      variant: "text.heading",
      fontSize: [2, 4],
      color: "text",
    },
    callToAction: {
      fontSize: [4, 4, 6],
      variant: "text.heading",
    },
  },
  sizes: {
    sidebar: [80, "100%", "100%"],
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: [4, 6],
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    p: {
      variant: "text.body",
      fontSize: [1, 2],
    },
    footer: {
      gridArea: "footer",
      fontSize: 1,
      alignSelf: "end",
    },
    spinner: {
      color: "text",
    },
    hr: {
      height: 2,
      background: "text",
      backgroundImage:
        "linear-gradient(to right, rgba(0, 0, 0, 0), rgb(237, 234, 227), rgba(0, 0, 0, 0))",
      width: "100%",
      my: 3,
    },
  },
  homePageLayout: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    maxWidth: 1440,
    m: "0 auto",
  },
  homePageHero: {
    flexDirection: ["column", "column", "row"],
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    height: "90vh",
    backgroundColor: "muted",
    p: 2,
    maxWidth: 1440,
    width: "100%",
  },
  homePageHeroImage: {
    width: [300, 400],
    height: "auto",
    position: "relative",
  },
  homePageHeroImageCircle: {
    position: "absolute",
    top: [30, 50],
    left: 0,
    borderRadius: "50%",
    width: [300, 400, 400],
    height: [300, 400, 400],
    backgroundColor: "text",
  },
  homePageHeroCallToAction: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: ["center", "center", "start"],
    height: "auto",
    m: 3,
  },
  homePageBrandDescriptionLayout: {
    flexDirection: ["column", "row"],
    my: 4,
    alignItems: "center",
    justifyContent: "center",
    m: 3,
    gap: 3,
  },
  homePageBrandDescriptionImage: {
    width: [300, 400, 800],
    height: "auto",
  },
  homePageBrandDescriptionText: {
    flexDirection: "column",
    my: 2,
    p: 2,
    maxWidth: 500,
  },
  productLayout: {
    flexDirection: ["column", "row"],
    overflowY: "hidden",
    height: "100%",
    position: "relative",
  },
  productInfoLayout: {
    width: ["100%", "50%"],
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignSelf: "start",
    p: 3,
    gap: 1,
  },
  productImagesOuterLayout: {
    gap: 1,
    justifyContent: ["space-around"],
    alignItems: "center",
    width: [300, 600, 800],
    flexDirection: ["column", "row"],
    backgroundColor: "muted",
    p: 2,
  },
  productImageThumbsLayout: {
    flexDirection: ["row", "column"],
    justifyContent: "space-evenly",
    gap: 1,
    my: [3, null],
    order: [1, 0],
  },
  productImageMainLayout: {
    width: [200, 400],
    height: "auto",
    backgroundColor: "text",
    p: 3,
    boxShadow: "7px 8px 2px 0px hsla(0,0%,0%,0.2)",
  },
  navLink: {
    variant: "text.heading",
    fontWeight: "body",
    textDecoration: "none",
    fontSize: [4, 6],
    p: 2,
    color: "inherit",
    ":active": {
      color: "primary",
    },
    ":hover": {
      cursor: "crosshair",
    },
  },
  linkEffect: {
    variant: "text.heading",
    fontWeight: "body",
    textDecoration: "none",
    fontSize: 3,
    p: 2,
    my: 2,
    color: "inherit",
    ":active": {
      color: "primary",
    },
    ":hover": {
      cursor: "crosshair",
      ":after": {
        width: "20%",
        position: "absolute",
      },
    },
    ":after": {
      content: "''",
      display: "block",
      width: "0%",
      paddingTop: 3,
      borderBottom: "5px solid #DE3C4B",
      transition: "1s",
      position: "absolute",
      zIndex: 10,
    },
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    top: 0,
    background: "rgb(0, 0, 0)",
    background: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    transition: ".5s ease",
    opacity: 0,
    color: "text",
    justifyContent: "center",
    alignItems: "center",
    writingMode: [null, "vertical-rl"],
    textOrientation: "upright",
    ":hover": {
      opacity: 1,
    },
    variant: "styles.h3",
    textTransform: "uppercase",
  },
  images: {
    productCartImage: {
      width: 200,
      height: "auto",
    },
  },
  grids: {
    layout: {
      gap: 0,
      gridTemplateAreas: [
        `
     'nav'
     'main'
     'footer'
     `,
        `
     'nav   nav   nav   nav'
     'main  main  main  main'
     'footer  footer  footer footer'
     `,
      ],
      gridTemplateColumns: ["auto", "repeat(4, 1fr)"],
      gridTemplateRows: "minmax(auto, 80px) 1fr minmax(auto, 50px)",
      height: "100%",
      minHeight: "100vh",
      position: "relative",
    },
    product: {
      gap: 0,
      gridTemplateColumns: ["auto", "repeat(6, 1fr)"],
      gridTemplateRows: [
        "minmax(auto, 100px)",
        "minmax(50px, 100px) 1fr 1fr minmax(auto, 100px)",
      ],
      height: "100vh",
      width: "100%",
      p: 3,
      overflowY: "hidden",
    },
  },
  buttons: {
    burger: {
      background: "transparent",
      cursor: "crosshair",
    },
    checkout: {
      width: "100%",
      p: 2,
      backgroundColor: "background",
      color: "text",
      variant: "text.heading",
      mx: 3,
      height: "50px",
      "&:hover": {
        backgroundColor: "text",
        color: "background",
        cursor: "crosshair",
        border: "solid 1px",
      },
    },
    standard: {
      width: 250,
      backgroundColor: "text",
      color: "background",
      variant: "text.heading",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        backgroundColor: "background",
        color: "text",
        cursor: "crosshair",
        border: "solid 1px",
      },
    },
  },
  transitionUl: {
    display: "flex",
    position: "absolute",
    zIndex: 99999,
    height: "101vh",
    width: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    pointerEvents: "none",
  },
  transitionLi: {
    transform: "scaleY(0)",
    backgroundColor: "text",
    width: "20%",
    listStyleType: "none",
    zIndex: 99999,
  },
  badges: {
    circle: {
      color: "background",
      bg: "text",
      borderRadius: "50%",
      height: "20px",
      width: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
    },
  },
};
