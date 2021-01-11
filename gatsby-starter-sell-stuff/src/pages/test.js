import React from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { graphql } from "gatsby";
import CheckoutDetails from './../components/cart/checkout-details';
export default ({ data }) => {
  console.log({ data });
  const nodes = data.allStripePrice.nodes;
  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    addItem,
    removeItem,
    clearCart,
  } = useShoppingCart();
  return (
    <div>
      <h1>gatsby-starter-sell-stuff</h1>
      {nodes.map((node, index) => (
        <div key={index}>
          <h2>{node.product.name}</h2>
          <p>{node.product.description}</p>
          <p>
            Price:{" "}
            {formatCurrencyString({
              value: node.unit_amount,
              currency: node.currency,
            })}
          </p>
          <button onClick={() => addItem(node)}>Add to cart</button>
          <button onClick={() => removeItem(node.id)}>Remove item</button>
        </div>
      ))}
      <button onClick={clearCart}>Remove all items</button>
      <button onClick={() => redirectToCheckout()}>Checkout</button>
      <p>Number of Items: {cartCount}</p>
      <p>Total price: {totalPrice}</p>
      <CheckoutDetails/>
    </div>
  );
};

export const query = graphql`
  query getStripePrice {
    allStripePrice {
      nodes {
        product {
          id
          name
          description
          images
        }
        unit_amount
        currency
        id
      }
    }
  }
`;
