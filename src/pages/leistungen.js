import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHead from '../components/6_Reusable/PageHead'
import Leistungen from '../components/1_Homepage/Leistungen'
import { StaticImage } from 'gatsby-plugin-image'



const LeistungenPage = () => {
    return (
        <Layout>
            <Seo title="Leistungen" keywords={[`gatsby`, `application`, `react`]} />
                <PageHead image={<StaticImage src="../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Unsere Leistungen" text="Wir von Jott Zwei sind Ihre Werbeagentur, wenn es um professionelle Printprodukte und Digitalmedien geht. Wir setzen Ihre Wünsche von der Logoentwicklung bis zur fertigen Broschüre um. Gerne sind wir auch vom Webdesign bis zur Betreuung Ihrer Social Media-Kanäle für Sie da. Mit unserem Know-how wird Ihre Marke in jedem Format prägnant auf dem Markt platziert." />
                <Leistungen id="losgehts" />
        </Layout>
    )
}

export default LeistungenPage
