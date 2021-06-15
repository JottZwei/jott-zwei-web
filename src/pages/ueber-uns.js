import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHead from '../components/6_Reusable/PageHead'
import { StaticImage } from "gatsby-plugin-image"
import Team from "../components/4_About/team"
import AboutText from "../components/4_About/AboutText"

const UeberUnsPage = () => {
    return (
        <Layout>
          <Seo title="Über Uns" keywords={[`Team`, `Webdesign`, `Webentwicklung`, `Design für Print`, `Design für Digital`, `Vertrauen`, `Transparenz`, `Werbeagentur`]} description="Jan Francksen und Jörn Webert. Ein Team, das Ihre Wünsche mit kreativen Ideen zum Leben erweckt. Erfahren Sie mehr über uns." />
          <PageHead image={<StaticImage src="../images/4_About/jott_zwei_team.jpg" alt="Ein Bild von Jörn Webert und Jan Francksen am Arbeitsplatz." placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Das sind wir" text="Erfahren Sie mehr über uns." />
          <AboutText />
          <Team />
      </Layout>
    )
} 

export default UeberUnsPage
