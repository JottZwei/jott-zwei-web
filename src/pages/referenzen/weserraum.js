import React from 'react'
import ReferenzenTemplate from '../../components/2_Referenzen/ReferenzenTemplate'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WeserraumPage = () => {
    return (
        <Layout>
        <Seo title="Leistungen" keywords={[`gatsby`, `application`, `react`]} />
        <ReferenzenTemplate index="4"/>
        </Layout>
    )
}

export default WeserraumPage
