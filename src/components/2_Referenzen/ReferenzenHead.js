import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Button, Headline1, Leberwurst, Text } from '../defaultComponents'



const Wrap = styled.div`
    height: 80vh;
    width: 100%;
    display: grid;
    grid-template-areas: "a";
`

const Background = styled.div`
    grid-area: a;
    z-index: -1;
    display: block;
    height: 80vh;
    position: relative;
    overflow: hidden;

    &:before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(1,14,30,1) 0%, rgba(1,14,30,0) 100%);
        z-index: 1;
    }


`

const Foreground = styled.div`
    grid-area: a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;

    & > ${Text} {
        margin-bottom: 20px;
    }
`

const ReferenzenHead = () => {
    return (
        <Wrap>
            <Background>
                <StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="test" loading="eager" objectFit="cover" placeholder="blurred" />
            </Background>
            <Foreground>
                <Headline1><Leberwurst>Referenzen</Leberwurst> gefällig?</Headline1>
                <Text>Ein Auszug unserer Projekte. Klicken Sie auf ein Projekt, um mehr über dieses zu erfahren!</Text>
                <Button to="#losgehts">Los geht's</Button>
            </Foreground>

        </Wrap>
    )
}

export default ReferenzenHead