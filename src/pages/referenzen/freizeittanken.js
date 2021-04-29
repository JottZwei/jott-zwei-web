import React from 'react'
import Freizeittankenref from '../../components/2_Referenzen/Freizeittanken-ref'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const freizeittanken = () => {
    return (
        <Layout>
        <Seo title="Leistungen" keywords={[`gatsby`, `application`, `react`]} />
        <Freizeittankenref/>
        </Layout>
    )
}

export default freizeittanken
