import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ReferenzenTemplate from '../../components/2_Referenzen/ReferenzenTemplate'


const freizeittanken = () => {
    return (
        <Layout>
        <Seo title="Leistungen" keywords={[`gatsby`, `application`, `react`]} />
        <ReferenzenTemplate index="1"/>
        </Layout>
    )
}

export default freizeittanken
