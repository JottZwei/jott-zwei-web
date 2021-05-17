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

const WebResponsive = () => {
    return (
        <Container>
            <Wrap>                

                <TextContainer>
                    <Headline2>Wie fürs Handy gemacht</Headline2>
                    <Text>Ob auf dem Desktop Computer, Laptop, Tablet oder Smartphone - Webseiten werden von überall und diversen Endgeräten aufgerufen. Mit dem sogenannten "Responsive Web Design" lassen wir Ihre Seite nicht nur auf allen Endgeräten gut aussehen, sondern auch noch genauso gut funktionieren.</Text>
                </TextContainer>
                <ImageContainer>
                    <StaticImage src="../../../images/3_Leistungen/Webdesign/responsive.png" alt="" placeholder="blurred" />
                </ImageContainer>

            </Wrap>
        </Container>
    )
}

export default WebResponsive