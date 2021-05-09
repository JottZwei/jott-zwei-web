import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../defaultComponents';

const Wrap = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border-radius: 20px;
    background: var(--tertiary-color);
    z-index: 200;
    transition: opacity .5s ease;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    display: grid;
    grid-template-columns: 3fr 2fr;
`

const Contact = styled.div`
    padding: 7vw;
    color: white;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    row-gap: 30px;
`

const Image = styled.div`
    & > div {
        height: 100%;
    }
`

const ExitIntentModal = () => {
    const [visibility, setVisibility] = useState(false);
    document.addEventListener("mouseleave", function(e) {
        if( e.clientY < 0 )
        {
            setVisibility(true);
        }
    },{
        once: true
    });
    

    return (
        <Wrap visible={visibility}>
            <Contact>
                Konnten Sie nicht finden was Sie gesucht haben? <br />
                Kein Problem, kontaktieren Sie uns doch einfach und wir beraten Sie.
                <Button onClick={() => {setVisibility(false)}}> Close </Button>
            </Contact>
            <Image>
                <StaticImage src="../../images/4_About/jott_zwei_team.jpg" alt="" placeholder="blurred" objectFit="cover" />
            </Image>
 
        </Wrap>
    )
}

export default ExitIntentModal
