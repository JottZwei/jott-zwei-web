import React from 'react'
import ReferenzenTemplate from '../../components/2_Referenzen/ReferenzenTemplate'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ReternityPage = () => {
    return (
        <Layout>
        <Seo title="Reterniy Referenz" keywords={[`E-Commerce`, `eCommerce`, `Flyer`, `Onlineshop`]} description="Lässige Looks verpackt in einem übersichtlichen und aufgeräumten Webshop? Kein Problem ..." />
        <ReferenzenTemplate index="3"/>
        </Layout>
    )
}

export default ReternityPage