
<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';
    const text=`<p>Last van <em>vieze geuren</em> in huis of buiten?</p>
<p>Door middel van <b>rookdetectie</b> leggen we snel en eenvoudig de oorzaak van uw ontstopping, lek of ander probleem bloot.</p> 
<p>Hoe dit in z’n werk gaat? Volgens het principe: <em>waar rook is, is vuur</em>. De afvoerleidingen worden gevuld met onschadelijke, gekleurde rook. De rook komt vervolgens <b>via het lek naar buiten</b> en geeft zo nauwkeurig de precieze plaats van de oorzaak aan.</p>`
</script>

<style>

</style>

<DienstPagina {labels} title={labels.geurdetectie} image="picture-buizen.jpg" {text} quote={"Door middel van rookdetectie vinden we snel en eenvoudig de oorzaak"} />
<Reviews />
<FloatingAfspraak {labels} />
