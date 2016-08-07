webpackJsonp([78,262],{27:function(e,r){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAIAAACJJmN7AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAAtElEQVQ4T2No6+yMiYsnFZVVVDDUNTQcPnr02YsXJCGgZiw6T587B3TIhImT7t6/jyyOjLDrhLt/5eo1cEGgccgGEdC5afMWiAiQAeQCVcLVYNcJNHvBosVwCyHaIAjoBYggis6r165BRJERUClcGwRBTAQyoDpnzJoNF4UgoM2Y2iAI4gqQTog2CAJygZYDtQFjDC6IhlLS0oEkSCeyKBABJfBogyMsOolEQ0wneXklJS0dANCxzo7YC5S5AAAAAElFTkSuQmCC"},186:function(e,r,t){e.exports=t.p+"_/oppgaver/src/scratch/hva_er_det/hva_er_det.bb311c.png"},1019:function(e,r,t){e.exports={frontmatter:t(400),content:t(1622)}},1622:function(e,r,t){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Et bilde av en tilfeldig ting vises på tavlen. Men bildet er forvrengt, slik at du må gjette hva det er ved å klikke på et av alternativene som vises under. Desto raskere du gjetter riktig, desto flere poeng får du.</p> <figure><img src="+t(186)+' alt=""/></figure> </section> <section class=activity id=steg-1-fa-flere-ting-til-a-vise-seg-pa-tavlen> <h1 class=activity id=steg-1-fa-flere-ting-til-a-vise-seg-pa-tavlen>Steg 1: Få flere ting til å vise seg på tavlen</h1> <figure><em>Vi vil at noen forskjellige bilder skal komme opp på tavlen.</em></figure> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Start et nytt Scratch-prosjekt og slett kattefiguren.</p> </li> <li> <p>Klikk på scenen og deretter <code>Bakgrunner</code>-fanen. Åpne biblioteket med bakgrunner ved å trykke på <img src='+t(27)+' alt="Velg en ferdig bakgrunn"/> og velg så <code>Innendørs/chalkboard</code>.</p> </li> <li> <figure>Importer en valgfri figur. Velg gjerne en figur fra <code>Ting</code>-mappen.</figure> </li> <li> <figure>Plasser figuren på midten av tavlen, og endre størrelsen hvis den ikke passer.</figure> </li> <li> <p>Legg til fire nye drakter fra <code>Ting</code>-mappen. Du kan velge de figurene du vil!</p> </li> <li> <figure>La oss nå få en tilfeldig ting til å dukke opp på tavlen. Bruk dette skriptet.</figure> <pre class=blocks>når grønt flagg klikkes\nbytt drakt til (tilfeldig tall fra (1) til (5))\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet> <h2 class=flag id=test-prosjektet>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Endrer figuren seg?</p> </li> <li> <p>Klikk flere ganger. Får figuren stadig nye drakter? Flott.</p> </li> </ul> <figure>Det gjør ingenting om samme drakt kommer opp flere ganger på rad. Det er helt normalt når det velges en tilfeldig drakt hver gang.</figure> </section> </section> <section class=activity id=steg-2-forvreng-bildet> <h1 class=activity id=steg-2-forvreng-bildet>Steg 2: Forvreng bildet</h1> <p><em>La oss nå forvrenge figuren når den dukker opp på tavlen, så det blir vanskeligere å gjette hva det er. Deretter skal vi gradvis gjøre vi den tydeligere igjen.</em></p> <p>Vi skal bruke en <code class=blockdata>poeng</code>-variabel til å kontrollere graden av forvrenging. Dersom poengscoren er høy vil bildet bli veldig forvrengt. Når antallet poeng synker, vil også graden av forvrenging synke. Poengvariabelen fungerer dermed som en slags tidteller.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Velg <code class=blockdata>Data</code>-kategorien og lag en variabel kalt <code class=blockdata>poeng</code>. La den gjelde <code>for alle figurer</code>.</p> </li> <li> <p>Endre skriptet slik:</p> <pre class=blocks>når grønt flagg klikkes\nbytt drakt til (tilfeldig tall fra (1) til (5))\nsett [poeng v] til [110]\ngjenta til &lt;(poeng) = [0]&gt;\n    endre [poeng v] med (-10)\n    sett [piksel v] effekt til (poeng)\n    sett [farge v] effekt til (poeng)\n    vent (1) sekunder\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-2> <h2 class=flag id=test-prosjektet-2>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Kommer det opp et tilfeldig og forvrengt bilde?</p> </li> <li> <p>Blir bildet gradvis tydeligere?</p> </li> <li> <p>Går poengsummen ned i takt med at bildet blir tydeligere?</p> </li> <li> <p>Blir bildet fullstendig tydelig når poengsummen er 0?</p> </li> <li> <figure>Får du fremdeles nye ting på tavlen når du klikker på det grønne flagget?</figure> </li> </ul> </section> <section class=try id=ting-a-prove> <h2 class=try id=ting-a-prove>Ting å prøve</h2> <ul> <li> <p>Prøv å <strong>endre poengsummen</strong> fra start, samt hvor mye den skal <strong>forandre seg</strong> for hver gang den går gjennom løkken. Hvordan endrer det utseendet til bildet? Blir det vanskeligere eller enklere å se hva bildet forestiller?</p> </li> <li> <p>Forsøk noen <strong>ulike grafiske effekter</strong> fra nedtrekkslisten. Hvordan påvirker dette vanskelighetgsraden?</p> </li> </ul> </section> </section> <section class=activity id=steg-3-la-spilleren-prove-a-gjette-bildet> <h1 class=activity id=steg-3-la-spilleren-prove-a-gjette-bildet>Steg 3: La spilleren prøve å gjette bildet</h1> <p>Så langt har vi fått vårt tilfeldige bilde til å gradvis bli tydeligere samtidig som poengsummen synker. Men hvordan skal man vinne spillet? Vi vil legge til noen figurer nederst på skjermen som spilleren kan klikke på. Klikker man på den rette, vinner man spillet. Klikker man feil forsvinner figuren og spillet fortsetter.</p> <p>Først må vi å vite hva det rette svaret er.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Lag en ny variabel og kall den <code class=blockdata>riktig</code>. Pass på at den er tilgjengelig <code>for alle figurer</code>. Fjern avhukingen slik at variabelen ikke vises i spillet.</p> </li> <li> <p>Endre skriptet slik at det klarer å holde styr på hva som er rett svar. Etter at vi har bestemt drakten legger du derfor til klossen <code class=blockdata>sett riktig til</code><code class=blocklooks>drakt nr.</code>:</p> <pre class=blocks>når grønt flagg klikkes\nbytt drakt til (tilfeldig tall fra (1) til (5))\nsett [riktig v] til (drakt nr.)\nsett [poeng v] til [110]\ngjenta til &lt;(poeng) = [0]&gt;\n    endre [poeng v] med (-10)\n    sett [piksel v] effekt til (poeng)\n    sett [farge v] effekt til (poeng)\n    vent (1) sekunder\nslutt\n</pre> </li> </ul> <p>Nå skal vi legge til flere figurer som spilleren kan klikke på.</p> <ul> <li> <figure>Gi først figuren din navnet <code>Spørsmål</code>.</figure> </li> <li> <figure>Lag så en kopi av figuren ved å høyreklikke på den. På scenen drar du deretter den nye figuren ned i venstre hjørne.</figure> </li> <li> <figure>Endre denne nye figurens navn til <code>Svar1</code>.</figure> </li> <li> <figure>Slett skriptet til <code>Svar1</code> og alle draktene bortsett fra den første.</figure> </li> <li> <p>Gjenta de tre siste stegene igjen (kall neste kopi <code>Svar2</code>), plasser <code>Svar2</code> ved siden av <code>Svar1</code> og slett alle bortsett fra den andre drakten.</p> </li> <li> <p>Gjenta disse punktene tre ganger til, slik at du har også figurene <code>Svar3</code>, <code>Svar4</code> og <code>Svar5</code>.</p> <p>Du skal nå ha en rad med fem svar-figurer nederst på scenen, hver viser en drakt som hovedfiguren kan ha. Ingen av <code>Svar</code>-figurene skal ha skript knyttet til seg.</p> </li> <li> <p>Nå må vi få alle figurene til å reagere når de blir klikket på. Hva som skal skje avhenger av om spilleren har klikket riktig eller galt. Legg til dette skriptet til <code>Svar1</code>:</p> <pre class=blocks>når denne figuren klikkes\nhvis &lt;(riktig) = [1]&gt;\n    send melding [Vant v]\nellers\n    skjul\nslutt\n</pre> </li> <li> <figure>Dra skriptet over til de andre figurene, slik at alle får hver sin kopi. For hver figur, bytt 1 til 2, 3, og så videre.</figure> </li> <li> <p>Nå skal vi lage skriptet som gir melding til spilleren når han har vunnet. Klikk på <code>Spørsmål</code> igjen og legg til dette skriptet:</p> <pre class=blocks>når jeg mottar [Vant v]\nsi (sett sammen [Gratulerer! Din poengsum ble ] (poeng))\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-3> <h2 class=flag id=test-prosjektet-3>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <figure>Når du tester spillet kan du se på spørsmålsfiguren under scenen for å se hva riktig svar er. Det fungerer bra for testing.</figure> <ul> <li> <p>Hva skjer når du klikker på riktig svar?</p> </li> <li> <p>Hva skjer når du klikker på galt svar?</p> </li> <li> <p>Hva skjer med det gale svaret når du starter et nytt spill?</p> </li> </ul> </section> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <p>Denne testen viser oss <strong>to problemer</strong>: Først og fremst, ting som ble klikket på ved galt svar kommer ikke tilbake når et nytt spill starter. For det andre, poengsummen fortsetter å gå ned, også etter at man har klikket på riktig svar.</p> <ul> <li> <figure>For å fikse det første problemet kan vi bare legge til følgende skript for hver av de fem svarfigurene:</figure> <pre class=blocks>når grønt flagg klikkes\nvis\n</pre> </li> </ul> <p>For å fikse det andre problemet må vi få stoppet spørsmålfigurens <code class=blockcontrol>gjenta til</code>-løkke når spilleren klikker på riktig svar. Vi kan bruke en ny variabel for å gjøre det. Vi vil kalle denne variabelen <code class=blockdata>vant</code> og legger inn en <code class=blockdata>sett</code>-kloss som gir den verdien <code>0</code> når spillet starter, og en tilsvarende kloss som setter verdien til <code>1</code> når spillet vinnes. Se skriptene nedenfor.</p> <ul> <li> <p>Vi må videre stoppe <code class=blockcontrol>gjenta til</code>-løkken når poengsummen har blitt <code>0</code> eller <code class=blockdata>vant</code> er <code>1</code>.</p> </li> <li> <p>Til slutt legger vi også inn en <code class=blocklooks>ta bort grafiske effekter</code>-kloss som avslører spørsmålsfiguren når spilleren har gjettet riktig. Skriptene på <code>Spørsmål</code> skal nå se slik ut:</p> <pre class=blocks>når grønt flagg klikkes\nbytt drakt til (tilfeldig tall fra (1) til (5))\nsett [riktig v] til (drakt nr.)\nsett [poeng v] til [110]\nsett [vant v] til [0]\ngjenta til &lt;&lt;(poeng) = [0]&gt; eller &lt;(vant) = [1]&gt;&gt;\n    endre [poeng v] med (-10)\n    sett [piksel v] effekt til (poeng)\n    sett [farge v] effekt til (poeng)\n    vent (1) sekunder\nslutt\n\nnår jeg mottar [Vant v]\nsett [vant v] til [1]\nta bort grafiske effekter\nsi (sett sammen [Gratulerer! Din poengsum ble] (poeng))\n</pre> </li> </ul> </section> <section class=save id=lagre-prosjektet> <h2 class=save id=lagre-prosjektet>Lagre prosjektet</h2> <figure><strong>Gratulerer! Du er nå ferdig med spillet.</strong></figure> <figure>Men det finnes mange flere ting du kan gjøre med spillet. Prøv deg gjerne på utfordringene nedenfor!</figure> </section> <section class=challenge id=utfordring-1-gjor-spillet-enklere-eller-vanskeligere> <h2 class=challenge id=utfordring-1-gjor-spillet-enklere-eller-vanskeligere>Utfordring 1: Gjør spillet enklere eller vanskeligere</h2> <p>Endre vanskelighetsgrad for spillet.</p> <ul> <li>Forsøk å endre hvor lenge bildet vises frem og hvor raskt poengsummen minker.</li> <li>Forsøk å endre forvrengingen av bildet.</li> <li>Forsøk å gjøre figurene likere hverandre eller mer forskjellig. Husk også å forandre svarfigurenes drakter.</li> </ul> </section> <section class=challenge id=utfordring-2-forvreng-bildet-ulikt-fra-gang-til-gang> <h2 class=challenge id=utfordring-2-forvreng-bildet-ulikt-fra-gang-til-gang>Utfordring 2: Forvreng bildet ulikt fra gang til gang</h2> <p>For øyeblikket bruker spillet samme forvrengingsalgoritme hele tiden. Men i steg 2 prøvde du kanskje ut noen forskjellige alternativer. Prøv nå om du kan finne noen flere forvrenginger som du synes fungerer like bra som <code>farge</code> og <code>piksler</code>.</p> <p>Endre spillet slik at hvert spill bruker forskjellige forvrengninger i <code class=blockcontrol>gjenta til</code>-løkken.</p> <p><strong>Hint:</strong> Forsøk å opprette en ny variabel som du kaller <code>forvrenging</code>. Sett denne til en tilfeldig verdi i starten av spillet. Bruk så <code class=blockcontrol>hvis</code>-klosser i <code class=blockcontrol>gjenta til</code>-løkken for å velge ut en forvrenging til hvert spill.</p> </section> <section class=challenge id=utfordring-3-la-hvert-spill-ha-flere-runder> <h2 class=challenge id=utfordring-3-la-hvert-spill-ha-flere-runder>Utfordring 3: La hvert spill ha flere runder</h2> <p>For øyeblikket er hvert spill uavhengig av andre. Prøv om du kan legge til flere runder slik at man får gjette på for eksempel tre ting og kan vinne inntil 300 poeng.</p> <p><strong>Hint:</strong> Du vil trenge en ekstra variabel for å lagre den totale poengsummen. Du må også ha en løkke som går rundt for hver runde.</p> </section> <section class=challenge id=utfordring-4-ok-vanskelighetsgraden-gradvis> <h2 class=challenge id=utfordring-4-ok-vanskelighetsgraden-gradvis>Utfordring 4: Øk vanskelighetsgraden gradvis</h2> <p>Gjør nå spillet vanskeligere og vanskeligere for hver runde.</p> <figure>Kanskje hver runde også skal gi ulikt antall poeng? Bør spilleren også få ekstra mange poeng for å gjette kjapt i de vanskeligste rundene?</figure> <p><strong>Hint:</strong> Hvordan kan du vite hvilken runde du er i? Hvordan kan du bruke det til å endre vanskelighetsgraden og poengsummen?</p> </section> <section class=challenge id=utfordring-5-fortsett-til-spilleren-gjor-feil> <h2 class=challenge id=utfordring-5-fortsett-til-spilleren-gjor-feil>Utfordring 5: Fortsett til spilleren gjør feil</h2> <p>I stedet for et bestemt antall runder kan du la spillet gå til det blir klikket på feil svar. Dette fungerer nok best dersom man også øker vanskelighetsgraden utover i spillet.</p> </section> <section class=challenge id=utfordring-6-tilpass-spillet-til-hvor-flink-spilleren-er> <h2 class=challenge id=utfordring-6-tilpass-spillet-til-hvor-flink-spilleren-er>Utfordring 6: Tilpass spillet til hvor flink spilleren er</h2> <p>I stedet for å gjøre det stadig vanskeligere kan vi tilpasse vanskelighetsgraden til spillernes dyktighet. Hvis de raskt gjetter riktig ting, kan den neste runden gjøres vanskeligere. Hvis de klikker feil eller gjetter sakte, kan neste runde gjøres enklere.</p> <figure>Dette fungerer bare hvis du ikke samler opp poengsummen fra runde til runde.</figure> </section> <section class=challenge id=utfordring-7-hold-styr-pa-rekorden> <h2 class=challenge id=utfordring-7-hold-styr-pa-rekorden>Utfordring 7: Hold styr på rekorden</h2> <p>Finn en måte å lagre den høyeste poengsummen på. Klarer du også å lagre navnet til spilleren, og få spillet til å si hvem som har rekorden?</p> </section> <section class=challenge id=utfordring-8-gi-en-straff-for-galt-svar> <h2 class=challenge id=utfordring-8-gi-en-straff-for-galt-svar>Utfordring 8: Gi en straff for galt svar</h2> <p>Slik spillet er nå kan man bare klikke som en gal på alle svarene, og dermed raskt finne riktig svar. Det kan derfor være en god idé å trekke fra poeng hver gang spilleren klikker på feil figur.</p> <p>Gjør dette spillet bedre?</p> </section> <section class=save id=lagre-prosjektet-2> <h2 class=save id=lagre-prosjektet-2>Lagre prosjektet</h2> <p><strong>Veldig bra! Nå er du ferdig og kan spille det nye spillet du har laget!</strong></p> <p>Ikke glem å dele spillet ditt med venner og familie ved å trykke på <code>Legg ut</code> i menyen!</p> </section> </section>'}});