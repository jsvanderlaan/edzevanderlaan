import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Schilderij niet gevonden!</h1>
    <Link to="/">Ga terug naar de homepage</Link>
  </Layout>
)

export default NotFoundPage
