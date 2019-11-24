<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';

    const text = `<p>Verstoppingen geven tal van ongemakken. Je <em>dagelijks comfort</em> in je huis of in je bedrijfspand wordt ernstig verstoord.</p><p>Denk aan een verstopte WC of water dat niet wegstroomt in je bad, lavabo en/of gootsteen, … 
    Dit kan tevens hinderlijke afvoergeuren.</p>
<p>Soms is de oorzaak van een ontstopping met het blote oog zichtbaar, maar in de meeste gevallen ligt de oorzaak letterlijk ‘dieper’: verstopte riolering, verstopte afvoerbuizen, verstopte wc, ligt het aan de afvoer buitenshuis, …</p> <p>Ontstoppingsdienst Sobry stelt meteen de exacte reden vast door <b>vakkennis</b> en het juiste materiaal. Aan de hand van cameratechnieken stellen we een diagnose vast. <em>Dus geen breekwerk nodig</em>.</p>

<p>Verhelp je verstopping, Sobry Service staat voor je klaar en neemt de oorzaak permanent weg. We zijn 24/7 beschikbaar. <b>Een spoedinterventie is altijd mogelijk!</b></p>`;
</script>

<style>

</style>

<DienstPagina
    {labels}
    title={labels.ontstoppen}
    image="picture-ontstop.jpg"
    {text}
    quote={'Verhelp je verstopping, Sobry Service staat voor je klaar en neemt de oorzaak permanent weg'} />
<Reviews />
<FloatingAfspraak {labels} />
