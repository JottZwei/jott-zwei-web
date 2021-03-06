import React from "react"
import PageHead from "../../components/6_Reusable/PageHead"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import EComEntrytext from "../../components/3_Leistungen/5_E-Commerce/EComEntrytext"
import EComTimeline from "../../components/3_Leistungen/5_E-Commerce/EComTimeline"
import Cta from "../../components/6_Reusable/CTA"


const DigitalmedienPage = () => (
    <Layout>
        <Seo title="E-Commerce" keywords={[`E-Commerce`, `Onlineshop`, `eCommerce`, `Online Handel`, `Online-Business`, `B2B`, `B2C`, `Business`, `Point-of-Sale`, `Vermarktung`, `Zahlungsmethode`]} description="Wir erstellen Ihren individuellen Onlineshop, damit Sie neue Kunden gewinnnen und Bestandskunden mit Onlineservice verwöhnen." />
        <PageHead image={<StaticImage src="../../images/3_Leistungen/E-Commerce/header-e-commerce.jpg" width="1920" alt="Vorschau der Onlineshops, welche wir kreiert haben. Unter anderem den Onlineshop für Reternity oder Ziemer Consult." placeholder="blurred" objectFit="cover" />} headline="E-Com&shy;merce" text="Durch einen Onlineshop erweitern Sie Ihre Verkaufsplattform und bieten Ihren Kunden schnellen Zugang zu Ihren Produkten. Nutzen Sie eine moderne Plattform, um Ihre Produkte zu vertreiben und maximieren Sie ihren Profit mit einem von uns gefertigten Onlineshop." />
        <EComEntrytext />
        <EComTimeline />
        <Cta/>
    </Layout>
)

export default DigitalmedienPage
