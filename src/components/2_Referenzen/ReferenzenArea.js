import React from 'react'
import styled from 'styled-components'
import { Headline2, Button } from '../defaultComponents'
import { Link } from 'gatsby'
import { ReferenzenData } from './ReferenzenData'

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4vw;
    column-gap: 4vw;
    width: min(95%, 1150px);
    margin: 0 auto;
    padding-top: 50px;

    @supports not (width: min(90%, 1150px)){
        width: 95%;
        max-width: 1150px;
    }

`

const Item = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:first-child{
        overflow: hidden;
        object-fit: cover;
        aspect-ratio: 5 / 3;
        max-width: 100%;
    }

    & > div {
        border-radius: 12px;
        transform: translateZ(0);
    }
`

const Content = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
`



const ReferenzenArea = () => {
    return (
        <Wrap id="losgehts">
            {ReferenzenData.map((referenz, index) => {
                        return (
                        <Item to={referenz.link} key={index}>
                        {referenz.titleImage}
                        <Content>
                            <Headline2>{referenz.name}</Headline2>
                            <Button>zur Referenz ...</Button>
                        </Content>
                        </Item>
                        )
                    })}
        </Wrap>
    )
}

export default ReferenzenArea
