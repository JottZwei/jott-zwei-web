import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import LeistungenHead from '../components/3_Leistungen/LeistungenHead'
import LeistungenArea from '../components/3_Leistungen/LeistungenArea'



const LeistungenPage = () => {
    return (
        <Layout>
            <Seo title="Leistungen" keywords={[`gatsby`, `application`, `react`]} />
                <LeistungenHead />
                <LeistungenArea />
        </Layout>
    )
}

export default LeistungenPage
