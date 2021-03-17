import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexStyles from "./index.module.css"

const IndexPage = () => {
  return(
    <Layout className={IndexStyles}>
      <SEO title="T/ART" />
      <h1> We create new possibilities for art and technologies </h1>
    </Layout>
  )
}

export default IndexPage
