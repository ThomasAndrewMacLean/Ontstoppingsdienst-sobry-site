
<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';
</script>

<style>

</style>

<DienstPagina {labels} title={labels.geurdetectie} image="picture-toilet.jpg" text={labels.geurdetectietext} />
<Reviews />
<FloatingAfspraak {labels} />
