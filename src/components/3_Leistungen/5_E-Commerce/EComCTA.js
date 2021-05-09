import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { ButtonInternal, Headline3, Text } from '../../defaultComponents'

const Wrap = styled.div`
    display: grid;
    grid-template-areas: "a";
    height: 80vh;
    width: 100%;
    overflow: hidden;
    place-items: center;
    margin: 100px 0;
    z-index: 0;
`

const Background = styled.div`
    grid-area: a;
    z-index: -1;
    height: inherit;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(0deg, rgba(1,14,30,1.0) 0%, rgba(1,14,30,.4) 20%, rgba(1,14,30,.4) 80%, rgba(1,14,30,1.0) 100%);
        z-index: 2;
    }
`

const Foreground = styled.div`
    grid-area: a;
    display: flex;
    flex-direction: column;
    z-index: 5;
    text-align: center;
    align-items: center;


    & > ${Headline3} {
        font-size: 3rem;
    }

    & > ${ButtonInternal}{
        width: fit-content;
        margin-top: 30px;
    }


`

const EComCTA = () => {
    return (
        <Wrap>
            <Background>
                <StaticImage src="../../../images/3_Leistungen/E-Commerce/shopping.jpg" alt="test" loading="eager" objectFit="cover" placeholder="blurred" />
            </Background>
            <Foreground>
                <Headline3>Interesse?</Headline3>
                <Text>Zögern Sie nicht und kontaktieren Sie uns einfach direkt und unverbindlich!</Text>
                <ButtonInternal to="/kontakt">Los geht's</ButtonInternal>
            </Foreground>
        </Wrap>
    )
}

export default EComCTA
