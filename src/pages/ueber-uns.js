import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutHead from '../components/4_About/AboutHead'

const UeberUnsPage = () => {
    return (
        <Layout>
          <Seo title="Über Uns" keywords={[`gatsby`, `application`, `react`]} />
          <AboutHead />
      </Layout>
    )
} 

export default UeberUnsPage
