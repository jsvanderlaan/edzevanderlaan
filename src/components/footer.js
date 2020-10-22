import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./footer.css"
import Markdown from "./markdown"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(footer/footer)/" } }
      ) {
        nodes {
          html
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const title = data.allMarkdownRemark.nodes[0].frontmatter.title
  const titleJsx = title && <div className="footer-title">{title}</div>

  const text = data.allMarkdownRemark.nodes[0].html
  const textJsx = text && (
    <div className="footer-text">
      <Markdown html={text}></Markdown>
    </div>
  )

  return (
    (title || text) && (
      <div className="footer">
        {titleJsx}
        {textJsx}
      </div>
    )
  )
}

export default Footer
