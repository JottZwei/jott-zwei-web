import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Wrap = styled.nav`
    background: ${({active}) => active ? "#010e1e88" : "rgba(255,255,255,0.0)"};
    backdrop-filter: ${({active}) => active ? "blur(10px)" : "blur(0px)"};
    border-bottom: ${({active}) => active ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.0)"};
    width: 100%;
    position: fixed;
    padding: ${({active}) => active ? ".1em 1.5em" : "1.5em 1.5em" };
    z-index: 99;
    transition: 0.3s background-color ease, 0.3s padding ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease;


    @media screen and (max-width: 1100px) {
        background: ${({ click }) => (click ? "#fff" : "transparent")};
        height: auto;
        top: 100%;
        transform: translateY(-100%);
        background: var(--secondary-color);
        margin-bottom:0;
        padding: 20px 10px;
    }
`

const NavMenu = styled.ul`
    display: flex;
    gap: 1.3em;
    color: white;
    margin: 0;
`

const NavItem = styled(Link)`
    list-style-type: none;
    margin: 0;
    transition: color 0.2s ease;

    &:hover {
        color: var(--secondary-color);
    }
`

const Logo = styled(Link)`
    width: 100px;
    display: grid;
    grid-template-areas: "a";

    & div {
        grid-area: a;
    }

    & > div:first-child{
        opacity: 1.0;
    }

    & > div:nth-child(2){
        opacity: 0.0;
    }

    &:hover > div:first-child{
        opacity: 0.0;
    }

    &:hover > div:nth-child(2){
        opacity: 1.0;
    }

    @media screen and (max-width: 1100px) {
        display: none;
    }
`

const Container = styled.div`
    width: min(90%, 1400px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navbar = () => {

    const [scroll, setScroll] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return(
        <Wrap active={scroll}>
            <Container>
                <Logo to="/">
                    <StaticImage src="../images/logo.png" alt="A dinosaur" placeholder="blurred" loading="eager" />
                    <StaticImage src="../images/logo_alt.png" alt="A dinosaur" placeholder="blurred" loading="eager" />
                </Logo>
                <NavMenu>
                    <NavItem to="/">
                        Start
                    </NavItem>
                    <NavItem to="/referenzen">
                        Referenzen
                    </NavItem>
                    <NavItem to="/leistungen">
                        Leistungen
                    </NavItem>
                    <NavItem to="/ueber-uns">
                        Über Uns
                    </NavItem>
                    <NavItem to="/kontakt">
                        Kontakt
                    </NavItem>
                </NavMenu>
            </Container>
        </Wrap>
        )
   }

export default Navbar
