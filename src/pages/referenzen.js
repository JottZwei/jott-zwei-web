import React from "react"
import ReferenzenArea from "../components/2_Referenzen/ReferenzenArea"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHead from '../components/6_Reusable/PageHead'
import { StaticImage } from "gatsby-plugin-image"


const ReferenzenPage = () => {
    return (
        <Layout>
          <Seo title="Referenzen" keywords={[`Referenzen`, `Arbeitsprobe`, `Coaching`, `Consulting`, `Restaurants`, `Lebensmittel`, `Baugewerbe`, `Medizin`, `Industrie`, `Technik`, `Automobil`, `Beratung`, `Bildung`, `Dienstleistung`]} description="Ein Auszug unserer Projekte. Unter anderem aus den Branchen Coaching, Consulting & Freizeit." />
          <PageHead image={<StaticImage src="../images/2_Referenzen/Ziemer/ref_zc_2.jpg" alt="Die von uns gestaltete Website für Ziemer Consult. Dargestellt auf einem Smartphone und einem Tablet-Computer" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Referenzen gefällig?" text="Ein Auszug unserer Projekte. Klicken Sie auf ein Projekt, um mehr über dieses zu erfahren!" />
          <ReferenzenArea />
      </Layout>
    )
} 

export default ReferenzenPage
