import React from "react"
import ReferenzenArea from "../components/2_Referenzen/ReferenzenArea"
import ReferenzenHead from "../components/2_Referenzen/ReferenzenHead"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ReferenzenPage = () => {
    return (
        <Layout>
          <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <ReferenzenHead />
          <ReferenzenArea />
      </Layout>
    )
} 

export default ReferenzenPage
