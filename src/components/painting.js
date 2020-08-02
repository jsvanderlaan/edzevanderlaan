import React from "react"
import PropTypes from "prop-types"

const Painting = ({ painting }) => (
  <div key={painting.id}>
    <h1>{painting.frontmatter.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: painting.html,
      }}
    ></div>
  </div>
)

Painting.propTypes = {
  painting: PropTypes.node.isRequired,
}
export default Painting
