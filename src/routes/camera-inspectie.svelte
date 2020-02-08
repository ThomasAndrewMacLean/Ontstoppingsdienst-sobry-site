<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';

    const text = `<h2>Wat is een cameradetecie/camera onderzoek of camerainspectie?</h2>

<p>
    Een rioolcamera onderzoek is vergelijkbaar met een endoscopie bij de mens. Er wordt met een geadvanceerde
    kleurencamera van binnenuit gekeken naar de oorzaak van een slecht functionerend riool. Via deze beelden maakt
    ontstoppingsdienst Sobry een diagnose op: geurproblemen, verstoppingen, lekken, beschadigingen, kalkafzetting,
    wortelgroei, vochtproblemen of een hardnekkige verstopping.
    <br />
    Het probleem wordt exact gelokaliseerd en plaatselijk kan een oplossing aangboden worden. Dit bespaart onnodige
    uitbreekwerken en u bespaart onnodige kosten.
</p>
<h2>Hoe kan een camera onderzoek nuttig zijn voor verborgen putten?</h2>

<p>
    Voor het opsporen van verborgen putten is een cameraonderzoek nuttig. Het valt regelmatig voor dat er verborgen
    putjes, een septische put/beerput in de tuin of onder de oprit ligt. Vaak gaat het over een hoofd geziene put door
    de bouwheer of door de vorige eigenaars, die het niet esthetisch vonden om een zichtbaar deksel te hebben op de
    oprit. Met de camera zoekt ontstoppingsdienst Sobry de put op en doormiddel van een detectie systeem (sonar) kan
    ontoppingsdienst Sobry de plaats lokaliseren.
</p>

<p>
    Een
    <em>extra voordeel</em>
    bij een camera onderzoek is dat je een verslag en beeldmateriaal krijgt. Deze analyse kan als bewijs dienen voor de
    verzekeringsmaatschappij, gemeente, aanemer of verhuurder/huurder van een woning.
</p>

<h3>Enkele voorbeelden van een problematische riolering die voor een verstopping kunnen zoorgen:</h3>
<ul>

    <li>Kalkafzetting in een afvoerbuis of riool</li>
    <li>Obstructie door bomen of struiken in de leiding</li>
    <li>Hardnekkige verstopping</li>
    <li>Verzakking van een rioolbuis (ook bij nieuwbouw)</li>
    <li>Een breuk/scheur van de riool</li>
    <li>Een breuk ven de riolering op het domein van de gemeente</li>
    <li>Geen aansluiting op het netwerk van de gemeente (vooral bij nieuwbouw)</li>
    <li>Een lek in de riolering</li>

    <li>Opstijgend vocht</li>
    <li>Geurproblemen/doordringende rioolgeur</li>
    <li>Wc bokje of speelgoed in de leiding</li>
    <li>Bladvanger of speelgoed in de regenafvoer</li>
    <li>Verzakte vloeren of opritten</li>
    <li>prop van vochtige doekjes, tampons of maandverband</li>
</ul>

<p>Bij elk geurprobleem of verstoppingsvraagstuk kan er een nauwkeurige analyse gemaakt worden.</p>

<h3>Voordelen van de moderne detectiemethodes</h3>

<ul>
    <li>Snelle en precieze opsporing</li>
    <li>Voorkomen van ongemakken</li>
    <li>In veel gevallen geen afbraakwerken of opgravingen</li>
    <li>Deskundig en gecertificeerd verslag als bewijs bij verzekeringskwesties</li>
</ul>
`;
</script>

<style>
    
</style>

<DienstPagina
    {labels}
    title={labels.cameradetectie}
    image="picture-drain.jpg"
    {text}
    quote={'Uw rioolprobleem, putten en leidingen detecteren'} />
<Reviews />
<FloatingAfspraak {labels} />
