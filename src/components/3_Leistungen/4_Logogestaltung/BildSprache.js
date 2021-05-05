import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { ReferenzenData } from '../../2_Referenzen/ReferenzenData'


const Wrap = styled.div`


`

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "a";
    justify-items: center;
    padding: 200px 0 0 0;

    & > div:nth-child(1){
        width: 400px;
        height: 300px;
        grid-area: a;
        margin-top: -100px;
        z-index: 2;
    }

    & > div:nth-child(2){
        grid-area: a;
        width: 100%;
        position: relative;
        z-index: -1;
        height: 80vh;

        &:before{
            content:'';
            background: linear-gradient(0deg, rgba(1,14,30,1.0) 0%, rgba(1,14,30,0.0) 90%, rgba(1,14,30,1.0) 100%);
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom: 0;
            z-index: 1;
        }
    }
`

const Galerie = styled.div`
    margin: 0 auto;
    margin-top: -100px;
    width: min(90%, 1100px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 1fr;
    gap: 30px;

    & > div {
        border-radius: 20px;
        overflow: hidden;
        transform: translateZ(0);
    }
`

const BildSprache = () => {

    const Data = ReferenzenData[3].gallery;

    return (
        <Wrap>
            <Header>
                <StaticImage src="../../../images/3_Leistungen/Logo/rz_logo_freizeittanken_weiss.svg" alt="" placeholder="blurred" objectFit="cover" />
                <StaticImage src="../../../images/2_Referenzen/Freizeittanken/ref_ft_0_head.jpg" alt="" placeholder="blurred" objectFit="cover" />
            </Header>
            <Galerie>
            {Data}
            </Galerie>

        </Wrap>
    )
}

export default BildSprache
