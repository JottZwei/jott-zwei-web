import React from 'react'
import styled, {keyframes} from 'styled-components'
import { Headline1, Text } from '../defaultComponents'
import { FaChevronDown } from 'react-icons/fa';

const Wrap = styled.div`
    height: 80vh;
    width: 100%;
    display: grid;
    grid-template-areas: "a";
`

const Background = styled.div`
    grid-area: a;
    z-index: -1;
    display: grid;
    height: 80vh;
    position: relative;
    overflow: hidden;

    & > div {    
        width: 100%;
        height: 100%;
    }

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

const wiggle = keyframes`
    from {transform: translateY(0)}
    to {transform: translateY(-10px)}
`


const Foreground = styled.div`
    grid-area: a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    padding: 5vw 10vw;

    & > ${Text} {
        margin-bottom: 20px;
    }    
    
    & > svg {
        color: white;
        font-size: 1.5rem;
        animation: ${wiggle} .5s ease infinite alternate-reverse;
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
                <FaChevronDown />
            </Foreground>
        </Wrap>
    )
}

export default PageHead