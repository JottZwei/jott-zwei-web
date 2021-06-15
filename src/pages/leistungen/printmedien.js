import React from "react"
import PrintArea from "../../components/3_Leistungen/1_Printmedien/PrintArea"
import PageHead from "../../components/6_Reusable/PageHead"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"


const PrintmedienPage = () => (
    <Layout>
        <Seo title="Printmedien" keywords={[`Printmedien`, `Drucksachen`, `Printprodukte`, `Flyer`, `Falzflyer`, `Produktflyer`, `Angebotsmappen`, `Arbeitsbekleidung`, `Aufkleber`, `Banner`, `Bierdeckel`, `Blöcke`, `Briefpapier`, `Briefumschläge`, `Broschüren`, `Buttons`, `Durchschreibsätze`, `Einladungskarten`, `Eintrittskarten`, `Etiketten`, `Fahnen`, `Fahrzeugbeschriftung`, `Flyer`, `Fußbodenaufkleber`, `Getränkedosen`, `Gummibärchen`, `Kalender`, `Kontrollbänder`, `Kugelschreiber`, `Kundenstopper`, `Loseblattsammlung`, `Messeartikel`, `Mousepads`, `Plakate`, `Plastikkarten`, `Postkarten`, `Roll-Ups`, `Schaufensterbeschriftung`, `Schilder`, `Speisekarten`, `Stempel`, `Taschen`, `Tassen`, `T-Shirts`, `Visitenkarten`, `Weihnachtskarten`]} description="Ob Speisekarten, Flyer oder Kataloge, Printmedien sind zu fast allen Anlässen eine Entscheidung mit der Sie sich einzigartig präsentieren können." />
        <PageHead image={<StaticImage src="../../images/3_Leistungen/Printmedien/header-printmedien.jpg" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Printmedien" text="Printmedien oder gerne auch “Drucksachen” sind zu fast allen Anlässen eine gute Entscheidung. Ob Speisekarten, Flyer, Kataloge oder Plakate – Ihr Unternehmen wird mit dem von uns erstellten Design aus der Menge hervorstechen." />
        <PrintArea />
    </Layout>
)

export default PrintmedienPage
