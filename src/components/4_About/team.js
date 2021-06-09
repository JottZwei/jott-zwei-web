import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { ButtonExtern, Headline2, Text } from '../defaultComponents'

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: min(90%, 1400px);
    margin: 0 auto;
    overflow: hidden;

    @supports not (width: min(90%, 1400px)){
        width: 90%;
        max-width: 1400px;
    }

    & ${Headline2}{
        font-size: 2rem;
        line-height: 1.4rem;
    }

    & ${Text}{
        margin-bottom: 20px;
        margin-top: 10px;
    }

    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr;
    }
`

const Section = styled.div`
    position: relative;
        & > div:nth-child(1):before {
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(0deg, rgba(1,14,30,1) 0%, rgba(1,14,30,0.1) 100%);
        z-index: 2;
    }

    @media screen and (max-width: 1100px){
        padding-bottom: 100px;
    }
`

const Foreground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    position: absolute;
    bottom: 0;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 90%;


`

const team = () => {
    return (
        <Wrap>
            <Section>
                <StaticImage src="../../images/4_About/joern_1.png" alt="" placeholder="blurred" />
                <Foreground>
                    <Headline2>Jörn Webert</Headline2>
                    <Text>Design für Print & Digital</Text>
                    <ButtonExtern href="mailto:webert@jott-zwei.de">
                        Jörn kontaktieren
                    </ButtonExtern>
                </Foreground>
            </Section>
            <Section>
                <StaticImage src="../../images/4_About/jan_1.png" alt="" placeholder="blurred" />
                <Foreground>
                    <Headline2>Jan Francksen</Headline2>
                    <Text>Webdesign & Webentwicklung</Text>
                    <ButtonExtern href="mailto:francksen@jott-zwei.de">
                        Jan kontaktieren
                    </ButtonExtern>
                </Foreground>
            </Section>
        </Wrap>
    )
}

export default team
