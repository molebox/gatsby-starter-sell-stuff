
async function createCategoryPages(graphql, actions) {
    const {createPage} = actions;
    const result = await graphql(`
    {
        allSanityCategory {
            nodes {
                id
                slug {
                    current
                }    
            }
          }
    }
    `);

    if (result.errors) throw result.errors;

    const categories = (result.data.allSanityCategory || {}).nodes || [];
    categories.forEach((node) => {
        const {id, slug = {}} = node;
        if (!slug) return;

        const path = `/category/${slug.current}`;
        createPage({
            path,
            component: require.resolve('./src/templates/category.js'),
            context: {id}
        })
    })
}

async function createProductPages(graphql, actions) {
  const {createPage} = actions;
  const result = await graphql(`
  {
      allSanityProduct {
          nodes {
              id
              slug {
                  current
              }    
          }
        }
  }
  `);

  if (result.errors) throw result.errors;

  const products = (result.data.allSanityProduct || {}).nodes || [];
  products.forEach((node) => {
      const {id, slug = {}} = node;
      if (!slug) return;

      const path = `/product/${slug.current}`;
      createPage({
          path,
          component: require.resolve('./src/templates/product.js'),
          context: {id}
      })
  })
}

// ADD PRODUCT PAGE CREATION HERE
// https://css-tricks.com/how-to-make-taxonomy-pages-with-gatsby-and-sanity-io/

// https://github.com/sanity-io/sanity-template-gatsby-blog/blob/82a5aa1342f17e7ade88060ba25f928c8568b3ba/template/web/gatsby-node.js

exports.createPages = async ({graphql, actions}) => {
    await createCategoryPages(graphql, actions);
    await createProductPages(graphql, actions);
}

exports.createResolvers = ({createResolvers}) => {
    const resolvers = {
      SanityCategory: {
        products: {
          type: ['SanityProduct'],
          resolve (source, args, context, info) {
            return context.nodeModel.runQuery({
              type: 'SanityProduct',
              query: {
                filter: {
                  categories: {
                    elemMatch: {
                      _id: {
                        eq: source._id
                      }
                    }
                  }
                }
              }
            })
          }
        }
      }
    }
    createResolvers(resolvers)
  }