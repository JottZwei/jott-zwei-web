import React from 'react'
import ReferenzenTemplate from '../../components/2_Referenzen/ReferenzenTemplate'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ReternityPage = () => {
    return (
        <Layout>
        <Seo title="Leistungen" keywords={[`gatsby`, `application`, `react`]} />
        <ReferenzenTemplate index="3"/>
        </Layout>
    )
}

export default ReternityPage