<script>
    import labels from '../labels.js';
    import Reviews from '../components/Reviews.svelte';
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import DienstPagina from '../components/DienstPagina.svelte';

    const text = `<p>
    Verstoppingen geven tal van ongemakken. Je dagelijks comfort in je huis of in jouw bedrijf wordt ernstig verstoord.
</p>
<p>
    Denk aan een verstopte WC of water dat niet wegstroomt in je bad, lavabo en/of gootsteen, wasmachine die overloopt…
    Dit kan tevens zorgen voor hinderlijke afvoergeuren.
</p>

<p>Ontstoppingsdienst Sobry stelt meteen de exacte reden vast door vakkennis en het juiste materiaal.</p>

<p>
    Heb je een hardnekkige verstopping of loopt het afvalwater niet snel meer weg? Dit is een karwei voor
    ontstoppingsdienst-Sobry.
</p>

<p>
    Ontstoppingsdienst Sobry is 24/7 bereikbaar, hanteer correcte prijzen, reageren snel en lossen jouw probleem
    efficient op. Een verstopping kan meerder oorzaken hebben. Met de vakkennis van ontstoppingsdienst Sobry wordt uw
    rioolnetwerk aangepakt zonder de leidingen te beschadigen In het geval van een achterliggend structueel probleem kan
    er gezocht worden naar een permanente oplossing.
</p>

<h3>Ontstoppen van/ontstoppingen in /verstoppingen van:</h3>
<ul>

    <li>Afvoer</li>
    <li>Bad/douche/lavabo</li>
    <li>Riolering</li>
    <li>Gootsteen/spoelbak</li>
    <li>Leidingen</li>
    <li>Toilet/wc</li>
    <li>Wasmachine/vaatwasmachine/overloop boiler</li>
    <li>Putjes/syfonput</li>
    <li>Septiche put/beerput of regenput</li>
</ul>

<h2>Wat zijn de oorzaken van een verstopping in uw sanitaire toestellen?</h2>
<p>
    Het probleem van een verstopte afvoer, verstopt toilet of traag weglopen van het water in sanitaire toestellen kan
    meerdere oorzaken hebben.
</p>

<p>
    Vet, zeepresten, vochtige doekjes zijn er enkele van, en dan is er ook nog de geuroverlast die dit met zich mee kan
    brengen.
</p>

<h2>Wat met buitenshuize verstopte afvoeren?</h2>

<p>
    Ook buitenshuis kunnen afvoeren verstopt zitten. Regenbuizen/afvoerpijpen die niet weglopen, putjes die overlopen of
    de afvoer van de septische put/beerput die verstopt zit waardoor het afvalwater een andere weg zoekt.
</p>
<p>
    De problemen worden bij aankomst in kaart gebracht en geanalyseerd. Met vakkennis, de juiste technieken en
    materialen wordt de verstopping opgelost. Bij het vermoeden van een structureel probleem wordt een oplossing op maat
    aangeboden.
</p>

<h2>Wat kan de oorzaak van een verstopping zijn?</h2>
<p>
    Veel voorkomende verstoppingen in het toilet/wc zijn het gevolg van het gebruik van vochtige doekjes, te dik
    toiletpapier of keukenpapier. Ook een speelgoedje of wc-blokje kan de afvoer blokkeren.
</p>

<p>
    Langdurige <em>corrosie of kalkafzetting</em> kan ook een verstopping veroorzaken, de aangegroeide kalk kan loskomen en zich
    vastzetten in een bocht.
</p>

<p>
    Een <em>volle septische put of beerput</em> kan ook de oorzaak zijn, ook is het mogelijk dat de afvoer van de put verstopt
    zit.
</p>

<p>Een <em>verzakking of een breuk</em> in de leiding is ook een mogelijkheid.</p>
<p>
    In een urinoir is het grotendeels door urinesteen dat de afvoer dichtslibt. Ook doordat er geen filter inligt die
    kauwgom of andere dingen die het urinoir kunnen doen verstoppen.
</p>
<p>In bad, douche of lavabo is het vooral haar en zeepresten.</p>

<p>In de keuken de combinatie van vet, zeep en etensresten.</p>
<p>En buitenshuis in het regenwater netwerk kan bladval, mos, zand de boosdoener zijn.</p>

<p>
    Voor elke soort verstopping heb ik de juiste materialen en de nodige vakkennis. Ook voor het preventief reinigen van
    uw rioolnetwerk sta ik tot uw dienst.
</p>`;
</script>

<style>

</style>

<DienstPagina
    {labels}
    title={labels.ontstoppen}
    image="picture-ontstop.jpg"
    {text}
    quote={'Voor elke soort verstopping heb ik de juiste materialen en de nodige vakkennis.'} />
<Reviews />
<FloatingAfspraak {labels} />
