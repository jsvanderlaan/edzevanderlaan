import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = "", childImageSharp, image, width = "300px" } = imageInfo
  const imageStyle = { width }

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image.url === "string")
    return <img style={imageStyle} src={image.url} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
