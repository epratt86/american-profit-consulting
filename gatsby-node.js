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
  // amount of posts
  const posts = data.posts.edges
  // posts per page
  const postsPerPage = 3
  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
