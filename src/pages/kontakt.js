import React from "react"
import PageHead from "../components/6_Reusable/PageHead"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import KontaktFormular from "../components/5_Kontakt/KontaktFormular"


const KontaktPage = () => {
    return (
        <Layout>
          <Seo title="Kontakt" keywords={[`gatsby`, `application`, `react`]} />
          <PageHead image={<StaticImage src="../images/5_Kontakt/map.JPG" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} link="kontakt" headline="Kontakt" text="Jott Zwei – Ihre Werbeagentur im Artland. Unser Sitz befindet sich im beschaulichen Badbergen – geografisch ziemlich genau zwischen Osnabrück und Cloppenburg. Mit der Stadt Quakenbrück und der Samtgemeinde Bersenbrück in der unmittelbaren Umgebung fühlen wir uns im ländlichen Badbergen gut aufgehoben." />
        <KontaktFormular />
      </Layout>
    )
} 

export default KontaktPage
