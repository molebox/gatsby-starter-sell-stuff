import React, { useContext } from "react";
import { DispatchContext, StateContext } from "../context";
import { HamburgerSpring } from "react-animated-burgers";

const CategoryDropdown = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  return (
    <HamburgerSpring
      buttonWidth={20}
      isActive={state.navOpen}
      toggleButton={() =>
        dispatch({ type: "navOpen", payload: !state.navOpen })
      }
    />
  );
};

export default CategoryDropdown;
