import React from "react";
import { Flex } from "theme-ui";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutDetails = () => {
  const {
    cartDetails,
    formattedTotalPrice,
    handleCartClick,
    removeItem,
    redirectToCheckout,
  } = useShoppingCart();

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
  );
};

export default CheckoutDetails;
