import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Headline1, Text, ButtonInternal } from '../defaultComponents'
import { FaFacebook, FaInstagram } from "react-icons/fa"
import scrollTo from 'gatsby-plugin-smoothscroll'



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
    transform: translateZ(0);
    box-shadow: 5px 5px 10px black;
    position: relative;

    @media screen and (max-width: 1100px){
        height: auto;
        width: 100%;
        margin: 0;
        border-radius: 0px;
        box-shadow: none;
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

    @media screen and (max-width: 1100px) {
        &:before {
            background: linear-gradient(0deg, rgba(1,14,30,1.0) 0%, rgba(1,14,30,0.0) 100%);
        }
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
        padding: 10vw;
        

        & > div {
            max-width: 100%;
        }

    @media screen and (max-width: 900px){
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: "a";
        align-items: flex-end;
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
        font-size: 2.5rem;
        color: white;    
        animation: .5s ease-out 0s 1 ${fadeInFromBottom};    
    }

    & > ${Text} {
        margin-bottom: 30px;
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
    column-gap:20px;

    & > div {
        box-shadow: 5px 0px 20px -10px black;
        transition: 0.2s ease transform, 0.2s ease box-shadow;

        @media screen and (min-width: 1100px){
            &:hover {
            transform: translateY(-10px);
            box-shadow: 5px 10px 20px -10px black;
        }
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

    @media screen and (max-width: 900px){
        display: none;
    }
`


const Socials = styled.div`
    display: flex;
    color: white;
    gap: 30px;
    column-gap: 30px;
    grid-area: c;
    justify-content: flex-start;
    align-items: flex-end;

    & > svg {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 900px){
        display: none;
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
    cursor: pointer;

    & > div {
        height: 100%;
        width: 100%;
    }
`


const Hero = () => {
    const Array = [{
        image: <StaticImage src="../../images/1_Homepage/Hero/hero_1.jpg" alt="" placeholder="blurred" objectFit="cover" />,
        headline: "Dop\xADpelt so viel Po\xADten\xADzial.",
        text: "Wir, Jan und Jörn, er\xADgän\xADzen uns per\xADfekt in\xADdem wir un\xADse\xADre in\xADdi\xADvi\xADduel\xADlen Stär\xADken und Fä\xADhig\xADkei\xADten op\xADti\xADmal kom\xADbi\xADnie\xADren. Krea\xADti\xADvi\xADtät mit Work\xADflow. Weil dop\xADpelt ein\xADfach bes\xADser hält."
    },
    {
        image: <StaticImage src="../../images/1_Homepage/Hero/hero_2.jpg" alt="" placeholder="blurred" objectFit="cover" />,
        headline: "Dop\xADpelt so viel Mut.",
        text: "Neue We\xADge, neue Mar\xADke? Kühn\xADheit und Mut sind der Schlüs\xADsel zum Er\xADfolg. Wir brin\xADgen Ihr Un\xADter\xADneh\xADmen auf das näch\xADste Le\xADvel. Rei\xADchen Sie uns die Hand und wir ge\xADhen ge\xADmein\xADsam die\xADsen Weg.        "
    },
    {
        image: <StaticImage src="../../images/1_Homepage/Hero/hero_3.jpg" alt="" placeholder="blurred" objectFit="cover" />,
        headline: "Dop\xADpelt so viel Pers\xADpek\xADti\xADve.",
        text: "Öfter mal die Pers\xADpek\xADti\xADve wech\xADseln. Ein gu\xADter Pers\xADpek\xADtiv\xADwech\xADsel ist der Im\xADpuls zu et\xADwas Neu\xADem und bringt fri\xADschen Wind in Ihr Un\xADter\xADneh\xADmen. Wir zei\xADgen Ih\xADnen die Orte mit der bes\xADten Aus\xADsicht."
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
                                        <Text>Jott Zwei Werbeagentur – wir sind Ihre Werbeagentur im Artland.</Text>
                                        <ButtonInternal onClick={() => scrollTo('#referenzen')} href="#referenzen">Los geht's</ButtonInternal>
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
                </Socials>
                
            </Foreground>
        </Wrap>
    )
}



export default Hero
