import React from 'react'
import styled from 'styled-components'
import { Button, Headline1, Text } from '../defaultComponents'

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

const PageHead = ({ image, headline, text }) => {
    return (
        <Wrap>
            <Background>
                {image}
            </Background>
            <Foreground>
                <Headline1>{headline}</Headline1>
                <Text>{text}</Text>
                <Button to="#losgehts">Los geht's</Button>
            </Foreground>
        </Wrap>
    )
}

export default PageHead