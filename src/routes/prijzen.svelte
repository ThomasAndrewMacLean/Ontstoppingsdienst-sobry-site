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
        padding-top: 3rem;
        padding-bottom: 8rem;
        z-index: 1;
    }

    p {
        margin-top: 0;
    }
    h1,
    h2 {
        color: #333333;
        color: var(--darker-text);
    }
    ul {
        list-style: disc;
    }
    .extra-prices {
        padding-top: 3rem;
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
</style>

<HeroImage image="picture-urinoirs.jpg" />
<div class="page">
    <h1>Prijzen</h1>
    <h2>
        Onze all-in prijs voor ontstoppingsdient
        <b>140 €</b>
    </h2>
    <p>
        Inclusief alle verplaatsingskosten én 1 uur ontstoppingswerk,
        <em>excl. BTW.</em>
    </p>
    <p>
        <em>6% als uw woning ouder is dan 10 jaar, anders 21%.</em>
    </p>
    <p>Extra ontstoppingswerk = 38 €/ half uur.</p>
    <ul>
        <li>Betaal met met bancontact of cash</li>
        <li>Géén extra verplaatsingskosten</li>
        <li>Géén extra materiaalkosten</li>
    </ul>
    <h2>Extra onderzoeken - toeslag</h2>
    <p>
        Deze extra onderzoeken worden alleen uitgevoerd wanneer technisch nodig én pas na uw uitdrukkelijke toestemming.
    </p>
    <ul>
        <li>
            Camera-inspectie:
            <em>80 €</em>
        </li>
        <li>
            Rookdetectie:
            <em>80 €</em>
        </li>
        <li>
            Camera-inspectie met zender/traceren/sonar:
            <em>120 €</em>
        </li>
        <li>
            Frezen:
            <em>80 €</em>
        </li>
    </ul>

    <h2>Werken zonder ontstopping</h2>
    <ul>
        <li>
            Camera-onderzoek:
            <em>140 €</em>
        </li>
        <li>
            Rookdetectie:
            <em>140 €</em>
        </li>
        <li>
            Camera-inspectie met zender/traceren/sonar:
            <em>180 €</em>
        </li>
    </ul>

    <div class="extra-prices">
        <p>
            <b>Toeslag avond/zaterdag +50%</b>
        </p>
        <p>
            <b>Toeslag zon-en feestdagen +100%</b>
        </p>
    </div>
</div>
<FloatingAfspraak {labels} />
