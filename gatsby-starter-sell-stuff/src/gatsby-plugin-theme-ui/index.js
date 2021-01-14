export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Abel",
    heading: "Bodoni Moda, serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
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
    background: "#f8f9fa",
    primary: "#DE3C4B",
    secondary: "#ced4da",
    muted: "#495057",
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
    cats: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 5,
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
      fontSize: 7,
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
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: [200, 100],
    gridArea: "nav",
  },
  navLink: {
    textDecoration: "none",
    fontSize: 3,
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
      width: "15%",
      paddingTop: 1,
      borderBottom: "2px solid #212529",
      transition: "0.5s",
      position: "absolute",
      zIndex: 10,
    },
  },
  images: {
    mainProduct: {
      width: 150,
      height: "auto",
    },
  },
  grids: {
    layout: {
      p: 2,
      width: "100%",
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
      gridTemplateRows: "minmax(auto, 100px) 1fr minmax(auto, 50px)",
      height: "100%",
      minHeight: "100vh",
      position: "relative",
    },
    navbar: {
      gridTemplateColumns: [
        "auto",
        "minmax(auto, 600px) auto minmax(auto, 500px)",
      ],
      gridAutoRows: "1fr",
      width: "100%",
      alignItems: "center",
      position: "relative",
      zIndex: 100,
    },
  },
};
