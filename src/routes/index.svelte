<script>
    import DienstBlok from '../components/DienstBlok.svelte';
    import Reviews from '../components/Reviews.svelte';
    import Hero from '../components/Hero.svelte';
    // import MovieHero from '../components/MovieHero.svelte';
    import labels from '../labels.js';
</script>

<style>
    .dienstblok-wrapper {
        margin: 4rem 0;
    }
    @media (max-width: 1000px) {
        .dienstblok-wrapper {
            margin: 4rem 1rem;
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
<!-- <MovieHero /> -->
<div class="dienstblok-wrapper">
    <DienstBlok
        {labels}
        link="ontstoppen"
        title={labels.ontstoppen}
        image="picture-ontstop.jpg"
        text={labels.ontstoppentext} />
    <DienstBlok
        {labels}
        link="geurdetectie"
        title={labels.geurdetectie}
        image="picture-buizen.jpg"
        text={labels.geurdetectietext} />
    <DienstBlok
        {labels}
        link="herstellingen"
        title={labels.herstellingen}
        image="picture-tap.jpg"
        text={labels.herstellingentext} />
    <DienstBlok
        {labels}
        link="adviesaankoopwoning"
        title={labels.adviesaankoopwoning}
        image="picture-toilet.jpg"
        text={labels.adviesaankoopwoningtext} />
    <DienstBlok
        {labels}
        link="cameradetectie"
        title={labels.cameradetectie}
        image="picture-drain.jpg"
        text={labels.cameradetectietext} />
    <DienstBlok
        {labels}
        link="ontkalken"
        title={labels.ontkalken}
        image="picture-urinoirs.jpg"
        text={labels.ontkalkentext}
        last />
</div>
<Reviews />
