import React from "react"
import PrintArea from "../../components/3_Leistungen/1_Printmedien/PrintArea"
import PageHead from "../../components/6_Reusable/PageHead"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"


const PrintmedienPage = () => (
    <Layout>
        <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PageHead image={<StaticImage src="../../images/3_Leistungen/Printmedien/header-printmedien.jpg" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Printmedien" text="Printmedien oder gerne auch “Drucksachen” sind zu fast allen Anlässen eine gute Entscheidung. Ob Speisekarten, Flyer, Kataloge oder Plakate – Ihr Unternehmen wird mit dem von uns erstellten Design aus der Menge hervorstechen." />
        <PrintArea />
    </Layout>
)

export default PrintmedienPage
