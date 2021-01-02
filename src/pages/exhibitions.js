import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexStyles from "./index.module.css"

const IndexPage = () => (
  <Layout className={IndexStyles}>
    <SEO title="TART" />
    <div className={IndexStyles.contentContainer}>
      <h3>Exhibitions</h3>
    </div>
  </Layout>
)

export default IndexPage
