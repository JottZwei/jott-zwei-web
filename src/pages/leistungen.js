import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHead from '../components/6_Reusable/PageHead'
import { StaticImage } from 'gatsby-plugin-image'
import Cta from '../components/6_Reusable/CTA'
import LeistungenArea from '../components/3_Leistungen/LeistungenArea'



const LeistungenPage = () => {
    return (
        <Layout>
            <Seo title="Leistungen" keywords={[`Webseiten`, `Internetseiten`, `Website`, `Internetauftritt`, `Responsive`, `Mobiloptimiert`, `Businesswebsite`, `Firmenwebsite`, `Firmeninternetseite`, `Webdesign`, `Webpräsenz`, `Webauftritt`, `Digitalmedien`, `Printmedien`, `Printprodukte`, `Drucksachen`, `Flyer`, `Logodesign`, `Logo Erstellung`, `Onlineshop`, `E-Commerce`, `eCommerce`, `Shop`, `Onlineshop`, `Interaktive Formulare`, `Interaktive PDF`]} description="Wir sind Ihre Werbeagentur für moderne und funktionale Webseiten sowie Printprodukte aller Art  – ganz nach Ihren Wünschen." />
                <PageHead image={<StaticImage src="../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="Nahaufnahme von Monitor welcher einen Websiteentwurf in Photoshop zeigt." placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Unsere Leistungen" text="Wir von Jott Zwei sind Ihre Werbeagentur, wenn es um professionelle Printprodukte und Digitalmedien geht. Wir setzen Ihre Wünsche von der Logoentwicklung bis zur fertigen Broschüre um. Gerne sind wir auch vom Webdesign bis zur Betreuung Ihrer Social Media-Kanäle für Sie da. Mit unserem Know-how wird Ihre Marke in jedem Format prägnant auf dem Markt platziert." />
                <LeistungenArea />
                <Cta />
        </Layout>
    )
}

export default LeistungenPage
