import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id} style={{padding: " 1vh 0"}}>
              <h2>
                <Link to={`/blog/${node.slug}`} style={{color: "#e0e0e0"}}>
                  {node.frontmatter.title}
                  </Link>
                </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      body
      slug
    }
  }
}

`

export default BlogPage
