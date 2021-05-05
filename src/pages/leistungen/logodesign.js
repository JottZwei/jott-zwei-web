import React from "react"
import PageHead from "../../components/6_Reusable/PageHead"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Leberwurst } from "../../components/defaultComponents"
import LogoEntrytext from "../../components/3_Leistungen/4_Logogestaltung/LogoEntryText"
import LogoDetails from "../../components/3_Leistungen/4_Logogestaltung/LogoDetails"
import Cta from "../../components/6_Reusable/CTA"
import BildSprache from "../../components/3_Leistungen/4_Logogestaltung/BildSprache"


const LogodesignPage = () => (
    <Layout>
        <Seo title="Logodesign" keywords={[`gatsby`, `application`, `react`]} />
        <PageHead image={<StaticImage src="../../images/3_Leistungen/Logo/header-logodesign.jpg" alt="" placeholder="blurred" objectFit="cover" />} headline={<><Leberwurst>Logo</Leberwurst>gestaltung</>} text="Ein Auszug unserer Projekte. Klicken Sie auf ein Projekt, um mehr über dieses zu erfahren!" />
        <LogoEntrytext />
        <LogoDetails />
        <BildSprache />
        <Cta />
    </Layout>
)

export default LogodesignPage
