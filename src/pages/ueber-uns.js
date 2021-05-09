import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHead from '../components/6_Reusable/PageHead'
import { StaticImage } from "gatsby-plugin-image"
import Team from "../components/4_About/team"

const UeberUnsPage = () => {
    return (
        <Layout>
          <Seo title="Über Uns" keywords={[`gatsby`, `application`, `react`]} />
          <PageHead image={<StaticImage src="../images/4_About/jott_zwei_team.jpg" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Das doppelte Jottchen" text="Erfahren Sie mehr über uns." />
          <Team />
      </Layout>
    )
} 

export default UeberUnsPage
