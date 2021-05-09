import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Button, Headline3, Text } from '../defaultComponents'

const Wrap = styled.section`
    border-radius: 20px;
    background:  var(--tertiary-color);
    width: min(90%, 1100px);
    margin: 0px auto;
    overflow: hidden;

    @media screen and (max-width: 1200px){
        margin: 20px auto;
    }
`

const Container = styled(Link)`
    color: white;
    position: relative;
    &:hover > div {
        transform: scale(1.1);
    }

    &:hover > div:first-child {
        left: 0px;
    }
`

const Content = styled.div`
    display: flex;
    padding: 100px 20px;
    gap: 20px;
    justify-content: center;    
    transition: 0.3s transform ease;
    margin-left: 20%;
    z-index: 10;

    @media screen and (max-width: 1200px){
        padding: 3vw 5vw;
        margin: 0;
        flex-direction: column;
        align-items: center;
    }
`

const TextContent = styled.div`   
    text-align: right;

    @media screen and (max-width: 1200px){
        text-align: center;
    }
`


const Image = styled.div`
    position:absolute;
    width: 550px;
    top: 0px;
    left: -30px;
    transition: 0.3s transform ease, 0.2s left ease;
    z-index: 5;

    @media screen and (max-width: 1200px){
        display: none;
    }
`

const CTA = () => {
    return (
                    <Wrap>
                    <Container to="/kontakt">
                        <Image>
                            <StaticImage src="../../images/team_jott_zwei_2.png" alt=""/>
                        </Image>
                        <Content>
                            <TextContent>
                                <Headline3>Neugierig geworden?</Headline3>
                                <Text>Lernen Sie uns kennen!</Text>
                            </TextContent>
                            <Button >zum Kontakt</Button>
                        </Content>
                    </Container>
                </Wrap>
    )
}

export default CTA
