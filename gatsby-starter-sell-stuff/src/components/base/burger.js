import React, { useContext } from "react";
import { DispatchContext, StateContext } from "../context";
import { HamburgerSpring } from "react-animated-burgers";

const Burger = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  return (
    <HamburgerSpring
      barColor="white"
      buttonWidth={20}
      isActive={state.navOpen}
      toggleButton={() =>
        dispatch({ type: "navOpen", payload: !state.navOpen })
      }
      buttonStyle={{
        cursor: "crosshair",
      }}
    />
  );
};

export default Burger;
