import React from "react";
import { animateObjects, ListTLink, newContent } from "./layout";

const AnimatedLink = ({ to, children }) => {
  return (
    <ListTLink
      to={to}
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
      {children}
    </ListTLink>
  );
};

export default AnimatedLink;
