import React from 'react'
import { Headline2, Text } from '../defaultComponents'
import styled from 'styled-components'

const Wrap = styled.div`
    width: min(90%, 800px);
    margin: 50px auto;
    text-align: center;

    @supports not (width: min(90%, 800px)){
        width: 90%;
        max-width: 800px;
    }
`

const AboutText = () => {
    return (
        <Wrap id="losgehts">
            <Headline2>
                Das doppelte Jottchen
            </Headline2>
            <Text>
                Das doppelte Jottchen – nur nicht verwandt. Zusammen die Schulbank gedrückt, nach dem Abschluss aber aus den Augen verloren. Jetzt sind wir wieder vereint und stärker denn je. Zum Start des neuen Jahrzehnts gründeten wir die aufstrebende Werbeagentur “Jott Zwei”: Jan Francksen und Jörn Webert. Ein Team, das Ihre Wünsche mit kreativen Ideen zum Leben erweckt. Mit dem gewissen j-Faktor sind wir bei der Gestaltung Ihres Wunschproduktes immer auf der Höhe der Zeit. Oberste Priorität haben – neben unserer gestalterischen Arbeit – Ihre Zufriedenheit, gegenseitiges Vertrauen und Transparenz. Wir wollen, dass Sie immer mit einem guten Gefühl zu uns kommen.
            </Text> 
        </Wrap>
    )
}

export default AboutText
