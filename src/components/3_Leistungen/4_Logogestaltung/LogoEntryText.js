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

const LogoEntrytext = () => {
    return (
            <Wrap id="losgehts">
                <Headline2>Logo & Corporate Design</Headline2>
                <Text>
                Ihr Logo ist der wichtigste Faktor für den Wiedererkennungswert Ihrer Marke bzw. Ihres Produktes. Dazu ein durchgängiges Design, das sich vom Briefkopf bis in die sozialen Medien hinein wiederfindet, gibt Ihrer Marke einen unverwechselbaren Auftritt. Wir gestalten Ihnen professionelle und zeitgemäße Logos, die genau zu Ihren Ansprüchen passen. Bei Bedarf übernehmen wir nicht nur die Gestaltung des Logos, sondern erschaffen auch Ihr gesamtes Branding. Dies beinhaltet unter anderem passende Schriften, Farben, visuelles Auftreten und mehr.
                </Text>
            </Wrap>
    )
}

export default LogoEntrytext