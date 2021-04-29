import React from "react"
import NotFound from "../components/6_Reusable/NotFound"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
