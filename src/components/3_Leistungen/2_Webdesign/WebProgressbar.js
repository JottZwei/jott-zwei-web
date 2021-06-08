import React from 'react'
import { Container } from '../../defaultComponents'
import styled from 'styled-components'
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const Wrap = styled.div`
    @media screen and (min-width: 900px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        gap: 2vw;
        column-gap: 2vw;
    }
`

const Column = styled.div`
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 30px;
`

const Percentage = styled.span`
    font-size: 2rem;
    color: white;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
`

const Text = styled.span`
    font-size: clamp(1rem, 0.8182rem + 0.4848vw, 1.4rem);
    color: white;
    text-align: center;
    width: 60%;
`

const WebProgressbar = () => {
    return (
        <Container>
            <Wrap>
                <Column>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 100 : 0;
                            return (
                                <CircularProgressbarWithChildren value={percentage} strokeWidth={4}
                                styles={{
                                    path: {
                                        stroke: `var(--secondary-color)`,
                                    },
                                    trail: {
                                        stroke: 'rgba(20,20,20,0.6)',
                                    }
                                    }}
                                >
                                    <Percentage>100 %</Percentage><Text>Per&shy;for&shy;mance</Text>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </VisibilitySensor>
                </Column>
                <Column>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 100 : 0;
                            return (
                                <CircularProgressbarWithChildren value={percentage}  strokeWidth={4}
                                styles={{
                                    path: {
                                        stroke: `var(--secondary-color)`,
                                    },
                                    trail: {
                                        stroke: 'rgba(20,20,20,0.6)',
                                    }
                                    }}
                                >
                                    <Percentage>100 %</Percentage><Text>Such&shy;ma&shy;schi&shy;nen&shy;op&shy;ti&shy;mie&shy;rung</Text>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </VisibilitySensor>
                </Column>
                <Column>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 100 : 0;
                            return (
                                <CircularProgressbarWithChildren value={percentage} strokeWidth={4}
                                styles={{
                                    path: {
                                        stroke: `var(--secondary-color)`,
                                    },
                                    trail: {
                                        stroke: 'rgba(20,20,20,0.6)',
                                    }
                                    }}
                                >
                                    <Percentage>100 %</Percentage><Text>Bar&shy;riere&shy;freiheit</Text>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </VisibilitySensor>
                </Column>
            </Wrap>
        </Container>
    )
}

export default WebProgressbar
