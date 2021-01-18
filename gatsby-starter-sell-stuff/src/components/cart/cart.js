import React, { useContext, useEffect } from "react";
import { Flex, Text, Spinner, Link } from "theme-ui";
import { StateContext, DispatchContext } from "../context";
import { useShoppingCart } from "use-shopping-cart";
import { globalHistory } from "@reach/router";

const Cart = () => {
  const {
    cartDetails,
    formattedTotalPrice,
    handleCartClick,
    removeItem,
    redirectToCheckout,
  } = useShoppingCart();
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    // If the route has changed it means the user has clicked on a category and we want to wait half a second then close the pop out
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        const timer = setTimeout(() => {
          dispatch({ type: "navOpen", payload: false });
        }, 500);

        return () => clearTimeout(timer);
      }
    });
  }, [state.navOpen, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log(error));

    redirectToCheckout({ sessionId: response.sessionId });
  };

  return (
    <Flex
      as="aside"
      sx={{
        transition: "right 250ms ease-in-out",
        position: "fixed",
        bottom: 0,
        right: state.navOpen ? 0 : -500,
        width: ["100%", 500],
        // height: "calc(100vh - 120px)",
        height: "100%",
        padding: 1,
        flexGrow: 1,
        flexBasis: "sidebar",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "subtle",
        zIndex: 100,
      }}
    ></Flex>
  );
};
