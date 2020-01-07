<script>
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import labels from '../labels.js';

    import HeroImage from '../components/Hero-Image.svelte';
</script>

<style>
    .page {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 3rem;
        padding-bottom: 8rem;
        z-index: 1;
    }

    h1 {
        color: #333333;
        color: var(--darker-text);
    }
    h2 {
        text-align: center;
    }
    .text {
        column-count: 2;
        column-gap: 2rem;
        padding-top: 3rem;
    }
    p {
        margin-top: 0;
    }
    @media (max-width: 1000px) {
        .page {
            padding: 3rem;
        }
    }
    @media (max-width: 800px) {
        .page {
            padding-top: 6em;
        }
    }

    @media (max-width: 600px) {
        .text {
            column-count: 1;
        }
    }
</style>

<svelte:head>
    <title>Ontstoppingsdienst Sobry | Over mij</title>
    <meta name="description" content="Over Onstoppingsdienst Sobry" />
    <meta name="keywords" content="Ontstoppingsdienst Sobry, Over mij" />
</svelte:head>
<HeroImage hideLogo image="auto.jpg" image2="auto-groot.jpg" />
<div class="page">
    <h1>Over mij</h1>

    <h2>
        Na jarenlang ervaring en diepgaande expertise bij verschillende
        <em>ontstoppingsbedrijven</em>
        , heb ik mezelf gespecialiseerd.
    </h2>
    <div class="text">
        <p>
            <b>
                Ik heb ervaring opgedaan met de beste technieken om verstoppingen op te lossen. Uit deze ervaring heb ik
                een eigen aanpak opgesteld en zo ben ik gestart met ontstoppingsdienst Sobry, op die manier kan ik elke
                verstopping verhelpen.
            </b>
        </p>

        <p>
            Ik sta de klant altijd bij om zijn
            <em>noodsituatie</em>
            op te lossen. Bij aankomst
            <em>analyseer</em>
            ik eerst het probleem in samenspraak om zo de
            <em>beste technieken</em>
            toe te passen.
        </p>

        <p>
            Ontstoppingsdienst Sobry kijkt ook steeds verder, zodat toekomstige problemen te vermijden. De klant krijgt
            een duidelijk plan. En
            <em>een oplossing op uw maat</em>
            .
        </p>
        <p>Alhoewel het soms vuil werk is, doe ik mijn job met veel passie en enthousiasme.</p>
        <p>
            Ontstoppingsdienst blijft ook steeds op de hoogte van de nieuwste technieken, opleidingen, en investeer in
            het beste materiaal om de beste
            <em>service</em>
            aan te bieden?
        </p>
        <p>
            Onstoppingsdienst staat voor flexibiliteit, zorgt ervoor dat de juiste vergunningen behaald worden, een
            perfect uitgerust machinepark, duidelijke prijzen en offertes.
        </p>

    </div>
</div>
<FloatingAfspraak {labels} />
