import React from "react"
import FormComponent from "../components/FormComponent"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Apply Now" />
      <h1 className="apply">Apply Now</h1>
      <FormComponent />
    </Layout>
  )
}

export default contact
