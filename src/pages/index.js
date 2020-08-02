import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Painting from "../components/painting"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>Deze site is in aanbouw :)</p>
    <h1>Schilderijen</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Painting painting={node}></Painting>
    ))}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
