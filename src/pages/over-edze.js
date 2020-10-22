import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "../components/markdown"
import PreviewCompatibleImage from "../components/previewCompatibleImage"

import "./over-edze.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      p1: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(over-edze/p1)/" } }
      ) {
        nodes {
          html
        }
      }
      p2: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(over-edze/p2)/" } }
      ) {
        nodes {
          html
        }
      }
      imageBig: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(over-edze/image-big)/" } }
      ) {
        nodes {
          frontmatter {
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
      imagesSmall: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(over-edze/images-small)/" } }
      ) {
        nodes {
          frontmatter {
            image1 {
              childImageSharp {
                fluid(maxWidth: 150, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 150, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 150, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  const p1 = data.p1.nodes[0].html
  const p2 = data.p2.nodes[0].html
  const imageBig = data.imageBig.nodes[0].frontmatter.image
  const imagesSmall1 = data.imagesSmall.nodes[0].frontmatter.image1
  const imagesSmall2 = data.imagesSmall.nodes[0].frontmatter.image2
  const imagesSmall3 = data.imagesSmall.nodes[0].frontmatter.image3
  return (
    <Layout>
      <SEO title="Over Edze" />
      <div className="image">
        <PreviewCompatibleImage
          imageInfo={{
            image: imageBig,
          }}
        />
      </div>
      <Markdown html={p1} />
      <div className="small-paintings image">
        <PreviewCompatibleImage
          imageInfo={{
            image: imagesSmall1,
            width: "min(30%, 150px)",
          }}
        />
        <PreviewCompatibleImage
          imageInfo={{
            image: imagesSmall2,
            width: "min(30%, 150px)",
          }}
        />
        <PreviewCompatibleImage
          imageInfo={{
            image: imagesSmall3,
            width: "min(30%, 150px)",
          }}
        />
      </div>
      <Markdown html={p2} />
    </Layout>
  )
}

export default IndexPage
