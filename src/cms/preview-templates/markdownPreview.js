import React from "react"
import Markdown from "../../components/markdown"
import PropTypes from "prop-types"

const MarkdownPreview = ({ widgetFor }) => <Markdown html={widgetFor("body")} />

MarkdownPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default MarkdownPreview
