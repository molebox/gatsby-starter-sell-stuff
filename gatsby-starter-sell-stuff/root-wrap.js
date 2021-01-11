import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import { useSiteMetadata } from './src/components/useSiteMetadata';

const stripePromise = loadStripe(process.env.STRIPE_API_PUBLIC);

const WithMetaData = ({element}) => {
    const {currency, allowedCountries} = useSiteMetadata();
    return(
        <CartProvider
        stripe={stripePromise}
        successUrl="https://gatsby-starter-sell-stuff.netlify.app/success"
        cancelUrl="https://gatsby-starter-sell-stuff.netlify.app/cancelled"
        currency={currency}
        allowedCountries={allowedCountries}
        billingAddressCollection={true}
        mode="checkout-session"
        // mode="client-only"
        >
            {element}
        </CartProvider>
    )
}

export const wrapRootElement = ({element}) => {
    return <WithMetaData element={element}/>
}