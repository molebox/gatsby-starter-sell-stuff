import React, { useContext, useEffect } from "react";
import { Flex, Text, Box, Image, Button, Divider } from "theme-ui";
import { StateContext, DispatchContext } from "../context";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { globalHistory } from "@reach/router";

const Cart = () => {
  const {
    cartDetails,
    cartCount,
    removeItem,
    redirectToCheckout,
  } = useShoppingCart();
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  useEffect(() => {
    console.log({ cartCount });
  }, [cartCount]);

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
  }, [state.cartOpen, dispatch]);

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
        right: state.cartOpen ? 0 : -800,
        width: ["100%", 800],
        height: "100vh",
        padding: 1,
        flexGrow: 1,
        flexBasis: "sidebar",
        backgroundColor: "text",
        zIndex: 99999,
        borderLeft: "solid 2px",
        borderColor: "primary",
        color: "background",
      }}
    >
      <Flex
        as="form"
        sx={{
          flexDirection: "column",
          height: "100%",
          width: "100%",
          p: 5,
        }}
      >
        <Flex
          sx={{ justifyContent: "space-between", alignItems: "center", mb: 5 }}
        >
          <Text as="h1" variant="styles.h1">
            Your Cart
          </Text>
          <Box
            sx={{ cursor: "crosshair" }}
            onClick={() => dispatch({ type: "cartOpen", payload: false })}
          >
            <Text as="h2" variant="styles.h3">
              Close
            </Text>
          </Box>
        </Flex>
        {cartCount !== 0
          ? Object.keys(cartDetails).map((cartItem, index) => {
              const item = cartDetails[cartItem];
              return (
                <React.Fragment key={index}>
                  <Flex
                    key={index}
                    sx={{
                      gap: 3,
                    }}
                  >
                    <Image variant="productCartImage" src={item?.image} />
                    <Flex
                      sx={{
                        flexDirection: "column",
                        justifyContent: "space-around",
                      }}
                    >
                      <Text as="h4" variant="styles.h2">
                        {item?.name}
                      </Text>
                      <Text as="h4" variant="styles.h3">
                        {formatCurrencyString({
                          value: item.price,
                          currency: item.currency,
                          language: "en-US",
                        })}
                      </Text>
                    </Flex>
                    <Flex
                      sx={{
                        flexDirection: "column",
                      }}
                    >
                      <button onClick={() => removeItem(item.id)}>x</button>
                      {/* {item?.formattedValue} */}
                    </Flex>
                  </Flex>
                  {cartCount !== 0 ? <Divider /> : null}
                </React.Fragment>
              );
            })
          : null}
      </Flex>
      <Flex
        sx={{
          alignSelf: "center",
          justifySelf: "flex-end",
          width: "100%",
          position: "absolute",
          bottom: 20,
        }}
      >
        {/* Subtotal: {formattedTotalPrice} */}
        {/* <button onClick={handleCartClick}>Close</button> */}
        <Button variant="checkout" onClick={handleSubmit}>
          Checkout
        </Button>
      </Flex>
    </Flex>
  );
};

export default Cart;
