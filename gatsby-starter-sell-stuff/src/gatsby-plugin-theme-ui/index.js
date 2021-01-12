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
    text: "#111111",
    background: "#ffffff",
    primary: "#DE3C4B",
    secondary: "#E7E7E9",
    muted: "#545455",
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
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      mt: 0.5,
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
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: [200, 100],
    gridArea: "nav",
  },
  navLink: {
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
};
