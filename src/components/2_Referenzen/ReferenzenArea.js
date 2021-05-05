import React from 'react'
import styled from 'styled-components'
import { Headline2, Button } from '../defaultComponents'
import { Link } from 'gatsby'
import { ReferenzenData } from './ReferenzenData'

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    width: min(90%, 1150px);
    margin: 0 auto;
    padding-top: 150px;
`

const Item = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:first-child{
        border-radius: 12px;
        overflow: hidden;
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
                        {referenz.image}
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
