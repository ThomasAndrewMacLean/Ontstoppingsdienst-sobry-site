<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';

    import DienstPagina from '../components/DienstPagina.svelte';
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<DienstPagina {labels} title={labels.ontstoppen} image="picture-drain.jpg" text={labels.ontstoppentext} />
<Reviews />