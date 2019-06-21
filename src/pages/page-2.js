import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Sukumu runs the city</h1>
    <p>Welcome 2</p>
    <Link to="/">Go to house</Link>
  </Layout>
)

export default SecondPage
