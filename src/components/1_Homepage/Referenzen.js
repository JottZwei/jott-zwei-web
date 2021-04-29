import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Button, Headline2, Headline3, Leberwurst } from '../defaultComponents'

const Wrap = styled.div`
    display: grid;
    grid-template-areas: "a a a" "b c d" "e f g" "h h h";
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr 1fr auto;
    gap: 10px;
    padding: 100px 30px 100px 30px;

    @media screen and (max-width: 1200px){
        grid-template-areas: "a a" "b c" "d e" "f g" "h h";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr 1fr 1fr auto;
    }

    & > h2 {
        grid-area: a;
        width: min(90%, 1200px);
        margin: 30px auto;
    }

    & > ${Button} {
        margin: 0 auto;
        margin-top: 50px;
        grid-area: h;
    }
`

const RefContainer = styled.div`
    border-radius: 15px;
    display: grid;
    grid-template-areas: "a";
    overflow: hidden;

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
`

const Referenzen = () => {
    return (
        <Wrap id="referenzen">
            <Headline2><Leberwurst>Referenzen</Leberwurst> gefällig?</Headline2>
            <RefContainer>
                <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_2.jpg" alt="" />
                <Foreground>
                    <Headline3>Ziemer Consult</Headline3>
                    <Button to="referenzen/ziemer-consult">zur Referenz</Button>
                </Foreground>
            </RefContainer>
            <RefContainer>
            <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_1.jpg" alt="" />
            <Foreground>
                    <Headline3>Freizeittanken</Headline3>
                    <Button to="referenzen/freizeittanken">zur Referenz</Button>
                </Foreground>
            </RefContainer>

            <RefContainer>
                <StaticImage src="../../images/2_Referenzen/Reternity/ref_rt_2.jpg" alt="" />
                <Foreground>
                    <Headline3>Reternity</Headline3>
                    <Button to="referenzen/reternity">zur Referenz</Button>
                </Foreground>
            </RefContainer>

            <RefContainer>
                <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_1.jpg" alt="" />
                <Foreground>
                    <Headline3>Rebel Pandas</Headline3>
                    <Button to="referenzen/rebelpandas">zur Referenz</Button>
                </Foreground>
            </RefContainer>

            <RefContainer>
                <StaticImage src="../../images/1_Homepage/Hero/hero_2.jpg" alt="" />
                <Foreground>
                    <Headline3>Weserraum</Headline3>
                    <Button to="referenzen/weserraum">zur Referenz</Button>
                </Foreground>
            </RefContainer>

            <RefContainer>
                <StaticImage src="../../images/1_Homepage/Hero/hero_2.jpg" alt="" />
                <Foreground>
                    <Headline3>People2Go</Headline3>
                    <Button to="referenzen/people2go">zur Referenz</Button>
                </Foreground>
            </RefContainer>
            <Button to="referenzen">zur Referenz-Übersicht</Button>
        </Wrap>
    )
}

export default Referenzen
