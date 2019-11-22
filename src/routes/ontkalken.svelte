<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';
</script>

<style>

</style>

<DienstPagina {labels} title={labels.ontkalken} image="picture-urinoirs.jpg" text={labels.ontkalkentext} />
<Reviews />
<FloatingAfspraak {labels} />
