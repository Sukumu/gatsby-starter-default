import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Sukumu runs the world</h1>
    <p>Welcome 2 the World</p>
    <Link to="/">$ Go to donation page</Link>
  </Layout>
)

export default SecondPage
