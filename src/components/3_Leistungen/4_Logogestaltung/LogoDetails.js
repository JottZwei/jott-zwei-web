import React from 'react'
import { Headline2, Headline3, Text } from '../../defaultComponents'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Wrap = styled.div`
    width: min(90%, 850px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "a a" "b c";
    gap: 30px;
    margin-bottom: 50px;
`

const Logo = styled.div`
    display: grid;
    grid-area: a;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "a a" "b c";

    & > ${Headline2} {
        grid-area: a;
    }

    & > div::nth-child(1) {
        grid-area: "b";
    }

    & > div::nth-child(2) {
        grid-area: "c";
    }
`

const Schriften = styled.div`
    grid-area: b;
`

const Farben = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "a a" "b c";
    grid-area: c;
    column-gap: 20px;

    & > ${Headline2} {
        grid-area: a;
    }

    & > div::nth-child(1) {
        grid-area: "b";
    }

    & > div::nth-child(2) {
        grid-area: "c";
    }
`

const LogoDetails = () => {
    return (
        <Wrap>
            <Logo>
                <Headline2>Logo</Headline2>
                <StaticImage src="../../../images/3_Leistungen/Logo/rz_logo_freizeittanken_w.svg" alt="" placeholder="blurred" objectFit="cover" />
                <StaticImage src="../../../images/3_Leistungen/Logo/rz_logo_freizeittanken_weiss.svg" alt="" placeholder="blurred" objectFit="cover" />
            </Logo>
            <Schriften>
                <Headline2>Schriften</Headline2>
                <Headline3>Suez One</Headline3>
                <Text>Regular <br />A B C D E F G H I J K L M N O P Q R S T U V X Y Z <br /> a b c d e f g h i j k l m n o p q r s t u v w x y z <br /> 1 2 3 4 5 6 7 8 9 0</Text>
                <Headline3>Open Sans</Headline3>
                <Text>Regular <br />A B C D E F G H I J K L M N O P Q R S T U V X Y Z <br /> a b c d e f g h i j k l m n o p q r s t u v w x y z <br /> 1 2 3 4 5 6 7 8 9 0<br /></Text>
                <Text>Bold <br />A B C D E F G H I J K L M N O P Q R S T U V X Y Z <br /> a b c d e f g h i j k l m n o p q r s t u v w x y z <br /> 1 2 3 4 5 6 7 8 9 0</Text>
            </Schriften>
            <Farben>
                <Headline2>Farben</Headline2>
                <StaticImage src="../../../images/3_Leistungen/Logo/farben.png" alt="" placeholder="blurred" objectFit="cover" />
                <StaticImage src="../../../images/3_Leistungen/Logo/farben7.png" alt="" placeholder="blurred" objectFit="cover" />
            </Farben>
    </Wrap>
    )
}

export default LogoDetails
