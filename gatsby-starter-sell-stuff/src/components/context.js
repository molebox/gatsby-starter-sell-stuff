// Create a your context using a reducer to manage the state
// Wrap your root component in the exported provider
import React from "react";

export const StateContext = React.createContext(null);
export const DispatchContext = React.createContext(null);

const initialValues = {
  navOpen: false,
  selectedParentCategory: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialValues);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
export default Provider;
