const path = require("path")

// Creates pages programatically from contentful tours data
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
      products: allContentfulProducts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.posts.edges.forEach(edge => {
    actions.createPage({
      path: `blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
  data.products.edges.forEach(edge => {
    actions.createPage({
      path: `services/${edge.node.slug}`,
      component: path.resolve("./src/templates/products-template.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
