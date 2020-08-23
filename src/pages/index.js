import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = ({ data }) => {
  const html = data.allMarkdownRemark.nodes[0].html
  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(pages/index)/" } }
    ) {
      nodes {
        html
      }
    }
  }
`
