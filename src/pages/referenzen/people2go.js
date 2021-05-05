import React from 'react'
import ReferenzenTemplate from '../../components/2_Referenzen/ReferenzenTemplate'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const People2GoPage = () => {
    return (
        <Layout>
        <Seo title="Rebel Pandas Referenz" keywords={[`gatsby`, `application`, `react`]} />
        <ReferenzenTemplate index="5"/>
        </Layout>
    )
}

export default People2GoPage