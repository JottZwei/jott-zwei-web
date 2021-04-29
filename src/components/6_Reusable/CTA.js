import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const Wrap = styled.section`
    border-radius: 20px;
    background:  var(--tertiary-color);
    width: min(90%, 1150px);
    margin: 100px auto;
    overflow: hidden;
`

const Container = styled.div`
    color: white;
    position: relative;
    &:hover > div {
        transform: scale(1.1);
    }

    &:hover > div:first-child {
        left: 40px;
    }
`

const Content = styled.div`
    display: flex;
    padding: 100px 20px;
    gap: 20px;
    justify-content: center;    
    transition: 0.3s transform ease;
    margin-left: 20%;
`

const Text = styled.div`   
    text-align: right;
`

const Headline = styled.h2`
    font-weight: 300;
`

const Subline = styled.span`
`

const Button = styled(Link)`
    background: var(--secondary-color);
    padding: 20px;
    color: white;
    text-decoration: none;
`

const Image = styled.div`
    position:absolute;
    width: 550px;
    bottom: -5px;
    left: 0;
    transition: 0.3s transform ease, 0.2s left ease;
`

const CTA = () => {
    return (
                    <Wrap>
                    <Container>
                        <Image>
                            <StaticImage src="../../images/team_jott_zwei_2.png" alt=""/>
                        </Image>
                        <Content>
                            <Text>
                                <Headline>Neugierig geworden?</Headline>
                                <Subline>Lernen Sie uns kennen!</Subline>
                            </Text>
                            <Button to="/kontakt">zum Kontakt</Button>
                        </Content>
                    </Container>
                </Wrap>
    )
}

export default CTA
