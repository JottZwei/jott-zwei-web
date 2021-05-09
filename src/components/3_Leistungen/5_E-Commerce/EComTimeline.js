import React from 'react'
import { Headline3, Leberwurst, Text } from '../../defaultComponents'
import styled from 'styled-components'
import { FaArrowDown } from 'react-icons/fa';


const Wrap = styled.div`
    width: min(90%, 850px);
    margin: 0 auto;
    min-height: 50vh;
    display: grid;
    align-content: center;
    text-align: center;

    & > svg {
        font-size: 3rem;
        color: white;
        margin: 30px auto;
    }

    & > h3 {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
`

const Timeline = styled.div`
    counter-reset: section;
    width: 40%;
    margin: 100px auto 0;
    background-image: linear-gradient(90deg, transparent 0%, transparent 49%, var(--secondary-color) 49%, var(--secondary-color) 50%, transparent 50%, transparent 100%);
`

const Item = styled.span`
    color: white;
    display: flex;
    margin-bottom: 80px;
    align-items: center;
    position: relative;
    text-align: left;

    &:nth-child(even){
        text-align: right;
        transform: translateX(-64%);
    }

    &:nth-child(odd){
        transform: translateX(63%);
    }

    &:first-child{
        margin-top: -10px;
    }

    &:last-child{
        margin-bottom: 0;
    }

    &::before {
        counter-increment: section;             
        content: counter(section);
        background: var(--secondary-color);
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        border-radius: 50%;
    }

    &:nth-child(even)::before {
        right: -70px;
    }

    &:nth-child(odd)::before {
        left: -70px;
    }
`

const EComTimeline = () => {
    return (
            <Wrap>
                <Headline3>Thank you for shopping with us!</Headline3>
                <FaArrowDown />
                <Headline3><Leberwurst>Darauf kommt es an:</Leberwurst></Headline3>
                <Timeline>
                    <Item>Zielgruppe und Konkurrenz analysieren</Item>
                    <Item>Das richtige Shop-System auswählen</Item>
                    <Item>Einfache und klase Navigation verwenden</Item>
                    <Item>Produkte ansprechend und übersichtlich präsentieren</Item>
                    <Item>Kundenbewertungen zur Verfügung stellen</Item>
                    <Item>Verschiedene Zahlungsarten anbieten</Item>
                    <Item>Versandprozess optimieren</Item>
                    <Item>"Mobile First" berücksichtigen</Item>
                </Timeline>
            </Wrap>
    )
}

export default EComTimeline