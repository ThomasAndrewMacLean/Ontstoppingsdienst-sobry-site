<script>
    import DienstBlok from '../components/DienstBlok.svelte';
    import Reviews from '../components/Reviews.svelte';
    import Hero from '../components/Hero.svelte';
    import labels from '../labels.js';
</script>

<style>
    .dienstblok-wrapper {
        margin-top: 4rem;
    }
</style>

<svelte:head>
    <title>Sapper project template</title>
</svelte:head>

<Hero {labels} />
<div class="dienstblok-wrapper">
    <DienstBlok {labels} title={labels.ontstoppen} image="picture-drain.jpg" text={labels.ontstoppentext} />
    <DienstBlok {labels} title={labels.geurdetectie} image="picture-toilet.jpg" text={labels.ontstoppentext} />
    <DienstBlok {labels} title={labels.herstellingen} image="picture-tap.jpg" text={labels.ontstoppentext} />
    <DienstBlok {labels} title={labels.geurdetectie} image="picture-toilet.jpg" text={labels.ontstoppentext} />

    <Reviews />
</div>
