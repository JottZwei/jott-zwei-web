import React from "react"
import PageHead from "../../components/6_Reusable/PageHead"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import LogoEntrytext from "../../components/3_Leistungen/4_Logogestaltung/LogoEntryText"
import LogoDetails from "../../components/3_Leistungen/4_Logogestaltung/LogoDetails"
import Cta from "../../components/6_Reusable/CTA"
import BildSprache from "../../components/3_Leistungen/4_Logogestaltung/BildSprache"


const LogodesignPage = () => (
    <Layout>
        <Seo title="Logodesign" keywords={[`gatsby`, `application`, `react`]} />
        <PageHead image={<StaticImage src="../../images/3_Leistungen/Logo/header-logodesign.jpg" alt="" placeholder="blurred" objectFit="cover" />} link="leistungen/logodesign" headline={"Logo\xADdesign"} text="Eine Marke funktioniert nicht ohne Logo. Ein Unternehmen schon eher, aber das ist doch nichts Halbes und nichts Ganzes. Ihr Unternehmen braucht deshalb ein gut designtes Logo! Darum beachten wir bei der Logoerstellung, dass dieses perfekt zu Ihrem Unternehmen, den Produkten und der internen Philosophie passt." />
        <LogoEntrytext/>
        <LogoDetails />
        <BildSprache />
        <Cta />
    </Layout>
)

export default LogodesignPage
