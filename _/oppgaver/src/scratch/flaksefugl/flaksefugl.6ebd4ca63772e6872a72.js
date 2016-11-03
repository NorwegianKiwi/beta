webpackJsonp([70,283],{11:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAIAAAAL/BNYAAAAA3NCSVQICAjb4U/gAAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAAWhJREFUKJGV001LAmEQB/CZTSQRF1JEyIMHk67b+gFs6ZCH6mLUat+m+iC9UDft4kU7lUJpkVHdTExccy3yYC2G4jMdNjZbXannOj9m/jPw4LOqwp8fZ1UgIiICgEKxuLO9+1StTtIAgIi1Wm1/78Ax7Zj1+y01ESHie6dzdHg86PfFsGC328drnRJRMnmiNBS3Z0YQBL1ks4qRO8/l8/kpjlsQw26PZ/yWjDFEVBQlk8nYbDae5yVpUR9o1kTEcRwAnJ3l2m9txgbSkuT1eg1g1gBQr9dvrq8AMTgXjEQixia/tNH4/u6h2/10uXhZlp1Op0HNGgDUZjObPWVEm/GNQCAwTH+00TidTmvaRzwhh0Vx9FDfF0TEXq+n1BuNhhqNLutxGWN6C7PWNC2VTJVKt2FRjK3HhqeN0ZVK5eKygADl8uNoAHPul9YrMca7+NW1FSObZe5mSw3Nh7YSCZ/PN6E3/us3fAGf6qiB37u5YAAAAABJRU5ErkJggg=="},185:function(e,t,l){e.exports=l.p+"_/oppgaver/src/scratch/flaksefugl/flaksefugl.671944.png"},1063:function(e,t,l){e.exports={frontmatter:l(399),content:l(1713)}},1713:function(e,t,l){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Nå skal vi lage vår egen versjon av spillet <strong>Flappy Bird</strong>. Du styrer fuglen <strong>Flakse</strong> ved å trykke på mellomromtasten for å flakse med vingene. Du må holde Flakse flyvende og prøve å styre mellom rørene!</p> <figure><img src="+l(185)+' alt=""/></figure> </section> <section class=activity id=steg-1-fa-flakse-til-a-falle> <h1 class=activity id=steg-1-fa-flakse-til-a-falle>Steg 1: Få Flakse til å falle</h1> <figure><em>Vi begynner enkelt, ved å introdusere Flakse og få ham til å falle.</em></figure> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Start et nytt Scratch-prosjekt. Slett katten ved å høyreklikke den og velge <code>Slett</code>. Alternativt kan du klikke på saksen i topplinjen, og deretter på katten.</p> </li> <li> <figure>Bytt ut bakgrunnen med et landskap. <code>Desert</code> er et bra valg.</figure> </li> <li> <p>Legg til Flakse-figuren. Du trenger en figur med drakter for vinger opp og vinger ned. <code>Parrot</code> er et bra forslag.</p> </li> <li> <figure>Bytt navn på figuren til <code>Flakse</code>.</figure> </li> <li> <p>Gi Flakse dette skriptet:</p> <pre class=blocks>når grønt flagg klikkes\ngå til x: (-50) y: (0)\nfor alltid\n    endre y med (-3)\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet> <h2 class=flag id=test-prosjektet>Test prosjektet</h2> <figure><strong>Klikk det grønne flagget.</strong></figure> <ul> <li>Starter Flakse midt på skjermen og faller mot bunnen?</li> </ul> </section> </section> <section class=activity id=steg-2-fa-flakse-til-a-fly> <h1 class=activity id=steg-2-fa-flakse-til-a-fly>Steg 2: Få Flakse til å fly</h1> <figure><em>Nå vil vi at Flakse skal fly oppover når du trykker mellomromtasten.</em></figure> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Klikk på <code>Drakter</code> og gi de to draktene navnene <code>Vinger opp</code> og <code>Vinger ned</code>.</p> </li> <li> <figure>Gå tilbake til <code>Skript</code> og legg til dette skriptet:</figure> <pre class=blocks>Når [mellomrom v] trykkes\nbytt drakt til [Vinger ned v]\ngjenta (10) ganger\n    endre y med (6)\nslutt\nbytt drakt til [Vinger opp v]\ngjenta (10) ganger\n    endre y med (6)\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-2> <h2 class=flag id=test-prosjektet-2>Test prosjektet</h2> <figure><strong>Klikk det grønne flagget.</strong></figure> <ul> <li> <p>Klarer du å kontrollere Flakse med mellomromtasten?</p> </li> <li> <p>La du merke til at om du trykker mellomrom flere ganger raskt etterhverandre så flakser Flakse av og til bare en gang? Det er det neste vi skal fikse.</p> </li> </ul> </section> </section> <section class=activity id=steg-3-gjor-kontrollen-bedre> <h1 class=activity id=steg-3-gjor-kontrollen-bedre>Steg 3: Gjør kontrollen bedre</h1> <p><em>Vi vil at Flakse skal reagere hver gang vi trykker mellomrom. Men når vi trykker mellomrom så starter to løkker etter hverandre. Hvis vi trykker mellomrom før disse to løkkene er ferdig så skjer det ikke noe. For å løse dette problemet skal vi bruke en variabel til å telle hvor mange flaks vi trenger å gjøre.</em></p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Lag en ny variabel og kall den <code class=blockdata>flaks</code>. Velg at den bare skal gjelde <code>For denne figuren</code>. Klikk <code>OK</code>. Skjul variabelen ved å ta vekk avhukingen foran variabelen.</p> </li> <li> <p>Vi skal nå gjøre om på skriptet som starter med <code class=blockevents>når mellomrom trykkes</code>. Dra i <code class=blocklooks>bytt drakt til Vinger ned</code>-klossen slik at den og klossene under løsner. Legg disse klossene til siden. Vi skal bruke dem igjen straks.</p> </li> <li> <p>Lag et nytt skript. Legg merke til at klossene du nettopp la til siden kan brukes igjen inne i <code class=blockcontrol>gjenta til flaks = 0</code>-løkken:</p> <pre class=blocks>når grønt flagg klikkes\nsett [flaks v] til [0]\nbytt drakt til [Vinger opp v]\nfor alltid\n    gjenta til &lt;(flaks) = [0]&gt;\n        endre [flaks v] med (-1)\n        bytt drakt til [Vinger ned v]\n        gjenta (10) ganger\n            endre y med (6)\n        slutt\n        bytt drakt til [Vinger opp v]\n        gjenta (10) ganger\n            endre y med (6)\n        slutt\n    slutt\nslutt\n</pre> </li> <li> <figure>Til slutt, legg følgende skript på <code class=blockevents>når mellomrom trykkes</code>-klossen som ble til overs tidligere:</figure> <pre class=blocks>når [mellomrom v] trykkes\nendre [flaks v] med (1)\n</pre> </li> <li> <p>Du skal nå ha tre forskjellige skript på Flakse.</p> </li> </ul> </section> <section class=flag id=test-prosjektet-3> <h2 class=flag id=test-prosjektet-3>Test prosjektet</h2> <figure><strong>Klikk det grønne flagget.</strong></figure> <ul> <li>Flakser Flakse en gang for hver gang du trykker mellomromtasten?</li> </ul> </section> </section> <section class=activity id=steg-4-legg-til-rorene> <h1 class=activity id=steg-4-legg-til-rorene>Steg 4: Legg til rørene</h1> <figure><em>Vi vil legge til noen hindringer som Flakse kan fly igjennom.</em></figure> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Legg til en ny figur ved å klikke på <em>Tegn ny figur</em>-knappen, <img src='+l(11)+' alt="Tegn ny figur"/>.</p> </li> <li> <p>Hvis det står <code>Punktgrafikk</code> nede til høyre, klikk på <code>Bytt til vektorgrafikk</code>-knappen.</p> </li> <li> <figure>Klikk på <code>Zoom -</code> så du kan se hele tegneområdet.</figure> </li> <li> <p>Klikk på <code>Rektangel</code>, velg en farge og klikk på <code>Fylt rektangel</code>-knappen nederst til venstre.</p> </li> <li> <figure>Klikk og dra to bokser, en fra toppen og en fra bunnen i midten av tegneflaten. Det skal se omtrent sånn ut:</figure> <figure><img src='+l(2397)+' alt=""/></figure> </li> <li> <p>Du kan skyggelegge rørene ved å klikke på <code>Fyll farge</code> og klikke på en av skyggemetodene i firkantene nede til venstre. Velg to varianter av samme farge: en for forgrunnen og en for bakgrunnen. Når du klikker på en firkant med fylleverktøyet får du en fin effekt.</p> </li> <li> <figure>Gi den nye figuren navnet <code>Rør</code>.</figure> </li> </ul> </section> </section> <section class=activity id=steg-5-fa-rorene-til-a-bevege-seg> <h1 class=activity id=steg-5-fa-rorene-til-a-bevege-seg>Steg 5: Få rørene til å bevege seg</h1> <p><em>Nå skal vi få rørene til å flytte seg og gjøre høyden tilfeldig slik at vi får en hinderløype til Flakse.</em></p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Klikk på <code>Rør</code>-figuren og velg <code>Skript</code>.</p> </li> <li> <p>Legg til disse to skriptene:</p> <pre class=blocks>når grønt flagg klikkes\nskjul\nsett størrelse til (200)%\nfor alltid\n    lag klon av [meg v]\n    vent (2) sekunder\nslutt\n\nnår jeg starter som klon\ngå til x: (240) y: (tilfeldig tall fra (-80) til (80))\nvis\ngjenta (120) ganger\n    endre x med (-4)\nslutt\nslett denne klonen\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-4> <h2 class=flag id=test-prosjektet-4>Test prosjektet</h2> <figure><strong>Klikk det grønne flagget.</strong></figure> <ul> <li> <p>Kommer det mange rør flygende mot Flakse?</p> </li> <li> <p>Har rørene åpninger til å fly gjennom?</p> </li> <li> <p>Om du synes det er vanskelig å fly Flakse gjennom åpningene kan du for eksempel endre på åpningen mellom rørene med tegneverktøyet. En annen mulighet er å lage Flakse mindre.</p> </li> </ul> </section> </section> <section class=activity id=steg-6-finn-ut-om-flakse-kraesjer-med-rorene> <h1 class=activity id=steg-6-finn-ut-om-flakse-kraesjer-med-rorene>Steg 6: Finn ut om Flakse kræsjer med rørene</h1> <p><em>For at spillet skal bli vanskelig må spilleren styre Flakse gjennom åpningene mellom rørene uten å komme borti hverken rør eller kanten av skjermen. Vi skal legge til noen klosser som merker om Flakse kræsjer.</em></p> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>Vi legger til en lyd som vi kan spille når Flakse kræsjer. Klikk på <code>Flakse</code>-figuren og så på <code>Lyder</code>.</p> </li> <li> <figure>Klikk på <code>Velg lyd fra biblioteket</code>.</figure> </li> <li> <p>Velg en kræsjelyd for <code>Flakse</code>. <code>Screech</code> er en kul lyd.</p> </li> <li> <figure>Klikk deg tilbake til <code>Skript</code>-fanen.</figure> </li> <li> <p>Legg til dette skriptet på Flakse:</p> <pre class=blocks>når grønt flagg klikkes\nvent til &lt;&lt;berører [kant v]?&gt; eller &lt;berører [Rør v]?&gt;&gt;\nspill lyden [screech v]\nsi [Du tapte!]\nsend melding [Tap v]\nstopp [andre skript i figuren v] :: control\n</pre> </li> <li> <figure>Klikk så på <code>Rør</code>-figuren og legg til dette skriptet:</figure> <pre class=blocks>når jeg mottar [Tap v]\nstopp [andre skript i figuren v] :: control\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-5> <h2 class=flag id=test-prosjektet-5>Test prosjektet</h2> <figure><strong>Klikk det grønne flagget.</strong></figure> <ul> <li>Stopper spillet hvis Flakse kommer borti et rør eller kanten av brettet?</li> </ul> </section> </section> <section class=activity id=steg-7-legg-til-poeng> <h1 class=activity id=steg-7-legg-til-poeng>Steg 7: Legg til poeng</h1> <p><em>Spilleren skal score ett poeng hver gang Flakse flyr gjennom en røråpning.</em></p> <section class=check id=sjekkliste-7> <h2 class=check id=sjekkliste-7>Sjekkliste</h2> <ul> <li> <p>Vi legger til en lyd hver gang Flakse scorer ett poeng. Klikk på <code>Rør</code>-figuren og legg til en lyd. <code>Bird</code> er et lurt valg.</p> </li> <li> <figure>Gå tilbake til <code>Skript</code>-fanen.</figure> </li> <li> <p>Lag en ny variabel som skal gjelde <code>For alle figurer</code>. Kall den <code class=blockdata>poeng</code>.</p> </li> <li> <figure>Legg til et skript som setter poengene til 0 når det grønne flagget klikkes. Dette klarer du selv!</figure> </li> <li> <figure>Legg så til dette skriptet på <code>Rør</code>:</figure> <pre class=blocks>når jeg starter som klon\nvent til &lt;(x-posisjon) &lt; ([x-posisjon v] av [Flakse v])&gt;\nendre [poeng v] med (1)\nspill lyden [bird v]\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-6> <h2 class=flag id=test-prosjektet-6>Test prosjektet</h2> <figure><strong>Klikk det grønne flagget.</strong></figure> <ul> <li> <p>Scorer du poeng når Flakse flyr forbi en åpning mellom rørene?</p> </li> <li> <p>Hvordan kan du lage dette spillet lettere eller vanskeligere?</p> </li> </ul> </section> <section class=save id=lagre-prosjektet-ditt> <h2 class=save id=lagre-prosjektet-ditt>Lagre prosjektet ditt</h2> <figure>Supert, du har laget ferdig din egen enkle versjon av Flappy Bird-spillet.</figure> <p>Her er noen flere ting du kan prøve:</p> </section> <section class=challenge id=utfordring-1-legg-til-tyngdekraft> <h2 class=challenge id=utfordring-1-legg-til-tyngdekraft>Utfordring 1: Legg til tyngdekraft</h2> <figure>Når noe faller på grunn av tyngdekraft øker farten jo lenger fallet varer. Vi skal prøve å etterligne denne måten å falle på.</figure> <ul> <li> <p>Legg til en ny variabel for <code>Flakse</code> som heter <code class=blockdata>løft</code>. Variablen skal gjelde for <code>For denne figuren</code>.</p> </li> <li> <p>Endre Flakses falleskript:</p> <pre class=blocks>når grønt flagg klikkes\nsett [løft v] til [0]\ngå til x: (-50) y: (0)\nfor alltid\n    endre y med (løft)\n    endre [løft v] med (-0.2)\nslutt\n</pre> </li> <li> <p>Deretter må vi endre Flakses flakseskript:</p> <pre class=blocks>når grønt flagg klikkes\nsett [flaks v] til [0]\nbytt drakt til [Vinger opp v]\nfor alltid\n    gjenta til &lt;(flaks) = [0]&gt;\n        endre [flaks v] med (-1)\n        bytt drakt til [Vinger ned v]\n        endre [løft v] med (4)\n        vent (0.1) sekunder\n        bytt drakt til [Vinger opp v]\n        vent (0.1) sekunder\n    slutt\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-7> <h2 class=flag id=test-prosjektet-7>Test prosjektet</h2> <figure><strong>Klikk det grønne flagget.</strong></figure> <ul> <li>Faller Flakse fortere jo lenger han detter?</li> </ul> </section> <section class=challenge id=utfordring-2-fall-ut-av-skjermen> <h2 class=challenge id=utfordring-2-fall-ut-av-skjermen>Utfordring 2: Fall ut av skjermen</h2> <p>Når spilleren taper vil vi at Flakse faller ned og ut av skjermen.</p> <ul> <li> <p>Bytt ut <code class=blockevents>send meldingen Tap</code>-klossen med <code class=blockevents>send meldingen Fall</code> i skriptet som merker når Flakse kræsjer i kanten eller i et rør. Slett <code class=blockcontrol>stopp</code>-klossen på slutten av skriptet.</p> </li> <li> <figure>Legg til disse nye skriptene på <code>Flakse</code>-figuren:</figure> <pre class=blocks>når jeg mottar [Fall v]\nfor alltid\n    vend høyre (5) grader\nslutt\n\nnår jeg mottar [Fall v]\ngjenta til &lt;(y-posisjon) &lt; [-180]&gt;\n    endre y med (løft)\n    endre [løft v] med (-0.2)\nslutt\nskjul\nsend melding [Tap v]\nstopp [andre skript i figuren v] :: control\n</pre> </li> <li> <p>Du må også legge til en <code class=blocklooks>vis</code>-kloss samt sette Flakses retning når spillet starter på nytt.</p> </li> </ul> </section> <section class=flag id=test-prosjektet-8> <h2 class=flag id=test-prosjektet-8>Test prosjektet</h2> <figure><strong>Klikk det grønne flagget.</strong></figure> <ul> <li> <p>Faller Flakse ut av skjermen når han treffer et rør?</p> </li> <li> <p>Flyr Flakse riktig vei når spillet starter igjen?</p> </li> </ul> </section> <section class=challenge id=utfordring-3-legg-til-rekorder> <h2 class=challenge id=utfordring-3-legg-til-rekorder>Utfordring 3: Legg til rekorder</h2> <ul> <li> <p>Lag en ny variabel og merk av <code>Nett variabel (lagret på nett)</code>-boksen. Kall variabelen <code class=blockdata>Rekord</code>.</p> </li> <li> <p>Når spillet er ferdig må vi sjekke om det er en ny rekord. Det gjør vi ved å endre <code>Tap</code>-skriptet på <code>Rør</code> slik:</p> <pre class=blocks>når jeg mottar [Tap v]\nhvis &lt;(poeng) &gt; (Rekord)&gt;\n    sett [Rekord v] til (poeng)\nslutt\nstopp [andre skript i figuren v] :: control\n</pre> </li> </ul> </section> <section class=protip id=nettvariabler> <h2 class=protip id=nettvariabler>Nettvariabler</h2> <p>Nettvariabler gir deg muligheten til å huske ting mellom forskjellige brukere og forskjellige kjøringer av spillet ditt (i motsetning til vanlige variabler hvor verdiene blir nullstilt hver gang du trykker det grønne flagget). Dette er nøyaktig det vi trenger for å huske hva rekorden i spillet er.</p> <p>Nettvariabler er fortsatt litt eksperimentelle, og for tiden får ikke nye brukere av Scratch lov til å lage slike variabler. Hvis du ikke får lov til å lage en slik variabel må du hoppe over den siste utfordringen.</p> </section> <section class=flag id=test-prosjektet-9> <h2 class=flag id=test-prosjektet-9>Test prosjektet</h2> <figure><strong>Klikk det grønne flagget.</strong></figure> <ul> <li>Oppdaterer rekorden seg hver gang du setter ny rekord?</li> </ul> </section> <section class=save id=lagre-prosjektet-ditt-2> <h2 class=save id=lagre-prosjektet-ditt-2>Lagre prosjektet ditt</h2> <figure><strong>Gratulerer, du er ferdig med spillet! Hva er rekorden din?</strong></figure> <p>Ikke glem å dele spillet med vennene dine. Trykk på <code>Legg ut</code> for at andre skal få prøve!</p> </section> </section>'},2397:function(e,t,l){e.exports=l.p+"_/oppgaver/src/scratch/flaksefugl/pipe_design.0dd764.png"}});