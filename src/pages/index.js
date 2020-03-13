import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexStyles from "./index.module.css"

const IndexPage = () => (
  <Layout className={IndexStyles}>
    <SEO title="TART" />
    <h1> T / ART </h1>
    <div className={IndexStyles.contentContainer}>
      <svg 
        viewBox="0 0 100 100" 
        width="100" 
        height="100"
        className={IndexStyles.circleCanvas}>
        <defs>
          <path 
            id="circle"
            d="M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text font-size="17">
          <textPath xlink= {true} href="#circle">
            what &nbsp;&nbsp; is &nbsp;&nbsp; t/art
          </textPath>
        </text>
      </svg>
    </div>
    
    <p className={IndexStyles.content}>
      {`
        A platform for developers and artist to develop a project based on mutual 
        interest and collaboration furthering the discourse of technology.  
        To look at the entanglement of culture and technology.
      `}
    </p>
  </Layout>
)

export default IndexPage
