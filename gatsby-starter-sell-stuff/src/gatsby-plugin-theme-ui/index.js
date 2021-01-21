export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Abel",
    heading: "Bodoni Moda, serif",
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
    muted: "#a2a09d",
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
      fontSize: [5, 8],
      // transform: [null, "rotate(270deg)", "rotate(270deg)"],
    },
    productHeadingCategory: {
      variant: "text.body",
      fontSize: [3, 6],
      // transform: [null, "rotate(270deg)", "rotate(270deg)"],
    },
    categoryHeading: {
      variant: "text.heading",
      fontSize: [5, 8],
      borderBottom: "solid 2px",
      mb: 4,
    },
    categoryPrice: {
      fontSize: [3, 5],
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
      fontSize: [4, 7],
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
      fontSize: [3, 4],
    },
    footer: {
      gridArea: "footer",
      fontSize: 1,
      alignSelf: "end",
    },
    spinner: {
      color: "text",
    },
  },
  navLink: {
    variant: "text.heading",
    fontWeight: "body",
    textDecoration: "none",
    // textTransform: "uppercase",
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
  images: {
    mainProduct: {},
    heroOne: {
      width: [300, 800],
      height: "auto",
      my: 3,
    },
    heroTwo: {
      width: [200, 400],
      height: "auto",
      filter: `drop-shadow(2px 2px 0 #DE3C4B)
      drop-shadow(-2px 2px 0 #DE3C4B)
      drop-shadow(2px -2px 0 #DE3C4B)
      drop-shadow(-2px -2px 0 #DE3C4B)`,
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
    close: {
      position: "absolute",
      top: "3%",
      left: "1.5%",
      ":hover": {
        cursor: "crosshair",
      },
    },
  },
  categorySection: {
    transition: "top 650ms ease-in-out",
    position: "fixed",
    bottom: 0,
    width: "100vw",
    height: "100%",
    padding: 1,
    flexGrow: 1,
    flexBasis: "sidebar",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "background",
    zIndex: 100,
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
};
