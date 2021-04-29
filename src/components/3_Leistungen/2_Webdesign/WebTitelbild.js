import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'


const Wrap = styled.div`
    height: 90vh;
    width: 100%;
    position: relative;
    z-index: -1;
    overflow: hidden;

    &:before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(1,14,30,1) 0%, rgba(1,14,30,0) 100%);
        z-index: 5;
    }


    & > div{
        height: 100%;
    }

    & > div > img {
        position: fixed;
    }
`

const Headline = styled.h1`
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    backdrop-filter: blur(10px);
    border: 5px solid white;
    padding: 20px;
    letter-spacing: 3px;
    box-shadow: 2px 2px 15px rgba(0,0,0,0.5);
    z-index: 88;
    font-size: 3rem;
`

const WebTitelbild = () => {
    return (
        <Wrap>
            <StaticImage src="../../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="" loading="eager" objectFit="cover" placeholder="blurred" />
            <Headline>Printmedien</Headline>
        </Wrap>
    )
}

export default WebTitelbild
