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
`

const WebEntrytext = () => {
    return (
            <Wrap id="losgehts">
                <Headline2>Websites</Headline2>
                <Text>
                    Printmedien sind eine gute Sache, aber wer kennt es nicht … Sie hören von einer Firma, einem Produkt oder einer Dienstleistung und geben diese in Ihren Webbrowser ein, um … nichts zu finden?! Das muss nicht sein. Genauso muss das lästige Formular nicht sein, welches per Post in Ihr Haus kommt, per Hand ausgefüllt werden muss und per Post wieder zurückgesendet wird. Und Ihre Vorstellung auf Messen und in den sozialen Medien regt in Videoform doch auch mehr Interesse an. Es ist Zeit für Digitalisierung. Wir helfen Ihnen beim Modernisieren und bei der Umstellung auf digitales Höchstniveau.
                </Text>
            </Wrap>
    )
}

export default WebEntrytext
