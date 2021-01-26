import React, { useEffect } from "react";
import { Flex, Text, Box } from "theme-ui";
import AnimatedLink from "./../components/base/animated-link";
import { useShoppingCart } from "use-shopping-cart";

const Success = () => {
  const { clearCart } = useShoppingCart();
  useEffect(() => clearCart());

  return (
    <Flex
      sx={{
        m: "0 auto",
        maxWidth: 1440,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "text",
        backgroundColor: "muted",
        p: 2,
      }}
    >
      <Flex sx={{ flexDirection: "column" }}>
        <Text as="h1" variant="styles.h1">
          Thank you for your purchase!
        </Text>
        <Flex
          sx={{
            justifyContent: "space-around",
            my: 5,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box sx={{ backgroundColor: "text", p: 3 }}>
            <AnimatedLink to="/" color="text">
              Home
            </AnimatedLink>
          </Box>
          <Box sx={{ backgroundColor: "text", p: 3 }}>
            <AnimatedLink to="/" color="text">
              Continue Shopping
            </AnimatedLink>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Success;
