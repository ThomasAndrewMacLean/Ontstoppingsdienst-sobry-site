<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';
</script>

<style>

</style>

<DienstPagina {labels} title={labels.ontstoppen} image="picture-ontstop.jpg" text={labels.ontstoppentext} />
<Reviews />
<FloatingAfspraak {labels} />
