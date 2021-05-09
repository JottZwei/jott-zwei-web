import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { ButtonExtern, Headline2, Text } from '../defaultComponents'

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    overflow: hidden;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 30px;

    &:nth-child(1) > div {

    }

    &:nth-child(4) > div {

}
`

const team = () => {
    return (
        <Wrap>
                <Section>
                    <StaticImage src="../../images/4_About/joern_1.png" alt="" placeholder="blurred" />
                </Section>
                <Section>
                    <Headline2>Jörn Webert</Headline2>
                    <Text>Medieninformatiker B.Sc. & Mediengestalter <br/>
Markenentwicklung und Printprodukte sind Jörns Passion. Ein Gespür für die Gestaltung und der Blick fürs Detail zeichnen ihn aus und machen ihn zum verlässlichen Ansprechpartner für Ihre Marke.</Text>
                    <ButtonExtern href="mailto:webert@jott-zwei.de">Jörn Kontaktieren</ButtonExtern>
                </Section>
                <Section>
                    <Headline2>Jan Francksen</Headline2>
                    <Text>Mediengestalter <br />
Jans Zuhause sind die Konzeption und Umsetzung von Internetseiten. Mit über 10 Jahren Erfahrung in Sachen Webdesign ist er Ihr kompetenter Ansprechpartner für Ihren Webauftritt.</Text>
                    <ButtonExtern href="mailto:francksen@jott-zwei.de">Jan Kontaktieren</ButtonExtern>
                </Section>
                <Section>
                    <StaticImage src="../../images/4_About/jan_1.png" alt="" placeholder="blurred" />
                </Section>
        </Wrap>
    )
}

export default team
