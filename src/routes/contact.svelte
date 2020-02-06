<script>
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import HeroImage from '../components/Hero-Image.svelte';
    import Map from '../components/Map.svelte';

    import labels from '../labels.js';

    let verstuurd = false;
    let ready = false;

    let showOostVl = false;
    let showWestVl = false;
    let showVlaamsBrabant = false;
    let showAntwerpen = false;

    if (typeof window != 'undefined') {
        window.initMap = () => {
            ready = true;
        };
    }

    const cloudFunctionUrl = 'https://europe-west1-nomadic-buffer-204610.cloudfunctions.net/sobry-form';

    const submitForm = e => {
        e.preventDefault();
        verstuurd = true;

        fetch(cloudFunctionUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: 'Nieuw bericht van ' + e.target.name.value,
                text: `naam: ${e.target.name.value} <br/>email: ${e.target.email.value} <br/>telefoon: ${e.target.telephone.value} <br/>bericht: ${e.target.message.value} <br/>`,
                name: e.target.name.value,
                email: e.target.email.value,
                telephone: e.target.telephone.value,
                message: e.target.message.value,
            }),
        }).then(() => {
            window.location.href = 'bedankt';
        });
    };
</script>

<style>
    .hide {
        height: 0;
        overflow: hidden;
    }
    .page {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        padding-bottom: 8rem;
        background: #e9eaeb;
    }
    h1 {
        margin-bottom: 0;
        color: #333333;
        color: var(--darker-text);
    }

    h2 {
        color: #333333;
        color: var(--darker-text);
    }
    form {
        width: 100%;
        padding-top: 3rem;
        max-width: 750px;
    }

    input,
    textarea {
        font-size: inherit;
        font-family: inherit;
        line-height: 2;
        padding-left: 5px;
        width: 100%;
        border: none;
        margin-bottom: 0.6rem;
    }
    textarea {
        resize: none;
    }
    .double {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .double > .form-item {
        width: 30%;
    }
    label {
        text-transform: uppercase;
        display: block;
    }

    h3 {
        font-size: 3rem;
        color: var(--accent-primary);
    }
    input[type='submit'] {
        background: var(--accent-primary);
        color: white;
        text-transform: uppercase;
        width: 150px;
        padding: 5px 0;
    }
    .werkgebied {
        width: 100%;
        max-width: 750px;
    }
    ul {
        list-style: none;
    }
    li {
        padding: 6px 0;
    }
    .provincie {
        text-decoration: underline;
    }
    @media (max-width: 800px) {
        form,
        p,
        .werkgebied {
            width: 90%;
            max-width: 500px;
        }
        .page {
            padding-top: 6em;
        }
        .double > .form-item {
            width: 100%;
        }
    }
</style>

<svelte:head>
    <script
        defer
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgvHuij3rX9Ulc5ho0bN3fNLczsX_QbqY&callback=initMap">

    </script>
    <style>
        body {
            background: #e9eaeb !important;
        }
    </style>
    <title>Ontstoppingsdienst Sobry | Contact</title>
    <meta name="description" content="Contacteer Onstoppingsdienst Sobry" />
    <meta name="keywords" content="Ontstoppingsdienst Sobry, Contact, Werkgebied" />

</svelte:head>
{#if ready}
    <Map />
{/if}
{#if !ready}
    <HeroImage />
{/if}

<div class="page">
    <h1>{labels.contacttitle}</h1>

    <img src="logo-contact.png" alt="sobry logo" class="logo-img" />

    {#if verstuurd}
        <h3>Bedankt voor uw bericht!</h3>
    {:else}
        <form on:submit={submitForm} action="">
            <div class="double">

                <div class="form-item">
                    <label for="name">Naam</label>
                    <input name="name" id="name" type="text" required />
                </div>
                <div class="form-item">
                    <label for="email">Email</label>
                    <input name="email" id="email" type="email" required />
                </div>
                <div class="form-item">
                    <label for="telephone">Telefoonnummer</label>
                    <input name="telephone" id="telephone" type="tel" required />
                </div>
            </div>
            <div class="form-item">
                <label for="message">Bericht</label>
                <textarea name="message" id="message" type="text" required />
            </div>
            <div class="form-item">
                <input class="button-dark" id="submit" type="submit" value="Verstuur" />
            </div>
        </form>
    {/if}

    <div class="werkgebied">
        <h2>Werkgebied</h2>
        <ul>
            <li
                on:click={() => {
                    showOostVl = !showOostVl;
                }}
                class="pointer">
                <span class="provincie">Oost-Vlaanderen</span>
                {#if showOostVl}
                    <p>
                        Gent, Mariakerke, Drongen, Wondelgem, Sint-amandsberg, Oostakker, Desteldonk, Mendonk,
                        Sint-kruis-winkel, Ledeberg, Gentbrugge, Afsnee, Sint-denijs-westrem, Zwijnaarde, Zelzate,
                        Destelbergen, Heusden, Zeveneken, Beervelde, Lochristi, Zaffelare, Gontrode, Melle,
                        Nieuwkerken-Waas, Sint-Niklaas, Belsele, Sinaai-Waas, Melsele, Beveren-Waas, Kallo
                        (Beveren-Waas), Vrasene, Haasdonk, Kieldrecht, Verrebroek, Kallo (Kieldrecht), Doel, Steendorp,
                        Elversele, Temse, Tielrode, Kruibeke, Bazel, Rupelmonde, Daknam, Eksaarde, Lokeren, De Klinge,
                        Sint-Gillis-Waas, Meerdonk, Sint-pauwels, Moerbeke-waas, Wachtebeke, Stekene, Kemzeke, Oudegem,
                        Baasrode, Schoonaarde, Sint-gillis-dendermonde, Appels, Grembergen, Dendermonde, Mespelare,
                        Moerzeke, Hamme, Massemen, Wetteren, Westrem, Zele, Waasmunster, Opdorp, Buggenhout,
                        Schellebelle, Wichelen, Serskamp, Kalken, Laarne, Wieze, Denderbelle, Lebbeke, Berlare,
                        Overmere, Uitbergen, Aalst, Gijzegem, Hofstade, Moorsel, Meldert, Baardegem, Herdersem,
                        Nieuwerkerken, Erembodegem, Lede, Impe, Oordegem, Smetlede, Wanzele, Denderwindeke, Okegem,
                        Ninove, Appelterre-eichem, Lieferinge, Nederhasselt, Voorde, Pollare, Meerbeke, Neigem,
                        Aspelare, Outer, Burst, Bambrugge, Erondegem, Erpe, Vlekkem, Erpe-mere, Mere, Aaigem, Ottergem,
                        Heldergem, Haaltert, Denderhoutem, Kerksken, Denderleeuw, Iddergem, Welle, Zarlardinge,
                        Onkerzele, Viane, Overboelare, Moerbeke, Nederboelare, Ophasselt, Geraardsbergen, Goeferdinge,
                        Zandbergen, Schendelbeke, Idegem, Waarbeke, Smeerebbe-vloerzegem, Grimminge, Nieuwenhove,
                        Sint-Lievens-Houtem, Zonnegem, Bavegem, Vlierzele, Oombergen, Letterhoutem, Sint-antelinks,
                        Sint-lievens-esse, Herzele, Steenhuize-wijnhuize, Hillegem, Woubrechtegem, Ressegem, Borsbeke,
                        Deftinge, Sint-maria-lierde, Lierde, Hemelveerdegem, Sint-martens-lierde, Ronse, Erwetegem,
                        Velzeke-ruddershove, Grotenberge, Strijpen, Godveerdegem, Sint-goriks-oudenhove,
                        Sint-maria-oudenhove, Leeuwergem, Oombergen, Elene, Zottegem, Dikkele, Zwalm, Roborst,
                        Sint-blasius-boekel, Beerlegem, Sint-denijs-boekel, Meilegem, Sint-maria-latem, Rozebeke,
                        Munkzwalm, Paulatem, Hundelgem, Nederzwalm-hermelgem, Everbeek, Nederbrakel, Michelbeke,
                        Zegelsem, Sint-maria-oudenhove, Brakel, Elst, Opbrakel, Parike, Sint-Maria-Horebeke, Horebeke,
                        Sint-Kornelis-Horebeke, Etikhove, Maarke-kerkem, Maarkedal, Nukerke, Schorisse, Berchem,
                        Zulzeke, Kwaremont, Ruien, Kluisbergen, Eine, Oudenaarde, Bevere, Melden, Ename, Heurne,
                        Edelare, Leupegem, Nederename, Ooike, Mater, Volkegem, Mullem, Welden, Huise, Ouwegem, Zingem,
                        Kruishoutem, Nokere, Wannegem-lede, Moregem, Wortegem-Petegem, Wortegem, Ooike, Elsegem,
                        Petegem-aan-de-schelde, Meigem, Bachte-maria-leerne, Zeveren, Gottem, Grammene, Vinkt, Deinze,
                        Sint-martens-leerne, Wontergem, Astene, Petegem-aan-de-leie, Eke, Nazareth, Lemberge, Melsen,
                        Bottelare, Merelbeke, Schelderode, Munte, Sint-martens-latem, Deurle, De pinte, Zevergem,
                        Landegem, Nevele, Merendree, Poesele, Vosselare, Hansbeke, Balegem, Oosterzele, Moortsele,
                        Gijzenzele, Landskouter, Scheldewindeke, Zulte, Machelen, Olsene, Lotenhulle, Poeke, Aalter,
                        Bellem, Vurste, Dikkelvenne, Gavere, Asper, Semmerzake, Baaigem, Eeklo, Ursel, Knesselare,
                        Lovendegem, Vinderhoute, Zomergem, Oostwinkel, Ronsele, Kluizen, Sleidinge, Ertvelde, Evergem,
                        Waarschoot, Assenede, Boekhoute, Oosteeklo, Bassevelde, Kaprijke, Lembeke, Sint-Laureins,
                        Sint-Margriete, Sint-Jan-In-Eremo, Waterland-Oudeman, Watervliet, Maldegem, Adegem, Middelburg
                    </p>
                {/if}
            </li>
            <li
                on:click={() => {
                    showWestVl = !showWestVl;
                }}
                class="pointer">
                <span class="provincie">West-Vlaanderen</span>
                {#if showWestVl}
                    <p>
                        Brugge, Koolkerke, Oostkamp, Hertsberge, Ruddervoorde, Waardamme, Sint-michiels, Sint-andries,
                        Veldegem, Loppem, Zedelgem, Aartrijke, Knokke, Knokke-Heist, Westkapelle, Heist-aan-zee,
                        Ramskapelle, Sint-kruis, Assebroek, Hoeke, Oostkerke, Sijsele, Lapscheure, Damme, Moerkerke,
                        Uitkerke, Blankenberge, Zuienkerke, Houtave, Nieuwmunster, Meetkerke, Lissewege, Dudzele,
                        Zeebrugge, Oostende, Zandvoorde, Stene, Wenduine, Klemskerke, De haan, Vlissegem, Middelkerke,
                        Wilskerke, Leffinge, Schore, Sint-Pieters-Kapelle, Slijpe, Mannekensvere, Lombardsijde,
                        Westende, Bredene, Oudenburg, Ettelgem, Roksem, Westkerke, Zevekote, Snaaskerke, Gistel, Moere,
                        Bekegem, Ichtegem, Eernegem, Stalhille, Jabbeke, Zerkegem, Snellegem, Varsenare, Kortrijk,
                        Bissegem, Heule, Marke, Bellegem, Kooigem, Rollegem, Aalbeke, Kuurne, Harelbeke, Hulste,
                        Bavikhove, Deerlijk, Zwevegem, Heestert, Moen, Otegem, Sint-denijs, Moorsele, Gullegem,
                        Wevelgem, Ingooigem, Gijzelbrechtegem, Vichte, Anzegem, Kaster, Tiegem, Avelgem, Waarmaarde,
                        Kerkhove, Outrijve, Bossuit, Spiere-Helkijn, Helkijn, Spiere, Woumen, Nieuwkapelle, Lampernisse,
                        Kaaskerke, Pervijze, Diksmuide, Esen, Oostkerke, Vladslo, Stuivekenskerke, Driekapellen, Keiem,
                        Sint-jacobs-kapelle, Beerst, Leke, Oudekapelle, Handzame, Werken, Zarren, Kortemark,
                        Ramskapelle, Nieuwpoort, Sint-joris, Eggewaartskapelle, Booitshoeke, Veurne, Steenkerke,
                        Zoutenaaie, De Moeren, Bulskamp, Avekapelle, Vinkem, Wulveringem, Houtem, Westvleteren, Woesten,
                        Oostvleteren, Vleteren, Reninge, Lo, Lo-Reninge, Noordschote, Pollinkhove, Merkem, Houthulst,
                        Klerken, Adinkerke, De panne, Oostduinkerke, Wulpen, Koksijde, Bovekerke, Koekelare, Zande,
                        Alveringem, Hoogstade, Sint-Rijkers, Oeren, Leisele, Stavele, Beveren-aan-de-ijzer, Izenberge,
                        Gijverinkhove, Aarsele, Schuiferskapelle, Kanegem, Tielt, Sint-Baafs-Vijve, Wielsbeke, Ooigem,
                        Wakken, Markegem, Dentergem, Oeselgem, Beernem, Sint-Joris, Oedelem, Egem, Pittem, Zwevezele,
                        Wingene, Ruiselede, Meulebeke, Ingelmunster, Oostrozebeke, Waregem, Beveren, Desselgem,
                        Sint-Eloois-Vijve, Rumbeke, Beveren, Roeselare, Oekene, Lichtervelde, Torhout, Hooglede, Gits,
                        Staden, Westrozebeke, Oostnieuwkerke, Ardooie, Koolskamp, Lendelede, Izegem, Emelgem, Kachtem,
                        Sint-eloois-winkel, Ledegem, Rollegem-kapelle, Moorslede, Dadizele, Dikkebus, Brielen, Ieper,
                        Sint-jan, Hollebeke, Zillebeke, Voormezele, Zuidschote, Boezinge, Elverdinge, Vlamertinge,
                        Langemark, Langemark-Poelkapelle, Poelkapelle, Bikschote, Rekkem, Menen, Lauwe, Wervik, Geluwe,
                        Nieuwkerke, Heuvelland, Dranouter, Wulvergem, Wijtschate, Westouter, Kemmel, Mesen, Loker,
                        Reningelst, Poperinge, Krombeke, Roesbrugge-haringe, Proven, Watou, Beselare, Passendale,
                        Geluveld, Zandvoorde, Zonnebeke
                    </p>
                {/if}
            </li>
            <li
                on:click={() => {
                    showVlaamsBrabant = !showVlaamsBrabant;
                }}
                class="pointer">
                <span class="provincie">Vlaams-Brabant</span>
                {#if showVlaamsBrabant}
                    <p>
                        Halle, Buizingen, Lembeek, Herfelingen, Herne, Sint-pieters-kapelle, Bever, Hoeilaart,
                        Vollezele, Galmaarden, Tollembeek, Sint-Laureins-Berchem, Oudenaken, Sint-Pieters-Leeuw,
                        Ruisbroek, Vlezenbeek, Drogenbos, Linkebeek, Sint-Genesius-Rode, Beersel, Lot, Alsemberg, Dworp,
                        Huizingen, Pepingen, Bogaarden, Heikruis, Elingen, Beert, Bellingen, Sint-ulriks-kapelle,
                        Dilbeek, Sint-martens-bodegem, Itterbeek, Groot-bijgaarden, Schepdaal, Asse, Kobbegem,
                        Bekkerzeel, Mollem, Relegem, Zellik, Ternat, Wambeek, Sint-Katherina-Lombeek, Opwijk, Mazenzele,
                        Gaasbeek, Sint-kwintens-lennik, Lennik, Sint-martens-lennik, Kester, Leerbeek, Gooik, Oetingen,
                        Onze-Lieve-Vrouw-Lombeek, Roosdaal, Pamel, Strijtem, Borchtlombeek, Liedekerke, Wemmel,
                        Peizegem, Brussegem, Merchtem, Hamme, Hekelgem, Essene, Teralfene, Affligem, Vilvoorde, Peutie,
                        Melsbroek, Perk, Steenokkerzeel, Machelen, Diegem, Londerzeel, Steenhuffel, Malderen,
                        Grimbergen, Humbeek, Beigem, Strombeek-bever, Meise, Wolvertem, Nieuwenrode, Ramsdonk,
                        Kapelle-op-Den-Bos, Nederokkerzeel, Berg, Buken, Kampenhout, Nossegem, Zaventem,
                        Sint-Stevens-Woluwe, Sterrebeek, Kraainem, Wezembeek-Oppem, Eppegem, Zemst, Hofstade, Weerde,
                        Elewijt
                    </p>
                {/if}
            </li>
            <li
                on:click={() => {
                    showAntwerpen = !showAntwerpen;
                }}
                class="pointer">
                <span class="provincie">Antwerpen</span>
                {#if showAntwerpen}
                    <p>
                        Burcht, Zwijndrecht, Willebroek, Tisselt, Heindonk, Blaasveld, Reet, Terhagen, Rumst, Niel,
                        Boom, Breendonk, Liezele, Ruisbroek, Puurs, Bornem
                    </p>
                {/if}
            </li>
        </ul>
    </div>
</div>
<FloatingAfspraak {labels} />

<div class="hide">
    <a href="gemeenten/gent">gent</a>
    <a href="gemeenten/mariakerke">mariakerke</a>
    <a href="gemeenten/drongen">drongen</a>
    <a href="gemeenten/wondelgem">wondelgem</a>
    <a href="gemeenten/sint-amandsberg">sint-amandsberg</a>
    <a href="gemeenten/oostakker">oostakker</a>
    <a href="gemeenten/desteldonk">desteldonk</a>
    <a href="gemeenten/mendonk">mendonk</a>
    <a href="gemeenten/sint-kruis-winkel">sint-kruis-winkel</a>
    <a href="gemeenten/ledeberg">ledeberg</a>
    <a href="gemeenten/gentbrugge">gentbrugge</a>
    <a href="gemeenten/afsnee">afsnee</a>
    <a href="gemeenten/sint-denijs-westrem">sint-denijs-westrem</a>
    <a href="gemeenten/zwijnaarde">zwijnaarde</a>
    <a href="gemeenten/zelzate">zelzate</a>
    <a href="gemeenten/destelbergen">destelbergen</a>
    <a href="gemeenten/heusden">heusden</a>
    <a href="gemeenten/zeveneken">zeveneken</a>
    <a href="gemeenten/beervelde">beervelde</a>
    <a href="gemeenten/lochristi">lochristi</a>
    <a href="gemeenten/zaffelare">zaffelare</a>
    <a href="gemeenten/gontrode">gontrode</a>
    <a href="gemeenten/melle">melle</a>
    <a href="gemeenten/nieuwkerken-waas">nieuwkerken-waas</a>
    <a href="gemeenten/sint-niklaas">sint-niklaas</a>
    <a href="gemeenten/belsele">belsele</a>
    <a href="gemeenten/sinaai-waas">sinaai-waas</a>
    <a href="gemeenten/melsele">melsele</a>
    <a href="gemeenten/beveren-waas">beveren-waas</a>
    <a href="gemeenten/vrasene">vrasene</a>
    <a href="gemeenten/haasdonk">haasdonk</a>
    <a href="gemeenten/kieldrecht">kieldrecht</a>
    <a href="gemeenten/verrebroek">verrebroek</a>
    <a href="gemeenten/kallo">kallo</a>
    <a href="gemeenten/doel">doel</a>
    <a href="gemeenten/steendorp">steendorp</a>
    <a href="gemeenten/elversele">elversele</a>
    <a href="gemeenten/temse">temse</a>
    <a href="gemeenten/tielrode">tielrode</a>
    <a href="gemeenten/kruibeke">kruibeke</a>
    <a href="gemeenten/bazel">bazel</a>
    <a href="gemeenten/rupelmonde">rupelmonde</a>
    <a href="gemeenten/daknam">daknam</a>
    <a href="gemeenten/eksaarde">eksaarde</a>
    <a href="gemeenten/lokeren">lokeren</a>
    <a href="gemeenten/de klinge">de klinge</a>
    <a href="gemeenten/sint-gillis-waas">sint-gillis-waas</a>
    <a href="gemeenten/meerdonk">meerdonk</a>
    <a href="gemeenten/sint-pauwels">sint-pauwels</a>
    <a href="gemeenten/moerbeke-waas">moerbeke-waas</a>
    <a href="gemeenten/wachtebeke">wachtebeke</a>
    <a href="gemeenten/stekene">stekene</a>
    <a href="gemeenten/kemzeke">kemzeke</a>
    <a href="gemeenten/oudegem">oudegem</a>
    <a href="gemeenten/baasrode">baasrode</a>
    <a href="gemeenten/schoonaarde">schoonaarde</a>
    <a href="gemeenten/sint-gillis-dendermonde">sint-gillis-dendermonde</a>
    <a href="gemeenten/appels">appels</a>
    <a href="gemeenten/grembergen">grembergen</a>
    <a href="gemeenten/dendermonde">dendermonde</a>
    <a href="gemeenten/mespelare">mespelare</a>
    <a href="gemeenten/moerzeke">moerzeke</a>
    <a href="gemeenten/hamme">hamme</a>
    <a href="gemeenten/massemen">massemen</a>
    <a href="gemeenten/wetteren">wetteren</a>
    <a href="gemeenten/westrem">westrem</a>
    <a href="gemeenten/zele">zele</a>
    <a href="gemeenten/waasmunster">waasmunster</a>
    <a href="gemeenten/opdorp">opdorp</a>
    <a href="gemeenten/buggenhout">buggenhout</a>
    <a href="gemeenten/schellebelle">schellebelle</a>
    <a href="gemeenten/wichelen">wichelen</a>
    <a href="gemeenten/serskamp">serskamp</a>
    <a href="gemeenten/kalken">kalken</a>
    <a href="gemeenten/laarne">laarne</a>
    <a href="gemeenten/wieze">wieze</a>
    <a href="gemeenten/denderbelle">denderbelle</a>
    <a href="gemeenten/lebbeke">lebbeke</a>
    <a href="gemeenten/berlare">berlare</a>
    <a href="gemeenten/overmere">overmere</a>
    <a href="gemeenten/uitbergen">uitbergen</a>
    <a href="gemeenten/aalst">aalst</a>
    <a href="gemeenten/gijzegem">gijzegem</a>
    <a href="gemeenten/hofstade">hofstade</a>
    <a href="gemeenten/moorsel">moorsel</a>
    <a href="gemeenten/meldert">meldert</a>
    <a href="gemeenten/baardegem">baardegem</a>
    <a href="gemeenten/herdersem">herdersem</a>
    <a href="gemeenten/nieuwerkerken">nieuwerkerken</a>
    <a href="gemeenten/erembodegem">erembodegem</a>
    <a href="gemeenten/lede">lede</a>
    <a href="gemeenten/impe">impe</a>
    <a href="gemeenten/oordegem">oordegem</a>
    <a href="gemeenten/smetlede">smetlede</a>
    <a href="gemeenten/wanzele">wanzele</a>
    <a href="gemeenten/denderwindeke">denderwindeke</a>
    <a href="gemeenten/okegem">okegem</a>
    <a href="gemeenten/ninove">ninove</a>
    <a href="gemeenten/appelterre-eichem">appelterre-eichem</a>
    <a href="gemeenten/lieferinge">lieferinge</a>
    <a href="gemeenten/nederhasselt">nederhasselt</a>
    <a href="gemeenten/voorde">voorde</a>
    <a href="gemeenten/pollare">pollare</a>
    <a href="gemeenten/meerbeke">meerbeke</a>
    <a href="gemeenten/neigem">neigem</a>
    <a href="gemeenten/aspelare">aspelare</a>
    <a href="gemeenten/outer">outer</a>
    <a href="gemeenten/burst">burst</a>
    <a href="gemeenten/bambrugge">bambrugge</a>
    <a href="gemeenten/erondegem">erondegem</a>
    <a href="gemeenten/erpe">erpe</a>
    <a href="gemeenten/vlekkem">vlekkem</a>
    <a href="gemeenten/erpe-mere">erpe-mere</a>
    <a href="gemeenten/mere">mere</a>
    <a href="gemeenten/aaigem">aaigem</a>
    <a href="gemeenten/ottergem">ottergem</a>
    <a href="gemeenten/heldergem">heldergem</a>
    <a href="gemeenten/haaltert">haaltert</a>
    <a href="gemeenten/denderhoutem">denderhoutem</a>
    <a href="gemeenten/kerksken">kerksken</a>
    <a href="gemeenten/denderleeuw">denderleeuw</a>
    <a href="gemeenten/iddergem">iddergem</a>
    <a href="gemeenten/welle">welle</a>
    <a href="gemeenten/zarlardinge">zarlardinge</a>
    <a href="gemeenten/onkerzele">onkerzele</a>
    <a href="gemeenten/viane">viane</a>
    <a href="gemeenten/overboelare">overboelare</a>
    <a href="gemeenten/moerbeke">moerbeke</a>
    <a href="gemeenten/nederboelare">nederboelare</a>
    <a href="gemeenten/ophasselt">ophasselt</a>
    <a href="gemeenten/geraardsbergen">geraardsbergen</a>
    <a href="gemeenten/goeferdinge">goeferdinge</a>
    <a href="gemeenten/zandbergen">zandbergen</a>
    <a href="gemeenten/schendelbeke">schendelbeke</a>
    <a href="gemeenten/idegem">idegem</a>
    <a href="gemeenten/waarbeke">waarbeke</a>
    <a href="gemeenten/smeerebbe-vloerzegem">smeerebbe-vloerzegem</a>
    <a href="gemeenten/grimminge">grimminge</a>
    <a href="gemeenten/nieuwenhove">nieuwenhove</a>
    <a href="gemeenten/sint-lievens-houtem">sint-lievens-houtem</a>
    <a href="gemeenten/zonnegem">zonnegem</a>
    <a href="gemeenten/bavegem">bavegem</a>
    <a href="gemeenten/vlierzele">vlierzele</a>
    <a href="gemeenten/oombergen">oombergen</a>
    <a href="gemeenten/letterhoutem">letterhoutem</a>
    <a href="gemeenten/sint-antelinks">sint-antelinks</a>
    <a href="gemeenten/sint-lievens-esse">sint-lievens-esse</a>
    <a href="gemeenten/herzele">herzele</a>
    <a href="gemeenten/steenhuize-wijnhuize">steenhuize-wijnhuize</a>
    <a href="gemeenten/hillegem">hillegem</a>
    <a href="gemeenten/woubrechtegem">woubrechtegem</a>
    <a href="gemeenten/ressegem">ressegem</a>
    <a href="gemeenten/borsbeke">borsbeke</a>
    <a href="gemeenten/deftinge">deftinge</a>
    <a href="gemeenten/sint-maria-lierde">sint-maria-lierde</a>
    <a href="gemeenten/lierde">lierde</a>
    <a href="gemeenten/hemelveerdegem">hemelveerdegem</a>
    <a href="gemeenten/sint-martens-lierde">sint-martens-lierde</a>
    <a href="gemeenten/ronse">ronse</a>
    <a href="gemeenten/erwetegem">erwetegem</a>
    <a href="gemeenten/velzeke-ruddershove">velzeke-ruddershove</a>
    <a href="gemeenten/grotenberge">grotenberge</a>
    <a href="gemeenten/strijpen">strijpen</a>
    <a href="gemeenten/godveerdegem">godveerdegem</a>
    <a href="gemeenten/sint-goriks-oudenhove">sint-goriks-oudenhove</a>
    <a href="gemeenten/sint-maria-oudenhove">sint-maria-oudenhove</a>
    <a href="gemeenten/leeuwergem">leeuwergem</a>
    <a href="gemeenten/oombergen">oombergen</a>
    <a href="gemeenten/elene">elene</a>
    <a href="gemeenten/zottegem">zottegem</a>
    <a href="gemeenten/dikkele">dikkele</a>
    <a href="gemeenten/zwalm">zwalm</a>
    <a href="gemeenten/roborst">roborst</a>
    <a href="gemeenten/sint-blasius-boekel">sint-blasius-boekel</a>
    <a href="gemeenten/beerlegem">beerlegem</a>
    <a href="gemeenten/sint-denijs-boekel">sint-denijs-boekel</a>
    <a href="gemeenten/meilegem">meilegem</a>
    <a href="gemeenten/sint-maria-latem">sint-maria-latem</a>
    <a href="gemeenten/rozebeke">rozebeke</a>
    <a href="gemeenten/munkzwalm">munkzwalm</a>
    <a href="gemeenten/paulatem">paulatem</a>
    <a href="gemeenten/hundelgem">hundelgem</a>
    <a href="gemeenten/nederzwalm-hermelgem">nederzwalm-hermelgem</a>
    <a href="gemeenten/everbeek">everbeek</a>
    <a href="gemeenten/nederbrakel">nederbrakel</a>
    <a href="gemeenten/michelbeke">michelbeke</a>
    <a href="gemeenten/zegelsem">zegelsem</a>
    <a href="gemeenten/sint-maria-oudenhove">sint-maria-oudenhove</a>
    <a href="gemeenten/brakel">brakel</a>
    <a href="gemeenten/elst">elst</a>
    <a href="gemeenten/opbrakel">opbrakel</a>
    <a href="gemeenten/parike">parike</a>
    <a href="gemeenten/sint-maria-horebeke">sint-maria-horebeke</a>
    <a href="gemeenten/horebeke">horebeke</a>
    <a href="gemeenten/sint-kornelis-horebeke">sint-kornelis-horebeke</a>
    <a href="gemeenten/etikhove">etikhove</a>
    <a href="gemeenten/maarke-kerkem">maarke-kerkem</a>
    <a href="gemeenten/maarkedal">maarkedal</a>
    <a href="gemeenten/nukerke">nukerke</a>
    <a href="gemeenten/schorisse">schorisse</a>
    <a href="gemeenten/berchem">berchem</a>
    <a href="gemeenten/zulzeke">zulzeke</a>
    <a href="gemeenten/kwaremont">kwaremont</a>
    <a href="gemeenten/ruien">ruien</a>
    <a href="gemeenten/kluisbergen">kluisbergen</a>
    <a href="gemeenten/eine">eine</a>
    <a href="gemeenten/oudenaarde">oudenaarde</a>
    <a href="gemeenten/bevere">bevere</a>
    <a href="gemeenten/melden">melden</a>
    <a href="gemeenten/ename">ename</a>
    <a href="gemeenten/heurne">heurne</a>
    <a href="gemeenten/edelare">edelare</a>
    <a href="gemeenten/leupegem">leupegem</a>
    <a href="gemeenten/nederename">nederename</a>
    <a href="gemeenten/ooike">ooike</a>
    <a href="gemeenten/mater">mater</a>
    <a href="gemeenten/volkegem">volkegem</a>
    <a href="gemeenten/mullem">mullem</a>
    <a href="gemeenten/welden">welden</a>
    <a href="gemeenten/huise">huise</a>
    <a href="gemeenten/ouwegem">ouwegem</a>
    <a href="gemeenten/zingem">zingem</a>
    <a href="gemeenten/kruishoutem">kruishoutem</a>
    <a href="gemeenten/nokere">nokere</a>
    <a href="gemeenten/wannegem-lede">wannegem-lede</a>
    <a href="gemeenten/moregem">moregem</a>
    <a href="gemeenten/wortegem-petegem">wortegem-petegem</a>
    <a href="gemeenten/wortegem">wortegem</a>
    <a href="gemeenten/ooike">ooike</a>
    <a href="gemeenten/elsegem">elsegem</a>
    <a href="gemeenten/petegem-aan-de-schelde">petegem-aan-de-schelde</a>
    <a href="gemeenten/meigem">meigem</a>
    <a href="gemeenten/bachte-maria-leerne">bachte-maria-leerne</a>
    <a href="gemeenten/zeveren">zeveren</a>
    <a href="gemeenten/gottem">gottem</a>
    <a href="gemeenten/grammene">grammene</a>
    <a href="gemeenten/vinkt">vinkt</a>
    <a href="gemeenten/deinze">deinze</a>
    <a href="gemeenten/sint-martens-leerne">sint-martens-leerne</a>
    <a href="gemeenten/wontergem">wontergem</a>
    <a href="gemeenten/astene">astene</a>
    <a href="gemeenten/petegem-aan-de-leie">petegem-aan-de-leie</a>
    <a href="gemeenten/eke">eke</a>
    <a href="gemeenten/nazareth">nazareth</a>
    <a href="gemeenten/lemberge">lemberge</a>
    <a href="gemeenten/melsen">melsen</a>
    <a href="gemeenten/bottelare">bottelare</a>
    <a href="gemeenten/merelbeke">merelbeke</a>
    <a href="gemeenten/schelderode">schelderode</a>
    <a href="gemeenten/munte">munte</a>
    <a href="gemeenten/sint-martens-latem">sint-martens-latem</a>
    <a href="gemeenten/deurle">deurle</a>
    <a href="gemeenten/de pinte">de pinte</a>
    <a href="gemeenten/zevergem">zevergem</a>
    <a href="gemeenten/landegem">landegem</a>
    <a href="gemeenten/nevele">nevele</a>
    <a href="gemeenten/merendree">merendree</a>
    <a href="gemeenten/poesele">poesele</a>
    <a href="gemeenten/vosselare">vosselare</a>
    <a href="gemeenten/hansbeke">hansbeke</a>
    <a href="gemeenten/balegem">balegem</a>
    <a href="gemeenten/oosterzele">oosterzele</a>
    <a href="gemeenten/moortsele">moortsele</a>
    <a href="gemeenten/gijzenzele">gijzenzele</a>
    <a href="gemeenten/landskouter">landskouter</a>
    <a href="gemeenten/scheldewindeke">scheldewindeke</a>
    <a href="gemeenten/zulte">zulte</a>
    <a href="gemeenten/machelen">machelen</a>
    <a href="gemeenten/olsene">olsene</a>
    <a href="gemeenten/lotenhulle">lotenhulle</a>
    <a href="gemeenten/poeke">poeke</a>
    <a href="gemeenten/aalter">aalter</a>
    <a href="gemeenten/bellem">bellem</a>
    <a href="gemeenten/vurste">vurste</a>
    <a href="gemeenten/dikkelvenne">dikkelvenne</a>
    <a href="gemeenten/gavere">gavere</a>
    <a href="gemeenten/asper">asper</a>
    <a href="gemeenten/semmerzake">semmerzake</a>
    <a href="gemeenten/baaigem">baaigem</a>
    <a href="gemeenten/eeklo">eeklo</a>
    <a href="gemeenten/ursel">ursel</a>
    <a href="gemeenten/knesselare">knesselare</a>
    <a href="gemeenten/lovendegem">lovendegem</a>
    <a href="gemeenten/vinderhoute">vinderhoute</a>
    <a href="gemeenten/zomergem">zomergem</a>
    <a href="gemeenten/oostwinkel">oostwinkel</a>
    <a href="gemeenten/ronsele">ronsele</a>
    <a href="gemeenten/kluizen">kluizen</a>
    <a href="gemeenten/sleidinge">sleidinge</a>
    <a href="gemeenten/ertvelde">ertvelde</a>
    <a href="gemeenten/evergem">evergem</a>
    <a href="gemeenten/waarschoot">waarschoot</a>
    <a href="gemeenten/assenede">assenede</a>
    <a href="gemeenten/boekhoute">boekhoute</a>
    <a href="gemeenten/oosteeklo">oosteeklo</a>
    <a href="gemeenten/bassevelde">bassevelde</a>
    <a href="gemeenten/kaprijke">kaprijke</a>
    <a href="gemeenten/lembeke">lembeke</a>
    <a href="gemeenten/sint-laureins">sint-laureins</a>
    <a href="gemeenten/sint-margriete">sint-margriete</a>
    <a href="gemeenten/sint-jan-in-eremo">sint-jan-in-eremo</a>
    <a href="gemeenten/waterland-oudeman">waterland-oudeman</a>
    <a href="gemeenten/watervliet">watervliet</a>
    <a href="gemeenten/maldegem">maldegem</a>
    <a href="gemeenten/adegem">adegem</a>
    <a href="gemeenten/middelburg">middelburg</a>
    <a href="gemeenten/brugge">brugge</a>
    <a href="gemeenten/koolkerke">koolkerke</a>
    <a href="gemeenten/oostkamp">oostkamp</a>
    <a href="gemeenten/hertsberge">hertsberge</a>
    <a href="gemeenten/ruddervoorde">ruddervoorde</a>
    <a href="gemeenten/waardamme">waardamme</a>
    <a href="gemeenten/sint-michiels">sint-michiels</a>
    <a href="gemeenten/sint-andries">sint-andries</a>
    <a href="gemeenten/veldegem">veldegem</a>
    <a href="gemeenten/loppem">loppem</a>
    <a href="gemeenten/zedelgem">zedelgem</a>
    <a href="gemeenten/aartrijke">aartrijke</a>
    <a href="gemeenten/knokke">knokke</a>
    <a href="gemeenten/knokke-heist">knokke-heist</a>
    <a href="gemeenten/westkapelle">westkapelle</a>
    <a href="gemeenten/heist-aan-zee">heist-aan-zee</a>
    <a href="gemeenten/ramskapelle">ramskapelle</a>
    <a href="gemeenten/sint-kruis">sint-kruis</a>
    <a href="gemeenten/assebroek">assebroek</a>
    <a href="gemeenten/hoeke">hoeke</a>
    <a href="gemeenten/oostkerke">oostkerke</a>
    <a href="gemeenten/sijsele">sijsele</a>
    <a href="gemeenten/lapscheure">lapscheure</a>
    <a href="gemeenten/damme">damme</a>
    <a href="gemeenten/moerkerke">moerkerke</a>
    <a href="gemeenten/uitkerke">uitkerke</a>
    <a href="gemeenten/blankenberge">blankenberge</a>
    <a href="gemeenten/zuienkerke">zuienkerke</a>
    <a href="gemeenten/houtave">houtave</a>
    <a href="gemeenten/nieuwmunster">nieuwmunster</a>
    <a href="gemeenten/meetkerke">meetkerke</a>
    <a href="gemeenten/lissewege">lissewege</a>
    <a href="gemeenten/dudzele">dudzele</a>
    <a href="gemeenten/zeebrugge">zeebrugge</a>
    <a href="gemeenten/oostende">oostende</a>
    <a href="gemeenten/zandvoorde">zandvoorde</a>
    <a href="gemeenten/stene">stene</a>
    <a href="gemeenten/wenduine">wenduine</a>
    <a href="gemeenten/klemskerke">klemskerke</a>
    <a href="gemeenten/de haan">de haan</a>
    <a href="gemeenten/vlissegem">vlissegem</a>
    <a href="gemeenten/middelkerke">middelkerke</a>
    <a href="gemeenten/wilskerke">wilskerke</a>
    <a href="gemeenten/leffinge">leffinge</a>
    <a href="gemeenten/schore">schore</a>
    <a href="gemeenten/sint-pieters-kapelle">sint-pieters-kapelle</a>
    <a href="gemeenten/slijpe">slijpe</a>
    <a href="gemeenten/mannekensvere">mannekensvere</a>
    <a href="gemeenten/lombardsijde">lombardsijde</a>
    <a href="gemeenten/westende">westende</a>
    <a href="gemeenten/bredene">bredene</a>
    <a href="gemeenten/oudenburg">oudenburg</a>
    <a href="gemeenten/ettelgem">ettelgem</a>
    <a href="gemeenten/roksem">roksem</a>
    <a href="gemeenten/westkerke">westkerke</a>
    <a href="gemeenten/zevekote">zevekote</a>
    <a href="gemeenten/snaaskerke">snaaskerke</a>
    <a href="gemeenten/gistel">gistel</a>
    <a href="gemeenten/moere">moere</a>
    <a href="gemeenten/bekegem">bekegem</a>
    <a href="gemeenten/ichtegem">ichtegem</a>
    <a href="gemeenten/eernegem">eernegem</a>
    <a href="gemeenten/stalhille">stalhille</a>
    <a href="gemeenten/jabbeke">jabbeke</a>
    <a href="gemeenten/zerkegem">zerkegem</a>
    <a href="gemeenten/snellegem">snellegem</a>
    <a href="gemeenten/varsenare">varsenare</a>
    <a href="gemeenten/kortrijk">kortrijk</a>
    <a href="gemeenten/bissegem">bissegem</a>
    <a href="gemeenten/heule">heule</a>
    <a href="gemeenten/marke">marke</a>
    <a href="gemeenten/bellegem">bellegem</a>
    <a href="gemeenten/kooigem">kooigem</a>
    <a href="gemeenten/rollegem">rollegem</a>
    <a href="gemeenten/aalbeke">aalbeke</a>
    <a href="gemeenten/kuurne">kuurne</a>
    <a href="gemeenten/harelbeke">harelbeke</a>
    <a href="gemeenten/hulste">hulste</a>
    <a href="gemeenten/bavikhove">bavikhove</a>
    <a href="gemeenten/deerlijk">deerlijk</a>
    <a href="gemeenten/zwevegem">zwevegem</a>
    <a href="gemeenten/heestert">heestert</a>
    <a href="gemeenten/moen">moen</a>
    <a href="gemeenten/otegem">otegem</a>
    <a href="gemeenten/sint-denijs">sint-denijs</a>
    <a href="gemeenten/moorsele">moorsele</a>
    <a href="gemeenten/gullegem">gullegem</a>
    <a href="gemeenten/wevelgem">wevelgem</a>
    <a href="gemeenten/ingooigem">ingooigem</a>
    <a href="gemeenten/gijzelbrechtegem">gijzelbrechtegem</a>
    <a href="gemeenten/vichte">vichte</a>
    <a href="gemeenten/anzegem">anzegem</a>
    <a href="gemeenten/kaster">kaster</a>
    <a href="gemeenten/tiegem">tiegem</a>
    <a href="gemeenten/avelgem">avelgem</a>
    <a href="gemeenten/waarmaarde">waarmaarde</a>
    <a href="gemeenten/kerkhove">kerkhove</a>
    <a href="gemeenten/outrijve">outrijve</a>
    <a href="gemeenten/bossuit">bossuit</a>
    <a href="gemeenten/spiere-helkijn">spiere-helkijn</a>
    <a href="gemeenten/helkijn">helkijn</a>
    <a href="gemeenten/spiere">spiere</a>
    <a href="gemeenten/woumen">woumen</a>
    <a href="gemeenten/nieuwkapelle">nieuwkapelle</a>
    <a href="gemeenten/lampernisse">lampernisse</a>
    <a href="gemeenten/kaaskerke">kaaskerke</a>
    <a href="gemeenten/pervijze">pervijze</a>
    <a href="gemeenten/diksmuide">diksmuide</a>
    <a href="gemeenten/esen">esen</a>
    <a href="gemeenten/oostkerke">oostkerke</a>
    <a href="gemeenten/vladslo">vladslo</a>
    <a href="gemeenten/stuivekenskerke">stuivekenskerke</a>
    <a href="gemeenten/driekapellen">driekapellen</a>
    <a href="gemeenten/keiem">keiem</a>
    <a href="gemeenten/sint-jacobs-kapelle">sint-jacobs-kapelle</a>
    <a href="gemeenten/beerst">beerst</a>
    <a href="gemeenten/leke">leke</a>
    <a href="gemeenten/oudekapelle">oudekapelle</a>
    <a href="gemeenten/handzame">handzame</a>
    <a href="gemeenten/werken">werken</a>
    <a href="gemeenten/zarren">zarren</a>
    <a href="gemeenten/kortemark">kortemark</a>
    <a href="gemeenten/ramskapelle">ramskapelle</a>
    <a href="gemeenten/nieuwpoort">nieuwpoort</a>
    <a href="gemeenten/sint-joris">sint-joris</a>
    <a href="gemeenten/eggewaartskapelle">eggewaartskapelle</a>
    <a href="gemeenten/booitshoeke">booitshoeke</a>
    <a href="gemeenten/veurne">veurne</a>
    <a href="gemeenten/steenkerke">steenkerke</a>
    <a href="gemeenten/zoutenaaie">zoutenaaie</a>
    <a href="gemeenten/de moeren">de moeren</a>
    <a href="gemeenten/bulskamp">bulskamp</a>
    <a href="gemeenten/avekapelle">avekapelle</a>
    <a href="gemeenten/vinkem">vinkem</a>
    <a href="gemeenten/wulveringem">wulveringem</a>
    <a href="gemeenten/houtem">houtem</a>
    <a href="gemeenten/westvleteren">westvleteren</a>
    <a href="gemeenten/woesten">woesten</a>
    <a href="gemeenten/oostvleteren">oostvleteren</a>
    <a href="gemeenten/vleteren">vleteren</a>
    <a href="gemeenten/reninge">reninge</a>
    <a href="gemeenten/lo">lo</a>
    <a href="gemeenten/lo-reninge">lo-reninge</a>
    <a href="gemeenten/noordschote">noordschote</a>
    <a href="gemeenten/pollinkhove">pollinkhove</a>
    <a href="gemeenten/merkem">merkem</a>
    <a href="gemeenten/houthulst">houthulst</a>
    <a href="gemeenten/klerken">klerken</a>
    <a href="gemeenten/adinkerke">adinkerke</a>
    <a href="gemeenten/de panne">de panne</a>
    <a href="gemeenten/oostduinkerke">oostduinkerke</a>
    <a href="gemeenten/wulpen">wulpen</a>
    <a href="gemeenten/koksijde">koksijde</a>
    <a href="gemeenten/bovekerke">bovekerke</a>
    <a href="gemeenten/koekelare">koekelare</a>
    <a href="gemeenten/zande">zande</a>
    <a href="gemeenten/alveringem">alveringem</a>
    <a href="gemeenten/hoogstade">hoogstade</a>
    <a href="gemeenten/sint-rijkers">sint-rijkers</a>
    <a href="gemeenten/oeren">oeren</a>
    <a href="gemeenten/leisele">leisele</a>
    <a href="gemeenten/stavele">stavele</a>
    <a href="gemeenten/beveren-aan-de-ijzer">beveren-aan-de-ijzer</a>
    <a href="gemeenten/izenberge">izenberge</a>
    <a href="gemeenten/gijverinkhove">gijverinkhove</a>
    <a href="gemeenten/aarsele">aarsele</a>
    <a href="gemeenten/schuiferskapelle">schuiferskapelle</a>
    <a href="gemeenten/kanegem">kanegem</a>
    <a href="gemeenten/tielt">tielt</a>
    <a href="gemeenten/sint-baafs-vijve">sint-baafs-vijve</a>
    <a href="gemeenten/wielsbeke">wielsbeke</a>
    <a href="gemeenten/ooigem">ooigem</a>
    <a href="gemeenten/wakken">wakken</a>
    <a href="gemeenten/markegem">markegem</a>
    <a href="gemeenten/dentergem">dentergem</a>
    <a href="gemeenten/oeselgem">oeselgem</a>
    <a href="gemeenten/beernem">beernem</a>
    <a href="gemeenten/sint-joris">sint-joris</a>
    <a href="gemeenten/oedelem">oedelem</a>
    <a href="gemeenten/egem">egem</a>
    <a href="gemeenten/pittem">pittem</a>
    <a href="gemeenten/zwevezele">zwevezele</a>
    <a href="gemeenten/wingene">wingene</a>
    <a href="gemeenten/ruiselede">ruiselede</a>
    <a href="gemeenten/meulebeke">meulebeke</a>
    <a href="gemeenten/ingelmunster">ingelmunster</a>
    <a href="gemeenten/oostrozebeke">oostrozebeke</a>
    <a href="gemeenten/waregem">waregem</a>
    <a href="gemeenten/beveren">beveren</a>
    <a href="gemeenten/desselgem">desselgem</a>
    <a href="gemeenten/sint-eloois-vijve">sint-eloois-vijve</a>
    <a href="gemeenten/rumbeke">rumbeke</a>
    <a href="gemeenten/beveren">beveren</a>
    <a href="gemeenten/roeselare">roeselare</a>
    <a href="gemeenten/oekene">oekene</a>
    <a href="gemeenten/lichtervelde">lichtervelde</a>
    <a href="gemeenten/torhout">torhout</a>
    <a href="gemeenten/hooglede">hooglede</a>
    <a href="gemeenten/gits">gits</a>
    <a href="gemeenten/staden">staden</a>
    <a href="gemeenten/westrozebeke">westrozebeke</a>
    <a href="gemeenten/oostnieuwkerke">oostnieuwkerke</a>
    <a href="gemeenten/ardooie">ardooie</a>
    <a href="gemeenten/koolskamp">koolskamp</a>
    <a href="gemeenten/lendelede">lendelede</a>
    <a href="gemeenten/izegem">izegem</a>
    <a href="gemeenten/emelgem">emelgem</a>
    <a href="gemeenten/kachtem">kachtem</a>
    <a href="gemeenten/sint-eloois-winkel">sint-eloois-winkel</a>
    <a href="gemeenten/ledegem">ledegem</a>
    <a href="gemeenten/rollegem-kapelle">rollegem-kapelle</a>
    <a href="gemeenten/moorslede">moorslede</a>
    <a href="gemeenten/dadizele">dadizele</a>
    <a href="gemeenten/dikkebus">dikkebus</a>
    <a href="gemeenten/brielen">brielen</a>
    <a href="gemeenten/ieper">ieper</a>
    <a href="gemeenten/sint-jan">sint-jan</a>
    <a href="gemeenten/hollebeke">hollebeke</a>
    <a href="gemeenten/zillebeke">zillebeke</a>
    <a href="gemeenten/voormezele">voormezele</a>
    <a href="gemeenten/zuidschote">zuidschote</a>
    <a href="gemeenten/boezinge">boezinge</a>
    <a href="gemeenten/elverdinge">elverdinge</a>
    <a href="gemeenten/vlamertinge">vlamertinge</a>
    <a href="gemeenten/langemark">langemark</a>
    <a href="gemeenten/langemark-poelkapelle">langemark-poelkapelle</a>
    <a href="gemeenten/poelkapelle">poelkapelle</a>
    <a href="gemeenten/bikschote">bikschote</a>
    <a href="gemeenten/rekkem">rekkem</a>
    <a href="gemeenten/menen">menen</a>
    <a href="gemeenten/lauwe">lauwe</a>
    <a href="gemeenten/wervik">wervik</a>
    <a href="gemeenten/geluwe">geluwe</a>
    <a href="gemeenten/nieuwkerke">nieuwkerke</a>
    <a href="gemeenten/heuvelland">heuvelland</a>
    <a href="gemeenten/dranouter">dranouter</a>
    <a href="gemeenten/wulvergem">wulvergem</a>
    <a href="gemeenten/wijtschate">wijtschate</a>
    <a href="gemeenten/westouter">westouter</a>
    <a href="gemeenten/kemmel">kemmel</a>
    <a href="gemeenten/mesen">mesen</a>
    <a href="gemeenten/loker">loker</a>
    <a href="gemeenten/reningelst">reningelst</a>
    <a href="gemeenten/poperinge">poperinge</a>
    <a href="gemeenten/krombeke">krombeke</a>
    <a href="gemeenten/roesbrugge-haringe">roesbrugge-haringe</a>
    <a href="gemeenten/proven">proven</a>
    <a href="gemeenten/watou">watou</a>
    <a href="gemeenten/beselare">beselare</a>
    <a href="gemeenten/passendale">passendale</a>
    <a href="gemeenten/geluveld">geluveld</a>
    <a href="gemeenten/zandvoorde">zandvoorde</a>
    <a href="gemeenten/zonnebeke">zonnebeke</a>
    <a href="gemeenten/halle">halle</a>
    <a href="gemeenten/buizingen">buizingen</a>
    <a href="gemeenten/lembeek">lembeek</a>
    <a href="gemeenten/herfelingen">herfelingen</a>
    <a href="gemeenten/herne">herne</a>
    <a href="gemeenten/sint-pieters-kapelle">sint-pieters-kapelle</a>
    <a href="gemeenten/bever">bever</a>
    <a href="gemeenten/hoeilaart">hoeilaart</a>
    <a href="gemeenten/vollezele">vollezele</a>
    <a href="gemeenten/galmaarden">galmaarden</a>
    <a href="gemeenten/tollembeek">tollembeek</a>
    <a href="gemeenten/sint-laureins-berchem">sint-laureins-berchem</a>
    <a href="gemeenten/oudenaken">oudenaken</a>
    <a href="gemeenten/sint-pieters-leeuw">sint-pieters-leeuw</a>
    <a href="gemeenten/ruisbroek">ruisbroek</a>
    <a href="gemeenten/vlezenbeek">vlezenbeek</a>
    <a href="gemeenten/drogenbos">drogenbos</a>
    <a href="gemeenten/linkebeek">linkebeek</a>
    <a href="gemeenten/sint-genesius-rode">sint-genesius-rode</a>
    <a href="gemeenten/beersel">beersel</a>
    <a href="gemeenten/lot">lot</a>
    <a href="gemeenten/alsemberg">alsemberg</a>
    <a href="gemeenten/dworp">dworp</a>
    <a href="gemeenten/huizingen">huizingen</a>
    <a href="gemeenten/pepingen">pepingen</a>
    <a href="gemeenten/bogaarden">bogaarden</a>
    <a href="gemeenten/heikruis">heikruis</a>
    <a href="gemeenten/elingen">elingen</a>
    <a href="gemeenten/beert">beert</a>
    <a href="gemeenten/bellingen">bellingen</a>
    <a href="gemeenten/sint-ulriks-kapelle">sint-ulriks-kapelle</a>
    <a href="gemeenten/dilbeek">dilbeek</a>
    <a href="gemeenten/sint-martens-bodegem">sint-martens-bodegem</a>
    <a href="gemeenten/itterbeek">itterbeek</a>
    <a href="gemeenten/groot-bijgaarden">groot-bijgaarden</a>
    <a href="gemeenten/schepdaal">schepdaal</a>
    <a href="gemeenten/asse">asse</a>
    <a href="gemeenten/kobbegem">kobbegem</a>
    <a href="gemeenten/bekkerzeel">bekkerzeel</a>
    <a href="gemeenten/mollem">mollem</a>
    <a href="gemeenten/relegem">relegem</a>
    <a href="gemeenten/zellik">zellik</a>
    <a href="gemeenten/ternat">ternat</a>
    <a href="gemeenten/wambeek">wambeek</a>
    <a href="gemeenten/sint-katherina-lombeek">sint-katherina-lombeek</a>
    <a href="gemeenten/opwijk">opwijk</a>
    <a href="gemeenten/mazenzele">mazenzele</a>
    <a href="gemeenten/gaasbeek">gaasbeek</a>
    <a href="gemeenten/sint-kwintens-lennik">sint-kwintens-lennik</a>
    <a href="gemeenten/lennik">lennik</a>
    <a href="gemeenten/sint-martens-lennik">sint-martens-lennik</a>
    <a href="gemeenten/kester">kester</a>
    <a href="gemeenten/leerbeek">leerbeek</a>
    <a href="gemeenten/gooik">gooik</a>
    <a href="gemeenten/oetingen">oetingen</a>
    <a href="gemeenten/onze-lieve-vrouw-lombeek">onze-lieve-vrouw-lombeek</a>
    <a href="gemeenten/roosdaal">roosdaal</a>
    <a href="gemeenten/pamel">pamel</a>
    <a href="gemeenten/strijtem">strijtem</a>
    <a href="gemeenten/borchtlombeek">borchtlombeek</a>
    <a href="gemeenten/liedekerke">liedekerke</a>
    <a href="gemeenten/wemmel">wemmel</a>
    <a href="gemeenten/peizegem">peizegem</a>
    <a href="gemeenten/brussegem">brussegem</a>
    <a href="gemeenten/merchtem">merchtem</a>
    <a href="gemeenten/hamme">hamme</a>
    <a href="gemeenten/hekelgem">hekelgem</a>
    <a href="gemeenten/essene">essene</a>
    <a href="gemeenten/teralfene">teralfene</a>
    <a href="gemeenten/affligem">affligem</a>
    <a href="gemeenten/vilvoorde">vilvoorde</a>
    <a href="gemeenten/peutie">peutie</a>
    <a href="gemeenten/melsbroek">melsbroek</a>
    <a href="gemeenten/perk">perk</a>
    <a href="gemeenten/steenokkerzeel">steenokkerzeel</a>
    <a href="gemeenten/machelen">machelen</a>
    <a href="gemeenten/diegem">diegem</a>
    <a href="gemeenten/londerzeel">londerzeel</a>
    <a href="gemeenten/steenhuffel">steenhuffel</a>
    <a href="gemeenten/malderen">malderen</a>
    <a href="gemeenten/grimbergen">grimbergen</a>
    <a href="gemeenten/humbeek">humbeek</a>
    <a href="gemeenten/beigem">beigem</a>
    <a href="gemeenten/strombeek-bever">strombeek-bever</a>
    <a href="gemeenten/meise">meise</a>
    <a href="gemeenten/wolvertem">wolvertem</a>
    <a href="gemeenten/nieuwenrode">nieuwenrode</a>
    <a href="gemeenten/ramsdonk">ramsdonk</a>
    <a href="gemeenten/kapelle-op-den-bos">kapelle-op-den-bos</a>
    <a href="gemeenten/nederokkerzeel">nederokkerzeel</a>
    <a href="gemeenten/berg">berg</a>
    <a href="gemeenten/buken">buken</a>
    <a href="gemeenten/kampenhout">kampenhout</a>
    <a href="gemeenten/nossegem">nossegem</a>
    <a href="gemeenten/zaventem">zaventem</a>
    <a href="gemeenten/sint-stevens-woluwe">sint-stevens-woluwe</a>
    <a href="gemeenten/sterrebeek">sterrebeek</a>
    <a href="gemeenten/kraainem">kraainem</a>
    <a href="gemeenten/wezembeek-oppem">wezembeek-oppem</a>
    <a href="gemeenten/eppegem">eppegem</a>
    <a href="gemeenten/zemst">zemst</a>
    <a href="gemeenten/hofstade">hofstade</a>
    <a href="gemeenten/weerde">weerde</a>
    <a href="gemeenten/elewijt">elewijt</a>
</div>
