import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1> TART </h1>
    <p>
      {`
        A platform for developers and artist to develop a project based on mutual 
        interest and collaboration furthering the discourse of technology.  
        To look at the entanglement of culture and technology.
      `}
    </p>
  </Layout>
)

export default IndexPage
