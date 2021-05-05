import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHead from '../components/6_Reusable/PageHead'
import { StaticImage } from "gatsby-plugin-image"
import Team from "../components/4_About/team"
import Cta from '../components/6_Reusable/CTA'

const UeberUnsPage = () => {
    return (
        <Layout>
          <Seo title="Über Uns" keywords={[`gatsby`, `application`, `react`]} />
          <PageHead image={<StaticImage src="../images/5_Kontakt/map.JPG" alt="" placeholder="blurred" objectFit="cover" layout="fullWidth" />} headline="Kontakt" text="Das doppelte Jottchen – nur nicht verwandt. Zusammen die Schulbank gedrückt, nach dem Abschluss aber aus den Augen verloren. Jetzt sind wir wieder vereint und stärker denn je. Zum Start des neuen Jahrzehnts gründeten wir die aufstrebende Werbeagentur “Jott Zwei”: Jan Francksen und Jörn Webert. Ein Team, das Ihre Wünsche mit kreativen Ideen zum Leben erweckt. Mit dem gewissen j-Faktor sind wir bei der Gestaltung Ihres Wunschproduktes immer auf der Höhe der Zeit. Oberste Priorität haben – neben unserer gestalterischen Arbeit – Ihre Zufriedenheit, gegenseitiges Vertrauen und Transparenz. Wir wollen, dass Sie immer mit einem guten Gefühl zu uns kommen." />
          <Team />
          <Cta />
      </Layout>
    )
} 

export default UeberUnsPage
