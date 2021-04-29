import React from 'react'
import Reternityref from '../../components/2_Referenzen/Reternity-ref'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ReternityPage = () => {
    return (
        <Layout>
        <Seo title="Leistungen" keywords={[`gatsby`, `application`, `react`]} />
        <Reternityref/>
        </Layout>
    )
}

export default ReternityPage