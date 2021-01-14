const stripe = require('stripe')(process.env.GATSBY_STRIPE_API_SECRET);
const validateCartItems = require('use-shopping-cart/src/serverUtil').validateCartItems;
const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_DATASET,
    useCdn: true // `false` if you want to ensure fresh data
});
const sanityQuery = '*[_type == "product"]'

exports.handler = async (event) => {
    try {
        const productJSON = JSON.parse(event.body);

        const products = await client.fetch(sanityQuery, {});

        console.log({products})

        const line_items = validateCartItems(products, productJSON);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['US', 'CA', 'GB']
            },
            mode: 'payment',

            success_url: `https://gatsby-starter-sell-stuff.netlify.app/success`,
            cancel_url: `https://gatsby-starter-sell-stuff.netlify.app/cancelled`,
            line_items
        });

        return {
            statusCode: 200,
            body: JSON.stringify({sessionId: session.id})
        }
        
    } catch (error) {
        console.log({error})
    }
}
