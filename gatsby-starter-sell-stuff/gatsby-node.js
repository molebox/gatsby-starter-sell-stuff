exports.createPages = ({graphql, actions}) => {

    const {createPage} = actions;

    return graphql(`
        {
            allSanityCategory {
                edges {
                    node {
                        slug {
                            current
                          }
                          products {
                            id
                            title
                            price
                            description {
                              en
                            }
                          }
                    }
                }
              }
        }
    `).then(result => {
        if (result.errors) {
            throw result.errors
          }
          const categories = result.data.allSanityCategory.edges || [];
          categories.forEach(({node}) => {
              const path = `/category/${node.slug.current}`;
              createPage({
                  path,
                  component: require.resolve('./src/templates/category.js'),
                  context: {slug: node.slug.current}
              })
          })
    })




}