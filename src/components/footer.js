import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Wrap = styled.footer`
`

const Container = styled.div`
  width: min(90%, 1150px);
  margin: 7vw auto 0;
  display: grid;
  color: var(--white);
  grid-template-areas: "a b c" "d d d";
  grid-template-columns: 1fr 1fr minmax(250px, .5fr);
  gap: 30px;
  text-align: center;

  @media screen and (max-width: 1100px){
    margin-bottom: 70px;
  }

  @media screen and (max-width: 850px){
    grid-template-areas: "a" "b" "c" "d";
    grid-template-columns: 1fr;
    margin: 100px auto 100px;
  }
`

const Column = styled.div`
  gap: 20px;

  &:first-child {
    grid-area: a;
  }

  &::nth-child(1) {
    grid-area: b;
  }

  &::nth-child(2) {
    grid-area: c;
  }
`

const CredentialFooter = styled.div`
  grid-area: d;
  padding: 2em;
`

const Headline = styled.h3`
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: .5em;
`

const Text = styled.span`

`

const FooterLink = styled.a`
  color: white;
  &:hover{
    color: var(--secondary-color);
  }
`

const FooterLinkIntern = styled(Link)`
  display: block;
  color: white;
  &:hover{
    color: var(--secondary-color);
  }
`

const Footer = () => (
  <Wrap>
    <Container>
      <Column>
        <Headline>Kontakt</Headline>
        <Text>
          Jott Zwei UG (haftungsbeschränkt) <br/>
          Bühnenstraße 225<br/>
          49635 Badbergen<br/><br/>
          Telefon: <FooterLink href="tel:017634404998">0176 34404998</FooterLink><br/>
          E-Mail: <FooterLink href="mailto:info@jott-zwei.de">info@jott-zwei.de</FooterLink>
        </Text>
      </Column>
      <Column>
        <Headline>Links</Headline>
          <FooterLink href="https://www.instagram.com/jottzwei/" target="_blank" rel="noopener">Instagram</FooterLink><br />
          <FooterLink href="https://www.facebook.com/jottzweiwerbeagentur" target="_blank" rel="noopener">Facebook</FooterLink>
          <FooterLinkIntern to="/impressum">Impressum</FooterLinkIntern>
          <FooterLinkIntern to="/datenschutzerklaerung">Datenschutzerklärung</FooterLinkIntern>
      </Column>
      <Column>
        <StaticImage src="../images/logo.png" alt="Das Logo der Jott Zwei Werbeagentur." placeholder="blurred" />
      </Column>
      <CredentialFooter>
      © {new Date().getFullYear()} Jott Zwei Werbeagentur | Alle Rechte vorbehalten.
        </CredentialFooter>
    </Container>
    </Wrap>
)

export default Footer
