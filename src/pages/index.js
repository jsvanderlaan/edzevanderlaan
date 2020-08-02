import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Painting from "../components/painting"

const IndexPage = ({ data }) => {
  const paintings = data.allMarkdownRemark.edges.filter(
    p => p.node.frontmatter.show
  )
  return (
    <Layout>
      <SEO title="Home" />
      {paintings.map(({ node }) => (
        <Painting
          key={node.id}
          title={node.frontmatter.title}
          image={node.frontmatter.image}
          description={node.html}
          date={node.frontmatter.date}
        ></Painting>
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          id
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            title
            show
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
