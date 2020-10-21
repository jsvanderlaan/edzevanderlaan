import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Painting from "../components/painting"
import "./index.css"

const PortfolioPage = ({ data }) => {
  const paintings = data.allMarkdownRemark.edges.filter(
    p => p.node.frontmatter.show
  )
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="painting-grid">
        {paintings.map(({ node }) => (
          <Painting
            key={node.id}
            title={node.frontmatter.title}
            image={node.frontmatter.image}
            description={node.html}
            year={node.frontmatter.year}
          ></Painting>
        ))}
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___year], order: DESC }) {
      edges {
        node {
          html
          id
          frontmatter {
            year
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
