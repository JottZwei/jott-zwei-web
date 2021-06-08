import React from 'react'
import { Headline1, Text } from '../defaultComponents'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

const Wrapper = styled.section`
    max-width: min(90%, 1100px);
    margin: 0 auto;
    margin-top: 150px;
    padding: 30px 0px;
`


const SuggestionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    column-gap: 20px;
    margin-top: 50px;



    
`

const SuggestionText = styled.span`

`
const Suggestion = styled(Link)`
    position: relative;
    text-decoration: none;
    z-index: 0;

    
    & > div {
        box-shadow: 5px 0px 20px -10px black;
        transition: 0.2s ease transform, 0.2s ease box-shadow;
        border-radius: 10px;
        overflow: hidden;
        aspect-ratio: 16/10;
        margin-bottom: 20px;

        @media screen and (min-width: 1100px){
            &:hover {
            transform: translateY(-10px);
            box-shadow: 5px 10px 20px -5px black;
        }
        }
        }
`

const NotFound = () => {
    return (
        <Wrapper>
        <Headline1>404: Seite nicht gefunden</Headline1>
        <Text>Diese Seite existiert leider nicht. Aber probier es doch hiermit:</Text>
        <SuggestionWrapper>
            <Suggestion to="/leistungen/webdesign">                
                <StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="Computer Ansicht einer Webseite im Aufbau" placeholder="blurred"/>
                <SuggestionText>
                    Webdesign
                </SuggestionText>
            </Suggestion>
            <Suggestion to="/leistungen/printmedien">
            <StaticImage src="../../images/3_Leistungen/Printmedien/Flyer.jpg" alt="Ein Flyer als Beispiel für ein Printprodukt" placeholder="blurred" />
            <SuggestionText>
                    Printmedien
                </SuggestionText>
            </Suggestion>
            <Suggestion to="/leistungen/logogestaltung">
            <StaticImage src="../../images/3_Leistungen/Logo/header-logodesign.jpg" alt="Einheitlich gestaltetes Briefpapier, Visitenkarten und weiteres" placeholder="blurred" />
                <SuggestionText>
                    Logogestaltung
                </SuggestionText>
            </Suggestion>
        </SuggestionWrapper>
        </Wrapper>
    )
}

export default NotFound
