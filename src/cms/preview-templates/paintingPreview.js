import React from "react"
import PropTypes from "prop-types"
import Painting from "../../components/painting.js"
import moment from "moment"

const PaintingPreview = ({ entry, widgetFor, getAsset }) => (
  <Painting
    title={entry.getIn(["data", "title"])}
    date={moment(entry.getIn(["data", "date"])).format("DD-MM-YYYY")}
    image={getAsset(entry.getIn(["data", "image"]))}
    description={widgetFor("body")}
  />
)

PaintingPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default PaintingPreview
