import React from 'react'
import { Headline2, Text } from '../../defaultComponents'
import styled from 'styled-components'

const Wrap = styled.div`
    width: min(90%, 850px);
    margin: 0 auto;
    text-align: center;
    min-height: 50vh;
    display: grid;
    align-content: center;

    @supports not (width: min(90%, 850px)){
        width: 90%;
        max-width: 850px;
    }

`

const WebEntrytext = () => {
    return (
            <Wrap id="losgehts">
                <Headline2>Websites</Headline2>
                <Text>
                Wie sagt man so schön? Für den ersten Eindruck, gibt es keine zweite Chance. Neben der Informationen für Ihre Kunden dient Ihre Firmenwebsite auch der Darstellung Ihres Unternehmens. Es ist wichtig, dass Ihre Website visuell und inhaltlich spannende und attraktive Anreize für die Besucher bereithält. Gutes Design ist nicht mehr optional, es ist entscheidend, um erfolgreich zu sein.                </Text>
            </Wrap>
    )
}

export default WebEntrytext
