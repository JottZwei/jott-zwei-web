import React from "react"
import Hero from "../components/1_Homepage/Hero"
import Leistungen from "../components/1_Homepage/Leistungen"
import Referenzen from "../components/1_Homepage/Referenzen"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from '../components/6_Reusable/CTA'

const IndexPage = () => (
  <Layout>
      <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} description="" meta="" />
      <Hero />
      <Referenzen />
      <Leistungen />
      <Cta />
  </Layout>
)

export default IndexPage
