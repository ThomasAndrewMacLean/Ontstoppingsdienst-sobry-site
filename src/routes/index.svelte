<script>
    import DienstBlok from '../components/DienstBlok.svelte';
    import Reviews from '../components/Reviews.svelte';
    import Hero from '../components/Hero.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import Partners from '../components/Partners.svelte';
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
        p {
            margin: 1rem 1rem 2rem;
            line-height: 1.7rem;
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
    <title>Ontstoppingsdienst Sobry | 0467/00.50.50</title>
    <meta
        name="description"
        content="Ontstoppingsdienst Sobry. Vakkundig en Proper opgelost! 24/7 bereikbaar. Jarenlange Ervaring.
        Totaaloplossingen. Transparante prijs." />
    <meta name="keywords" content="Ontstoppingsdienst Sobry, Over mij" />
</svelte:head>
<Hero {labels} />
<h1>Ontstoppingsdienst Sobry</h1>

<p>
    Voor alle riolering problemen(verstopte wc, lavabo, bad, gootsteen, leidingen, verzakking, breuk,….)kan u
    Ontstoppingsdienst-Sobry contacteren? Ontstoppen, camera inspectie/cameraonderzoek riolering, geurdetectie voor elk
    probleem is er een oplossing.Ik ben snel ter plaatse, geef je persoonlijke service, problemen worden vakkundig en
    proper opgelost, en dit aan vaste prijzen.
</p>
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
        image="picture-ontstop-small.jpg"
        text={labels.ontstoppentext} />
    <DienstBlok
        {labels}
        link="camera-inspectie"
        title={labels.cameradetectie}
        image="picture-drain-small.jpg"
        text={labels.cameradetectietext} />
    <DienstBlok
        {labels}
        link="geurdetectie"
        title={labels.geurdetectie}
        image="picture-buizen-small.jpg"
        text={labels.geurdetectietext} />
    <DienstBlok
        {labels}
        link="ontkalken"
        title={labels.ontkalken}
        image="picture-urinoirs-small.jpg"
        text={labels.ontkalkentext}
        last />
    <DienstBlok
        {labels}
        link="adviesaankoopwoning"
        title={labels.adviesaankoopwoning}
        image="picture-toilet-small.jpg"
        text={labels.adviesaankoopwoningtext} />
    <DienstBlok
        {labels}
        link="herstellingen"
        title={labels.herstellingen}
        image="picture-tap-small.jpg"
        text={labels.herstellingentext} />

</div>
<Reviews />
<Partners />
<FloatingAfspraak {labels} />
