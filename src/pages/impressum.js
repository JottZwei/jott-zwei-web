import React from 'react'
import styled from 'styled-components'
import { Headline1, Headline2, Headline3, Text } from '../components/defaultComponents'
import Layout from "../components/layout"
import Seo from "../components/seo"

const impressum = () => {


    const Wrap = styled.section`
    width: min(90%, 1100px);
    margin:0 auto;
    margin-top: 150px;

    & ${Text} {
        margin-bottom: 30px;
    }

    & ${Headline2}{
        margin-top: 30px;
    }

    & ${Headline3}{
        margin-top: 30px;
    }
    `

    const Link = styled.a`
        &:hover {
            color: var(--secondary-color);
        }
    `

    return (
        <Layout>
        <Seo title="Impressum | Jott Zwei Werebagentur" description="Alles was Sie brauchen um uns zu kontaktieren: Jott Zwei UG (​haftungsbeschränkt), Bühnenstraße 225, 49635 Badbergen. 0176 34404998, info@jott-zwei.de." />
        <Wrap>
            <Headline1>Impres&shy;sum</Headline1>
            <Headline2>Angaben gemäß § 5 TMG</Headline2>
            <Text>Jott Zwei UG (haftungsbeschränkt) <br />Bühnenstraße 225 <br />49635 Badbergen <br /> <br />Handels&shy;register: HRB 214834 <br />Register&shy;gericht: Amts&shy;gericht Osna&shy;brück<br /><br />
Vertreten durch:<br />Jan Francksen<br />Jörn Webert</Text>
            <Headline2>Kontakt</Headline2>
            <Text>
            Telefon: <Link href="tel:017634404998">0176 34404998</Link><br />
            E-Mail: <Link href="mailto:info@jott-zwei.de">info@jott-zwei.de</Link>
            </Text>

            <Headline2>Umsatz&shy;steuer-ID</Headline2>
            <Text>
                Umsatz&shy;steuer-Iden&shy;ti&shy;fi&shy;ka&shy;tions&shy;num&shy;mer gemäß § 27 a Umsatz&shy;steuer&shy;gesetz: DE331005036
            </Text>
            <Headline2>
                Verant&shy;wort&shy;lich für den In&shy;halt nach § 55 Abs. 2 RStV
            </Headline2>
            <Text>
                Jan Francksen & Jörn Webert
            </Text>
            <Headline2>EU-Streit&shy;schlich&shy;tung</Headline2>
            <Text>
            Die Euro&shy;päische Kom&shy;mis&shy;sion stellt eine Platt&shy;form zur Online-Streit&shy;beilegung (OS) bereit:{' '}
            <Link href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</Link>.
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </Text>
            <Headline2>Verbraucher&shy;streit&shy;bei&shy;legung / Uni&shy;ver&shy;sal&shy;schlich&shy;tungs&shy;stelle</Headline2>
            <Text>Wir sind nicht bereit oder verpflichtet, an Streit&shy;bei&shy;le&shy;gungs&shy;ver&shy;fah&shy;ren vor einer Ver&shy;brau&shy;cher&shy;schlich&shy;tungs&shy;stelle teilzunehmen.</Text>
            <Headline3>Haftung für Inhalte</Headline3>
            <Text>Als Dienste&shy;anbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienste&shy;anbieter jedoch nicht verpflichtet, über&shy;mittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</Text>
            <Headline3>Haftung für Links</Headline3>
            <Text>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</Text>
            <Headline3>Ur&shy;heber&shy;recht</Headline3>
            <Text>Die durch die Seiten&shy;betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Verviel&shy;fältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</Text>
        </Wrap>
      </Layout>
    )
}

export default impressum
