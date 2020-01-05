<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';

    const text = `<h3>Hoe ontstaat kalk of uirinesteen afzetting in de leiding ?</h3>
<p>
    De opbouw van kalk en urinesteen in toilet is een traag proces. Jarenlang heb je geen enkel probleem en helpen azijn
    of bleekwater om alles netjes en hygiënisch te houden, althans alles wat zichtbaar is. Achterliggend leidingswerk,
    sifons en afvoeren laden verder aan met kalk en urinesteen. Dit kan tot een verstopping leiden. Onstoppingsdienst
    Sobry staat u bij en lost deze oorzaak van verstopping voor u op.
</p>
<h3>Wat zijn de factoren die de aanslag beïnvloeden en die tot een verstopping kunnen leiden?</h3>
<ul>
    <li>
        De hoeveelheid kalk en urinesteen in het spoelwater, afhankelijk van de hardheidsgraad van het aangeleverde
        drinkwater
    </li>
    <li>De aan- of afwezigheid van een ontkalker</li>
    <li>
        Beluchting en ontluchting in een rioolleiding veroorzaken een drukverschil. Wanneer de rioolleidingen niet in
        gebruik zijn (bijvoorbeeld bij nacht) verdampt de luchtstroom het restwater in de leiding en blijft kalk en
        urinesteen achter
    </li>
    <li>Gebrek aan onderhoud en regelmatige reiniging van het rioolstelsel</li>
</ul>
<p>
    Nadat er kalk of urinesteen is vastgesteld in de leiding of de riool wordt deze door middel van verschillend soorten
    frezen verwijderd zonder afbraakwerken. Uw riolering is terug als nieuw.
</p>

<h3>Hoe ontstaan wortels in de riolering en hoe veroorzaken de wortels een verstopping?</h3>
<p>
    Wortels vinden hun weg via spleten in de riolering of slecht afgedekte putten. Eens ze toegang hebben in het
    rioleringsnetwerk kunnen ze groeien. Planten en bomen houden van het afvalwater en doen er alles aan om daar hun
    vocht te halen.
</p>
<p>
    Nadat er wortelgroei is vastgesteld in de leiding of de riool wordt deze door rioolboren en hoge druk waterfrees
    verwijderd. Door middel van cameradetectie kan het punt van ingroei worden gedetecteerd. En zo lost
    ontstoppingsdienst Sobry de verstopping en schade op.
</p>
<p>
    <b>Is de kelder vol water gestroomd?</b>
    Onstoppingsdienst sobry ledigt uw kelder en lost het probleem van overstroming samen met u op. Onstoppingsdienst
    Sobry kijkt naar de oorzaak en lost de verstopping op.
</p>
`;
</script>

<style>

</style>

<DienstPagina
    {labels}
    title={labels.ontkalken}
    image="picture-urinoirs.jpg"
    {text}
    quote={'Na een ontkalking is je riolering zo goed als nieuw'} />

<Reviews />
<FloatingAfspraak {labels} />
