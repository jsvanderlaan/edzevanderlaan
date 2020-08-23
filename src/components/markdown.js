import React from "react"
import PropTypes from "prop-types"
import "./markdown.css"

const Markdown = ({ html }) => (
  <div
    className="markdown"
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  ></div>
)

Markdown.propTypes = {
  html: PropTypes.string.isRequired,
}

export default Markdown
