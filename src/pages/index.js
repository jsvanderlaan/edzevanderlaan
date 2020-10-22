import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Painting from "../components/painting"
import "./index.css"

const PortfolioPage = ({ data }) => {
  const paintingData = data.allMarkdownRemark.edges
    .filter(p => p.node.frontmatter.show)
    .map(({ node }) => ({
      key: node.id,
      title: node.frontmatter.title,
      image: node.frontmatter.image,
      description: node.html,
      year: node.frontmatter.year,
    }))

  const paintingsByYear = paintingData.reduce((acc, curr) => {
    ;(acc[curr.year] = acc[curr.year] || []).push(curr)
    return acc
  }, [])

  return (
    <Layout>
      <SEO title="Portfolio" />
      {paintingsByYear
        .map(
          (paintingsForYear, year) =>
            paintingsForYear && (
              <div key={year}>
                <div className="painting-grid-separator">{year}</div>
                <div className="painting-grid">
                  {paintingsForYear.map(
                    ({ key, title, image, description, year }) => (
                      <Painting
                        key={key}
                        title={title}
                        image={image}
                        description={description}
                        year={year}
                      ></Painting>
                    )
                  )}
                </div>
              </div>
            )
        )
        .reverse()}
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
