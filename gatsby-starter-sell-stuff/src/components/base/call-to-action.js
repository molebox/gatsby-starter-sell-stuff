import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Button } from "theme-ui";

const CallToAction = ({ text, to }) => {
  return to ? (
    <Button as={GatsbyLink} to={to} variant="standard">
      {text}
    </Button>
  ) : (
    <Button variant="standard">{text}</Button>
  );
};

export default CallToAction;
