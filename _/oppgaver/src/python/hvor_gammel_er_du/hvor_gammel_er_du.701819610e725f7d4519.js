webpackJsonp([215,388],{1409:function(e,s,n){e.exports={frontmatter:n(502),content:n(2512)}},2512:function(e,s){e.exports="<section class=intro id=hvor-gammel-er-du> <h1 class=intro id=hvor-gammel-er-du>Hvor gammel er du?</h1> <p>I dette oppgavesettet skal du i hvert steg lære om noen av de grunnleggende byggeklossene i python. Oppgaven gir ingen kode, men forteller hva du skal lage og hvordan du skal gjøre det. Det er derfor viktig at du leser oppgaven for å vite hva du skal gjøre. Når du har gjort alle stegene vil du sitte igjen med et program som spør hvilket år du er født og regner ut alderen din. For hver oppgave du er ferdig med bør du spørre veilederne om de kan se om du har gjort riktig. Start ved å åpne en ny blank Python-fil.</p> </section> <section class=activity id=del-1-skrive-ut-til-skjerm> <h1 class=activity id=del-1-skrive-ut-til-skjerm>Del 1: Skrive ut til skjerm</h1> <p><strong>Hva:</strong> Vi kan be datamaskinen om å skrive hva som helst av tekst eller tall.</p> <p><strong>Hvordan:</strong> Funksjonen <code>print()</code> skriver ut det som er mellom <code>()</code> . Tekst må starte og slutte med <code>'</code> slik som <code>'denne teksten'</code>.</p> <p><strong>Eksempler:</strong> Prøv dem ut og se hva som skjer.</p> <pre><code class=python>print(<span class=hljs-string>'Hei'</span>)\nprint(<span class=hljs-number>2</span>)\nprint(<span class=hljs-number>2</span>+<span class=hljs-number>2</span>)\nprint(<span class=hljs-string>'2+2'</span>)\n</code></pre> <p>Kan du forklare det som skjer?</p> <p>Husk å ta bort eksemplene når du forsetter med oppgaven</p> <section class=check id=gjore-selv> <h2 class=check id=gjore-selv>Gjøre selv</h2> <p><strong>Skriv ut teksten under. Den skal dekke 3 linjer.</strong></p> <pre><code>Hei, <span class=hljs-keyword>jeg </span>er en datamaskin.\n<span class=hljs-keyword>Jeg </span>er derfor kjempeflink i matematikk.\nSkal <span class=hljs-keyword>jeg </span>vise deg?\n</code></pre> </section> </section> <section class=activity id=del-2-variabler> <h1 class=activity id=del-2-variabler>Del 2: Variabler</h1> <p><strong>Hva:</strong> Variabler gjør at vi kan lagre tekst eller tall i datamaskinen. Tenk på det som en eske som vi putter tall eller bokstaver inni. Utenpå skriver vi hva som er inni esken. Dette er variabelnavnet.</p> <p><strong>Hvordan:</strong> For å lage en variabel skriver du navnet på variabelen som du velger selv, deretter <code>=</code> og det du ønsker å lagre i variabelen.</p> <p><strong>Eksempler:</strong> Prøv dem ut og se hva som skjer</p> <pre><code class=python>variabel = <span class=hljs-number>4</span>\npetter = <span class=hljs-string>'En gutt'</span>\nfrida = <span class=hljs-string>'En jente'</span>\net_tall = <span class=hljs-number>3</span>\nenda_et_tall = variabel + et_tall\n\nprint(frida)\nprint(frida)\nprint(petter)\nprint(variabel - et_tall)\nprint(enda_et_tall)\n</code></pre> <p>Husk å ta bort eksemplene når du forsetter med oppgaven</p> <section class=check id=gjore-selv-2> <h2 class=check id=gjore-selv-2>Gjøre selv</h2> <p><strong>Fortsett med koden du har fra del 1.</strong></p> <ul> <li> <p>Lag to variabler som du selv gir navnet på. Den ene variabelen skal være dette året, altså <span id=aar>2016</span>. Den andre variabelen skal være året du ble født i.</p> <script>document.getElementById(\"aar\").innerHTML=(new Date).getFullYear()</script> </li> <li> <p>Lag så en tredje variabel som skal inneholde alderen din. Hvordan kan du regne ut alderen ved hjelp av variablene i steget over?</p> </li> <li> <p>Skriv ut teksten: <code>Jeg regnet ut at alderen din er:</code></p> </li> <li> <p>Skriv ut variabelen som inneholder alderen din.</p> </li> </ul> </section> </section> <section class=activity id=del-3-innputt> <h1 class=activity id=del-3-innputt>Del 3: Innputt</h1> <p><strong>Hva:</strong> Innputt er en måte vi kan hente tekst som skrives på tastaturet.</p> <p><strong>Hvordan:</strong> Tekst hentes ved at du skriver: <code>input('Tekst som forteller hva en skal skrive')</code></p> <p>Skal man hente inn et tall: <code>int(input('Tekst som forteller hva en skal skrive'))</code></p> <p><strong>Eksempler:</strong> Prøv dem ut og se hva som skjer</p> <pre><code class=python>navn = input(<span class=hljs-string>'Skriv navnet ditt '</span>)\nprint(navn)\ntall = int(input(<span class=hljs-string>'Skriv et tall '</span>))\nprint(<span class=hljs-number>2</span>+tall)\n</code></pre> <section class=check id=gjore-selv-3> <h2 class=check id=gjore-selv-3>Gjøre selv</h2> <p><strong>Du skal nå endre på koden som du skrev i del 2</strong>.</p> <ul> <li>Bruk <code>input()</code> slik at variabelen for året du er født lagres ved hjelp av innputt når programmet kjøres.</li> <li>Test at det fungerer. Husk at året du skriver må være et tall, ikke tekst.</li> </ul> </section> </section> <section class=activity id=del-4-if-setningen> <h1 class=activity id=del-4-if-setningen>Del 4: If-setningen</h1> <p><strong>Hva:</strong> En <em>if-setning</em> er en måte for å bestemme hva datamaskinen skal gjøre ved å sjekke om noe er sant (if* betyr <em>hvis</em> på engelsk). Dersom <em>if-setningen</em> ikke er sann kan vi be datamaskinen gjøre noe annet, og vi bruker da <em>else</em> som er engelsk for <em>eller</em>.</p> <p><strong>Hvordan:</strong></p> <pre><code class=python><span class=hljs-keyword>if</span> dette_er_sant:\n    gjor_dette()\n<span class=hljs-keyword>elif</span> noe_annet_er_sant:\n    gjor_noe_annet()\n<span class=hljs-keyword>else</span>:\n    ingen_av_if_setningene_er_sann()\n</code></pre> <p>Her er noen eksempler på hva som kan stå bak <code>if</code> og <code>elif</code>.</p> <p><code>tall &lt; 4</code>: Sant hvis <code>tall</code> er mindre enn 4.</p> <p><code>tall &gt; 4</code>: Sant hvis <code>tall</code> er større enn 4.</p> <p><code>tall == 4</code>: Sant hvis <code>tall</code> er lik 4.</p> <p><code>tekst == 'Hei'</code>: Sant hvis <code>tekst</code> er lik <code>'Hei'</code>.</p> <p><code>'nei' in tekst</code>: Sant hvis ordet <em>nei</em> er inni <code>tekst</code>.</p> <p><strong>Eksempel:</strong> Prøv det ut og se hva som skjer.</p> <pre><code class=python>tekst = <span class=hljs-string>'Heisann'</span>\n<span class=hljs-keyword>if</span> tekst == <span class=hljs-string>'Hei'</span>:\n    print(<span class=hljs-string>'Teksten er lik Hei'</span>)\n<span class=hljs-keyword>elif</span> tekst == <span class=hljs-string>'Hoho'</span>:\n    print(<span class=hljs-string>'Teksten er lik Hoho'</span>)\n<span class=hljs-keyword>elif</span> <span class=hljs-string>'Hei'</span> <span class=hljs-keyword>in</span> tekst:\n    print(<span class=hljs-string>'Hei er inni teksten'</span>)\n<span class=hljs-keyword>else</span>:\n    print(<span class=hljs-string>'Teksten er ikke Hei eller Hoho og Hei er ikke inni teksten'</span>)\n</code></pre> <section class=check id=gjore-selv-4> <h2 class=check id=gjore-selv-4>Gjøre selv</h2> <p><strong>Fortsett med koden fra del 3.</strong></p> <ul> <li> <p>Lag en ny variabel som tar inn tekst som innputt. Teksten som kommer opp når programmet spør om innputt skal være <code>Stemmer det at du er så gammel?</code></p> </li> <li> <p>Skriv en <em>if-setning</em> som sjekker om teksten i variabelen er <code>ja</code>.</p> </li> <li> <p>Hvis teksten er <code>ja</code>, skriv ut teksten: <code>Der ser du, jeg er kjempeflink i matematikk!</code></p> </li> <li> <p>Hvis teksten ikke er <code>ja</code>, mink aldervariabelen med 1 og skriv ut den riktige alderen i lag med en forklarende tekst.</p> </li> </ul> </section> </section> "}});