import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
    width: min(90%, 1200px);
    margin: 0 auto;

    @supports not (width: min(90%, 1200px)){
        width: 90%;
        max-width: 1200px;
    }
`

export const Headline1 = styled.h1`
    color: var(--white);
    font-size: clamp(2.5rem, 2.7rem + 0.4848vw, 4rem);
    line-height: clamp(2.7rem, 2.9rem + 0.4848vw, 4.2rem);
    font-weight: 600;
    margin-bottom: 20px;
    margin-bottom: .3em;
`

export const Headline2 = styled.h2`
    color: var(--white);
    font-size: clamp(1.6rem, 1.4rem + 0.4848vw, 3rem);
    line-height: clamp(1.8rem, 1.6rem + 0.4848vw, 3.2rem);
    margin-bottom: .3em;
    font-weight: 600;
`

export const Headline3 = styled.h3`
    color: var(--white);
    font-size: clamp(1.2rem, 1.2rem + 0.4848vw, 1.7rem);
    line-height: clamp(1.4rem, 1.4rem + 0.4848vw, 1.9rem);
    margin-bottom: .3em;
    font-weight: 400;
`

export const Headline4 = styled.h4`
    color: var(--white);
    font-size: clamp(1.2rem, 1.2rem + 0.4848vw, 1.7rem);
    line-height: clamp(1.4rem, 1.4rem + 0.4848vw, 1.9rem);
    margin-bottom: .3em;
    font-weight: 400;
`

export const Text = styled.span`
    font-size: clamp(.8rem, 0.45rem + 0.4848vw, 1.2rem);
    line-height: 1.5em;
    color: var(--white);
`

export const Leberwurst = styled.span`
    color: var(--secondary-color);
`

export const ButtonExtern = styled.a`
    background: var(--secondary-color);
    padding: 15px 25px;
    border-radius: 30px;
    border: none;
    font-size: 1rem;
    color: var(--white);
    transition: transform 0.2s ease; 

    &:hover, &:focus {
        background: var(--tertiary-color);
        transform: scale(1.05);
    }

    @media screen and (max-width: 1200px){
        font-size: 0.8rem;
    }
`

export const Button = styled.button`
    background: var(--secondary-color);
    padding: 15px 25px;
    border-radius: 30px;
    border: none;
    font-size: 1rem;
    color: var(--white);
    transition: transform 0.2s ease; 
    cursor: pointer;

    &:hover, &:focus {
        background: var(--tertiary-color);
        transform: scale(1.05);
    }

    @media screen and (max-width: 1200px){
        font-size: 0.8rem;
        padding: 0.6em 1em;
    }
`

export const ButtonInternal = styled(Link)`
    background: var(--secondary-color);
    padding: 15px 25px;
    border-radius: 30px;
    border: none;
    font-size: 1rem;
    color: var(--white);
    transition: transform 0.2s ease; 
    cursor: pointer;

    &:hover, &:focus {
        background: var(--tertiary-color);
        transform: scale(1.05);
    }

    @media screen and (max-width: 1200px){
        font-size: 0.8rem;
        padding: 0.5em 1em;
    }
`

export const ButtonExternal = styled.a`
background: var(--secondary-color);
padding: 15px 25px;
border-radius: 30px;
border: none;
font-size: 1rem;
color: var(--white);
transition: transform 0.2s ease; 
cursor: pointer;

&:hover, &:focus {
    background: var(--tertiary-color);
    transform: scale(1.05);
}
    
    @media screen and (max-width: 1200px){
        font-size: 0.8rem;
        padding: 0.5em 1em;
    }
`