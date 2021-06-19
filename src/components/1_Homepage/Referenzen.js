import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Button, ButtonInternal, Headline2, Headline3, Leberwurst } from '../defaultComponents'

const Wrap = styled.div`
    display: grid;
    grid-template-areas: "a a a" "b c d" "e f g" "h h h";
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr 1fr auto;
    gap: 10px;
    padding: 5vw 4vw;

    @media screen and (max-width: 1200px){
        grid-template-areas: "a a" "b c" "d e" "f g" "h h";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr 1fr 1fr auto;
    }

    & > h2 {
        grid-area: a;
        width: min(90%, 1200px);

        @supports not (width: min(90%, 1150px)){
        width: 90%;
        max-width: 1150px;
    }

    }

    & > ${ButtonInternal} {
        margin: 0 auto;
        margin-top: 5vw;
        grid-area: h;
    }
`

const RefContainer = styled(Link)`
    border-radius: 15px;
    display: grid;
    grid-template-areas: "a";
    overflow: hidden;
    transform: translateZ(0);

    & > div {
        grid-area: a;
    }

    &:hover > div {
        opacity: 1.0;
    }
`

const Foreground = styled.div`
    grid-area: a;
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #010e1ecc;
    opacity: 0.0;
    z-index: 20;
    transition: 0.3s ease opacity;

    @media screen and (max-width: 1200px){
        opacity: 1.0;
        background: linear-gradient(0deg, rgba(1,14,30,.8) 0%, rgba(1,14,30,0.0) 100%);
        justify-content: flex-end;
        align-items: flex-start;
        padding: 1vw 3vw;

        > ${Headline3} {
            font-size: .8rem;
        }

        > ${Button} {
            display: none;
        }
    }
`

const Referenzen = () => {

    const width = 550;
    const quality = 40;
    
    return (
        <Wrap id="referenzen">
            <Headline2><Leberwurst>Referenzen</Leberwurst> gefällig?</Headline2>
            <RefContainer to="referenzen/ziemer-consult">
                <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_2.jpg" width={width} quality={quality} alt="Die von uns gestaltete Website für Ziemer Consult. Dargestellt auf einem Smartphone und einem Tablet-Computer" loading="lazy" />
                <Foreground >
                    <Headline3>Ziemer Consult</Headline3>
                    <Button>zur Referenz</Button>
                </Foreground>
            </RefContainer>
            <RefContainer to="referenzen/freizeittanken">
            <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_1.jpg" width={width} quality={quality} alt="Das Freizeittanken-Logo von uns gestaltet." loading="lazy"/>
            <Foreground >
                    <Headline3>Freizeittanken</Headline3>
                    <Button>zur Referenz</Button>
                </Foreground>
            </RefContainer>

            <RefContainer to="referenzen/reternity">
                <StaticImage src="../../images/2_Referenzen/Reternity/ref_rt_2.jpg" width={width} quality={quality} alt="Eine Ansicht eines Laptops mit dem Shop von Reternity vor einem schönen Ambiente." loading="lazy" />
                <Foreground >
                    <Headline3>Reternity</Headline3>
                    <Button>zur Referenz</Button>
                </Foreground>
            </RefContainer>

            <RefContainer to="referenzen/rebelpandas">
                <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_2.jpg" width={width} quality={quality} alt="Ein junger Mann mit einem Rebel Pandas Shirt in einer dunklen Gasse." loading="lazy" />
                <Foreground >
                    <Headline3>Rebel Pandas</Headline3>
                    <Button>zur Referenz</Button>
                </Foreground>
            </RefContainer>

            <RefContainer to="referenzen/weserraum">
                <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_1.jpg" width={width} quality={quality} alt="Die von uns gestaltete Website für Weserraum. Dargestellt auf einem Laptop mit Büro Ambiente drumherum." loading="lazy"/>
                <Foreground >
                    <Headline3>Weserraum</Headline3>
                    <Button>zur Referenz</Button>
                </Foreground>
            </RefContainer>

            <RefContainer to="kontakt">
                <StaticImage src="../../images/2_Referenzen/platzhalter.jpg" width={width} quality={quality} alt="Ein Platzhalter-Bild mit dem Jott Zwei Logo darauf." loading="lazy"/>
                <Foreground >
                    <Headline3>Hier könnten Sie stehen ...</Headline3>
                    <Button >jetzt anfragen</Button>
                </Foreground>
            </RefContainer>
            <ButtonInternal to="referenzen">zur Referenz-Übersicht</ButtonInternal>
        </Wrap>
    )
}

export default Referenzen
