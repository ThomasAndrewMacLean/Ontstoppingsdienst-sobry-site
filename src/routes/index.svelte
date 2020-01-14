<script>
    import DienstBlok from '../components/DienstBlok.svelte';
    import Reviews from '../components/Reviews.svelte';
    import Hero from '../components/Hero.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';

    // import MovieHero from '../components/MovieHero.svelte';
    import labels from '../labels.js';
</script>

<style>
    .dienstblok-wrapper {
        margin: 4rem 0;
    }
    h3 {
        margin: 0;
    }
    @media (max-width: 1000px) {
        .dienstblok-wrapper {
            margin: 4rem 1rem;
        }
        h1 {
            margin: 1rem;
        }
    }
    /* TURN ON FOR 3 COLUMNS */
    @media (min-width: 800px) {
        .dienstblok-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>

<svelte:head>
    <title>{labels.titel}</title>
</svelte:head>

<Hero {labels} />
<h1>Ontstoppingsdienst Sobry</h1>
<ul>
    <li>
        <h3>Snel ter plaatse</h3>
    </li>
    <li>
        <h3>Persoonlijke service</h3>
    </li>
    <li>
        <h3>Vakkundig en proper opgelost</h3>
    </li>
    <li>
        <h3>Vaste prijzen</h3>
    </li>

</ul>
<div class="dienstblok-wrapper">
    <DienstBlok
        {labels}
        link="ontstoppen"
        title={labels.ontstoppen}
        image="picture-ontstop.jpg"
        text={labels.ontstoppentext} />
    <DienstBlok
        {labels}
        link="cameradetectie"
        title={labels.cameradetectie}
        image="picture-drain.jpg"
        text={labels.cameradetectietext} />
    <DienstBlok
        {labels}
        link="geurdetectie"
        title={labels.geurdetectie}
        image="picture-buizen.jpg"
        text={labels.geurdetectietext} />
    <DienstBlok
        {labels}
        link="ontkalken"
        title={labels.ontkalken}
        image="picture-urinoirs.jpg"
        text={labels.ontkalkentext}
        last />
    <DienstBlok
        {labels}
        link="adviesaankoopwoning"
        title={labels.adviesaankoopwoning}
        image="picture-toilet.jpg"
        text={labels.adviesaankoopwoningtext} />
    <DienstBlok
        {labels}
        link="herstellingen"
        title={labels.herstellingen}
        image="picture-tap.jpg"
        text={labels.herstellingentext} />

</div>
<Reviews />
<FloatingAfspraak {labels} />
