
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import WebTitelbild from "../../components/3_Leistungen/2_Webdesign/WebTitelbild"
import WebEntrytext from "../../components/3_Leistungen/2_Webdesign/WebEntrytext"
import WebProgressbar from "../../components/3_Leistungen/2_Webdesign/WebProgressbar"
import WebSeo from "../../components/3_Leistungen/2_Webdesign/WebSeo"

const WebdesignPage = () => {
    return (

        <Layout>
            <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <WebTitelbild />
                <WebEntrytext />
                <WebProgressbar />
                <WebSeo />
        </Layout>
    )
}

export default WebdesignPage
