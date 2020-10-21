import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "../components/markdown"

const IndexPage = ({ data }) => {
  const html = data.allMarkdownRemark.nodes[0].html
  return (
    <Layout>
      <SEO title="Over Edze" />
      <Markdown html={html} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(pages/over-edze)/" } }
    ) {
      nodes {
        html
      }
    }
  }
`
