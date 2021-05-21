import React from "react"
import PrintArea from "../../components/3_Leistungen/1_Printmedien/PrintArea"
import PageHead from "../../components/6_Reusable/PageHead"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"


const PrintmedienPage = () => (
    <Layout>
        <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PageHead image={<StaticImage src="../../images/3_Leistungen/Printmedien/header-printmedien.jpg" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Printmedien" text="Ein Auszug unserer Projekte. Klicken Sie auf ein Projekt, um mehr über dieses zu erfahren!" />
        <PrintArea />
    </Layout>
)

export default PrintmedienPage
