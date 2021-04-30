import React from "react"
import PageHead from "../../components/6_Reusable/PageHead"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Leberwurst } from "../../components/defaultComponents"


const LogodesignPage = () => (
    <Layout>
        <Seo title="Logodesign" keywords={[`gatsby`, `application`, `react`]} />
        <PageHead image={<StaticImage src="../../images/3_Leistungen/Logo/header-logodesign.jpg" alt="" placeholder="blurred" objectFit="cover" />} headline={<><Leberwurst>Logo</Leberwurst>gestaltung</>} text="Ein Auszug unserer Projekte. Klicken Sie auf ein Projekt, um mehr über dieses zu erfahren!" />
    </Layout>
)

export default LogodesignPage
