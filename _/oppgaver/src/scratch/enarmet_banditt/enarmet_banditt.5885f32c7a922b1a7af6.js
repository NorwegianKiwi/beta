webpackJsonp([64,262],{3:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAZNJREFUOE+dk0lPwkAUx/tBcTmw6QELmojWBTFuKILKIkuECiZqtAh6QTyBQkgwMRzkKmfOnJ99ozOZsW1KnORlZtr3fv2/pRIASHamqiXdxdrPFoDBjqkZ6HS7liBbSPQ4BgiR/YH/QdLpDAFQw7tZWqZK2p0OuNxeAUBBqdS5AWSAFIuXpsG8otrjkwASIG/tti0AYaiST0t61QPpg+CqMhEEQdc3tySu0XgBqVqtkcBCQZ0YQNWgIjSSDp8vnt2eOfgcDECrPICytgGO6Vlwe+fJ/tc3mUz/QCJHUeFlqXyFUtkajUaA1my1QA4sCb4YzwrLtxQhaDu7ewykaRXIZHMQi58ySL3+TOoidAelKso6sa/hkKQ0Ho8JqNd7J3smm9endxESiRRriAAJhbdJPWgAgqgqPOPCu0/2W88JSqvoxXTqFY/FT6DZbBE1aAhWS2U44xTQ0bD8AX0LsqEToa2wYeQNNeGn8CByyCDLwRXTYFslufwFOF0eZnjnP8KfLdO5u9dg81f+vq7qo9+3hHwDiSt9l+qqTUcAAAAASUVORK5CYII="},10:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAIAAAD9MqGbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAALVJREFUOE+tk7EOwjAMRPv/31BVqAN06IYq8SsVQ8VAOwB7tvCkq9wQkKqaRhkS++5sx05RVrVvFz4arJn5eL76/rqqAgakYDMTU4xR5EN9PDWtqXDGwjXFLMzUgep9nIw5DDdlZNIfMXWRmxVCMCY0GbNylhciJQOBM6ZoLLxKO49JPUpMuHN3AYHRsqCEtP7fXUkRkvjef/czk9wW01+n/239/bQp2TZD/rn1/5XV/7XnJLwBdij0j5HCDzIAAAAASUVORK5CYII="},178:function(e,t,r){e.exports=r.p+"_/oppgaver/src/scratch/enarmet_banditt/enarmet_banditt.d57558.png"},1e3:function(e,t,r){e.exports={frontmatter:r(381),content:r(1603)}},1603:function(e,t,r){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <figure>Dette er et spill med tre figurer som endrer utseende. Din oppgave er å stoppe figurene én etter én, slik at alle tre blir like.</figure> <figure><img src="+r(178)+' alt=""/></figure> </section> <section class=activity id=steg-1-lag-en-figur-som-bytter-drakt> <h1 class=activity id=steg-1-lag-en-figur-som-bytter-drakt>Steg 1: Lag en figur som bytter drakt</h1> <figure><em>La oss importere de bildene vi trenger for spillet.</em></figure> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Start et nytt Scratch-prosjekt. <strong>Slett katten</strong> ved å høyreklikke og velge <code>slett</code>.</p> </li> <li> <p>Importer <strong>en ny figur</strong>, <img src='+r(3)+' alt="Velg figur fra biblioteket"/>. Velg den figuren du vil.</p> </li> <li> <p>Gå til <code class=blocklightgrey>Drakter</code>, og importer to ekstra drakter fra biblioteket, slik at figuren har tre drakter til sammen. Det er bra om draktene er ganske forskjellige.</p> </li> </ul> </section> </section> <section class=activity id=steg-2-fa-figuren-til-a-rullere> <h1 class=activity id=steg-2-fa-figuren-til-a-rullere>Steg 2: Få figuren til å rullere</h1> <p><em>Nå som figuren har noen drakter, ønsker vi at den skal veksle mellom dem.</em></p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <figure>Klikk på <code>Skript</code>-fanen,</figure> </li> <li> <p>Legg til dette skriptet:</p> <pre class=blocks>Når grønt flagg klikkes\nfor alltid\n    neste drakt\n    vent (0.5) sekunder\nslutt\n</pre> </li> <li> <p>Tilpass tiden i <code class=blockcontrol>vent</code>-klossen til figuren endrer drakt i et passende tempo. Hva tror du ville skjedd om vi ikke hadde med <code class=blockcontrol>vent</code>-klossen?</p> </li> </ul> </section> <section class=flag id=test-prosjektet> <h2 class=flag id=test-prosjektet>Test Prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li>Endrer figuren drakt i et fornuftig tempo?</li> </ul> </section> <section class=try id=ting-a-prove> <h2 class=try id=ting-a-prove>Ting å prøve</h2> <p>Tilpass tiden i <code class=blockcontrol>vent</code>-klossen. Hvilke tall gjør spillet for vanskelig eller for lett?</p> </section> </section> <section class=activity id=steg-3-frys-ruletten> <h1 class=activity id=steg-3-frys-ruletten>Steg 3: Frys ruletten!</h1> <p><em>Nå skal vi se hvordan vi kan få draktene til å stoppe når vi klikker på figuren.</em></p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <p>Bra! Vi kan få draktene til å bytte i det uendelige, men hvordan får vi de til å stoppe når vi klikker på de? En måte å gjøre dette på er ved å bruke en variabel som setter statusen til figuren. Dette vil vi se at er praktisk også senere.</p> <ul> <li> <p>Klikk på <code class=blockdata>Data</code> og <code>Lag en variabel</code>. Kall variabelen <code class=blockdata>stoppet</code> og huk av for <code>For denne figuren</code>. Fjern avhukingen foran variabelen slik at den ikke vises på scenen.</p> </li> <li> <p>På starten av spillet vil ikke figuren ha blitt klikket så da setter vi variabelen til <code>0</code>.</p> <pre class=blocks>når grønt flagg klikkes\nsett [stoppet v] til [0]\nfor alltid\n    neste drakt\n    vent (0.5) sekunder\nslutt\n</pre> </li> <li> <p>Nå vil vi sette variabelen <code class=blockdata>stoppet</code> til <code>1</code> når noen klikker på figuren.</p> <pre class=blocks>når denne figuren klikkes\nsett [stoppet v] til [1]\n</pre> </li> <li> <p>Til slutt må vi få figuren til å slutte å forandre drakt når variabelen <code class=blockdata>stoppet</code> blir <code>1</code>. Legg til en <code class=blockcontrol>hvis</code>-løkke og bruk en <code class=blockoperators>_ = _</code> operator-kloss for å sjekke om <code class=blockdata>stoppet</code> fremdeles er <code>0</code>.</p> <pre class=blocks>når grønt flagg klikkes\nsett [stoppet v] til [0]\nfor alltid\n    hvis &lt;(stoppet) = [0]&gt;\n        neste drakt\n        vent (0.5) sekunder\n    slutt\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-2> <h2 class=flag id=test-prosjektet-2>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Endres drakten før du klikker på den?</p> </li> <li> <p>Stopper den når du klikker på den?</p> </li> </ul> <figure><strong>Start skriptet en gang til ved å klikke på det grønne flagget igjen.</strong></figure> <ul> <li> <p>Stopper figuren når du setter musepekeren over den uten å klikke?</p> </li> <li> <figure>Stopper den når du klikker andre steder på scenen eller andre steder i Scratch?</figure> </li> </ul> </section> </section> <section class=activity id=steg-4-lag-de-andre-figurene> <h1 class=activity id=steg-4-lag-de-andre-figurene>Steg 4: Lag de andre figurene</h1> <figure><em>Nå trenger vi to figurer til for å gjøre spillet komplett!</em></figure> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p><strong>Dupliser figuren din</strong> ved å høyreklikke på den og velge <code>lag en kopi</code>.</p> </li> <li> <p>Lag en kopi til slik at du har tre figurer på skjermen. Vi har kalt våre figurer <code>Figur1</code>, <code>Figur2</code> og <code>Figur3</code>.</p> </li> <li> <p>Flytt figurene slik at de er en linje. Gjør dem mindre med krympeknappen, <img src='+r(10)+" alt=krymp />, hvis det trengs.</p> </li> </ul> </section> <section class=flag id=test-prosjektet-3> <h2 class=flag id=test-prosjektet-3>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li>Alle figurene skal nå forandre seg. Prøv å stoppe dem, én etter én!</li> </ul> </section> </section> <section class=activity id=steg-5-start-hver-figur-med-en-tilfeldig-drakt> <h1 class=activity id=steg-5-start-hver-figur-med-en-tilfeldig-drakt>Steg 5: Start hver figur med en tilfeldig drakt</h1> <p><em>La oss få figurene til å skifte til en tilfeldig drakt når det grønne flagget klikkes.</em></p> <p>Når du starter spillet vil du se at alle figurene skifter drakt samtidig. Spillet vil bli morsommere (og vanskeligere) dersom de endres litt mer uforutsigbart.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Hvis du ser under <code class=blocklightgrey>Drakter</code>-fanen til en figur vil du se at hver drakt har et nummer. Du kan spesifisere hvilken drakt figuren skal ha ved å bruke enten navnet eller nummeret.</p> </li> <li> <p>For å få figuren til å starte med en tilfeldig drakt, la oss legge til en <code class=blocklooks>bytt drakt til</code>-kloss med <code class=blockoperators>tilfeldig tall fra 1 til 3</code> for å velge draktnummer.</p> </li> <li> <p>Vi kan også bruke den samme klossen i <code class=blockcontrol>for alltid</code>-løkken slik at figuren skifter til en ulik drakt hver gang den forandres.</p> <pre class=blocks>når grønt flagg klikkes\nsett [stoppet v] til [0]\nbytt drakt til (tilfeldig tall fra (1) til (3))\nfor alltid\n    hvis &lt;(stoppet) = [0]&gt;\n        bytt drakt til (tilfeldig tall fra (1) til (3))\n        vent (0.5) sekunder\n    slutt\nslutt\n</pre> </li> <li> <p>Gjør det samme for hver av de andre figurene.</p> </li> </ul> </section> <section class=flag id=test-prosjektet-4> <h2 class=flag id=test-prosjektet-4>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Alle figurene skal nå skifte drakter i tilfeldig rekkefølge.</p> </li> <li> <p>Hvordan må vi forandre skriptet dersom vi legger til en annen drakt?</p> </li> </ul> </section> <section class=try id=ting-a-prove-2> <h2 class=try id=ting-a-prove-2>Ting å prøve</h2> <figure><strong>Gjør spillet vanskeligere!</strong></figure> <p>Se om du klarer å endre vanskelighetsgraden på et eller annet vis. Å få draktene til å rullere raskere er enkelt. Prøv å gjøre noe litt mer oppfinnsomt. Noen muligheter du kan tenke på er:</p> <ul> <li> <p>Endre antall drakter hver figur har.</p> </li> <li> <p>Gi noen av figurene helt forskjellige drakter.</p> </li> <li> <p>Bruk forskjellige tider mellom hvert draktbytte.</p> </li> </ul> <figure><strong>Lek og kom opp meg egne idéer!</strong></figure> <p>Hver gang du endrer noe, tenk på om det vil gjøre spillet lettere eller vanskeligere. Er spillet for lett eller for vanskelig? Hvordan kan du justere det slik at det blir akkurat passe?</p> </section> </section> <section class=activity id=steg-6-vis-en-melding-nar-spillet-er-over> <h1 class=activity id=steg-6-vis-en-melding-nar-spillet-er-over>Steg 6: Vis en melding når spillet er over</h1> <p><em>La oss vise en <code>Spillet er slutt</code>-melding når spillet er over.</em></p> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <p>La oss først hente en ny bakgrunn som vi viser når spillet er over.</p> <ul> <li> <p>Klikk på scenen og deretter på <code class=blocklightgrey>Bakgrunner</code>-fanen. Forandre navnet på den eksisterende bakgrunnen til <code>Spill</code>.</p> </li> <li> <p>Lag en kopi av bakgrunnen og legg til en tekst som sier <code>Spillet er slutt!</code>. Du kan forandre størrelsen på teksten ved å klikke på den og dra i hjørnene. Kall bakgrunnen <code>Slutt</code>.</p> </li> <li> <p>Klikk på <code>Skript</code>-fanen for scenen og pass på at du bytter til <code>Spill</code>-bakgrunnen når spillet starter.</p> </li> <li> <p>Hvordan kan vi sjekke om alle figurene har stoppet? Husk at vi brukte <code class=blockdata>stoppet</code>-variabelene for å sjekke om figurene hadde blitt klikket på. La oss sjekke <code class=blockdata>stoppet</code>-variabelen for <code>Figur3</code> for å se om den er klikket. For å gjøre dette bruker vi en <code class=blocksensing>x-posisjon av Figur3</code>-kloss fra <code class=blocksensing>Sansning</code>, men hvor vi bytter ut <code>x-posisjon</code> med <code>stoppet</code>.</p> <pre class=blocks>når grønt flagg klikkes\nbytt bakgrunn til [Spill v]\nvent til &lt;([stoppet v] av [Figur3 v])  = [1]&gt;\nbytt bakgrunn til [Slutt v]\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-5> <h2 class=flag id=test-prosjektet-5>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Vises <code>Spillet er slutt</code>-meldingen når du klikker på <code>Figur3</code>?</p> </li> <li> <p>Hva skjer dersom du stopper <code>Figur3</code> før du har klikket begge de andre figurene?</p> </li> </ul> <figure>La oss forandre skriptet slik at det vil funke uansett hvilken rekkefølge figurene stoppes i.</figure> </section> <section class=check id=sjekkliste-7> <h2 class=check id=sjekkliste-7>Sjekkliste</h2> <ul> <li> <p>For å sjekke om <strong>alle tre</strong> figurene sine <code class=blockdata>stoppet</code>-variabler er satt til <code>1</code>, kan vi bruke <code class=blockoperators>og</code>-operatoren. Dette er en komplisert kloss som kan være litt trøblete å lage, så forsøk å gjøre ett steg av gangen. Legg merke til at vi har satt sammen to <code class=blockoperators>og</code>-klosser, tre <code class=blockoperators>_ = _</code>-operatorer og tre <code class=blocksensing>stoppet av Figur</code>-klosser.</p> <pre class=blocks>når grønt flagg klikkes\nbytt bakgrunn til [Spill v]\nvent til &lt; &lt; &lt;([stoppet v] av [Figur1 v]) = [1]&gt; og &lt;([stoppet v] av [Figur2 v]) = [1]&gt; &gt; og &lt;([stoppet v] av [Figur3 v]) = [1]&gt; &gt;\nbytt bakgrunn til [Slutt v]\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-6> <h2 class=flag id=test-prosjektet-6>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li>Vises <code>Spillet er slutt</code>-meldingen når alle tre figurene er stoppet, uansett hvilken rekkefølge du klikket på dem?</li> </ul> </section> </section> <section class=activity id=steg-7-fortell-spilleren-om-de-vant-eller-tapte> <h1 class=activity id=steg-7-fortell-spilleren-om-de-vant-eller-tapte>Steg 7. Fortell spilleren om de vant eller tapte.</h1> <p><em>Målet med spillet er å klikke på figurene slik at de stopper når de viser samme drakten. Det ville være praktisk å vise en melding som forteller deg om du vant eller tapte.</em></p> <section class=check id=sjekkliste-8> <h2 class=check id=sjekkliste-8>Sjekkliste</h2> <figure>Vi har tidligere skrevet kode som sjekker om spillet er over, så alt vi trenger å gjøre er å sjekke om spilleren har vunnet.</figure> <ul> <li> <p>Gå tilbake til bakgrunnene og lag en kopi av <code>Slutt</code>-bakgrunnen. Skift navn på <code>Slutt</code> til <code>Vinner</code>. Gi kopien navnet <code>Taper</code>.</p> </li> <li> <p>Legg til teksten <code>Du vant!</code> på <code>Vinner</code>-bakgrunnen.</p> </li> <li> <p>I <code>Taper</code>-bakgrunnen kan du skrive teksten <code>Du tapte!</code>.</p> </li> </ul> <figure>Nå trenger vi kode for å velge hvilken bakgrunn vi skal vise når spillet er over.</figure> <ul> <li> <p>Vi kan bruke en <code class=blockcontrol>hvis ellers</code> kloss for å se om brukeren har vunnet eller tapt ved å sammenligne <code>drakt nr.</code> (drakt nummer). Vi bruker en kloss som ligner på <code class=blocksensing>x-posisjon av Figur</code>-klossen vi brukte tidligere. Denne gangen, istedet for å se på <code class=blockdata>stoppet</code>-variabelen, skal vi sjekke <code>drakt nr.</code> og se om <code>Figur1</code> har samme drakt som <code>Figur2</code> og om <code>Figur2</code> har samme drakt som <code>Figur3</code>.</p> <pre class=blocks>når grønt flagg klikkes\nbytt bakgrunn til [Spill v]\nvent til &lt; &lt; &lt;([stoppet v] av [Figur1 v]) = [1]&gt; og &lt;([stoppet v] av [Figur2 v]) = [1]&gt; &gt; og &lt;([stoppet v] av [Figur3 v]) = [1]&gt; &gt;\nhvis &lt;&lt;([drakt nr. v]  av [Figur1 v]) = ([drakt nr. v]  av [Figur2 v])&gt; og &lt;([drakt nr. v]  av [Figur2 v]) = ([drakt nr. v] av [Figur3 v])&gt;&gt;\n    bytt bakgrunn til [Vinner v]\nellers\n    bytt bakgrunn til [Taper v]\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-7> <h2 class=flag id=test-prosjektet-7>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Vises den riktige meldingen når spillet er over?</p> </li> <li> <p>Hva skjer hvis draktnummerene ikke er like?</p> </li> </ul> <p><strong>Veldig bra!</strong> Du har nå fullført spillet, men det er fremdeles ting du kan gjøre med spillet ditt. Prøv deg på disse utfordringene!</p> </section> <section class=challenge id=utfordring-gjor-spillet-enklere-og-vanskeligere-med-tiden> <h2 class=challenge id=utfordring-gjor-spillet-enklere-og-vanskeligere-med-tiden>Utfordring: Gjør spillet enklere og vanskeligere med tiden</h2> <p>Alle er ikke like flinke til spillet. Hvordan kan du la vanskelighetsgraden <strong>avhenge av spilleren?</strong></p> <p>En måte å gjøre dette på er å <strong>endre hastigheten draktene forandres på</strong>. Du kan bruke en variabel kalt <code class=blockdata>forsinkelse</code> for å gi varigheten til hver figurs ventekloss. Hvis spilleren vinner runden kan forsinkelsen reduseres litt (for å gjøre spillet vanskeligere). Hvis spilleren taper runden kan man øke forsinkelsen litt for å gjøre spillet lettere.</p> <p>Du må sikkert vurdere å bruke en annen måte å starte spillet på istedet for å bruke <code class=blockgrey>når grønt flagg klikkes</code>. Deretter kan du lagre verdiene i variabler som huskes mellom rundene.</p> </section> <section class=save id=lagre-prosjektet> <h2 class=save id=lagre-prosjektet>Lagre prosjektet</h2> <figure><strong>Godt gjort, du er ferdig! Nå kan du nyte spillet ditt!</strong></figure> <p>Ikke glem at du kan dele spillet med alle vennene og familien din ved å klikke på <code>Legg ut</code> i topp-menyen!</p> </section> </section>"}});