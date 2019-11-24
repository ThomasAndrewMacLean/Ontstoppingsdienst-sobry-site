<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';

    const text=`<p>Is er kalk in uw leiding of zijn er <em>wortels in uw rioolnetwerk gekomen</em>,dan kunnen wij <b>zonder breken</b> deze verwijderen doormiddel van onze geadvanceerd materiaal.</p>
<p>Bijvoorbeeld aan de hand van een camera inspectie.</p><p>Voorkom problemen door <b>twee maal per jaar</b> uw leidingen te laten controleren.<p>`;
</script>

<style>

</style>

<DienstPagina {labels} title={labels.ontkalken} image="picture-urinoirs.jpg" {text} quote={"We zijn 24/7 beschikbaar"} />

<Reviews />
<FloatingAfspraak {labels} />
