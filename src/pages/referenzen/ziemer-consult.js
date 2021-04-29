import React from 'react'
import Ziemerref from '../../components/2_Referenzen/Ziemer-ref'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ziemerconsult = () => {
    return (
        <Layout>
        <Seo title="Leistungen" keywords={[`gatsby`, `application`, `react`]} />
        <Ziemerref/>
        </Layout>
    )
}

export default ziemerconsult
