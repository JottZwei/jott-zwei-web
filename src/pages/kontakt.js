import React from "react"
import PageHead from "../components/6_Reusable/PageHead"
import KontaktForm from "../components/5_Kontakt/KontaktForm"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"


const KontaktPage = () => {
    return (
        <Layout>
          <Seo title="Kontakt" keywords={[`gatsby`, `application`, `react`]} />
          <PageHead image={<StaticImage src="../images/5_Kontakt/map.JPG" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Kontakt" text="Jott Zwei – Ihre Werbeagentur im Artland. Unser Sitz befindet sich im beschaulichen Badbergen – geografisch ziemlich genau zwischen Osnabrück und Cloppenburg. Mit der Stadt Quakenbrück und der Samtgemeinde Bersenbrück in der unmittelbaren Umgebung fühlen wir uns im ländlichen Badbergen gut aufgehoben." />
        <KontaktForm />
      </Layout>
    )
} 

export default KontaktPage
