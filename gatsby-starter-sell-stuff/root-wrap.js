import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import { useSiteMetadata } from './src/components/useSiteMetadata';
import SiteProvider from './src/components/context';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC);

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
        >
           <SiteProvider>
                {element}
            </SiteProvider>
        </CartProvider>
    )
}

export const wrapRootElement = ({element}) => {
    return <WithMetaData element={element}/>
}