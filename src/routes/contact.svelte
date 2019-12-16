<script>
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import HeroImage from '../components/Hero-Image.svelte';
    import Map from '../components/Map.svelte';

    import labels from '../labels.js';

    let ready = false;

    if (typeof window != 'undefined') {
        window.initMap = () => {
            ready = true;
        };
    }
</script>

<style>
    .page {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        padding-bottom: 8rem;
    }
    h1 {
        margin-bottom: 0;
        color: #333333;
        color: var(--darker-text);
    }
    form,
    p {
        width: 100%;
        padding-top: 3rem;
        max-width: 750px;
    }
    p {
        text-align: center;
    }

    input,
    textarea {
        font-size: inherit;
        font-family: inherit;
        line-height: 2;
        padding-left: 5px;
        width: 100%;
        border: none;
        margin-bottom: 0.6rem;
    }
    textarea {
        resize: none;
    }
    .double {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .double > .form-item {
        width: 30%;
    }
    label {
        text-transform: uppercase;
        display: block;
    }

    input[type='submit'] {
        background: var(--accent-primary);
        color: white;
        text-transform: uppercase;
        width: 150px;
        padding: 5px 0;
    }

    @media (max-width: 800px) {
        form,
        p {
            width: 90%;
            max-width: 500px;
        }
        .page {
            padding-top: 6em;
        }
        .double > .form-item {
            width: 100%;
        }
    }
</style>

<svelte:head>
    <script>
        // window.initMap = () => {
        //     console.log('start');
        // };
    </script>
    <script
        defer
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgvHuij3rX9Ulc5ho0bN3fNLczsX_QbqY&callback=initMap">

    </script>
</svelte:head>

{#if ready}
    <Map />
{/if}
{#if !ready}
    <HeroImage />
{/if}
<div class="page">
    <h1>{labels.contacttitle}</h1>
    <p>{labels.contacttekst}</p>
    <form action="">
        <div class="double">

            <div class="form-item">
                <label for="name">Naam</label>
                <input name="name" id="name" type="text" required />
            </div>
            <div class="form-item">
                <label for="email">Email</label>
                <input name="email" id="email" type="email" required />
            </div>
            <div class="form-item">
                <label for="telephone">Telefoonnummer</label>
                <input name="telephone" id="telephone" type="tel" required />
            </div>
        </div>
        <div class="form-item">
            <label for="message">Bericht</label>
            <textarea name="message" id="message" type="text" required />
        </div>
        <div class="form-item">
            <input class="button-dark" id="submit" type="submit" value="Verstuur" />
        </div>
    </form>
</div>
<FloatingAfspraak {labels} />
