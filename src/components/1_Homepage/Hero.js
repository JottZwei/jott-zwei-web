import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Headline1, Text, ButtonInternal } from '../defaultComponents'
import { FaFacebook, FaInstagram, FaLinkedin, FaXing } from "react-icons/fa"


const Wrap = styled.div`
    height: 90vh;
    width: 90vw;
    display: grid;
    grid-template-areas: "a";
    grid-template-rows: 100%;
    grid-template-columns: 100%;
    margin: 30px auto;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 5px 5px 10px black;
    position: relative;

    @media screen and (max-width: 1100px){
        height: auto;
    }
`

const Background = styled.div`
    grid-area: a;
    display: grid;
    grid-template-areas: "a";

    & > div {
        height: 100%;
        width: 100%;
    }

    &:before {
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(0deg, rgba(1,14,30,.9) 0%, rgba(1,14,30,0.2) 100%);
        z-index: 2;
    }
`

const Foreground = styled.div`
    grid-area: a;
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 1fr;
    grid-template-areas: "a b" "c d";
    gap: 30px;
    padding: 5vw;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto auto;
        grid-template-areas: "a" "d" "c" ;
        & > div {
            max-width: 100%;
        }
    }
`
const fadeInFromBottom = keyframes`
    from {
      transform: translateY(50%);
      opacity: 0.0;
    }
    to {
      transform: translateY(0);
      opacity: 1.0;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    grid-area: a;
    max-width: 700px;

    & > ${Headline1} {
        font-size: 4rem;
        color: white;    
        animation: .5s ease-out 0s 1 ${fadeInFromBottom};    
    }

    & > ${Text} {
        margin-bottom: 20px;
        animation: .7s ease-out 0s 1 ${fadeInFromBottom}; 
    }

    & > ${ButtonInternal}{
        animation: 1s ease-out 0s 1 ${fadeInFromBottom}; 
    }
`



const Pagination = styled.div`
    display: grid;
    grid-area: d;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    & > div {
        box-shadow: 5px 0px 20px -10px black;
        transition: 0.2s ease transform, 0.2s ease box-shadow;

        &:hover {
            transform: translateY(-10px);
            box-shadow: 5px 10px 20px -10px black;
        }
    }

    & > div:nth-child(1){
        z-index: 3;
    }
        
    & > div:nth-child(2){
        z-index: 2;
    }
    
    & > div:nth-child(3){
        z-index: 1;
    }
`


const Socials = styled.div`
    display: flex;
    color: white;
    gap: 30px;
    grid-area: c;
    justify-content: flex-start;
    align-items: flex-end;

    & > svg {
        font-size: 1.5rem;
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
    }
`

const PaginationItem = styled.div`
    box-shadow: 0px 16px 10px -8px rgba(0,0,0,0.8);
    transition: 0.3s ease box-shadow, 0.3s ease transform;
    border-radius: 10px;
    overflow: hidden;

    & > div {
        height: 100%;
        width: 100%;
    }

    &:hover {
        box-shadow: 0px 32px 20px -15px rgba(0,0,0,0.6);
        transform: translate(0, -7px);
    }
`


const Hero = () => {
    const Array = [{
        image: <StaticImage src="../../images/1_Homepage/Hero/hero_2.jpg" alt="" placeholder="blurred" objectFit="cover" />,
        headline: "Doppelt so geil.",
        text: "Lorem IpsumLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d"
    },
    {
        image: <StaticImage src="../../images/1_Homepage/Hero/hero_1.jpg" alt="" placeholder="blurred" objectFit="cover" />,
        headline: "Doppelt so viel Mut.",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d"
    },
    {
        image: <StaticImage src="../../images/1_Homepage/Hero/hero_3.jpg" alt="" placeholder="blurred" objectFit="cover" />,
        headline: "Doppelt so viel Perspektive.",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d"
    }
]


    const [current, setCurrent] = useState(0);

    

    return (
        <Wrap>
            <Background>
                {Array.map((slide, index) => {
                            return (
                                <ImageWrap key={index}>
                                    {index === current && (
                                        <>{slide.image}</>
                                    )}
                                </ImageWrap>
                            )
                        })}
            </Background>
            <Foreground>

                    {Array.map((slide, index) => {
                        return (                
                            <Content key={index}>
                                {index === current && (
                                    <>
                                        <Headline1>{slide.headline}</Headline1>
                                        <Text>{slide.text}</Text>
                                        <ButtonInternal to="#referenzen">Los geht's</ButtonInternal>
                                    </>
                                    )}
                            </Content>
                            )
                    })}
                <Pagination>
                    {Array.map((slide, index) => {
                        return (
                            <PaginationItem key={index} onClick={ () => { setCurrent(index)}}>
                                {slide.image}
                            </PaginationItem>)
                    })}
                </Pagination>
                <Socials>
                    <SocialLink href="https://www.facebook.com/jottzweiwerbeagentur" target="_blank" rel="noopener"><FaFacebook /></SocialLink>
                    <SocialLink href="https://www.instagram.com/jottzwei/" target="_blank" rel="noopener"><FaInstagram /></SocialLink>
                    <SocialLink href="https://twitter.com/gatsbyjs" target="_blank" rel="noopener"><FaLinkedin /></SocialLink>
                    <SocialLink href="https://twitter.com/gatsbyjs" target="_blank" rel="noopener"><FaXing /></SocialLink>
                </Socials>
            </Foreground>
        </Wrap>
    )
}



export default Hero
