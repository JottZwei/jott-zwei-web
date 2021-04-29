import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Headline2, Button } from '../defaultComponents'
import { Link } from 'gatsby'

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    width: min(90%, 1150px);
    margin: 0 auto;
    padding-top: 150px;
`

const Item = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:first-child{
        border-radius: 12px;
        overflow:hidden;
    }
`

const Content = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
`



const ReferenzenArea = () => {
    return (
        <Wrap id="losgehts">
            <Item to="/referenzen/ziemer-consult">
                <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_2.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>Ziemer Consult</Headline2>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>

            <Item to="/referenzen/freizeittanken">
                <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_1.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>Freizeittanken</Headline2>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>

            <Item to="/referenzen/reternity">
                <StaticImage src="../../images/2_Referenzen/Reternity/ref_rt_2.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>Reternity</Headline2>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>

            <Item to="/referenzen/rebel-pandas">
                <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_1.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>Rebel Pandas</Headline2>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>

            <Item to="/referenzen/weserraum">
                <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_1.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>Weserraum</Headline2>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>

            <Item to="/referenzen/people2go">
                <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_1.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>People2Go</Headline2>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>
        </Wrap>
    )
}

export default ReferenzenArea
