import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Headline2, Text } from '../defaultComponents'

const Wrap = styled.div`
    display: grid;
    grid-template-areas: "a";
`

const Background = styled.div`
    grid-area: a;
    display: grid;
    justify-content: center;
`

const Foreground = styled.div`
    grid-area: a;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    z-index: 2;
    padding: 1vw 10vw 1vw 20vw;
`

const Section = styled.div``

const team = () => {
    return (
        <Wrap>
            <Background>
                <StaticImage src="../../images/team_jott_zwei_2.png" alt="" placeholder="blurred" objectFit="cover" />
            </Background>
            <Foreground>
                <Section>
                    <Headline2>Jörn Webert</Headline2>
                    <Text>Medieninformatiker B.Sc. & Mediengestalter <br/>
Markenentwicklung und Printprodukte sind Jörns Passion. Ein Gespür für die Gestaltung und der Blick fürs Detail zeichnen ihn aus und machen ihn zum verlässlichen Ansprechpartner für Ihre Marke.</Text>
                </Section>
                <Section>
                    <Headline2>Jan Francksen</Headline2>
                    <Text>Mediengestalter <br />
Jans Zuhause sind die Konzeption und Umsetzung von Internetseiten. Mit über 10 Jahren Erfahrung in Sachen Webdesign ist er Ihr kompetenter Ansprechpartner für Ihren Webauftritt.</Text>
                </Section>
            </Foreground>
        </Wrap>
    )
}

export default team
