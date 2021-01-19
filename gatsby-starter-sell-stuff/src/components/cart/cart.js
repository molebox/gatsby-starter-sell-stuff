import React, { useContext, useEffect } from "react";
import { Flex, Text, Box } from "theme-ui";
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
  const state = useContext(StateContext);

  useEffect(() => {
    // If the route has changed it means the user has clicked on a category and we want to wait half a second then close the pop out
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        const timer = setTimeout(() => {
          dispatch({ type: "cartOpen", payload: false });
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
        right: state.cartOpen ? 0 : -500,
        width: ["100%", 500],
        // height: "calc(100vh - 120px)",
        height: "100%",
        padding: 1,
        flexGrow: 1,
        flexBasis: "sidebar",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary",
        zIndex: 100,
        borderLeft: "solid 2px",
        borderColor: "primary",
      }}
    >
      <Flex
        as="form"
        sx={{
          flexDirection: "column",
        }}
      >
        {Object.keys(cartDetails).map((cartItem) => {
          const item = cartDetails[cartItem];
          return (
            <Flex>
              <Box>
                <img src={item.image} />
              </Box>
              <Flex
                sx={{
                  flexDirection: "column",
                }}
              >
                {item.name}
                {item.description}
                Qty: 0
              </Flex>
              <Flex
                sx={{
                  flexDirection: "column",
                }}
              >
                <button onClick={removeItem(item.sku)}>x</button>
                {item.formattedValue}
              </Flex>
            </Flex>
          );
        })}
        Subtotal: {formattedTotalPrice}
        <button onClick={handleCartClick}>Close</button>
        <button onClick={handleSubmit}>Checkout</button>
      </Flex>
    </Flex>
  );
};

export default Cart;
