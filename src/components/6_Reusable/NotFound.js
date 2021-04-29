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
    margin-top: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`

const SuggestionText = styled.span`

`


const Suggestion = styled(Link)`
    padding: 180px 25px 15px;
    border-radius: 10px;
    position: relative;
    text-decoration: none;
    z-index: 0;


`

const NotFound = () => {
    return (
        <Wrapper>
        <Headline1>404: Seite nicht gefunden</Headline1>
        <Text>Diese Seite existiert leider nicht. Aber probier es doch hiermit:</Text>
        <SuggestionWrapper>
            <Suggestion to="/leistungen/printmedien">
                <SuggestionText>
                <StaticImage src="../../images/3_Leistungen/Printmedien/Angebotsmappe.jpg" alt="A dinosaur" placeholder="blurred" loading="eager" />
                    Printmedien
                </SuggestionText>
            </Suggestion>
            <Suggestion to="/leistungen/digitalmedien">
                <SuggestionText>
                <StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="A dinosaur" placeholder="blurred" loading="eager" />
                    Digitalmedien
                </SuggestionText>
            </Suggestion>
            <Suggestion to="/leistungen/logogestaltung">
                <SuggestionText>
                <StaticImage src="../../images/3_Leistungen/Printmedien/Aufkleber.jpg" alt="A dinosaur" placeholder="blurred" loading="eager" />
                    Logogestaltung
                </SuggestionText>
            </Suggestion>
        </SuggestionWrapper>
        </Wrapper>
    )
}

export default NotFound
