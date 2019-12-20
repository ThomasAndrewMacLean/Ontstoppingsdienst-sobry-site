<script>
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import labels from '../labels.js';
    import HeroImage from '../components/Hero-Image.svelte';
</script>

<style>
    h1,
    h2,
    h3 {
        color: #333333;
        color: var(--darker-text);
    }
    .addressInfo {
        display: block;
        margin-left: 4rem;
    }
    .page {
        justify-content: center;
        display: flex;
        flex-direction: column;

        padding-top: 3rem;
        padding-bottom: 8rem;
        z-index: 1;
    }
    @media (max-width: 1000px) {
        .page {
            padding: 3rem;
        }
    }
    @media (max-width: 800px) {
        .page {
            padding-top: 6em;
        }
    }
</style>

<HeroImage image="picture-drain.jpg" />

<div class="page">
    <h1>PRIVACYBELEID</h1>

    <p>
        In het kader van de uitvoering van haar bedrijfsactiviteiten beheert, verzamelt en gebruikt Ontstoppingsdienst
        Sobry, Hillarestraat 275, 9160 Lokeren (btw: 0630.666.383) persoonsgebonden gegevens: naam, voornaam,
        geslacht, adres, telefoon/GSM – nummers en mailadressen.
    </p>
    <p>
        Deze gegevens worden bij de aanvraag/bestelling van de uit te voeren werken door de klant aan ons overgemaakt en
        worden intern gebruikt door de planning, de boekhouding en de uitvoerders van de gevraagde werken. De gegevens
        worden – indien noodzakelijk – aan incassobemiddelaars, verzekeringsmaatschappijen,… overgemaakt, maar zullen
        nooit voor externe (commerciële) doeleinden gebruikt worden. De klant heeft het recht deze gegevens ten alle
        tijde te laten wijzigen.
    </p>
    <p>
        Deze gegevens worden bewaard volgens de wettelijk opgelegde termijnen en zolang dit voor de werking van de
        onderneming nodig is. De data worden verwerkt en beheerd met behulp van het boekhoudprogramma en op de server
        opgeslagen. Dagelijks wordt een externe en interne back-up gemaakt. De toegang tot deze gegevens worden
        beschermd door persoonlijke login en het antivirus-programma, regelmatige update, phising alert, … zorgen tevens
        voor extra bescherming van de gegevens.
    </p>
    <br />

    <h2>Ons gebruik van verzamelde gegevens</h2>
    <h3>Gebruik van onze diensten</h3>
    <p>
        Wanneer u zich aanmeldt voor een van onze diensten vragen we u om persoonsgegevens te verstrekken. Deze gegevens
        worden gebruikt om de dienst uit te kunnen voeren. De gegevens worden opgeslagen op eigen beveiligde servers van
        Ontstoppingsdienst Sobry bvba of die van een derde partij. Wij zullen deze gegevens niet combineren met andere
        persoonlijke gegevens waarover wij beschikken.
    </p>
    <h3>Communicatie</h3>
    <p>
        Wanneer u e-mail of andere berichten naar ons verzendt, is het mogelijk dat we die berichten bewaren. Soms
        vragen wij u naar uw persoonlijke gegevens die voor de desbetreffende situatie relevant zijn. Dit maakt het
        mogelijk uw vragen te verwerken en uw verzoeken te beantwoorden. De gegevens worden opgeslagen op eigen
        beveiligde servers van Ontstoppingsdienst Sobry bvba of die van een derde partij. Wij zullen deze gegevens niet
        combineren met andere persoonlijke gegevens waarover wij beschikken.
    </p>
    <h3>Cookies</h3>
    <p>
        Wij verzamelen gegevens voor onderzoek om zo een beter inzicht te krijgen in onze klanten, zodat wij onze
        diensten hierop kunnen afstemmen.
    </p>
    <p>
        Deze website maakt gebruik van “cookies” (tekstbestandjes die op uw computer worden geplaatst) om de website te
        helpen analyseren hoe gebruikers de site gebruiken. De door het cookie gegenereerde informatie over uw gebruik
        van de website kan worden overgebracht naar eigen beveiligde servers van Ontstoppingsdienst Sobry bvba of die
        van een derde partij. Wij gebruiken deze informatie om bij te houden hoe u de website gebruikt, om rapporten
        over de website-activiteit op te stellen en andere diensten aan te bieden met betrekking tot website-activiteit
        en internetgebruik.
    </p>
    <h3>Doeleinden</h3>
    <p>
        We verzamelen of gebruiken geen informatie voor andere doeleinden dan de doeleinden die worden beschreven in dit
        privacybeleid tenzij we van tevoren uw toestemming hiervoor hebben verkregen.
    </p>
    <h3>Derden</h3>
    <p>
        De informatie wordt niet met derden gedeeld. In enkele gevallen kan de informatie intern gedeeld worden. Onze
        werknemers zijn verplicht om de vertrouwelijkheid van uw gegevens te respecteren.
    </p>
    <h3>Veranderingen</h3>
    <p>
        Deze privacyverklaring is afgestemd op het gebruik van en de mogelijkheden op deze site. Eventuele aanpassingen
        en/of veranderingen van deze site, kunnen leiden tot wijzigingen in deze privacyverklaring. Het is daarom
        raadzaam om regelmatig deze privacyverklaring te raadplegen.
    </p>
    <h3>Keuzes voor persoonsgegevens</h3>
    <p>
        Wij bieden alle bezoekers de mogelijkheid tot het inzien, veranderen, of verwijderen van alle persoonlijke
        informatie die op moment aan ons is verstrekt.
    </p>
    <h3>Aanpassen/uitschrijven communicatie</h3>
    <p>
        Als u uw gegevens aan wilt passen of uzelf uit onze bestanden wilt laten halen, kunt u contact met ons op nemen.
        Zie onderstaande contactgegevens.
    </p>
    <h3>Cookies uitzetten</h3>
    <p>
        De meeste browsers zijn standaard ingesteld om cookies te accepteren, maar u kunt uw browser opnieuw instellen
        om alle cookies te weigeren of om aan te geven wanneer een cookie wordt verzonden. Het is echter mogelijk dat
        sommige functies en ”“services, op onze en andere websites, niet correct functioneren als cookies zijn
        uitgeschakeld in uw browser.
    </p>
    <h3>Vragen en feedback</h3>
    <p>
        We controleren regelmatig of we aan dit privacybeleid voldoen. Als u vragen heeft over dit privacybeleid, kunt u
        contact met ons opnemen:
    </p>

    <p>
        <span class="addressInfo">Ontstoppingsdienst Sobry bvba</span>
        <span class="addressInfo">Hillarestraat 275,</span>
        <span class="addressInfo">9160 Lokeren (Oost-Vlaanderen)</span>
        <span class="addressInfo">BTW: {labels.btwnummer}</span>
        <span class="addressInfo">0467/00 50 50</span>
        <span class="addressInfo">(24/7 servicelijn via dit nummer!)</span>
        <span class="addressInfo">info@ontstoppingsdienst-sobry.be</span>
    </p>

    <br />
    <br />
</div>
<FloatingAfspraak {labels} />
