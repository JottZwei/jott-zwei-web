import React from "react"
import PageHead from "../../components/6_Reusable/PageHead"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import EComEntrytext from "../../components/3_Leistungen/5_E-Commerce/EComEntrytext"
import EComTimeline from "../../components/3_Leistungen/5_E-Commerce/EComTimeline"
import EComCTA from "../../components/3_Leistungen/5_E-Commerce/EComCTA"


const DigitalmedienPage = () => (
    <Layout>
        <Seo title="E-Commerce" keywords={[`gatsby`, `application`, `react`]} />
        <PageHead image={<StaticImage src="../../images/3_Leistungen/E-Commerce/header-e-commerce.jpg" alt="" placeholder="blurred" objectFit="cover" />} headline="E-Commerce" text="Ein Auszug unserer Projekte. Klicken Sie auf ein Projekt, um mehr über dieses zu erfahren!" />
        <EComEntrytext />
        <EComTimeline />
        <EComCTA/>
    </Layout>
)

export default DigitalmedienPage
