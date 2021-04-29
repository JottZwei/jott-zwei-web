import React from 'react'
import Borchersref from '../../components/2_Referenzen/borchers-ref'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WeserraumPage = () => {
    return (
        <Layout>
        <Seo title="Leistungen" keywords={[`gatsby`, `application`, `react`]} />
        <Borchersref/>
        </Layout>
    )
}

export default WeserraumPage
