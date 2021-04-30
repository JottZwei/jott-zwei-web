import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Headline2, Text } from '../defaultComponents'
import { Link } from 'gatsby'

const Wrap = styled.div`
    padding-top: 150px;
    width: min(90%, 1150px);
    display: grid;
    height: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0 auto;
    gap: 30px;
`

const Item = styled(Link)`
    display: block;
    
    & > div:first-child{
        border-radius: 12px;
        overflow: hidden;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > ${Text}{
        margin-bottom: 20px;
    }
`

const Button = styled.button`
    background: var(--secondary-color);
    border: none;
    padding: 10px 20px;
    color: var(--white);
    border-radius: 40px;
`


const LeistungenArea = () => {
    return (
        <Wrap id="losgehts">
            <Item to="/leistungen/printmedien">
                <StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>Printmedien</Headline2>
                    <Text>Print&shy;­me&shy;­di&shy;en o&shy;der ger&shy;ne auch “Druck­&shy;sa­&shy;chen” sind zu fast al­&shy;len An&shy;­läs­&shy;sen ei&shy;ne gu&shy;te Ent­&shy;schei&shy;­dung. Ob Spei­&shy;se­&shy;kar&shy;­ten, Fly­&shy;er, Ka­&shy;ta­&shy;lo&shy;­ge o&shy;der Pla­&shy;ka&shy;­te, Ihr Un­&shy;ter­&shy;neh&shy;­men wird mit dem von uns er­&shy;stell&shy;­ten De&shy;sign aus der Men&shy;­ge her­&shy;vor&shy;­ste­&shy;chen.</Text>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>
            <Item to="/leistungen/digitalmedien">
                <StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>Digitalmedien</Headline2>
                    <Text>Print&shy;­me&shy;­di&shy;en o&shy;der ger&shy;ne auch “Druck­&shy;sa­&shy;chen” sind zu fast al­&shy;len An&shy;­läs­&shy;sen ei&shy;ne gu&shy;te Ent­&shy;schei&shy;­dung. Ob Spei­&shy;se­&shy;kar&shy;­ten, Fly­&shy;er, Ka­&shy;ta­&shy;lo&shy;­ge o&shy;der Pla­&shy;ka&shy;­te, Ihr Un­&shy;ter­&shy;neh&shy;­men wird mit dem von uns er­&shy;stell&shy;­ten De&shy;sign aus der Men&shy;­ge her­&shy;vor&shy;­ste­&shy;chen.</Text>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>
            <Item to="/leistungen/webdesign">
                <StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>Webdesign</Headline2>
                    <Text>Print&shy;­me&shy;­di&shy;en o&shy;der ger&shy;ne auch “Druck­&shy;sa­&shy;chen” sind zu fast al­&shy;len An&shy;­läs­&shy;sen ei&shy;ne gu&shy;te Ent­&shy;schei&shy;­dung. Ob Spei­&shy;se­&shy;kar&shy;­ten, Fly­&shy;er, Ka­&shy;ta­&shy;lo&shy;­ge o&shy;der Pla­&shy;ka&shy;­te, Ihr Un­&shy;ter­&shy;neh&shy;­men wird mit dem von uns er­&shy;stell&shy;­ten De&shy;sign aus der Men&shy;­ge her­&shy;vor&shy;­ste­&shy;chen.</Text>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>
            <Item to="/leistungen/logodesign">
                <StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="" placeholder="blurred"/>
                <Content>
                    <Headline2>Logo</Headline2>
                    <Text>Print&shy;­me&shy;­di&shy;en o&shy;der ger&shy;ne auch “Druck­&shy;sa­&shy;chen” sind zu fast al­&shy;len An&shy;­läs­&shy;sen ei&shy;ne gu&shy;te Ent­&shy;schei&shy;­dung. Ob Spei­&shy;se­&shy;kar&shy;­ten, Fly­&shy;er, Ka­&shy;ta­&shy;lo&shy;­ge o&shy;der Pla­&shy;ka&shy;­te, Ihr Un­&shy;ter­&shy;neh&shy;­men wird mit dem von uns er­&shy;stell&shy;­ten De&shy;sign aus der Men&shy;­ge her­&shy;vor&shy;­ste­&shy;chen.</Text>
                    <Button>zur Referenz ...</Button>
                </Content>
            </Item>
        </Wrap>
    )
}

export default LeistungenArea
