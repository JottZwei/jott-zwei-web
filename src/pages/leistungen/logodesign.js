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
        <Seo title="Logo-Design" keywords={[`Logo`, `Logogestaltung`, `Logodesign`, `Gestaltung`, `Design`, `Branding`, `Brand`, `Bildsprache`, `Corporate Design`, `Corporate`, `Unternehmenslogo`, `Corporate Identity`, `Corporate Behaviour`, `Brand Identity`, `Redesign`]} description="Mit viel Liebe zum Detail erstellen wir Ihr unverwechselbares Logo – für Ihr Unternehmen, Ihre Marke oder Ihr Produkt." />
        <PageHead image={<StaticImage src="../../images/3_Leistungen/Logo/header-logodesign.jpg" width="1920" alt="Das von uns gestaltete Freizeittanken-Logo eingsetzt auf einem Briefbogen, Visitenkarten, Flyern und mehr." placeholder="blurred" objectFit="cover" />} headline={"Logo\xADdesign"} text="Eine Marke funktioniert nicht ohne Logo. Ein Unternehmen schon eher, aber das ist doch nichts Halbes und nichts Ganzes. Ihr Unternehmen braucht deshalb ein gut designtes Logo! Darum beachten wir bei der Logoerstellung, dass dieses perfekt zu Ihrem Unternehmen, den Produkten und der internen Philosophie passt." />
        <LogoEntrytext/>
        <LogoDetails />
        <BildSprache />
        <Cta />
    </Layout>
)

export default LogodesignPage
