<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';
    const text = `
<h3>Last van vieze geuren in huis of buiten?</h3>

<p>
    Door middel van rookdetectie leggen we snel en eenvoudig de oorzaak van uw ontstopping, lek of ander probleem bloot.
</p>

<h3>Hoe gaat dit in z’n werk gaat?</h3>
<p>
    De afvoerleidingen worden gevuld met onschadelijke, gekleurde rook. De rook komt vervolgens via het lek naar buiten
    en geeft zo de precieze plaats van de oorzaak aan.
    <br />
    Door middel van cameradetectie en lekdetectie kunnen geurproblemen, breuken, openingen, verdoken putten en zwakke
    punten in de riolering opgespoord worden.
    <br />
    Er zijn allerlei oorzaken. Het start al zeker met de "soort van geur". Bij een indringende rioolgeur kan de oorzaak
    een beschadigde of slecht geplaatste afvoerleiding zijn, of een slechte aansluiting van een sanitair toestel, of een
    beschadigde sifon, of terugslag via de verluchting of een constructiefout in de riolering. Het weer kan hierbij ook
    een rol spelen zoals bij laag drukgebied, veel regen of wind.
</p>

<p>
    Maar ook buiten de woning kan de geurhinder van de partij zijn! Zoals ongedierte of schimmel aan de muren. Deze
    kunnen op een aantal plaatsen geurhinder verspreiden. Ook slecht afgesloten putten of door het gebrek aan sifons en
    afwezigheid van geurafsluiters, kunnen geurhinder veroorzaken.
</p>

<p>
    Een veel voorkomend geurprobleem bevindt zich in het toilet. Als er een lavabo aanwezig is en deze weinig wordt
    gebruikt, dan kan het water in de sifon verdampen en zo de nare geuren in huis verspreiden.
</p>
<p>
    De uitdaging van geurhinder is dat deze soms en dan weer niet waarneembaar is. En natuurlijk nooit wanneer er iemand
    langskomt om de oorzaak te zoeken.
</p>

<p>Het is daarom belangrijk om zelf vooraf zoveel mogelijk details waar te nemen voor het onderzoek.</p>
<p>
    Tijdens het onderzoek gebruikt onstoppingsdienst Sobry door middel van enkele speciale toestellen en technieken dat
    de problemen zichtbaar worden, ook al zit de oorzaak ondergronds of ingebouwd.
</p>
<p>Ontstoppingsdienst Sobry biedt ook een oplossing op maat.</p>
`;
</script>

<style>

</style>

<DienstPagina
    {labels}
    title={labels.geurdetectie}
    image="picture-buizen.jpg"
    {text}
    quote={'Door middel van rookdetectie vinden we snel en eenvoudig de oorzaak'} />
<Reviews />
<FloatingAfspraak {labels} />
