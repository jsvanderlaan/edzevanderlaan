import React from "react"
import PropTypes from "prop-types"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const Painting = ({ title, image, description, date }) => (
  <div>
    <h2>{title}</h2>
    <div>
      <div
        style={{
          width: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <PreviewCompatibleImage
          imageInfo={{
            image: image,
            alt: `image thumbnail for post ${title}`,
          }}
        />
        <small>{date}</small>
      </div>
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
    <br />
    <hr />
  </div>
)

Painting.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}
export default Painting
