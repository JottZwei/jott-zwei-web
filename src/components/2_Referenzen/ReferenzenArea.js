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
`

const Item = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateZ(0);

    & > div:first-child{
        border-radius: 12px;
        overflow: hidden;
        object-fit: cover;
        height: 350px;
    }

    & > video {
        border-radius: 12px;
        overflow: hidden;
        max-width: 100%;
        object-fit: cover;
        height: 350px;
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
