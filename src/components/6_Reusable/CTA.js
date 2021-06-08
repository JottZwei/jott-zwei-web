import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Button, Headline3, Text } from '../defaultComponents'

const Wrap = styled.section`
    border-radius: 20px;
    background:  var(--tertiary-color);
    width: min(90%, 1150px);
    margin: 0px auto;
    overflow: hidden;

    @media screen and (max-width: 1200px){
        margin: 20px auto;
    }
`

const Container = styled(Link)`
    display: grid;
    grid-template-columns: 1fr auto 7vw;
    grid-template-areas: "a b c";
    align-items: center;
    height: 250px;

    @media screen and (max-width: 900px){

            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            grid-template-areas: "b" "a";
            height: auto;

            & > div:first-child{
                align-self: flex-end;
                z-index: 0;
                margin-bottom:-10px;
            }
        }

    & > div:first-child{
        align-self: center;
        grid-area: a;
        justify-self: center;
    }
`

const TextContent = styled.div`   
    grid-area: b;
    text-align: right;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 2;

    & > ${Text}{
        margin-bottom: 15px;
    }

    & > ${Button}{
        &:hover {
            background: rgb(17,40,54);
        }
    }

    @media screen and (max-width: 900px){
        text-align: center;
        align-items: center;
        padding: 50px 5vw 0px;
    }
`

const CTA = () => {
    return (
        <Wrap>
            <Container to="/kontakt">
                <StaticImage src="../../images/team_jott_zwei_2.png" alt=""/>
                <TextContent>
                    <Headline3>Neugierig geworden?</Headline3>
                    <Text>Lernen Sie uns kennen!</Text>
                    <Button >zum Kontakt</Button>
                </TextContent>
            </Container>
        </Wrap>
    )
}

export default CTA
