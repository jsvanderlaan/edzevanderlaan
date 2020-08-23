import CMS from "netlify-cms-app"
import PaintingPreview from "./preview-templates/paintingPreview"
import MarkdownPreview from "./preview-templates/markdownPreview"

CMS.registerPreviewTemplate("paintings", PaintingPreview)
CMS.registerPreviewTemplate("pages", MarkdownPreview)
