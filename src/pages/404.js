import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const errorPage = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <div>
        <h1 className="error-page">Dead End!</h1>
        <Link to="/">
          <div className="error-btn">
            <button className="btn btn-normal">Home</button>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export default errorPage
