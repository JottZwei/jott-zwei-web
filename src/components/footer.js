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
  display: block;
  color: white;
`

const FooterLinkIntern = styled(Link)`
  display: block;
  color: white;
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
          Telefon: 0176 34404998<br/>
          E-Mail: info@jott-zwei.de
        </Text>
      </Column>
      <Column>
        <Headline>Links</Headline>
          <FooterLink href="https://www.instagram.com/jottzwei/" target="_blank" rel="noopener">Instagram</FooterLink>
          <FooterLink href="https://www.facebook.com/jottzweiwerbeagentur" target="_blank" rel="noopener">Facebook</FooterLink>
          <FooterLinkIntern to="/impressum">Impressum</FooterLinkIntern>
          <FooterLinkIntern to="/datenschutzerklärung">Datenschutzerklärung</FooterLinkIntern>
      </Column>
      <Column>
        <StaticImage src="../images/logo.png" alt="A dinosaur" placeholder="blurred" loading="eager" />
      </Column>
      <CredentialFooter>
      © {new Date().getFullYear()}, Jott Zwei Werbeagentur
        </CredentialFooter>
    </Container>
    </Wrap>
)

export default Footer
