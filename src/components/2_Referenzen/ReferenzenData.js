import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import video from '../../images/logo_intro.mp4'

export const ReferenzenData = [
    {
        image: <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_0_head.jpg" width={1920} alt="" placeholder="blurred" objectFit="cover" />,
        titleImage: <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_0_head.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
        name: 'Ziemer Consult',
        headline: 'Ihr kom\xADpe\xADten\xADter Part\xADner für Ih\xADre Lex\xADware Soft\xADware.',
        leistungen: 'Webdesign, Logogestaltung, E-Commerce, Visitenkarten, Firmenschilder, Briefpapier',
        text: 'Michael Ziemer und sein Team helfen seit 1985 kleinen und mittelständischen Unternehmen, Handwerkern, Dienstleistern, Handels- und Produktionsunternehmen, Steuerberatern und Rechtsanwälten bei der Auswahl, Einführung sowie Optimierung von Betriebssoftware und Organisationslösungen für Büro und Verwaltung. \n \nNun war es an der Zeit neben den hervorragenden Services und Produkten ein brandneues Corporate Design und einen modernen Auftritt im Internet zu schaffen. \n \nDas Ergebnis ist eine schlichte, aber modernisierte Bildmarke, versehen mit einer ästhetischen Typographie. Der Internetauftritt ist ein großer Schritt in die Moderne. Responsive und mit neuer Farbgebung macht es einiges her, sich durch die neuen Produkte zu klicken. Des Weiteren bietet der neue Internetauftritt auch die Möglichkeit, die Produkte direkt online zu kaufen mit Hilfe eines intuitiven Onlineshops. Im Shop sind sowohl physische als auch digitale Produkte erhältlich. Dies lässt für die Zukunft noch großen Spielraum für weitere digitale Produkte, welche sich momentan in Planung befinden.',
        link: '/referenzen/ziemer-consult',
        gallery: [
            <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_1.jpg" width={550} alt="Logo für Ziemer Consult auf Visitenkartenpapier gedruckt" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_2.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_3.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_4.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_5.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Ziemer/ref_zc_6.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />
        ]
    },
    {
        image: <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_0_head.jpg" width={1920} alt="" placeholder="blurred" objectFit="cover" />,
        titleImage: <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_0_head.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
        name: 'Freizeit\xADtanken',
        headline: 'Bereit, um mal so rich\xADtig Frei\xADzeit zu tan\xADken?',
        leistungen: 'Webdesign, Logogestaltung, Visitenkarte, Videoschnitt',
        text: 'Mit Michaelas cooler Idee, Freizeitaktivitäten an Wochenenden zu veranstalten, musste ein passendes Auftreten auf dem Markt her. Ihre peppige Persönlichkeit und Ihr authentisches Auftreten in den sozialen Medien haben uns schnell in die richtige Richtung gelenkt. Herausgekommen ist ein rockiges Erscheinungsbild, welches zum Mitmachen anregt. \n \nDas neu geschaffene Erscheinungsbild hat den Weg in die sozialen Medien und auf Ihre Internetseite gefunden. Die Internetseite, ebenfalls von uns realisiert, bietet eine Übersicht über die aktuellen Veranstaltungen und einige Impressionen von Freizeittanken sowie von Michaela. \n \nDes Weiteren haben wir mit Michaela nicht nur eine Kundin gewonnen, sondern auch jemanden, mit dem man sich super austauschen kann! Vielen Dank dafür!',
        link: '/referenzen/freizeittanken',
        gallery: [
            <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_1.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_2.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_3.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_4.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_5.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Freizeittanken/ref_ft_6.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />
        ]
    },
    {
        image: <video src={video} type="video/mp4" autoPlay muted loop playsInline />,
        titleImage: <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_2.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
        name: 'Rebel Pandas',
        headline: 'Rebellisch, musikalisch & flauschig',
        leistungen: 'Webdesign, Logogestaltung, Albumcover, Social-Media, Merchandise',
        text: 'Rebel Pandas, ein Musikprojekt aus der Region, möchte durchstarten. Dafür musste ein ausgeklügeltes, modernes Corporate Design her. \n \nInspiriert vom Brutalismus-Stil ist ein “rebellisches” Corporate Design entstanden, welches thematisch und optisch die Ansprüche perfekt vereint. Das Logo und die Typografie bieten einen großen gestalterischen Spielraum für die Verwendung in den Bereichen Merchandise, Social-Media, Plattencovers und Ähnlichem. \n \nWeitere Projekte für Rebel Pandas sind im Aufbau. Diese werden Sie bald hier finden können.',
        link: '/referenzen/rebelpandas',
        gallery: [
            <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_2.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_3.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_4.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_5.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/RebelPandas/ref_rp_6.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />
        ]
    },
    {
        image: <StaticImage src="../../images/2_Referenzen/Reternity/ref_rt_2.jpg" width={1920} alt=""  placeholder="blurred" objectFit="cover"  />,
        titleImage: <StaticImage src="../../images/2_Referenzen/Reternity/ref_rt_2.jpg" width={550} alt="" placeholder="blurred" objectFit="cover"  />,
        name: 'Reternity',
        headline: 'Schlicht, modern & auf den Punkt.',
        leistungen: 'E-Commerce, Flyer',
        text: 'Lässige Looks verpackt in einem übersichtlichen und aufgeräumten Webshop? Kein Problem. Mit viel Platz dank groß in Szene gesetzter Bilder wurde ein moderner, responsiver Webauftritt geschaffen, auf dem die Kunden die neuesten Kollektionen direkt einkaufen können. Sowohl die Einrichtung des Shopsystemes als auch die Gestaltung der Website sowie Werbemaßnahmen in den sozialen Medien und ein Flyer wurden von uns übernommen.',
        link: '/referenzen/reternity',
        gallery: [
            <StaticImage src="../../images/2_Referenzen/Reternity/ref_rt_1.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Reternity/ref_rt_2.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Reternity/ref_rt_3.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Reternity/ref_rt_4.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />
        ]
    },
    {
        image: <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_0_head.jpg" width={1920} alt="" placeholder="blurred" objectFit="cover" />,
        titleImage: <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_0_head.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
        name: 'Weserraum',
        headline: 'Platz da! Weserraum hat immer die passende Garage für euch frei.',
        leistungen: 'Webdesign, Visitenkarten, Stempel',
        text: 'Ein prägnantes Logo, Visitenkarten, Stempel, sowie ein kleiner Webauftritt. Dank dieser Umsetzungen werden die Leistungen von Weserraum klar und gut sichtbar nach außen kommuniziert, abgerundet durch coole Farben und heiße Karren.',
        link: '/referenzen/weserraum',
        gallery: [
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_1.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_2.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_3.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_4.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_5.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />,
            <StaticImage src="../../images/2_Referenzen/Borchers/ref_bor_6.jpg" width={550} alt="" placeholder="blurred" objectFit="cover" />
        ]
    }
]