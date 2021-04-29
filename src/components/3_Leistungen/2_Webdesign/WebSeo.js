import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container, Headline2, Text } from '../../defaultComponents'

const Wrap = styled.div`
    min-height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 100px;
`

const ImageContainer = styled.div`

`

const TextContainer = styled.div`

`

const WebSeo = () => {
    return (
        <Container>
            <Wrap>
                <ImageContainer>
                    <StaticImage src="../../../images/seo-test.jpg" layout="fullWidth" />
                </ImageContainer>
                <TextContainer>
                    <Headline2>Such&shy;ma&shy;schi&shy;nen&shy;op&shy;ti&shy;mie&shy;rung</Headline2>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt dignissimos distinctio maiores voluptatibus, sequi culpa? Dolorum saepe beatae placeat, doloribus iusto distinctio qui exercitationem animi ullam, vitae voluptatum nam?</Text>
                </TextContainer>
            </Wrap>
        </Container>
    )
}

export default WebSeo
