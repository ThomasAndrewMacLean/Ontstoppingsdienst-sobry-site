<script>
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import labels from '../labels.js';

    import HeroImage from '../components/Hero-Image.svelte';
</script>

<style>
    .page {
        justify-content: center;
        display: flex;
        flex-direction: column;
        padding-top: 3rem;
        padding-bottom: 8rem;
        z-index: 1;
    }

    p {
        margin-top: 0;
    }
    h1,
    h2 {
        color: #333333;
        color: var(--darker-text);
    }
    ul {
        list-style: disc;
    }

    @media (max-width: 1000px) {
        .page {
            padding: 3rem;
        }
    }
    @media (max-width: 800px) {
        .page {
            padding: 1rem;
        }
    }
</style>

<HeroImage image="picture-urinoirs.jpg" />
<div class="page">
    <h1>Prijzen</h1>
    <h2>Hoeveel kost een ontstoppingsdienst?</h2>
    <p>Onze all-in prijs voor een interventie van de ontstoppingsdient 160 €*</p>
    <br />
    <p>
        <em>
            * Inclusief alle verplaatsingskosten inclusief één uur ontstoppingswerk. Dit exclusief btw. Indien uw woning
            ouder is dan 10 jaar wordt 6% btw aangerekend, anders 21%. Extra ontstoppingswerk bedraagt + 35 €/half uur.
        </em>
    </p>

    <ul>
        <li>Betaal met bancontact of cash.</li>
        <li>Verplaatsingskosten worden niet aangerekend.</li>

    </ul>
    <h2>Wat met extra onderzoeken om jouw verstopping te verhelpen?</h2>

    <p>
        Nodige extra onderzoeken worden eerst besproken, alvorens ze worden uitgevoerd.
        <br />
        Na jouw uitdrukkelijke toestemming wordt een technisch onderzoek uitgevoerd.
    </p>

    <h2>Wat zijn de prijzen van een extra ontstoppingsdienst?</h2>
    <ul>
        <li>
            Camera-inspectie:
            <em>80 €</em>
        </li>
        <li>
            Rookdetectie:
            <em>80 €</em>
        </li>
        <li>
            Camera-inspectie met zender/traceren/sonar:
            <em>120 €</em>
        </li>
        <li>
            Frezen van kalk, boomwortels of hardnekkig vet:
            <em>80 €</em>
        </li>
        <li>
            Toeslag verslag verzekering:
            <em>40 €</em>
        </li>

    </ul>

    <h2>
        Hoeveel kost een dienst zonder ontstopping of reiniging?
        <br />
        Welke ontstoppingsdiensten worden hiervoor gebruikt?
    </h2>

    <ul>
        <li>
            Camera-onderzoek:
            <em>160 €</em>
        </li>
        <li>
            Rookdetectie:
            <em>160 €</em>
        </li>
        <li>
            Camera-inspectie met zender/traceren/sonar:
            <em>220 €</em>
        </li>

    </ul>
    <h2>
        Een verstopping in het weekend, feestdagen of een interventie nodig na 18u?
        <br />
        Hoeveel kost een ontstoppingsdienst tijdens het weekend of feestdagen?
    </h2>

    <p>
        Onstoppingsdienst Sobry staat voor je klaar. Er wordt een toeslag van +50% aangerekend op zaterdag en tijdens de
        week na 18u. Op zon- en feestdagen wordt een toeslag aangerekend van +100%
    </p>
    <h2>Waar zijn er extra onstoppingsdiensten nodig?</h2>
    <ul>
        <li>bouwafval in de afvoerleiding, standleiding of hoofdriool</li>
        <li>
            een verstopping op gemeentelijk grondgebied (deze worden gedocumenteerd en dan kan je de kosten proberen
            terug te vorderen bij jouw gemeente)
        </li>
        <li>wortelgroei in de riolering</li>
        <li>afwezigheid van controleputjes</li>
        <li>een breuk of verzakking van de afvoerleiding</li>
        <li>een constructiefout</li>
        <li>aanwezigheid van lodenbuizen als afvoer</li>
        <li>niet toegankelijke riolering</li>
    </ul>
    <h2>Wat bij annulatie van een onstoppingsdienst?</h2>
    <p>
        Bij annulatie van een opdracht door de klant na voorrijden (m.a.w ontstoppingsdienst Sobry is ter plaatse is
        en/of de klant is niet ter plaatse), dan is ontstoppingsdienst Sobry gerechtigd een schadevergoeding aan te
        rekenen van 80 € excl. btw.
    </p>
    <h2>Wat zijn de voorzorgsmaatregelen die je neemt bij een ontstopping?</h2>
    <p>
        Ontstoppingsdienst Sobry kan niet verantwoordelijk gesteld worden voor eventuele schade/waterschade indien dit
        in opdracht van de klant dienen uit te voeren.
        <br />
        Indien de werken niet langs buiten uitgevoerd kunnen worden en wij met slangen en materiaal door de woning
        moeten,dient de klant de nodige voorzorgsmaatregelen te nemen om de vloer en andere delen van de woning te
        beschermen totdat de werkzaamheden zijn beëindigd.
        <br />
        De klant neemt hier de volledige verantwoordelijkheid.
    </p>
</div>
<FloatingAfspraak {labels} />
