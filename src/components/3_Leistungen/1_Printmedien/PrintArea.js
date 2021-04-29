import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Headline3, Text } from '../../defaultComponents'
import { PrintData } from './PrintData'

const Wrap = styled.section`
    width: min(90%, 1200px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(283px, 1fr));
    gap: 20px;
`

const Card = styled(Link)`
    background: rgb(17, 40, 54);
    border-radius: 20px;
    overflow: hidden;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    transition: 0.3s transform ease;

    &:hover {
        transform: translateY(-10px);
    }
`

const Content = styled.div`
    padding: 20px;
`

const Button = styled.button`
    width: 100%;
    padding: 20px;
    background: var(--secondary-color);
    color: var(--white);
    font-size: 1rem;
    border: none;
    cursor: pointer;
`

const LeistungenArea = () => {
    return (
        <Wrap>
        {PrintData.map((leistung, index) => {
            return (
                <Card to="/kontakt" key={index}>
                    {leistung.image}
                    <Content>
                        <Headline3>{leistung.name}</Headline3>
                        <Text>{leistung.text}</Text>
                    </Content>
                    <Button>Jetzt anfragen</Button>
                </Card>
            )
        })}
        </Wrap>
    )
}

export default LeistungenArea
