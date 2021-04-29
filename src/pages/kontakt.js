import React from "react"
import KontaktHead from "../components/5_Kontakt/KontaktHead"
import Layout from "../components/layout"
import Seo from "../components/seo"

const KontaktPage = () => {
    return (
        <Layout>
          <Seo title="Kontakt" keywords={[`gatsby`, `application`, `react`]} />
        <KontaktHead />
      </Layout>
    )
} 

export default KontaktPage
