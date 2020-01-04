<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';
    const text =`<p>Bij aankoop van een bestaande/nieuwbouw woning is het <b>rioolnetwerk niet zichtbaar</b>.</p> 
    <p>Doormiddel van <b>camera onderzoek</b> kunnen we het netwerk in kaart brengen, kijken in welke staat uw riolering is en <em>eventueel zwakke punten
te melden en aan te pakken</em>.</p> 
<p>Mooi voorbeeld zijn <em>verdoken putten, verzakkingen,etc…</em> Dit kan belangrijk zijn bij renovatiewerken, zo <b>voorkomt u 
onaangename verassingen</b>.</p>
<p>Bij een <em>nieuwbouw woning</em> kunt u last hebben van betoninloop, verzakkingen, verkeerde aansluitingen, <b>vuil water bij regenwater</b>.</p>`
</script>

<style>

</style>

<DienstPagina {labels} title={labels.adviesaankoopwoning} image="picture-toilet.jpg" {text} quote={"Doormiddel van camera onderzoek kijken we in welke staat uw riolering is"} />
<Reviews />
<FloatingAfspraak {labels} />
