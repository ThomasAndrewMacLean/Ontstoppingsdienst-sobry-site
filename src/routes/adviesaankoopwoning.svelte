<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';
    const text = `<p>
    Bij aankoop van een bestaande/nieuwbouw woning is het rioolnetwerk niet zichtbaar.
    <br />
    Doormiddel van camera onderzoek kunnen we het netwerk in kaart brengen, kijken in welke staat uw riolering zich
    bevindt om eventueel zwakke punten te melden om deze aan te pakken.
    <br />
    In de praktijk kom ik het dikwijls tegen dat er bij renovaties/verbouwingen en nieuwbouw te weinig aandacht wordt
    gegeven aan het rioleringsnetwerk.
    <br />
    Als koper heb je hier geen zicht op en kan je onaangename verassingen vermijden.
</p>

<p>Om enkele voorbeelden te geven;</p>

<ul>
    <li>
        -Bij een bestaande woning die nog niet gerenoveerd is, kan het zijn dat de riolering nog in keramiek/beton of
        asbest is. Deze worden na verloop van tijd wak en gaan invallen. De afvoeren gaan verzakken na verloop van tijd.
        <br />
        Door jarenlang gebruik kan ook kalk of urinesteen zich aan de riool buizen hebben vast gehecht, waardoor de
        leidingen nauwer worden en het afvalwater(zeker van toilet) moeilijker op zijn bestemming komt, en kunnen
        wortels van bomen en struiken via de zwakke punten zich in de riolering nestelen.
        <br />
        Alsook worden deze niet altijd op de juiste manier aangesloten waardoor je last kan krijgen van een vieze geur
        in huis.
        <br />
        Ook een verdoken septische put/beerput of andere putten kunnen voor problemen zorgen.
    </li>
    <li>
        -Bij een bestaande woning die gerenoveerd is, kan het zijn dat de problemen die in het bovenstaande staan
        beschreven, gewoon zijn verdoezeld door er een nieuw jasje over aan te trekken. In de praktijk kom ik dit
        dikwijls tegen ,en is voor de nieuwe eigenaar een streep door de rekening. Ook zijn de rioleringen en afvoeren
        niet volgens de regels van de kunst gerenoveerd.
    </li>

    <li>
        -Bij een nieuwbouw woning kan het zijn dat er leidingen verkeerd zijn gelegd of dat de riolering niet
        aangesloten is op de hoofdriool, dat er bij de werkzaamheden bouwafval in de riolering is geraakt zoals
        betoninloop, voegsel, isolatieschuim, enzovoort…
        <br />
        Ook verzakte buizen door na aanleg over te rijden met zwaar materiaal zijn dingen die kunnen gebeuren. Een
        cameraonderzoek van uw riolering voor de oplevering kan u veel besparen.
    </li>
</ul>

<p>
    Met een camera onderzoek kan je deze problemen op voorhand inschatten en de juiste acties ondernemen. Ik adviseer en
    ondersteun de klant in verdere oplossingen op maat.
</p>`;
</script>

<style>

</style>

<DienstPagina
    {labels}
    title={labels.adviesaankoopwoning}
    image="picture-toilet.jpg"
    {text}
    quote={'Doormiddel van camera onderzoek kijken we in welke staat uw riolering is'} />
<Reviews />
<FloatingAfspraak {labels} />
