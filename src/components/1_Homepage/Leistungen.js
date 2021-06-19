import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Headline2, Headline3, Text, Leberwurst } from '../defaultComponents'
import { FaChevronRight } from "react-icons/fa"
import { Link } from 'gatsby'

const Wrap = styled.div`
    width: min(90%, 1150px);
    margin: 0 auto;
    padding: 5vh 0;
    
    @supports not (width: min(90%, 1150px)){
        width: 90%;
        max-width: 1150px;
    }

    @media screen and (max-width: 1300px){
        width: 100%;

        & > div {
            padding-left: 20px;
        }
    }
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > svg {
        color: white; 
        font-size: clamp(1.5rem, 1.4rem + 0.4848vw, 1.7rem);
    }

    @media screen and (min-width: 1300px){
        & > svg {
            display: none;
        }
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding: 40px 0px;
        
    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 1300px){
        padding: .3em;
    }
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

    @media screen and (max-width: 1100px){
        min-width: 320px;
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
    font-family: 'Open Sans', sans-serif;
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

const Leistungen = () => {
    return (
        <Wrap>
            <TitleContainer><Headline2>Unsere <Leberwurst>Leistungen</Leberwurst></Headline2><FaChevronRight /></TitleContainer>
            <Content>
                <Card to="/leistungen/printmedien">
                    <ContentWrap>
                    <StaticImage src="../../images/3_Leistungen/Printmedien/Flyer.jpg" alt="Ein Beispielflyer im Jott Zwei Branding." width={320}  loading="lazy" />
                    <TextContent>
                        <Headline3>Print&shy;medien</Headline3>
                        <Text>Print&shy;­me&shy;­di&shy;en o&shy;der ger&shy;ne auch “Druck­&shy;sa­&shy;chen” sind zu fast al­&shy;len An&shy;­läs­&shy;sen ei&shy;ne gu&shy;te Ent­&shy;schei&shy;­dung. Ob Spei­&shy;se­&shy;kar&shy;­ten, Fly­&shy;er, Ka­&shy;ta­&shy;lo&shy;­ge o&shy;der Pla­&shy;ka&shy;­te, Ihr Un­&shy;ter­&shy;neh&shy;­men wird mit dem von uns er­&shy;stell&shy;­ten De&shy;sign aus der Men&shy;­ge her­&shy;vor&shy;­ste­&shy;chen.</Text>
                    </TextContent>
                    </ContentWrap>
                    <Button>mehr erfahren ...</Button>
                </Card>
                <Card to="/leistungen/webdesign">
                <ContentWrap>
                    <StaticImage src="../../images/3_Leistungen/Webdesign/titelbild_webdesign.jpg" alt="Nahaufnahme von Monitor welcher einen Websiteentwurf in Photoshop zeigt." width={320} loading="lazy" />
                    <TextContent>
                        <Headline3>Web&shy;design</Headline3>
                        <Text>Print&shy;me&shy;dien sind eine gu&shy;te Sa&shy;che, aber wer kennt es nicht … Sie hö&shy;ren von einer Fir&shy;ma, einem Pro&shy;dukt oder einer Dienst&shy;lei&shy;stung und geben die&shy;se in Ih&shy;ren Web&shy;brow&shy;ser ein, um … nichts zu fin&shy;den?! Das muss nicht sein.</Text>
                    </TextContent>
                    </ContentWrap>
                    <Button>mehr erfahren ...</Button>
                </Card>
                <Card to="/leistungen/logodesign">
                <ContentWrap>
                    <StaticImage src="../../images/3_Leistungen/Logo/header-logodesign.jpg" alt="Das von uns gestaltete Freizeittanken-Logo eingsetzt auf einem Briefbogen, Visitenkarten, Flyern und mehr." width={320}  loading="lazy"/>
                    <TextContent>
                        <Headline3>Logo</Headline3>
                        <Text>Ihr Logo ist der wich&shy;tig&shy;ste Fak&shy;tor für den Wie&shy;der&shy;er&shy;ken&shy;nungs&shy;wert Ih&shy;rer Mar&shy;ke bzw. Ih&shy;res Pro&shy;duk&shy;tes. Da&shy;zu ein durch&shy;gän&shy;gi&shy;ges De&shy;sign, das sich vom Brief&shy;kopf bis in die so&shy;zia&shy;len Me&shy;dien hi&shy;nein wie&shy;der&shy;fin&shy;det, gibt Ih&shy;rer Mar&shy;ke ei&shy;nen un&shy;ver&shy;wech&shy;sel&shy;ba&shy;ren Auf&shy;tritt.</Text>
                    </TextContent>
                    </ContentWrap>
                    <Button>mehr erfahren ...</Button>
                </Card>
                <Card to="/leistungen/ecommerce">
                <ContentWrap>
                    <StaticImage src="../../images/3_Leistungen/E-Commerce/header-e-commerce.jpg" alt="Vorschau der Onlineshops, welche wir kreiert haben. Unter anderem den Onlineshop für Reternity oder Ziemer Consult." width={320}  loading="lazy"/>
                    <TextContent>
                        <Headline3>E-Com&shy;merce</Headline3>
                        <Text>Online-Ver&shy;kauf – oder auch E-Com&shy;merce der ei&shy;ge&shy;nen Pro&shy;duk&shy;te wird im&shy;mer wich&shy;ti&shy;ger. Dies wird uns vor al&shy;lem in der ak&shy;tuel&shy;len Si&shy;tua&shy;tion be&shy;wusst. Wir ver&shy;lei&shy;hen Ih&shy;ren Pro&shy;duk&shy;ten den per&shy;fek&shy;ten Auf&shy;tritt mit op&shy;ti&shy;mier&shy;ter, für Sie leicht zu&shy;gäng&shy;li&shy;cher Auf&shy;trags&shy;ab&shy;wick&shy;lung.</Text>
                    </TextContent>
                    </ContentWrap>
                    <Button>mehr erfahren ...</Button>
                </Card>
            </Content>
        </Wrap>
    )
}

export default Leistungen
