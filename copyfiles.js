const cities = `Gent, Mariakerke, Drongen, Wondelgem, Sint-amandsberg, Oostakker, Desteldonk, Mendonk,
Sint-kruis-winkel, Ledeberg, Gentbrugge, Afsnee, Sint-denijs-westrem, Zwijnaarde, Zelzate,
Destelbergen, Heusden, Zeveneken, Beervelde, Lochristi, Zaffelare, Gontrode, Melle,
Nieuwkerken-Waas, Sint-Niklaas, Belsele, Sinaai-Waas, Melsele, Beveren-Waas, Vrasene, Haasdonk, Kieldrecht, Verrebroek, Kallo, Doel, Steendorp,
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
Sint-Margriete, Sint-Jan-In-Eremo, Waterland-Oudeman, Watervliet, Maldegem, Adegem, Middelburg, Brugge, Koolkerke, Oostkamp, Hertsberge, Ruddervoorde, Waardamme, Sint-michiels, Sint-andries,
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
Geluveld, Zandvoorde, Zonnebeke, Halle, Buizingen, Lembeek, Herfelingen, Herne, Sint-pieters-kapelle, Bever, Hoeilaart,
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
Elewijt`;

const test = `Sint-Margriete, Sint-Jan-In-Eremo, Waterland-Oudeman`;

var fs = require('fs');
// fs.readFile('./templatefile.txt', 'utf8', function(err, data) {
//     if (err) {
//         return console.log(err);
//     }

//     const cittt = cities.split(',');

//     cittt.forEach(c => {
//         console.log(c);
//         var result = data.replace(/CITY/g, c);

//         fs.writeFile('./src/routes/gemeenten/' + c.toLowerCase().trim() + '.svelte', result, 'utf8', function(err) {
//             if (err) return console.log(err);
//         });
//     });
// });

const siteMap = ` <url>
<loc>https://ontstoppingsdienst-sobry.be/gemeenten/CITY</loc>
</url>`;

const link = ` <a href="gemeenten/CITY">CITY</a>`;

const cittt = cities.split(',');
let xxx = '';
cittt.forEach(c => {
    console.log(c);
    var result = link.replace(/CITY/g, c.toLowerCase().trim());
    xxx += result;
});
fs.writeFile('./zzztlinks.txt', xxx, 'utf8', function(err) {
    if (err) return console.log(err);
});
