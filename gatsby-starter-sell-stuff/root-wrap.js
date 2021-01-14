import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import { useSiteMetadata } from './src/components/useSiteMetadata';
import SiteProvider from './src/components/context';
import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client';
import fetch from 'isomorphic-fetch';

const httpLink = createHttpLink({
    uri: `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/default`,
    fetch,
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    fetch,
  });

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
        >
            <ApolloProvider client={client}>
                <SiteProvider>
                    {element}
                </SiteProvider>
            </ApolloProvider>
        </CartProvider>
    )
}

export const wrapRootElement = ({element}) => {
    return <WithMetaData element={element}/>
}