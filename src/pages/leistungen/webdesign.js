import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import WebEntrytext from "../../components/3_Leistungen/2_Webdesign/WebEntrytext"
import WebProgressbar from "../../components/3_Leistungen/2_Webdesign/WebProgressbar"
import WebSeo from "../../components/3_Leistungen/2_Webdesign/WebSeo"
import PageHead from "../../components/6_Reusable/PageHead"
import { StaticImage } from "gatsby-plugin-image"
import WebResponsive from "../../components/3_Leistungen/2_Webdesign/WebResponsive"
import WebLadezeiten from "../../components/3_Leistungen/2_Webdesign/WebLadezeiten"


const WebdesignPage = () => {
    return (

        <Layout>
            <Seo title="Webdesign" keywords={[`Webseiten`, `Internetseiten`, `Website`, `Internetauftritt`, `Responsive`, `Mobiloptimiert`, `Businesswebsite`, `Firmenwebsite`, `Firmeninternetseite`, `Webdesign`, `Webpräsenz`, `Webauftritt`, `Digitalmedien`, `Webentwicklung`]} description="Wir bringen über 10 Jahre Erfahrung im Webdesign mit und bieten ein fundiertes Fachwissen. Entscheidend ist: Ihre Website ist Ihr digitales Aushängeschild." />
                <PageHead image={<StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="Nahaufnahme von Monitor welcher einen Websiteentwurf in Photoshop zeigt." placeholder="blurred" objectFit="cover" width="1920" />} headline="Webdesign" text="Wir bringen über 10 Jahre Erfahrung im Webdesign mit und bieten ein fundiertes Fachwissen rund um die Frage “Wie bekomme ich mehr Besucher auf meine Seite?”. Entscheidend ist: Ihre Website ist Ihr digitales Aushängeschild." />
                <WebEntrytext />
                <WebProgressbar />
                <WebSeo />
                <WebResponsive />
                <WebLadezeiten />
        </Layout>
    )
}

export default WebdesignPage
