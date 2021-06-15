import React from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Text, Headline1, Headline2, Headline3, Headline4 } from '../components/defaultComponents'

const datenschutzerklaerung = () => {
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

    & ${Headline4}{
        margin-top: 30px;
    }
`
    const Link = styled.a`
        &:hover {
            color: var(--secondary-color);
        }
    `

    const Liste = styled.ul``

    const ListenItem = styled.li`
        list-style: disc;
    `

    return (

        <Layout>
        <Seo title="Datenschutzerklärung | Jott Zwei Werbeagentur" description="Informationen zum Datenschutz und der Datensicherheit bei der Jott Zwei UG (haftungsbeschränkt)." />
            <Wrap>
                <Headline1>Daten&shy;schutz&shy;erklärung</Headline1>
                <Headline2>1. Daten&shy;schutz auf einen Blick</Headline2>
                <Headline3>All&shy;ge&shy;mei&shy;ne Hin&shy;weise</Headline3>
                <Text>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</Text>
                <Headline4>Wer ist verant&shy;wortlich f&uuml;r die Daten&shy;er&shy;fas&shy;sung auf die&shy;ser Web&shy;site?</Headline4>
                <Text>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.</Text>
                <Headline4>Wie er&shy;fas&shy;sen wir Ihre Daten?</Headline4>
                <Text>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben. <br/><br/>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</Text>
                <Headline4>Wof&uuml;r nut&shy;zen wir Ihre Da&shy;ten?</Headline4>
                <Text>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</Text>
                <Headline4>Welche Rech&shy;te haben Sie bez&uuml;g&shy;lich Ihrer Daten?</Headline4>
                <Text>Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.<br/><br/>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.</Text>
                <Headline3>Analyse-Tools und Tools von Dritt&shy;anbietern</Headline3>
                <Text>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. <br/><br/>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl&auml;rung.</Text>
                <Headline2>2. Hosting und Con&shy;tent De&shy;li&shy;very Net&shy;works (CDN)</Headline2>
                <Headline3>Ex&shy;ter&shy;nes Hos&shy;ting</Headline3>
                <Text>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die &uuml;ber eine Website generiert werden, handeln.<br/><br/>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).<br/><br/>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.<br/><br/>Wir setzen folgenden Hoster ein:<br/><br/>
                    STRATO AG<br />
                    Pascalstra&szlig;e 10<br />
                    10587 Berlin
                </Text>
                <Headline4>Abschluss eines Ver&shy;tra&shy;ges &uuml;ber Auf&shy;trags&shy;ver&shy;ar&shy;bei&shy;tung</Headline4>
                <Text>Um die datenschutzkonforme Verarbeitung zu gew&auml;hrleisten, haben wir einen Vertrag &uuml;ber Auftragsverarbeitung mit unserem Hoster geschlossen.</Text>
                <Headline2>3. All&shy;gemeine Hin&shy;wei&shy;se und Pflicht&shy;infor&shy;ma&shy;tio&shy;nen</Headline2>
                <Headline3>Daten&shy;schutz</Headline3>
                <Text>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.<br/><br/>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.<br/><br/>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</Text>
                <Headline3>Hinweis zur ver&shy;ant&shy;wort&shy;li&shy;chen Stelle</Headline3>
                <Text>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist: <br/><br/>Jott Zwei UG (haftungsbeschr&auml;nkt)<br />
                B&uuml;hnenstra&szlig;e 225<br />
                49635 Badbergen<br/><br/>
                Telefon: <Link href="tel:017634404998">017634404998</Link><br />
                E-Mail: <Link href="mailto:info@jott-zwei.de">info@jott-zwei.de</Link><br/><br/>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</Text>
                <Headline3>Speicher&shy;dauer</Headline3>
                <Text>Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.</Text>
                <Headline3>Wider&shy;ruf Ihrer Ein&shy;wil&shy;li&shy;gung zur Daten&shy;ver&shy;ar&shy;bei&shy;tung</Headline3>
                <Text>Viele Daten&shy;ver&shy;ar&shy;bei&shy;tungs&shy;vor&shy;g&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</Text>
                <Headline3>Wider&shy;spruchs&shy;recht gegen die Daten&shy;er&shy;he&shy;bung in be&shy;son&shy;deren F&auml;llen sowie ge&shy;gen Direkt&shy;wer&shy;bung (Art. 21 DSGVO)</Headline3>
                <Text>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).<br/><br/>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</Text>
                <Headline3>Beschwerde&shy;recht bei der zust&auml;n&shy;digen Auf&shy;sichts&shy;beh&ouml;rde</Headline3>
                <Text>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</Text>
                <Headline3>Recht auf Daten&shy;&uuml;ber&shy;trag&shy;bar&shy;keit</Headline3>
                <Text>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</Text>
                <Headline3>SSL- bzw. TLS-Ver&shy;schl&uuml;s&shy;se&shy;lung</Headline3>
                <Text>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.<br/><br/>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</Text>
                <Headline3>Aus&shy;kunft, L&ouml;&shy;schung und Be&shy;rich&shy;ti&shy;gung</Headline3>
                <Text>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.</Text>
                <Headline3>Recht auf Ein&shy;schr&auml;n&shy;kung der Ver&shy;ar&shy;bei&shy;tung</Headline3>
                <Text>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen: <Liste><ListenItem>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</ListenItem><ListenItem>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</ListenItem><ListenItem>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</ListenItem><ListenItem>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</ListenItem></Liste>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</Text>
                <Headline2>4. Daten&shy;er&shy;fas&shy;sung auf die&shy;ser Web&shy;site</Headline2>
                <Headline3>Cookies</Headline3>
                <Text>Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Textdateien und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen&nbsp;oder eine automatische L&ouml;schung durch Ihren Webbrowser erfolgt.<br/><br/>Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem Endger&auml;t gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese erm&ouml;glichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).<br/><br/>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren w&uuml;rden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten&nbsp;oder Werbung anzuzeigen.<br/><br/>Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (funktionale Cookies, z. B. f&uuml;r die Warenkorbfunktion) oder zur Optimierung der Website (z.B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.<br/><br/>Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.<br/><br/>Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hier&uuml;ber im Rahmen dieser Datenschutzerkl&auml;rung gesondert informieren und ggf. eine Einwilligung abfragen.</Text>
                <Headline3>Server-Log-Dateien</Headline3>
                <Text>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:<Liste><ListenItem>Browsertyp und Browserversion</ListenItem><ListenItem>verwendetes Betriebssystem</ListenItem><ListenItem>Referrer URL</ListenItem><ListenItem>Hostname des zugreifenden Rechners</ListenItem><ListenItem>Uhrzeit der Serveranfrage</ListenItem><ListenItem>IP-Adresse</ListenItem></Liste><br/><br/>Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.<br/><br/>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst werden.</Text>
                <Headline3>Kontakt&shy;for&shy;mular</Headline3>
                <Text>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.<br/><br/>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.<br/><br/>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</Text>
                <Headline3>Anfrage per E-Mail, Te&shy;le&shy;fon oder Te&shy;le&shy;fax</Headline3>         
                <Text>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.<br/><br/>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.<br/><br/>Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</Text>
                <Headline2>5. Plug&shy;ins und Tools</Headline2>
                <Headline3>Google Web Fonts (lo&shy;ka&shy;les Hos&shy;ting)</Headline3>
                <Text>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.<br/><br/>Weitere Informationen zu Google Web Fonts finden Sie unter <Link href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</Link> und in der Datenschutzerkl&auml;rung von Google: <Link href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</Link>.</Text>
                <Headline3>Font Awe&shy;some (lo&shy;ka&shy;les Hos&shy;ting)</Headline3>
                <Text>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Font Awesome. Font Awesome ist lokal installiert. Eine Verbindung zu Servern von Fonticons, Inc. findet dabei nicht statt.<br/><br/>Weitere Informationen zu Font Awesome finden Sie in der Datenschutzerkl&auml;rung f&uuml;r Font Awesome unter: <Link href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">https://fontawesome.com/privacy</Link>.</Text>
                <Headline3>Open&shy;Street&shy;Map</Headline3>
                <Text>Wir nutzen den Kartendienst von OpenStreetMap (OSM). Anbieterin ist die Open-Street-Map Foundation (OSMF), 132 Maney Hill Road, Sutton Coldfield, West Midlands, B72 1JU, United Kingdom.<br/><br/>Wenn Sie eine Website besuchen, auf der OpenStreetMap eingebunden ist, werden u. a. Ihre IP-Adresse und weitere Informationen &uuml;ber Ihr Verhalten auf dieser Website an die OSMF weitergeleitet. OpenStreetMap speichert hierzu unter Umst&auml;nden Cookies in Ihrem Browser oder setzt vergleichbare Wiedererkennungstechnologien ein.<br/><br/>Ferner kann Ihr Standort erfasst werden, wenn Sie dies in Ihren Ger&auml;teeinstellungen &ndash; z.&nbsp;B. auf Ihrem Handy &ndash; zugelassen haben. Der Anbieter dieser Seite hat keinen Einfluss auf diese Daten&uuml;bertragung. Details entnehmen Sie der Datenschutzerkl&auml;rung von OpenStreetMap unter folgendem Link: <Link href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">https://wiki.osmfoundation.org/wiki/Privacy_Policy</Link>.<br/><br/>Die Nutzung von OpenStreetMap erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</Text>
            </Wrap>
        </Layout>

    )
}

export default datenschutzerklaerung
