import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexStyles from "./index.module.css"

const IndexPage = () => (
  <Layout className={IndexStyles}>
    <SEO title="T/ART" />
    <h1> We create new possibilities for art and technologies </h1>
    <div className={IndexStyles.contentContainer}>
      <h3>What is T/ART ?</h3>
    </div>
    
    <p className={IndexStyles.content}>
        T/ART wants to initiate a community for art and tech integration
        and foster them to grow larger. Knowledge from different fields 
        will be exchanged, experimented, and executed into a project. 
        Our discovery will be presented to the public. 
        <br/>
        <br/>
        We are collective, flat-organization and enthusiasts group of art 
        and tech people who values in diversity of ideas, opensource 
        and public oriented benefits. 
        <br/>
        <br/>
        Our goal is to enlarge our network 
        internationally for new collaborative possibilities and creativity. 
        To achieve it, we are planing to launch both offline and online exhibition, 
        workshop, and other activities.
    </p>
  </Layout>
)

export default IndexPage
