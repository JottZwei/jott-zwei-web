import React from "react"
import Hero from "../components/1_Homepage/Hero"
import Leistungen from "../components/1_Homepage/Leistungen"
import Referenzen from "../components/1_Homepage/Referenzen"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from '../components/6_Reusable/CTA'

const IndexPage = () => (
  <Layout>
      <Seo title="Ihre Lieblingsagentur ♥ | Jott Zwei Werbeagentur" description="Broschüren, Flyer, Websites und mehr – wir geben Ihnen und Ihrem Unternehmen einen prägnanten und unverwechselbaren Auftritt auf dem Markt." meta={[]} keywords={[`Jott`, `Zwei`, `Werbeagentur`, `Marken`, `Logodesign`, `Internetseiten erstellen`, `Internetseiten`, `Gestaltung`, `Artland`, `Osnabrück`, `Quakenbrück`, `Badbergen`, `Cloppenburg`, `Printmedien`, `Logo`, `E-Commerce`, `Onlineshop`, `eCommerce`, `Online verkauf`, `Drucksachen`, `Corporate Design`, `Flyer`, `Schilder`, `Visitenkarten`, `Stempel`, `Briefpapier`]} />
      <Hero />
      <Referenzen />
      <Leistungen />
      <Cta />
  </Layout>
)

export default IndexPage
