import React from 'react'
import { Headline2 } from '../../defaultComponents'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Wrap = styled.div`
    width: min(90%, 850px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "a a" "b c";
    gap: 30px;
    margin-bottom: 50px;
`

const Logo = styled.div`
    display: grid;
    grid-area: a;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "a a" "b c";

    & > ${Headline2} {
        grid-area: a;
    }

    & > div::nth-child(1) {
        grid-area: "b";
    }

    & > div::nth-child(2) {
        grid-area: "c";
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

    & > ${Headline2} {
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
            <Logo>
                <Headline2>Logo</Headline2>
                <StaticImage src="../../../images/3_Leistungen/Logo/rz_logo_freizeittanken_w.svg" alt="" placeholder="blurred" objectFit="cover" />
                <StaticImage src="../../../images/3_Leistungen/Logo/rz_logo_freizeittanken_weiss.svg" alt="" placeholder="blurred" objectFit="cover" />
            </Logo>
            <Schriften>
                <Headline2>Schriften</Headline2>
                <StaticImage src="../../../images/3_Leistungen/Logo/schriften.svg" alt="" placeholder="blurred" />
            </Schriften>
            <Farben>
                <Headline2>Farben</Headline2>
                <StaticImage src="../../../images/3_Leistungen/Logo/farben.png" alt="" placeholder="blurred" objectFit="cover" />
                <StaticImage src="../../../images/3_Leistungen/Logo/farben7.png" alt="" placeholder="blurred" objectFit="cover" />
            </Farben>
    </Wrap>
    )
}

export default LogoDetails
