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
    overflow: hidden;

@media screen and (min-width: 1101px){
    height: 90vh;
    width: 92vw;
    border-radius: 20px;
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
        background: linear-gradient(0deg, rgba(1,14,30,.9) 0%, rgba(1,14,30,0.0) 100%);
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



const Pagination = styled.div`

display: none;


    @media screen and (min-width: 1100px){

        display: grid;
        grid-area: d;
        height: 100%;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        column-gap:20px;

        & > div {
            transition: 0.2s ease transform;
            
            &:hover {
                transform: translateY(-10px);
            }
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
        transform: translateZ(0);

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

const PaginationItem = styled.div`

@media screen and (min-width: 1101px){
    box-shadow: 0px 16px 10px -8px rgba(0,0,0,0.8);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;

    & > div {
        height: 100%;
        width: 100%;
    }
}

`


const Hero = () => {
    const Array = [{
        image: <StaticImage src="../../images/1_Homepage/Hero/hero_1.jpg" alt="Zwei Männer auf einer Brücke über einem Fluss. Einer von Ihnen zeigt auf etwas in der Ferne." placeholder="blurred" objectFit="cover" width={1920} fadeIn="false" loading="eager" />,
        paginationImage: <StaticImage src="../../images/1_Homepage/Hero/hero_1.jpg" alt="Zwei Männer auf einer Brücke über einem Fluss. Einer von Ihnen zeigt auf etwas in der Ferne." placeholder="blurred" objectFit="cover" width={250} loading="lazy" fadeIn="false" />,
        headline: "Dop\xADpelt so viel Po\xADten\xADzial.",
        text: "Wir, Jan und Jörn, er\xADgän\xADzen uns per\xADfekt in\xADdem wir un\xADse\xADre in\xADdi\xADvi\xADduel\xADlen Stär\xADken und Fä\xADhig\xADkei\xADten op\xADti\xADmal kom\xADbi\xADnie\xADren. Krea\xADti\xADvi\xADtät mit Work\xADflow. Weil dop\xADpelt ein\xADfach bes\xADser hält. Jott Zwei Werbeagentur – wir sind Ihre Werbeagentur im Artland."
    },
    {
        image: <StaticImage src="../../images/1_Homepage/Hero/hero_2.jpg" alt="Ein Mann in einem grünen Gebirge, welcher mit einer Kamera ein Bild von sich selbst und dem Ausblick macht." placeholder="blurred" objectFit="cover" width={1920} loading="lazy" />,
        paginationImage: <StaticImage src="../../images/1_Homepage/Hero/hero_2.jpg" alt="Ein Mann in einem grünen Gebirge, welcher mit einer Kamera ein Bild von sich selbst und dem Ausblick macht." placeholder="blurred" objectFit="cover" width={250}  loading="lazy" fadeIn="false"/>,
        headline: "Dop\xADpelt so viel Mut.",
        text: "Neue We\xADge, neue Mar\xADke? Kühn\xADheit und Mut sind der Schlüs\xADsel zum Er\xADfolg. Wir brin\xADgen Ihr Un\xADter\xADneh\xADmen auf das näch\xADste Le\xADvel. Rei\xADchen Sie uns die Hand und wir ge\xADhen ge\xADmein\xADsam die\xADsen Weg. Jott Zwei Werbeagentur – wir sind Ihre Werbeagentur im Artland."
    },
    {
        image: <StaticImage src="../../images/1_Homepage/Hero/hero_3.jpg" alt="Ein Mann ist vertieft in seine Arbeit am Laptop vor der Silhouette einer großen Stadt" placeholder="blurred" objectFit="cover" width={1920} loading="lazy" />,
        paginationImage: <StaticImage src="../../images/1_Homepage/Hero/hero_3.jpg" alt="Ein Mann ist vertieft in seine Arbeit am Laptop vor der Silhouette einer großen Stadt" placeholder="blurred" objectFit="cover" width={250} loading="lazy" fadeIn="false"/>,
        headline: "Dop\xADpelt so viel Pers\xADpek\xADti\xADve.",
        text: "Öfter mal die Pers\xADpek\xADti\xADve wech\xADseln. Ein gu\xADter Pers\xADpek\xADtiv\xADwech\xADsel ist der Im\xADpuls zu et\xADwas Neu\xADem und bringt fri\xADschen Wind in Ihr Un\xADter\xADneh\xADmen. Wir zei\xADgen Ih\xADnen die Orte mit der bes\xADten Aus\xADsicht. Jott Zwei Werbeagentur – wir sind Ihre Werbeagentur im Artland."
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
                                        <FaChevronDown />
                                    </>
                                    )}
                            </Content>
                            )
                    })}
                <Pagination>
                    {Array.map((slide, index) => {
                        return (
                            <PaginationItem key={index} onClick={ () => { setCurrent(index)}}>
                                {slide.paginationImage}
                            </PaginationItem>)
                    })}
                </Pagination>
                <Socials>
                    <SocialLink href="https://www.facebook.com/jottzweiwerbeagentur" aria-label="Facebook" target="_blank" rel="noopener"><FaFacebook /></SocialLink>
                    <SocialLink href="https://www.instagram.com/jottzwei/" target="_blank" aria-label="Instagram" rel="noopener"><FaInstagram /></SocialLink>
                </Socials>
                
            </Foreground>
        </Wrap>
    )
}



export default Hero
