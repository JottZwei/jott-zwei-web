import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import TestVideo from '../../components/2_Referenzen/TestVideo'

const RebelPandasPage = () => {
    return (
        <Layout>
        <Seo title="Rebel Pandas Referenz" keywords={[`gatsby`, `application`, `react`]} />
        <TestVideo index="2"/>
        </Layout>
    )
}

export default RebelPandasPage