import React from "react"
import Body from "../components/Body"
import EndInfo from "../components/EndInfo"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Pricing from "../components/Pricing"
import SEO from "../components/SEO"

const index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <Hero />
        <Body />
        <Pricing />
        <EndInfo />
      </div>
    </Layout>
  )
}

export default index
