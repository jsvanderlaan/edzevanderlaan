import Layout from "../components/layout"
import SEO from "../components/seo"

const PaintingTemplate = ({ data, pageContext, location }) => {
  console.hit("hit painting template")
  const painting = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={painting.frontmatter.title}
        description={painting.frontmatter.description || painting.excerpt}
      />
    </Layout>
  )
}

export default PaintingTemplate
