import React from 'react'
import styled from 'styled-components'
import { Button } from '../defaultComponents'

const Wrap = styled.div`
    width: min(90%, 1100px);
    margin: 0 auto;

    @supports not (width: min(90%, 1100px)){
        width: 90%;
        max-width: 1100px;
    }
`

const Form = styled.form`
    display: grid;
    gap: 30px;
    padding: 6vw 0;
    grid-template-columns: 1fr;
    max-width: 100%;

    @media screen and (min-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
`

const Label = styled.label`
    color: white;
    margin-bottom: 10px;
    margin-left: 25px;
`

const Input = styled.input`
    background: var(--tertiary-color);
    padding: 15px;
    border-radius: 40px;
    border: 3px solid transparent;
    color: white;
    box-sizing: border-box;
    font-size: 1rem;

    &:focus, &:hover {
        border: 3px solid var(--secondary-color);
        outline: none;
    }
`

const TextArea = styled.textarea`
    background: var(--tertiary-color);
    padding: 20px 25px;
    border-radius: 40px;
    border: 3px solid transparent;
    color: white;
    box-sizing: border-box;
    font-size: 1rem;

    @media screen and (min-width: 1000px){
        grid-column: 1 / 3;
    }

    &:focus, &:hover {
        border: 3px solid var(--secondary-color);
        outline: none;
    }
`

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
`

const FormItemFull = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;

    @media screen and (min-width: 1000px){
        grid-column: span 2;
    }
`

const KontaktFormular = () => {
    return (
        <Wrap id="losgehts">
            <Form method="POST" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <Input type="hidden" name="bot-field" />
                    <Input type="hidden" name="form-name" value="contact" />
                <FormItem>
                    <Label for="firma">Firma</Label>
                    <Input type="text" name="firma"/>
                </FormItem>

                <FormItem>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name"/>
                </FormItem>

                <FormItem>
                    <Label for="email">E-Mail Adresse</Label>
                    <Input type="email" name="email"/>
                </FormItem>

                <FormItem>
                    <Label for="phone">Telefonnnummer</Label>
                    <Input type="phone" name="phone"/>
                </FormItem>

                <FormItemFull>
                    <Label for="betreff">Betreff</Label>
                    <Input type="text" name="betreff"/>
                </FormItemFull>

                <FormItemFull>
                    <Label for="message">Ihre Nachricht</Label>
                    <TextArea type="textarea" name="message" rows="10"/>
                </FormItemFull>

                <FormItemFull>
                    <Input type="checkbox" name="acceptance" />
                    <Label for="acceptance">
                        Einwilligungserkl??rung: Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gel??scht. Hinweis: Sie k??nnen Ihre Einwilligung jederzeit f??r die Zukunft per E-Mail an info@jott-zwei.de widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer Datenschutzerkl??rung.
                    </Label>
                </FormItemFull>
                <FormItemFull>
                    <Button type="submit">Senden</Button>
                </FormItemFull>
            </Form>
        </Wrap>
    )
}

export default KontaktFormular
