import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container, Headline2, Text } from '../../defaultComponents'

const Wrap = styled.div`
    min-height: 60vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 5vw;
    column-gap: 5vw;

    @media screen and (max-width: 700px){
        grid-template-columns: 1fr;
        gap: 0;
        column-gap: 0;
        margin-bottom: 50px;
    }
`

const ImageContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
`

const TextContainer = styled.div`

`

const WebSeo = () => {
    return (
        <Container>
            <Wrap>
                <ImageContainer>
                    <StaticImage src="../../../images/3_Leistungen/Webdesign/seo.png" alt="" placeholder="blurred" />
                </ImageContainer>
                <TextContainer>
                    <Headline2>Such&shy;ma&shy;schi&shy;nen&shy;op&shy;ti&shy;mie&shy;rung</Headline2>
                    <Text>Zusätzlich zur perfekt konzipierten und gestalteten Internetseite gehört unter anderem auch eine optimale Suchmaschinenoptimierung (SEO) und Such&shy;maschi&shy;nen&shy;werbung (SEA). Denn Sie müssen gefunden werden!</Text>
                </TextContainer>
            </Wrap>
        </Container>
    )
}

export default WebSeo
