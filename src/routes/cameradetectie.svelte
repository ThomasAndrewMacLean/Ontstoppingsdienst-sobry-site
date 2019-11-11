<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';
</script>

<style>

</style>

<DienstPagina {labels} title={labels.cameradetectie} image="picture-drain.jpg" text={labels.cameradetectietext} />
<Reviews />
<FloatingAfspraak {labels} />
