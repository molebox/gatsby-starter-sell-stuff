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
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#212529",
    background: "#edeae3",
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
      fontSize: 8,
      // transform: [null, "rotate(270deg)", "rotate(270deg)"],
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
      fontSize: 4,
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
      gridTemplateColumns: ["auto", "repeat(5, 1fr)"],
      gridTemplateRows: ["auto", "5% 10% 1fr 1fr"],
      height: "100vh",
      width: "100%",
    },
    navbar: {
      gridTemplateColumns: ["minmax(auto, 500px) auto minmax(auto, 500px)"],
      gridAutoRows: ["1fr 1fr", "1fr"],
      width: "100%",
      alignItems: "center",
      position: "relative",
      zIndex: 100,
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
};
