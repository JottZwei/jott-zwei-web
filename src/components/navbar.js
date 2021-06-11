import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { FaHome, FaStar, FaMap, FaUserAlt, FaEnvelope } from "react-icons/fa"

const Wrap = styled.nav`
    background: ${({active}) => active ? "#010e1e88" : "rgba(255,255,255,0.0)"};
    backdrop-filter: ${({active}) => active ? "blur(10px)" : "blur(0px)"};
    border-bottom: ${({active}) => active ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.0)"};
    width: 100%;
    position: fixed;
    padding: ${({active}) => active ? ".1em 1.5em" : "1.5em 1.5em" };
    z-index: 99;
    transition: 0.3s background-color ease, 0.3s padding ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease;
    will-change: top;
    backface-visibility: hidden;

    @media screen and (min-width: 1101px){
        top: 0;
    }
    
    @media screen and (max-width: 1100px) {
        background: ${({ click }) => (click ? "#fff" : "transparent")};
        height: auto;
        bottom: 0px;
        /*top: 100%;
        transform: translateY(-100%);*/
        background: var(--secondary-color);
        margin-bottom:0;
        padding: 20px 10px 30px 10px;
    }
`

const NavMenu = styled.ul`
    display: flex;
    color: white;
    transform: translate3d(0,0,0);

    @media screen and (max-width: 1100px){
        width: 100%;
        justify-content: space-evenly;
    }
`

const NavItem = styled(Link)`
    list-style-type: none;
    margin: 0;
    transition: color 0.2s ease;

    & > svg {
        width: 100%;
        font-size: 1rem;
        display: none;
    }

    @media screen and (min-width: 1100px){
        
    margin-left: 1.3rem;
        &:hover {
        color: var(--secondary-color);
    }
    }


    @media screen and (max-width: 1100px){
        font-size: 0.65rem;
        text-align: center;

        & > svg {
            display: block;
        }
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

    @supports not (width: min(90%, 1400px)){
        width: 90%;
        max-width: 1400px;
    }
    
    @media screen and (max-width: 1100px) {
        width: 100%;
    }
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
                        <FaHome />
                        Start
                    </NavItem>
                    <NavItem to="/referenzen">
                        <FaStar />
                        Referenzen
                    </NavItem>
                    <NavItem to="/leistungen">
                        <FaMap />
                        Leistungen
                    </NavItem>
                    <NavItem to="/ueber-uns">
                        <FaUserAlt />
                        Über Uns
                    </NavItem>
                    <NavItem to="/kontakt">
                        <FaEnvelope />
                        Kontakt
                    </NavItem>
                </NavMenu>
            </Container>
        </Wrap>
        )
   }

export default Navbar
