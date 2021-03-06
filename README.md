# gatsby-starter-sell-stuff

[![Netlify Status](https://api.netlify.com/api/v1/badges/1dc17f99-372f-488c-afbe-c880a8351983/deploy-status)](https://app.netlify.com/sites/gatsby-starter-sell-stuff/deploys)

An ecommerce Gatsby starter built with Stripe, Sanity, Theme-ui and Netlify. 

Live demo: [gatsby-starter-sell-stuff.netlify.app](https://gatsby-starter-sell-stuff.netlify.app/)

This starter utilizes [use-shopping-cart](https://useshoppingcart.com/) under the hood to handle all interactions with Stripe and payment processes. 

The content is managed via a [Sanity](https://www.sanity.io/) studio, it's repo is housed alongside this one. 

[Theme-ui](https://theme-ui.com/) is used to style the site, it's theme object is a powerful source of truth. I've tried to utilize variants as much as possible to make it easy to override styles. In any case, the styles can be overridden in the theme object. 

The site is hosted on [Netlify](https://www.netlify.com/) **(....add one click deploy button)** and uses a serverless function (which is also hosted on Netlify) to validate the customers cart and handle the Stripe checkout session.

## Setup

Before you begin developing with this starter you will need to create an account with Stripe. Once done grab your API and SECRET keys and add them to two new files `.env.development` and `.env.production`. You can copy paste the contents of the `.env.example` file as a template.

More docs to follow.....