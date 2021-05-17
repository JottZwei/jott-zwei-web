import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container, Headline2, Text } from '../../defaultComponents'

const Wrap = styled.div`
    min-height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 5vw;
    column-gap: 5vw;

    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr;
        gap: 0;
    }
`

const ImageContainer = styled.div`

`

const TextContainer = styled.div`

`

const WebLadezeiten = () => {
    return (
        <Container>
            <Wrap>
                <ImageContainer>
                    <StaticImage src="../../../images/3_Leistungen/Webdesign/gatsby-next.png" alt="" placeholder="blurred" />
                </ImageContainer>
                <TextContainer>
                    <Headline2>Optimale Ladezeiten dank modernster Technik.</Headline2>
                    <Text>Ist der Besucher erst einmal auf Ihrer Website, sorgen eine klare Struktur, schnelle Ladezeiten und ein ansprechendes Design dafür, dass sich Besucher auf Ihrer Website zurechtfinden und gerne nach Informationen und Leistungen suchen.</Text>
                </TextContainer>
            </Wrap>
        </Container>
    )
}

export default WebLadezeiten