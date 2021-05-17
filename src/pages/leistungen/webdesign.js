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
            <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <PageHead image={<StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Webdesign" text="Ein Auszug unserer Projekte. Klicken Sie auf ein Projekt, um mehr über dieses zu erfahren!" />
                <WebEntrytext />
                <WebProgressbar />
                <WebSeo />
                <WebResponsive />
                <WebLadezeiten />
        </Layout>
    )
}

export default WebdesignPage
