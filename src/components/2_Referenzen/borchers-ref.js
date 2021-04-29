import React from 'react'
import styled from 'styled-components'
import { Headline1, Text } from '../defaultComponents'
import Cta from '../6_Reusable/CTA'
import { StaticImage } from 'gatsby-plugin-image'


const Container = styled.article`

`

const Wrap = styled.div`
    height: 90vh;
    width: 100%;
    position: relative;
    z-index: -1;
    overflow: hidden;

    &:before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(1,14,30,1) 0%, rgba(1,14,30,0) 100%);
        z-index: 5;
    }


    & > div{
        height: 100%;
    }

    & > div > img {
        position: fixed;
    }
`

const Client = styled.h1`
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    backdrop-filter: blur(10px);
    border: 5px solid white;
    padding: 20px;
    letter-spacing: 3px;
    box-shadow: 2px 2px 15px rgba(0,0,0,0.5);
    z-index: 88;
    font-size: 3rem;
`

const Pills = styled.span`
    position: absolute; 
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 88;
    color: white;
    text-transform: uppercase;
`

const EntryText = styled.div`
    width: min(90%, 1120px);
    margin: 0 auto;
    margin-bottom: 100px;
`

const ImageList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;    
    width: min(90%, 1120px);
    margin: 0 auto;

    & > div {
        border-radius: 12px;
        overflow: hidden;
    }
`

const borchers_ref = () => {
    return (
        <Container>
        <Wrap>
        <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_0_head.jpg" alt="Autos in bläulich beleuchteter Garage | Titelbild für Weserraum" loading="eager" objectFit="cover" />
            <Client>Weserraum</Client>
            <Pills>
                Internetseite, Logo, Visitenkarten, Stempel
            </Pills>
        </Wrap>
        <EntryText>
            <Headline1>Ihr kompetenter Partner für Ihre Lexware Software</Headline1>
            <Text>
                Michael Ziemer und sein Team helfen seit 1985 kleinen und mittelständischen Unternehmen, Handwerkern, Dienstleistern, Handels- und Produktionsunternehmen, Steuerberatern und Rechtsanwälten bei der Auswahl, Einführung sowie Optimierung von Betriebssoftware und Organisationslösungen für Büro und Verwaltung. Nun war es an der Zeit neben den hervorragenden Services und Produkten ein brandneues Corporate Design und einen modernen Auftritt im Internet zu schaffen. Das Ergebnis ist eine schlichte, aber modernisierte Bildmarke, versehen mit einer ästhetischen Typographie. Der Internetauftritt ist ein großer Schritt in die Moderne. Responsive und mit neuer Farbgebung macht es einiges her, sich durch die neuen Produkte zu klicken. Des Weiteren bietet der neue Internetauftritt auch die Möglichkeit, die Produkte direkt online zu kaufen mit Hilfe eines intuitiven Onlineshops. Im Shop sind sowohl physische als auch digitale Produkte erhältlich. Dies lässt für die Zukunft noch großen Spielraum für weitere digitale Produkte, welche sich momentan in Planung befinden."
            </Text>
        </EntryText>
        <ImageList>
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_1.jpg" alt="Abbildung des Internetauftritts von Weserraum auf einem Laptop" />
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_2.jpg" alt="Abbildung der Visitenkarten von Weserraum" />
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_3.jpg" alt="Gedrucktes Logo von Weserraum" />
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_4.jpg" alt="Moodimage von einem Auto in einer bläulich beleuchteten Garage" />
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_5.jpg" alt="Weserraum Internetseite auf einem Smartphone" />
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_6.jpg" alt="Weserraum Firmenstempel" />
        </ImageList>
        <Cta />
        </Container>
    )
}

export default borchers_ref
