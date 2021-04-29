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
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    & > ${Text} {
        margin-bottom: 20px;
    }
`

const LeistungenHead = () => {
    return (
        <Wrap>
            <Background>
                <StaticImage src="../../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="" loading="eager" objectFit="cover" placeholder="blurred" />
            </Background>
            <Foreground>
                <Headline1>Unsere <Leberwurst>Leistungen</Leberwurst></Headline1>
                <Text>Wir von Jott Zwei sind Ihre Werbeagentur, wenn es um professionelle Printprodukte und Digitalmedien geht. Wir setzen Ihre Wünsche von der Logoentwicklung bis zur fertigen Broschüre um. Gerne sind wir auch vom Webdesign bis zur Betreuung Ihrer Social Media-Kanäle für Sie da. Mit unserem Know-how wird Ihre Marke in jedem Format prägnant auf dem Markt platziert.</Text>
                <Button to="#losgehts">Los geht's</Button>
            </Foreground>

        </Wrap>
    )
}

export default LeistungenHead