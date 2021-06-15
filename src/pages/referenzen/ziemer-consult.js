import React from 'react'
import ReferenzenTemplate from '../../components/2_Referenzen/ReferenzenTemplate'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ziemerconsult = () => {
    return (
        <Layout>
        <Seo title="Leistungen" keywords={[`Webdesign`, `Logogestaltung`, `eCommerce`, `Visitenkarten`, `Firmenschilder`, `Briefpapier`, `Visitenkarte`, `E-Commerce`]} description="Für Ziemer Consult war es Zeit für ein brandneues Corporate Design, eine neue Website inklusive Shop, Geschäftspapiere und mehr ..." />
        <ReferenzenTemplate index="0"/>
        </Layout>
    )
}

export default ziemerconsult
