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
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
    justify-content: space-between;
    transform:translateZ(0);

    @media screen and (max-width: 1300px){
        min-width: 300px;
    }

    @media screen and (min-width: 1300px){
        transform: translateZ(0);

        &:hover{
            transform: translateY(-20px);
        }
    }
`

const Button = styled.button`
    width: 100%;
    padding: 20px;
    background: var(--secondary-color);
    border:none;
    color: white;
    justify-self: flex-end;
    font-family: 'code-next', sans-serif;
    font-size: .85rem;
    cursor: pointer;
`

const TextContent = styled.div`
    padding: 20px;

    & > ${Text}{
        font-size: 0.85rem;
    }
`

const ContentWrap = styled.div`
    & > div:first-child {
        aspect-ratio: 16 / 10;  

        @supports not (aspect-ratio: 16 / 10){
            height: 200px;
        }
    }
`


const PrintArea = () => {
    return (
        <Wrap id="losgehts">
        {PrintData.map((leistung, index) => {
            return (
                <Card to="/kontakt" key={index}>
                    <ContentWrap>
                        {leistung.image}
                        <TextContent>
                            <Headline3>{leistung.name}</Headline3>
                            <Text>{leistung.text}</Text>
                        </TextContent>
                    </ContentWrap>
                    <Button>Jetzt anfragen</Button>
                </Card>
            )
        })}
        </Wrap>
    )
}

export default PrintArea
