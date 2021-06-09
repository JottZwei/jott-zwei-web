import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { ReferenzenData } from '../../2_Referenzen/ReferenzenData'


const Wrap = styled.div`
    margin-bottom: 100px;

`

const Header = styled.div`
    display: grid;

    & > div{
        width: 100%;
        position: relative;
        z-index: -1;
        height: 60vh;
        display: grid;

        & > div {
            align-self: end;
        }

        &:before{
            content:'';
            background: linear-gradient(0deg, rgba(1,14,30,1.0) 0%, rgba(1,14,30,0.0) 50%, rgba(1,14,30,1.0) 100%);
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
    column-gap: 30px;

    @supports not (width: min(90%, 1100px)){
        width: 90%;
        max-width: 1100px;
    }


    @media screen and (max-width: 1100px){
        gap: 20px;
        column-gap:20px;
    }

    & > div {
        border-radius: 20px;
        overflow: hidden;
        transform: translateZ(0);
    }
`

const BildSprache = () => {

    const Data = ReferenzenData[1].gallery;

    return (
        <Wrap>
            <Header>
                <StaticImage src="../../../images/2_Referenzen/Freizeittanken/ref_ft_0_head.jpg" alt="" placeholder="blurred" objectFit="cover" />
            </Header>
            <Galerie>
            {Data}
            </Galerie>

        </Wrap>
    )
}

export default BildSprache
