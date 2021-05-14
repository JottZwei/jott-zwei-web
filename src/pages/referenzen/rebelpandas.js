import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ReferenzenTemplate from '../../components/2_Referenzen/ReferenzenTemplate'

const RebelPandasPage = () => {
    return (
        <Layout>
        <Seo title="Rebel Pandas Referenz" keywords={[`gatsby`, `application`, `react`]} />
        <ReferenzenTemplate index="2"/>
        </Layout>
    )
}

export default RebelPandasPage