<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';

    const text= `<p>Een <b>lek</b> in uw riolering, afvoer of put?</p> 
    <p>Je merkt het meestal aan de <em>typische rioolgeur en een trager werkende afvoer</em>.</p> 
    <p>Dit kan op twee manieren opgelost worden: je kan de leiding in kwestie <em>laten vervangen of je kan deze laten herstellen</em>.</p> 
    <p>Doorgaans wordt er gekozen voor een reparatie, bij een rioolrenovatie en/ of leidingwerk kunt u het lek in de riolering <b>immers dichten zonder opgraafwerk</b>. Een herstelling is meestal <b>goedkoper</b> dan een vernieuwing.</p>`;
</script>

<style>

</style>

<DienstPagina {labels} title={labels.herstellingen} image="picture-tap.jpg" {text} quote={"Een herstelling is meestal goedkoper dan een vernieuwing"} />
<Reviews />
<FloatingAfspraak {labels} />
