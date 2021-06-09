import React from 'react'
import styled from 'styled-components'
import { Headline1, Text, ButtonInternal } from '../defaultComponents'
import Cta from '../6_Reusable/CTA'
import { ReferenzenData } from '../2_Referenzen/ReferenzenData'

const Wrap = styled.div``

const HeaderContainer = styled.div`
    height: 80vh;
    width: 100%;
    display: grid;
    grid-template-areas: "a";
`

const Background = styled.div`
    grid-area: a;
    z-index: -1;
    display: grid;
    height: 80vh;
    position: relative;
    overflow: hidden;

    & > div {    
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
    }

    & > video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
    }

    &:before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(1,14,30,1) 0%, rgba(1,14,30,0) 100%);
        z-index: 1;
    }
`

const Foreground = styled.div`
    grid-area: a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;

    & > ${Text} {
        margin-bottom: 20px;
    }
`

const ContentContainer = styled.article`
    padding: 100px 0;
`

const EntryText = styled.div`
    width: min(90%, 1100px);
    margin: 0 auto;
    white-space: pre-wrap;
    margin-bottom: 50px;
`

const ImageList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;    
    width: min(90%, 1120px);
    margin: 0 auto;

    @media screen and (max-width: 1100px){
        gap: 20px;
        column-gap: 20px;
    }

    & > div {
        border-radius: 12px;
        overflow: hidden;
        aspect-ratio: 5 / 3;
        display: flex;
        align-items: center;
    }
`

const ImageContainer = styled.div`
    & > div > div {
        transform: translateZ(0);
    }
`


const ReferenzenTemplate = ({index}) => {

    const galerie = ReferenzenData[index].gallery;

return (
    <Wrap>                  
        <HeaderContainer>
            <Background>
                {ReferenzenData[index].image}
            </Background>
            <Foreground>
                <Headline1>{ReferenzenData[index].name}</Headline1>
                <Text>{ReferenzenData[index].leistungen}</Text>
                <ButtonInternal to="#losgehts">Los geht's</ButtonInternal>
            </Foreground>
        </HeaderContainer>
        <ContentContainer id="losgehts">
            <EntryText>
                <Headline1>{ReferenzenData[index].headline}</Headline1>
                <Text>
                {ReferenzenData[index].text}
                </Text>
            </EntryText>
            <ImageList>
                {galerie.map((galerie, index) => {
                        return(
                            <ImageContainer key={index}>
                                {galerie}
                            </ImageContainer>
                        )
                    })}
            </ImageList>
        </ContentContainer>
        <Cta />
    </Wrap>
)
}

export default ReferenzenTemplate