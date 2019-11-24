<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';

    const text=`<p>Een riolering kan om <em>verschillende redenen</em> aan herstelling toe zijn: verzakkingen, roest, ingegroeide boomwortels, of gewoon slijtage. Vermoed u dat er een probleem is in uw riool, maar <b>kunt u de oorzaak niet vinden?</b> Aan de hand van een cameradetectie kunt u het probleem detecteren. Uw riolering wordt in detail zichtbaar dankzij een <em>geavanceerde kleurencamera</em>, waardoor het probleem exact gelokaliseerd kan worden.</p>
    <p>Geen graafwerk nodig voor een rioolinspectie. Een tussentijdse inspectie kan ook altijd helpen om problemen te vermijden zoals doordringende rioolgeur, vochtige muren, breuken en scheuren in de leidingen, verzakte vloeren of opritten, open verbindingen, ontluchting van een put werkt niet, waterafloop of overloop functioneert niet, obstructie door wortels van bomen of struiken, kalkaanslag, verkeerde constructies, onaangename geur, …</p>
<p>Beelden en analyse kunnen eveneens toegevoegd worden in een deskundig voor bijvoorbeeld een schadegeval van wateroverlast.</p>
<p>Naast de cameradetectie werkt Sobry ontstoppingsdienst met een sonarsysteem die uw leidingen en putten in kaart brengt.</p>

<p><b>Voordelen van de moderne detectiemethodes</b></p>
<ul>

<li>Snelle en precieze opsporing</li>
<li>Voorkomen van ongemakken</li>
<li>In veel gevallen geen breekwerken of opgravingen</li>
<li>Deskundig en gecertificeerd verslag als bewijs bij verzekeringskwesties</li>
</ul>
`
</script>

<style>

</style>

<DienstPagina {labels} title={labels.cameradetectie} image="picture-drain.jpg" {text} quote={"Uw rioolprobleem, putten en leidingen detecteren"}/>
<Reviews />
<FloatingAfspraak {labels} />
