import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Headline2, Headline3, Text, Leberwurst } from '../defaultComponents'
import { FaChevronRight } from "react-icons/fa"
import {Link} from 'gatsby'

const Wrap = styled.div`
    width: min(90%, 1150px);
    margin: 0 auto;
    padding: 10vw 4vw;
    
    @media screen and (max-width: 1300px){
        width: 100%;
        padding-left: 20px;
    }
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > svg {
        color: white; 
        font-size: clamp(1.5rem, 1.4rem + 0.4848vw, 1.7rem);
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding: 40px 0px;

        
    &::-webkit-scrollbar {
        display: none;
    }
`

const Card = styled(Link)`
    background: rgb(17, 40, 54);
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease;

    & > div > div {
        aspect-ratio: 16 / 10;
    }

    @media screen and (max-width: 1300px){
        min-width: 300px;
    }

    &:hover{
        transform: translateY(-20px);
    }
`

const Button = styled.button`
    width: 100%;
    padding: 20px;
    background: var(--secondary-color);
    border:none;
`

const TextContent = styled.div`
    padding: 20px;
`

const Leistungen = () => {
    return (
        <Wrap>
            <TitleContainer><Headline2>Unsere <Leberwurst>Leistungen</Leberwurst></Headline2><FaChevronRight /></TitleContainer>
            <Content>
                <Card to="/leistungen/printmedien">
                    <StaticImage src="../../images/1_Homepage/Hero/hero_1.jpg" alt=""/>
                    <TextContent>
                        <Headline3>Printmedien</Headline3>
                        <Text>Print&shy;­me&shy;­di&shy;en o&shy;der ger&shy;ne auch “Druck­&shy;sa­&shy;chen” sind zu fast al­&shy;len An&shy;­läs­&shy;sen ei&shy;ne gu&shy;te Ent­&shy;schei&shy;­dung. Ob Spei­&shy;se­&shy;kar&shy;­ten, Fly­&shy;er, Ka­&shy;ta­&shy;lo&shy;­ge o&shy;der Pla­&shy;ka&shy;­te, Ihr Un­&shy;ter­&shy;neh&shy;­men wird mit dem von uns er­&shy;stell&shy;­ten De&shy;sign aus der Men&shy;­ge her­&shy;vor&shy;­ste­&shy;chen.</Text>
                    </TextContent>
                    <Button>mehr erfahren ...</Button>
                </Card>
                <Card to="/leistungen/webdesign">
                    <StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt=""/>
                    <TextContent lang="de">
                        <Headline3>Webdesign</Headline3>
                        <Text>Print&shy;­me&shy;­di&shy;en o&shy;der ger&shy;ne auch “Druck­&shy;sa­&shy;chen” sind zu fast al­&shy;len An&shy;­läs­&shy;sen ei&shy;ne gu&shy;te Ent­&shy;schei&shy;­dung. Ob Spei­&shy;se­&shy;kar&shy;­ten, Fly­&shy;er, Ka­&shy;ta­&shy;lo&shy;­ge o&shy;der Pla­&shy;ka&shy;­te, Ihr Un­&shy;ter­&shy;neh&shy;­men wird mit dem von uns er­&shy;stell&shy;­ten De&shy;sign aus der Men&shy;­ge her­&shy;vor&shy;­ste­&shy;chen.</Text>
                    </TextContent>
                    <Button>mehr erfahren ...</Button>
                </Card>
                <Card to="/leistungen/digitalmedien">
                    <StaticImage src="../../images/3_Leistungen/Printmedien/Flyer.jpg" alt=""/>
                    <TextContent >
                        <Headline3>Digitalmedien</Headline3>
                        <Text>In­&shy;­ter­­&shy;net­­&shy;sei­&shy;­ten, On­­&shy;line­&shy;­shops, in­&shy;­ter­­&shy;ak­&shy;­ti­&shy;­ve For­­&shy;mu­­&shy;la­­&shy;re, So­&shy;­cial-Me­­&shy;dia-Mar­&shy;­ke­&shy;­ting, Vi­&shy;deos & Apps. Es ist Zeit für Di­­&shy;gi­­&shy;ta­&shy;­li­&shy;­sie­­&shy;rung. Wir hel­­&shy;fen Ih­­&shy;nen bei dem Mo­­&shy;der­­&shy;ni­­&shy;sie­&shy;­ren und der Um­&shy;­stel­­&shy;lung auf di­&shy;­gi­&shy;­ta­&shy;­les Höchst­&shy;ni­veau.</Text>
                    </TextContent>
                    <Button>mehr erfahren ...</Button>
                </Card>
                <Card to="/leistungen/logo">
                    <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_1.jpg" alt=""/>
                    <TextContent lang="de">
                        <Headline3>Printmedien</Headline3>
                        <Text>Ihr Lo­&shy;­go ist der wich­&shy;­tig­­&shy;ste Fak­&shy;­tor für den Wie­&shy;­der­­&shy;er­­&shy;ken­­&shy;nungs­&shy;­wert Ih­­&shy;rer Mar­&shy;­ke. Da­­&shy;zu ein durch­&shy;­gän­&shy;­gi­­&shy;ges De­­&shy;sign, das sich vom Brief­&shy;­kopf bis in die so­&shy;­zia­­&shy;len Me­­&shy;dien hi­­&shy;nein wie­­&shy;der­­&shy;fin­&shy;­det, gibt Ih­­&shy;rer Mar­&shy;­ke ei­­&shy;nen un­­&shy;ver­­&shy;wech­­&shy;sel­&shy;­ba­ren Auf­­&shy;tritt.</Text>
                    </TextContent>
                    <Button>mehr erfahren ...</Button>
                </Card>
            </Content>
        </Wrap>
    )
}

export default Leistungen
