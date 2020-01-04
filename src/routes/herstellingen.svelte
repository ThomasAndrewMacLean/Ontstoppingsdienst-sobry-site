<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';

    const text = `<h2>Wat met een lek, breuk of verzakking in uw riolering of afvoer?</h2>
<p>
    Verdoken putten, slijtage van de rioolbuizen of zware kalkafzetting in de leidingen?
    <br />
    Wortelgroei in de leiding?
    <br />
    Beschadigde of verouderd putten?
    <br />
    Verouderde loden buizen, asbest buizen, betonnen buizen of grenen(geemailleerde) leidingen?
    <br />
    Verzakkingen in de kelder?
</p>

<p>
    Door jarenlang gebruik ontstaan corosie en slijtage door weersomstandigheden, door droogzuiging van nieuwbouw in de
    buurt kunnen er barsten, breuken of verzakkingen in uw riolnetwerk ontstaan. Dit zijn zaken die een verstopping
    kunnen veroorzaken.
    <br />
    Onstoppingsdienst Sobry neemt deze problemen aan.
    <br />
    Dit kunt u opmerken door rioolgeur, traagwerkende afvoer van sanitaire leidingen of een zichtbare verzakking van
    vloer, oprit of tuin. Alsook kunnen deze lekken en breuken leiden tot opstijgend vocht in de muren en zo narigheid
    veroorzaken.
    <br />
    Water in de kelder kan ook een signaal zijn.
</p>

<h2>Hoe los ik een breuk, lek of verzakking op in een riolering?</h2>

<h3>Herstellen</h3>
<p>
    Door slecht werkende onderdelen te vervangen, voldoende bevestigingen toe te brengen, door kalkafzetting weg te
    frezen, wortels uit de buizen te frezen, putten terug waterdicht te cementeren, enz ...
</p>

<h3>Buis in buis techniek</h3>
<p>
    Is een duurzame en goedkopere oplossing, zonder afbraak van de riolering. Er wordt een nieuwe buis in de oude buis
    gecreeerd. Deze techniek noemt “relinen”. De oude leiding wordt langs de binnekant bedekt met een epoxyliner
    zodoende er een nieuwe buis in de buis wordt gecreeerd en lekken verleden tijd zijn.
</p>
<h3>Totaal renovatie</h3>
<p>
    Kan in sommige gevallen de beste oplossing naar de toekomst zijn. Zeker met een sterk verouderd riool netwerk, zware
    verzakkingen of breuken.
</p>

<p>Voor al deze herstellingen kan ontstoppingsdienst Sobry u door verwijzen naar de beste professionals.</p>`;
</script>

<style>

</style>

<DienstPagina
    {labels}
    title={labels.herstellingen}
    image="picture-tap.jpg"
    {text}
    quote={'Een herstelling is goedkoper dan een vernieuwing'} />
<Reviews />
<FloatingAfspraak {labels} />

