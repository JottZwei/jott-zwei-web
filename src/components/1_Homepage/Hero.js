import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Headline1, Text } from '../defaultComponents'
import { FaFacebook, FaInstagram, FaChevronDown } from "react-icons/fa"


const Wrap = styled.div`
    display: grid;
    grid-template-areas: "a";
    grid-template-rows: 100%;
    grid-template-columns: 100%;
    position: relative;

@media screen and (min-width: 1101px){
    height: 90vh;
    width: 92vw;
    border-radius: 20px;
    overflow: hidden;
    transform: translateZ(0);
    margin: 30px auto;
    box-shadow: 5px 5px 10px black;
    max-width: 1920px;
}
`

const Background = styled.div`
    grid-area: a;
    display: grid;
    grid-template-areas: "a";    

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(0deg, rgba(1,14,30,1.0) 0%, rgba(1,14,30,0.0) 100%);
        z-index: 0;

        @supports not (inset: 0){
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
`

const wiggle = keyframes`
    from {transform: translateY(0)}
    to {transform: translateY(-10px)}
`

const Foreground = styled.div`
    grid-area: a;
    z-index: 10;
    padding: 10vw;
    align-self: flex-end;

    @media screen and (min-width: 1101px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 3fr 1fr;
        grid-template-areas: "a b" "c d";
        column-gap: 30px;
        row-gap: 30px;
        padding: 5vw;
        align-self: auto;
    }
`

const fadeIn = keyframes`
    from {
        opacity: 0.0;
        transform: scale(1.1);
    }
    to {
        opacity: 1.0;
        transform: scale(1.0);
    }
`

const Content = styled.div`
    
    text-align:center; 

    & > * {
        z-index: 1;
    }
    
    & > ${Headline1} {
        font-size: 2.5rem;
        color: white;   
    }


    & > svg {
        margin: 30px auto 0px;
        color: white;
        font-size: 1.5rem;
        display: block;
        animation: ${wiggle} .5s ease infinite alternate-reverse;
    }

@media screen and (min-width: 1101px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    grid-area: a;
    max-width: 700px;
    text-align: left;

    & > svg {
        margin: 30px 0px 0px;
    }
}
`


const Socials = styled.div`

    display: none;

    @media screen and (min-width: 1101px){
        display: block;
        grid-area: c;
        margin: auto auto 0 0;
        z-index: 5;

        & svg {
            font-size: 1.5rem;
            z-index: 5;

            &:first-child{
                margin-right: 20px;
            }
        }
    }

`

const SocialLink = styled.a`

`

const ImageWrap = styled.div`

    grid-area: a;  

    & > div {
        height: 100%;
        width: 100%;
        animation: 1s ease-out 0s 1 ${fadeIn};  
        z-index: -1;
    }
`


const Hero = () => {

    return (
        <Wrap>
            <Background>
                <ImageWrap>
                    <StaticImage src="../../images/1_Homepage/Hero/hero_3.jpg" alt="Ein Mann ist vertieft in seine Arbeit am Laptop vor der Silhouette einer großen Stadt" placeholder="blurred" quality="40" objectFit="cover" width={1920} loading="eager" />
                </ImageWrap>
            </Background>
            <Foreground>
                <Content>
                    <Headline1>Doppelt so viel Perspektive.</Headline1>
                    <Text>Öfter mal die Pers&nbsp;pek&nbsp;ti&nbsp;ve wech&nbsp;seln. Ein gu&nbsp;ter Pers&nbsp;pek&nbsp;tiv&nbsp;wech&nbsp;sel ist der Im&nbsp;puls zu et&nbsp;was Neu&nbsp;em und bringt fri&nbsp;schen Wind in Ihr Un&nbsp;ter&nbsp;neh&nbsp;men. Wir zei&nbsp;gen Ih&nbsp;nen die Orte mit der bes&nbsp;ten Aus&nbsp;sicht. Jott Zwei Werbeagentur – wir sind Ihre Werbeagentur im Artland.</Text>
                    <FaChevronDown />
                </Content>
                <Socials>
                        <SocialLink href="https://www.facebook.com/jottzweiwerbeagentur" aria-label="Facebook" target="_blank" rel="noopener"><FaFacebook /></SocialLink>
                        <SocialLink href="https://www.instagram.com/jottzwei/" target="_blank" aria-label="Instagram" rel="noopener"><FaInstagram /></SocialLink>
                </Socials>
            </Foreground>
        </Wrap>
    )
}

export default Hero
