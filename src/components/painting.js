import React from "react"
import PropTypes from "prop-types"
import PreviewCompatibleImage from "./previewCompatibleImage"
import "./painting.css"

const Painting = ({ title, image, description, year }) =>
  image && (
    <div className="container">
      <PreviewCompatibleImage
        imageInfo={{
          image: image,
          alt: `image thumbnail for post ${title}`,
        }}
      />
      <h3>
        {title} ({year})
      </h3>
      {typeof description === "string" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
      ) : (
        <div>{description}</div>
      )}
    </div>
  )

Painting.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
}
export default Painting
