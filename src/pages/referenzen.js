import React from "react"
import ReferenzenArea from "../components/2_Referenzen/ReferenzenArea"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHead from '../components/6_Reusable/PageHead'
import { StaticImage } from "gatsby-plugin-image"


const ReferenzenPage = () => {
    return (
        <Layout>
          <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <PageHead image={<StaticImage src="../images/2_Referenzen/Ziemer/ref_zc_2.jpg" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Referenzen gefällig?" text="Ein Auszug unserer Projekte. Klicken Sie auf ein Projekt, um mehr über dieses zu erfahren!" />
          <ReferenzenArea />
      </Layout>
    )
} 

export default ReferenzenPage
