import React, { useState } from "react"
import { useTransition, animated } from 'react-spring'
import IndexStyles from "./index.module.css"
import Layout from "../components/layout"

const AboutPage = () => {
  const [ toggle ] = useState(false)
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <Layout className={IndexStyles}>
      <div className={IndexStyles.contentContainer}>
        <h3><b>What is T/ART ? </b> {
            transitions.map(({ item, key, props }) => 
              item
                ? <animated.div style={props}>😄</animated.div>
                : <animated.div style={props}>🤪</animated.div>
              )
        } </h3>
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
}

export default AboutPage