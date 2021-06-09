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
    padding-top: 80px;
    margin-bottom: 50px;

    @supports not (width: min(90%, 850px)){
        width: 90%;
        max-width: 850px;
    }
`

const EComEntrytext = () => {
    return (
            <Wrap id="losgehts">
                <Headline2>Onlineshops / E-Commerce</Headline2>
                <Text>
                Online-Verkauf – oder auch E-Commerce der eigenen Produkte wird immer wichtiger. Dies wird uns vor allem in der aktuellen Situation bewusst. Wir verleihen Ihren Produkten den perfekten Auftritt mit optimierter, für Sie leicht zugänglicher Auftragsabwicklung. Sobald ein Kauf getätigt wurde, bekommen Sie eine Nachricht und können direkt mit der Versandabwicklung loslegen. Der Bezahlvorgang läuft komplett automatisiert.
                <br /><br />
                Auf Wunsch implementieren wir in Ihrem Shop auch weitere Support-Features wie einen Produktauswahlassistenten, Chat-Support oder FAQ’s. So bieten Sie auch online einen vollwertigen Kundensupport an, welcher Ihre Kunden glücklich machen wird.
                </Text>
            </Wrap>
    )
}

export default EComEntrytext
