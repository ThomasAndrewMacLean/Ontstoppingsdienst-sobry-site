<script>
    import HeroImage from './Hero-Image.svelte';

    export let title;
    export let text;
    export let quote;
    export let link;
    export let image;
    export let labels;
</script>

<style>
    .text-quote-wrapper {
        display: flex;
    }
    .text {
        width: 75%;
        padding-right: 4rem;
    }

    .quote {
        width: 25%;
        font-family: 'Playfair Display', serif;
        display: flex;
        justify-content: center;
        /* align-items: center; */
    }
    .text-blok {
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
    }
    h1 {
        margin: 0;
        font-size: 3rem;
        color: #333333;
        color: var(--darker-text);
        padding-bottom: 2rem;
    }

  

    @media (max-width: 1000px) {
        .text-blok {
            padding: 3rem;
        }
    }
    @media (max-width: 600px) {
        .quote {
            display: none;
        }
        .text {
            width: 100%;
            padding-right: 0;
        }
        .text-blok {
            padding: 2rem;
        }
    }
</style>

<HeroImage {image} />
<div class="text-blok">
    <h1>{title}</h1>
    <div class="text-quote-wrapper">
        <div class="text">
            {@html text}
        </div>
        <div class="quote">
            <q>{quote}</q>
        </div>
    </div>
</div>
