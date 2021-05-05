import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Headline2 } from '../defaultComponents'

const Wrap = styled.div`
    width: min(90%, 1000px);
    margin: 0 auto;
`

const Form = styled.form`

`

const Label = styled.label`
    color: white;
    margin-bottom: 10px;
    margin-left: 25px;
`

const Input = styled.input`
    background: var(--tertiary-color);
    padding: 20px 25px;
    border-radius: 40px;
    border: 3px solid transparent;
    color: white;
    box-sizing: border-box;

    &:focus, &:hover {
        border: 3px solid var(--secondary-color);
        outline: none;
    }
`

const Button = styled.button`
    background: var(--secondary-color);
    padding: 20px 50px;
    border-radius: 100px;
    border: none;
    color: white;
    cursor: pointer;
    margin-right: 20px;
    font-size: 1rem;
`

const Controls = styled.div`
    padding: 20px 0px;
`

const fadeInFromBottom = keyframes`
    from {
        transform: translateY(50%);
        opacity: 0.0;
    }
    to {
        transform: translateY(0);
        opacity: 1.0;
    }
    `

const FormSection = styled.div`
    display: grid;
    animation: .5s ease-out 0s 1 ${fadeInFromBottom};
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    & > ${Headline2} {
        grid-column: 1 / 3 ;
    }

    & > ${Controls} {
        grid-column: 1 / 3 ;
    }
`



const Item = styled.div`
    display: flex;
    flex-direction: column;
`

const ItemFull = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1 / 3;
`

const TextArea = styled.textarea`
    background: var(--tertiary-color);
    padding: 20px 25px;
    border-radius: 40px;
    border: 3px solid transparent;
    color: white;
    box-sizing: border-box;
    grid-column: 1 / 3;

    &:focus, &:hover {
        border: 3px solid var(--secondary-color);
        outline: none;
    }
`

const KontaktForm = () => {

    const [form, setForm] = useState({
        firma: '',
        name: '',
        email: '',
        phone: '',
        produkt: ''
    })

    const [count, setCount] = useState(1)

    const updateForm = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Wrap>
            <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                <Input type="hidden" name="bot-field" />
                <Input type="hidden" name="form-name" value="contact" />
                {count === 1 ? (
                    <FormSection>
                        <Headline2>Wat jibt et?</Headline2>
                        <Item>
                        <Button type="button" onClick={() => setCount(count + 1)}>Ich möchte etwas anfragen. 🤩</Button>
                        </Item><Item>
                        <Button type="button" onClick={() => setCount(count + 2)}>Ich habe Anregungen. 🤓</Button>
                        </Item>
                    </FormSection>
                ) : null}
                {count === 2 ? (
                    <FormSection>
                        <Headline2>Wat denn? 🤑</Headline2>
                        <Item>
                        <Label for="produkt">Produkt</Label>
                        <Input type="text" name="produkt" onChange={updateForm} value={form.produkt}/>
                        </Item>
                        <Controls>
                            <Button onClick={() => setCount(count - 1)}>zurück</Button>
                            <Button onClick={() => setCount(count + 1)}>weiter</Button>
                        </Controls>

                    </FormSection>
                ) : null}
                {count === 3 ? (
                    <FormSection>
                        <Headline2>Bitte nicht meckern. 🥺</Headline2>
                        <Item>
                        <Label for="firma">Firma</Label>
                        <Input type="text" name="firma" onChange={updateForm} value={form.firma}/>
                        </Item><Item>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" onChange={updateForm} value={form.name}/>
                        </Item><Item>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="Email" onChange={updateForm} value={form.email} />
                        </Item><Item>
                        <Label for="phone">Telefon</Label>
                        <Input type="tel" name="phone" onChange={updateForm} value={form.phone}/>
                        </Item><ItemFull>
                        <Label for="anmerkung">Anmerkung</Label>
                        <TextArea type="textarea" name="anmerkung" onChange={updateForm} value={form.anmerkung} cols="50" rows="10"/>
                        </ItemFull>
                        <Controls>
                            <Button onClick={() => setCount(count - 1)}>zurück</Button>
                            <Button type="submit">Submit</Button>
                        </Controls>

                    </FormSection>
                ) : null}
            </Form>
        </Wrap>
    )
}

export default KontaktForm
