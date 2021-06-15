import React from 'react'
import ReferenzenTemplate from '../../components/2_Referenzen/ReferenzenTemplate'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WeserraumPage = () => {
    return (
        <Layout>
        <Seo title="Leistungen" keywords={[`Webdesign`, `Visitenkarten`, `Stempel`]} description="Ein prägnantes Logo, Visitenkarten, Stempel, sowie ein kleiner Webauftritt." />
        <ReferenzenTemplate index="4"/>
        </Layout>
    )
}

export default WeserraumPage
