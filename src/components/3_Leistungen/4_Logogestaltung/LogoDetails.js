import React from 'react'
import { Headline2, Headline3 } from '../../defaultComponents'
import styled from 'styled-components'
import { FaArrowDown } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image'

const Wrap = styled.div`
    width: min(90%, 850px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto 1fr;
    grid-template-areas: "head head" "arrow arrow" "a a" "b c";
    gap: 30px;
    margin-bottom: 50px;

    @supports not (width: min(90%, 850px)){
        width: 90%;
        max-width: 850px;
    }


    & > ${Headline2} {
        grid-area: head;
        text-align: center;
    }

    & > svg {
        grid-area: arrow;
        color: white;
        font-size: 3rem;
        color: white;
        margin: 30px auto;
    }
`

const Logo = styled.div`
    display: grid;
    grid-area: a;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "a a" "b c";

    & > ${Headline3} {
        grid-area: a;
    }

    & > div::nth-child(1) {
        grid-area: b;
    }

    & > div::nth-child(2) {
        grid-area: c;
    }
`

const Schriften = styled.div`
    grid-area: b;
`

const Farben = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "a a" "b c";
    grid-area: c;
    column-gap: 20px;

    & > ${Headline3} {
        grid-area: a;
    }

    & > div::nth-child(1) {
        grid-area: "b";
    }

    & > div::nth-child(2) {
        grid-area: "c";
    }
`

const LogoDetails = () => {
    return (
        <Wrap>
                <Headline2>Genug geschwafelt, hier gibt's Marke</Headline2>
                <FaArrowDown />
            <Logo>
                <Headline3>Logo</Headline3>
                <StaticImage src="../../../images/3_Leistungen/Logo/rz_logo_freizeittanken_w.svg" alt="" placeholder="blurred" objectFit="cover" />
                <StaticImage src="../../../images/3_Leistungen/Logo/rz_logo_freizeittanken_weiss.svg" alt="" placeholder="blurred" objectFit="cover" />
            </Logo>
            <Schriften>
                <Headline3>Schriften</Headline3>
                <StaticImage src="../../../images/3_Leistungen/Logo/schriften.svg" alt="" placeholder="blurred" />
            </Schriften>
            <Farben>
                <Headline3>Farben</Headline3>
                <StaticImage src="../../../images/3_Leistungen/Logo/farben.png" alt="" placeholder="blurred" objectFit="cover" />
                <StaticImage src="../../../images/3_Leistungen/Logo/farben7.png" alt="" placeholder="blurred" objectFit="cover" />
            </Farben>
    </Wrap>
    )
}

export default LogoDetails
