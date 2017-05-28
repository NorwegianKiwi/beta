webpackJsonp([16,388],{1576:function(s,e,n){s.exports={frontmatter:n(669),content:n(2686)}},2686:function(s,e,n){s.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Denne oppgaven viser deg hvordan du kan lage et spill med JavaScript og dele det med vennene dine. Spillet kalles <em>Trykkomania</em> fordi det handler om å trykke på en ball flest mulig ganger før tiden renner ut.</p> <p>Før du starter på denne oppgaven bør du har endel erfaring med variabler, funksjoner og eventListeners i JavaScript. Dersom du ikke har det, så anbefaler vi å gjøre noen av de enklere oppgavene først.</p> <figure><img src="+n(3452)+' alt=""></figure> </section> <section class=activity id=steg-1-apne-js-bin> <h1 class=activity id=steg-1-apne-js-bin>Steg 1: Åpne JS Bin</h1> <p>Vi skal bruke JS Bin (<a href=http://jsbin.com>http://jsbin.com</a>) for å lage spillet. Hvis du aldri har brukt JS Bin før, ta en titt på oppgaven <a href=../hei_js/hei_js.html>Hei JavaScript</a>. Dersom du heller vil lage spillet i en egen fil på PCen din, så er det bare å åpne din favoritt teksteditor og hoppe til steg 2.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Åpne adressen <a href=http://jsbin.com>jsbin.com</a> i ett eget vindu.</p> </li> <li> <p>Velg å vise <strong>JavaScript</strong> og <strong>Output</strong>. Skjul de andre fanene ved å trykke på de.</p> <figure><img src='+n(3445)+" alt=\"\"></figure> </li> <li> <p>I <strong>JavaScript</strong> skriver vi koden.</p> </li> <li> <p>I <strong>Output</strong> vises websiden.</p> </li> <li> <p>Når du starter er begge fanene tomme.</p> </li> </ul> </section> </section> <section class=activity id=steg-2-lage-en-ball> <h1 class=activity id=steg-2-lage-en-ball>Steg 2: Lage en ball</h1> <p>Vi skal bruke JavaScript til å lage innholdet på websiden. Dette betyr at vi skal bruke JavaScript til å lage <em>HTML</em>. Du trenger ikke kunne noe spesielt om HTML, men om du ønsker lære om HTML, se <a href=../introduksjon_til_web/introduksjon_til_web.html>oppgaven Introduksjon til web</a>.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Vi begynner med å lage en funksjon som heter <code>Ball</code>:</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n\n}\n</code></pre> </li> <li> <p>Inni funksjonen lager vi ett nytt <code>div</code>-element:</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n}\n</code></pre> </li> <li> <p><code>var el</code> betyr at elementet får navn <code>el</code>.</p> </li> <li> <p>Vi kan nå gi elementet en stil:</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n  el.style.backgroundColor = <span class=hljs-string>'black'</span>;\n  el.style.width = <span class=hljs-string>'60px'</span>;\n  el.style.height = <span class=hljs-string>'60px'</span>;\n}\n</code></pre> </li> <li> <p><code>el.style.backgroundColor = 'black'</code> gjør ballen svart.</p> </li> <li> <p><code>el.style.width = '60px'</code> gjør ballen 60 <a href=https://no.wikipedia.org/wiki/Piksel>piksler</a> bred.</p> </li> <li> <p><code>el.style.height = '60px'</code> gjør ballen 60 piksler høy.</p> </li> <li> <p>La oss legge ballen til siden:</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n  el.style.backgroundColor = <span class=hljs-string>'black'</span>;\n  el.style.width = <span class=hljs-string>'60px'</span>;\n  el.style.height = <span class=hljs-string>'60px'</span>;\n  <span class=hljs-built_in>document</span>.body.appendChild(el);\n}\n</code></pre> </li> <li> <p>For at ballen skal vises, må vi kjøre funksjonen ved hjelp av denne koden:</p> <pre><code class=js>Ball();\n</code></pre> </li> <li> <p>Vises en &quot;ball&quot; i <strong>Output</strong>?</p> <figure><img src="+n(3446)+" alt=\"\"></figure> </li> </ul> <p>Ok, så den var ikke akkurat rund. Vi kan bruke <code>el.style.borderRadius</code> for å runde av hjørnene. Siden ballen er <code>60px</code> bred og høy, så avrunder vi kantene med <code>30px</code>, altså halvparten av 60.</p> <ul> <li> <p>Legg koden under de andre <code>el.style</code>-setningene:</p> <pre><code class=js>el.style.borderRadius = <span class=hljs-string>'30px'</span>;\n</code></pre> </li> <li> <p>Fikk du en rund ball?</p> </li> </ul> </section> <section class=challenge id=utforsk> <h2 class=challenge id=utforsk>Utforsk</h2> <p>Om du ønsker en annen form, prøv andre verdier enn <code>30px</code> for avrundingen. Hvordan ser <code>5px</code> ut?</p> </section> <section class=protip id=tips> <h2 class=protip id=tips>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/pozova/1/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-3-flytte-ballen> <h1 class=activity id=steg-3-flytte-ballen>Steg 3: Flytte ballen</h1> <p>Akkurat nå vises ballen helt øverst til venstre i <strong>Output</strong>. La oss flytte den rundt omkring.</p> <p>Vi bruker <code>el.style.position = 'fixed'</code> for å fortelle at vi ønsker plassere ballen i forhold til kantene i vinduet. 50% fra toppen blir da <code>el.style.top = '50%'</code>.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Legg til en posisjon for ballen:</p> <pre><code class=js>el.style.position = <span class=hljs-string>'fixed'</span>;\nel.style.top = <span class=hljs-string>'80%'</span>;\n</code></pre> </li> <li> <p>Flyttet ballen seg ned?</p> </li> <li> <p>Flytt ballen ut fra venstre kant:</p> <pre><code class=js>el.style.left = <span class=hljs-string>'30%'</span>;\n</code></pre> </li> <li> <p>Prøv andre verdier mellom <code>0%</code> og <code>100%</code>.</p> </li> <li> <p>Klarer du å finne ut når ballen forsvinner ut av vinduet?</p> </li> </ul> </section> <section class=protip id=tips-2> <h2 class=protip id=tips-2>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/pozova/2/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-4-flytte-ballen-med-en-funksjon> <h1 class=activity id=steg-4-flytte-ballen-med-en-funksjon>Steg 4: Flytte ballen med en funksjon</h1> <p>Ettersom vi ønsker at ballen skal flytte seg underveis i spillet, skal vi lage en funksjon som flytter ballen.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Inni <code>Ball</code>, lag en funksjon som heter <code>el.posisjon</code>. Denne funksjonen skal ta inn en x- og en y-verdi, plassere elementet og returnere elementet.</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  ...\n  el.posisjon = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params>x, y</span>) </span>{\n\n  };\n}\n</code></pre> </li> <li> <p>Funksjonen skal bestemme <code>el.style.top</code> og <code>el.style.left</code>.</p> <pre><code class=js>el.posisjon = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params>x, y</span>) </span>{\n  el.style.left = x;\n  el.style.top = y;\n};\n</code></pre> </li> <li> <p>Returner <code>el</code>, slik at vi kan bruke funksjonene til ballen. Når elementet <code>el</code> returneres så vil <code>el</code> oppdateres med ny plassering.</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  ...\n  el.posisjon = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params>x, y</span>) </span>{\n    el.style.left = x;\n    el.style.top = y;\n  };\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li> <p>Du kan nå flytte ballen slik som dette:</p> <pre><code class=js><span class=hljs-keyword>var</span> ball = Ball();  <span class=hljs-comment>// lager ballen</span>\nball.posisjon(<span class=hljs-string>'10%'</span>, <span class=hljs-string>'20%'</span>);  <span class=hljs-comment>// flytter til x = 10% og y = 20%</span>\n</code></pre> </li> </ul> </section> <section class=protip id=tips-3> <h2 class=protip id=tips-3>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/hipepuy/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-5-velg-en-tilfeldig-plassering> <h1 class=activity id=steg-5-velg-en-tilfeldig-plassering>Steg 5: Velg en tilfeldig plassering</h1> <p>I JavaScript kan vi bruke <code>Math.random()</code> for å få en tilfeldig verdi mellom 0 og 1. La oss bruke denne slik at ballen blir plassert på et tilfeldig sted.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Trykk på fanen <strong>Console</strong>.</p> </li> <li> <p>Skriv inn <code>Math.random()</code> og trykk enter.</p> <figure><img src="+n(3450)+' alt=""></figure> </li> <li> <p>Fikk du et tall mellom 0 og 1?</p> </li> <li> <p>Vi kan gjøre dette tallet om til prosent ved å gange med 100, prøv det ut:</p> <figure><img src='+n(3448)+" alt=\"\"></figure> </li> <li> <p>Vi kan legge til prosenttegnet med <code>+ '%'</code>:</p> <figure><img src="+n(3449)+" alt=\"\"></figure> </li> <li> <p>Legg merke til at hver gang kommandoen kjøres, får vi nye tall. Det er dette som kalles <em>tilfeldig</em>.</p> </li> <li> <p>Lukk <strong>Console</strong> ved å trykke på den.</p> </li> <li> <p>La oss bruke <code>Math.random</code> til å plassere ballen:</p> <pre><code class=js><span class=hljs-keyword>var</span> x = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>100</span> + <span class=hljs-string>'%'</span>;\n<span class=hljs-keyword>var</span> y = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>100</span> + <span class=hljs-string>'%'</span>;\nball.posisjon(x, y);\n</code></pre> </li> </ul> <p>Her har vi laget 2 variabler <code>x</code> og <code>y</code> som begge holder på hvert sitt tilfeldige tall. Dette tallet sendes inn i funksjonen <code>posisjon(x,y)</code> som vi lagde i sted.</p> <ul> <li> <p>Hvis du trykker på knappen <button>Run with JS</button>, flytter ballen på seg?</p> <figure><img src="+n(3451)+" alt=\"\"></figure> </li> <li> <p>Hvis du har haket av <strong>Auto-run JS</strong> vil også koden kjøres hver gang du endrer koden.</p> </li> <li> <p>Trykker du nok antall ganger, legger du merke til at ballen noen ganger kommer utenfor bunnen og høyre side.</p> </li> <li> <p>For å unngå dette kan vi begrense forflytningen til 80%:</p> <pre><code class=js><span class=hljs-keyword>var</span> x = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>80</span> + <span class=hljs-string>'%'</span>;\n<span class=hljs-keyword>var</span> y = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>80</span> + <span class=hljs-string>'%'</span>;\n</code></pre> </li> <li> <p>Siden <code>Math.random()</code> maksimalt er 1 og vi ganger med 80, vil aldri ballen flytte seg lenger ut fra toppen eller venstre side enn 80%.</p> </li> </ul> </section> <section class=protip id=tips-4> <h2 class=protip id=tips-4>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/digiqa/1/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-6-flytte-ballen-hvert-andre-sekund> <h1 class=activity id=steg-6-flytte-ballen-hvert-andre-sekund>Steg 6: Flytte ballen hvert andre sekund</h1> <p>Vi ønsker at ballen hele tiden skal flytte seg. Nå skal vi bruke <code>setInterval</code> til å flytte ballen hvert andre sekund.</p> <pre><code class=js>setInterval(<span class=hljs-function><span class=hljs-keyword>function</span>(<span class=hljs-params></span>)</span>{\n    <span class=hljs-comment>//koden som skal kjøres i intervall</span>\n}, antall_millisekunder); <span class=hljs-comment>// Hvor ofte den skal kjøre</span>\n</code></pre> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>Bruk <code>setInterval</code> til å flytte ballen hvert andre sekund:</p> <pre><code class=js>setInterval(<span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> x = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>80</span> + <span class=hljs-string>'%'</span>;\n  <span class=hljs-keyword>var</span> y = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>80</span> + <span class=hljs-string>'%'</span>;\n  ball.posisjon(x, y);\n}, <span class=hljs-number>2000</span>);\n</code></pre> </li> <li> <p><code>setInterval(function ..., 2000)</code> betyr kjør <code>function</code> hvert <code>2000</code> millisekund.</p> </li> <li> <p>2000 millisekund er 2 sekunder, altså tegnes ballen på et nytt sted hvert andre sekund.</p> </li> </ul> </section> <section class=protip id=tips-5> <h2 class=protip id=tips-5>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/lecamej/1/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-7-poeng> <h1 class=activity id=steg-7-poeng>Steg 7: Poeng</h1> <p>Nå har du en ball som spretter rundt. La oss legge til poeng. Vi har laget en poeng-komponent som du kan bruke, så kommer du raskere i gang. <code>Poeng</code> er bygd opp likt som <code>Ball</code>, så du må gjerne lese gjennom og se om du forstår den.</p> <section class=check id=sjekkliste-7> <h2 class=check id=sjekkliste-7>Sjekkliste</h2> <ul> <li> <p>Legg til koden for komponenten <code>Poeng</code>:</p> <pre><code class=js><span class=hljs-comment>/**\n * Poeng - viser poengsum nede i venstre hjørne.\n *\n * Bruk:\n *   var poeng = Poeng();  // viser poengsummen\n *   poeng.øk();  // øker poengsummen med 100\n *   poeng.nullstill();  // setter poengsummen til 0\n *\n */</span>\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Poeng</span>(<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n  \n  <span class=hljs-comment>// CSS til \"el\"</span>\n  el.style.position = <span class=hljs-string>'fixed'</span>;\n  el.style.bottom = <span class=hljs-string>'5px'</span>;\n  el.style.left = <span class=hljs-string>'8px'</span>;\n  el.style.padding = <span class=hljs-string>'5px'</span>;\n  el.style.backgroundColor = <span class=hljs-string>'black'</span>;\n  el.style.color = <span class=hljs-string>'white'</span>;\n  \n  <span class=hljs-comment>// Viser poengsum på skjermen, samt lager variabelen \"_poeng\"</span>\n  <span class=hljs-keyword>var</span> _poeng = <span class=hljs-number>0</span>;\n  el.innerHTML = _poeng + <span class=hljs-string>' poeng'</span>;\n  <span class=hljs-built_in>document</span>.body.appendChild(el);\n\n  <span class=hljs-comment>// To funksjoner som øker eller nullstiller poengene</span>\n  el.øk = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    _poeng += <span class=hljs-number>100</span>;\n    el.innerHTML = _poeng + <span class=hljs-string>' poeng'</span>;\n  };\n  el.nullstill = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    _poeng = <span class=hljs-number>0</span>;\n    el.innerHTML = _poeng + <span class=hljs-string>' poeng'</span>;\n  };\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li> <p>For at poengsummen skal vises, må vi kjøre <code>Poeng()</code> en gang, slik vi også gjorde med <code>Ball()</code>.</p> </li> <li> <p>Legg denne linjen over <code>Ball()</code>:</p> <pre><code class=js><span class=hljs-keyword>var</span> poeng = Poeng();\n<span class=hljs-keyword>var</span> ball = Ball();\n</code></pre> </li> <li> <p>Vises &quot;<strong>Poeng 0</strong>&quot;?</p> </li> <li> <p>For å holde orden på programmet er det lurt å ha det som skjer i toppen. Funksjoner kan brukes likevel om de ikke står først, så flytt <code>function Ball</code> og <code>function Poeng</code> ned til bunnen.</p> <pre><code class=js><span class=hljs-keyword>var</span> poeng = Poeng();\n<span class=hljs-keyword>var</span> ball = Ball();\nsetInterval(<span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n  ...\n}, <span class=hljs-number>2000</span>);\n\n\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  ...\n}\n\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Poeng</span>(<span class=hljs-params></span>) </span>{\n  ...\n}\n</code></pre> </li> <li> <p>Nå står det som skjer i toppen:</p> <ul> <li>Vis poengene: <code>var poeng = Poeng()</code></li> <li>Vis ballen: <code>var ball = Ball()</code></li> <li>Flytt ballen hvert andre sekund: <code>setInterval(..., 2000)</code></li> </ul> </li> <li> <p>Vi velger nå å kjøre funksjonen <code>poeng.øk</code> hver gang ballen trykkes.</p> <pre><code class=js>ball.onclick = poeng.øk;\n</code></pre> <p><strong>Obs:</strong> Det skal <strong>ikke</strong> være <code>()</code> på slutten av <code>poeng.øk</code>. Dette er fordi funksjonen ikke kjøres her, men hver gang noen klikker på ballen.</p> </li> <li> <p><code>ball.onclick = poeng.øk;</code> betyr at funksjonen <code>poeng.øk()</code> kjøres når noen klikker på ballen.</p> </li> <li> <p>Sjekk at du får poeng når du treffer ballen med et klikk.</p> <figure><img src="+n(3447)+' alt=""></figure> </li> </ul> </section> <section class=protip id=tips-6> <h2 class=protip id=tips-6>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/mewole/1/edit?js,output>fasiten så langt</a>.</p> </section> <section class=flag id=teste-spillet> <h2 class=flag id=teste-spillet>Teste spillet</h2> <p>Du er nå kommet så langt at det kan være kult å teste spillet. Ettersom spillet handler om å trykke flest mulig ganger på ballen, egner det seg for å prøve på mobiltelefonen.</p> </section> <section class=check id=sjekkliste-8> <h2 class=check id=sjekkliste-8>Sjekkliste</h2> <ul> <li> <p>Noen mobiltelefoner zoomer når en dobbeltklikker på skjermen, derfor skal vi slå av zooming.</p> </li> <li> <p>Åpne fanen <strong>HTML</strong> ved å trykke på den.</p> </li> <li> <p>Finn linjen med <code>&lt;meta name=&quot;viewport&quot; ...</code>.</p> </li> <li> <p>Endre linjen til:</p> <pre><code class=html><span class=hljs-tag>&lt;<span class=hljs-name>meta</span> <span class=hljs-attr>name</span>=<span class=hljs-string>"viewport"</span> <span class=hljs-attr>content</span>=<span class=hljs-string>"width=device-width, user-scalable=no"</span>&gt;</span>\n</code></pre> </li> <li> <p>Lukk fanen <strong>HTML</strong> ved å trykke på den.</p> </li> <li> <p>Øverst i nettleseren din står adressen til siden.</p> <figure><img src='+n(3444)+" alt=\"\"></figure> </li> <li> <p>Adressen du trenger å taste inn på mobilen er det <em>før</em> <code>/edit?js,output</code>.</p> </li> <li> <p>I eksempelet over er adressen <code>jsbin.com/dutebe</code>.</p> </li> <li> <p>Tast <em>din</em> adresse inn på mobiltelefonen.</p> </li> <li> <p>Spill!</p> </li> </ul> </section> </section> <section class=activity id=steg-8-begrense-tiden> <h1 class=activity id=steg-8-begrense-tiden>Steg 8: Begrense tiden</h1> <p>Akkurat nå er det ubegrenset tid i spillet. La oss legge til en nedtelling av tid, slik at man kan konkurrere om hvem som klarer flest klikk på 10 sekunder.</p> <section class=check id=sjekkliste-9> <h2 class=check id=sjekkliste-9>Sjekkliste</h2> <ul> <li> <p>Legg til koden for nedtelling i bunnen av programmet.</p> <pre><code class=js><span class=hljs-comment>/**\n * Nedtelling - En linje som viser at tiden renner ut.\n *\n * Bruk:\n *   var nedtelling = Nedtelling(slutt);  // funksjonen `slutt` kjøres når tiden er utløpt\n *   nedtelling.tellNed(10);  // teller ned 10 sekunder\n *\n */</span>\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Nedtelling</span> (<span class=hljs-params>ferdig</span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n  \n  <span class=hljs-comment>// CSSen til elementet \"el\"</span>\n  el.style.position = <span class=hljs-string>'fixed'</span>;\n  el.style.left = <span class=hljs-string>'0'</span>;\n  el.style.bottom = <span class=hljs-string>'0'</span>;\n  el.style.height = <span class=hljs-string>'100%'</span>;\n  el.style.width = <span class=hljs-string>'3px'</span>;\n  el.style.backgroundColor = <span class=hljs-string>'red'</span>;\n  <span class=hljs-built_in>document</span>.body.appendChild(el);\n\n  <span class=hljs-comment>// Regner ut prosenten av hvor lang tid det er igjen</span>\n  <span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>prosent</span> (<span class=hljs-params>slutt, tid</span>) </span>{\n    <span class=hljs-keyword>return</span> (slutt - <span class=hljs-built_in>Date</span>.now()) / tid / <span class=hljs-number>10</span>;\n  }\n  \n  <span class=hljs-comment>// Funksjon som teller ned og stopper når den har kommet til null</span>\n  el.tellNed = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params>tid</span>) </span>{\n    <span class=hljs-keyword>var</span> slutt = <span class=hljs-built_in>Date</span>.now() + tid * <span class=hljs-number>1000</span>;\n    <span class=hljs-keyword>var</span> intervall = setInterval(tegn, <span class=hljs-number>20</span>);\n    \n    <span class=hljs-comment>// Tegner streken på venstre side til tiden er ute</span>\n    <span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>tegn</span> (<span class=hljs-params></span>) </span>{\n      <span class=hljs-keyword>var</span> p = prosent(slutt, tid);\n      <span class=hljs-keyword>if</span> (p &lt; <span class=hljs-number>0</span>) {\n        el.style.height = <span class=hljs-string>'0%'</span>;\n        clearInterval(intervall);\n        ferdig();\n      }\n      el.style.height = p + <span class=hljs-string>'%'</span>;\n    }\n  }\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li> <p>I toppen starter vi nedtellingen.</p> <pre><code class=js><span class=hljs-keyword>var</span> nedtelling = Nedtelling();\nnedtelling.tellNed(<span class=hljs-number>10</span>);\n</code></pre> </li> <li> <p>Dette lager en nedtelling på 10 sekunder.</p> </li> <li> <p>Hvis du trykker på <button>Run with JS</button> ser du nedtellingen, men ingenting skjer når tiden er ute.</p> </li> <li> <p>Lag funksjonen <code>stopp</code> som forteller hva som skal skje når tiden er ute.</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>stopp</span>(<span class=hljs-params></span>) </span>{\n  ball.skjul();\n}\n</code></pre> </li> <li> <p>Vi har ikke laget funksjonen <code>ball.skjul</code> enda. Vi trenger <code>ball.vis</code> også.</p> </li> <li> <p>Lag <code>ball.skjul</code> og <code>ball.vis</code> inni <code>function Ball</code>.</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  ...\n  el.skjul = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    el.style.display = <span class=hljs-string>'none'</span>;\n  };\n  el.vis = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    el.style.display = <span class=hljs-string>''</span>;\n  };\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li> <p>Nå kan vi fortelle nedtellingen at den skal kjøre <code>stopp()</code> når tiden er ute.</p> <pre><code class=js><span class=hljs-keyword>var</span> nedtelling = Nedtelling(stopp);\n</code></pre> </li> <li> <p>Forsvinner ballen når tiden er ute?</p> </li> <li> <p>Hvor mange poeng klarer du på mobiltelefonen innen tiden?</p> </li> </ul> </section> <section class=protip id=tips-7> <h2 class=protip id=tips-7>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/tukiwu/1/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-9-omstarte-spillet> <h1 class=activity id=steg-9-omstarte-spillet>Steg 9: Omstarte spillet</h1> <p>Så langt kan spillet omstartes ved å oppdatere nettleseren. Er det ikke stiligere med en knapp som starter spillet?</p> <section class=check id=sjekkliste-10> <h2 class=check id=sjekkliste-10>Sjekkliste</h2> <ul> <li> <p>Lag en funksjon <code>start</code>.</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>start</span>(<span class=hljs-params></span>) </span>{\n\n}\n</code></pre> </li> <li> <p>Funksjonen skal bestemme hva som skjer når spillet skal starte. Vi må nullstille poengsummen, vise nedtellingen og vise ballen.</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>start</span>(<span class=hljs-params></span>) </span>{\n  poeng.nullstill();\n  nedtelling.tellNed(<span class=hljs-number>10</span>);\n  ball.vis();\n}\n</code></pre> </li> <li> <p><code>start</code> skal kjøres hver gang en knapp klikkes, så vi trenger en knapp.</p> </li> <li> <p>Legg til koden for knappen i bunnen av programmet.</p> <pre><code class=js><span class=hljs-comment>/**\n * En knapp som ligger midt på siden.\n *\n * Bruk:\n *   var knapp = Knapp('trykk på meg');  // lager en knapp som ligger midt på siden\n *   knapp.vis();  // viser knappen\n *   knapp.skjul();  // skjuler knappen\n */</span>\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Knapp</span>(<span class=hljs-params>tekst</span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'button'</span>);\n  el.style.display = <span class=hljs-string>'none'</span>;\n  el.innerText = tekst;\n  el.style.position = <span class=hljs-string>'fixed'</span>;\n  el.style.top = <span class=hljs-string>'50%'</span>;\n  el.style.left = <span class=hljs-string>'50%'</span>;\n  el.style.padding = <span class=hljs-string>'20px'</span>;\n  el.style.border = <span class=hljs-string>'solid 1px'</span>;\n  <span class=hljs-built_in>document</span>.body.appendChild(el);\n\n  el.skjul = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    el.style.display = <span class=hljs-string>'none'</span>;\n  };\n  el.vis = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    el.style.display = <span class=hljs-string>''</span>;\n    <span class=hljs-comment>// plasser akkurat på midten</span>\n    <span class=hljs-comment>// midten av skjermen er 50% minus halvparten av størrelsen til knappen</span>\n    <span class=hljs-keyword>var</span> w = el.offsetWidth / <span class=hljs-number>2</span>;\n    <span class=hljs-keyword>var</span> h = el.offsetHeight / <span class=hljs-number>2</span>;\n    el.style.marginLeft = <span class=hljs-string>'-'</span> + w + <span class=hljs-string>'px'</span>;\n    el.style.marginTop = <span class=hljs-string>'-'</span> + h + <span class=hljs-string>'px'</span>;\n  };\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li> <p>I toppen legger vi til knappen.</p> <pre><code class=js><span class=hljs-keyword>var</span> knapp = Knapp(<span class=hljs-string>'Prøv en gang til'</span>);\nknapp.onclick = start;\n</code></pre> </li> <li> <p><code>knapp.onclick</code> bestemmer hva som skal skje når knappen klikkes.</p> </li> <li> <p>Knappen vises ikke, så vi må bestemme at den skal vises når spillet er slutt.</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>stopp</span>(<span class=hljs-params></span>) </span>{\n  ...\n  knapp.vis();\n}\n</code></pre> </li> <li> <p>Vises knappen når spillet er ferdig?</p> </li> <li> <p>Du legger kanskje merke til at vi har en bug nå? Vi må jo skjule knappen når spillet startes også!</p> </li> <li> <p>Skjul knappen når spillet startes.</p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>start</span>(<span class=hljs-params></span>) </span>{\n  ...\n  knapp.skjul();\n}\n</code></pre> </li> <li> <p>Spillet er nå ferdig! Del adressen med dine venner og se hvem som klarer flest poeng.</p> </li> </ul> </section> <section class=protip id=tips-8> <h2 class=protip id=tips-8>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/pozova/11/edit?js,output>fasiten</a>.</p> </section> <section class=challenge id=utfordringer> <h2 class=challenge id=utfordringer>Utfordringer</h2> <p>Her er noen utfordringer:</p> <ul> <li>Endre størrelsen på ballen, slik at spillet blir vanskeligere.</li> <li>Endre hvor lang tid man har på seg.</li> <li>Endre fargen på ballen.</li> <li>Øk poengsummen med 1000 istedenfor 100.</li> <li>Klarer du å få ballen til å endre til forskjellig størrelse hver gang den kommer til syne?</li> <li>Klarer du å få frem flere enn én ball?</li> </ul> </section> </section> "},3444:function(s,e,n){s.exports=n.p+"_/oppgaver/src/web/trykkomania/adresse.62359f.png"},3445:function(s,e,n){s.exports=n.p+"_/oppgaver/src/web/trykkomania/faner.6b8fe3.png"},3446:function(s,e,n){s.exports=n.p+"_/oppgaver/src/web/trykkomania/firkantet_ball.0a77c0.png"},3447:function(s,e,n){s.exports=n.p+"_/oppgaver/src/web/trykkomania/poeng.8bb15e.gif"},3448:function(s,e,n){s.exports=n.p+"_/oppgaver/src/web/trykkomania/prosent1.8cb52d.png"},3449:function(s,e,n){s.exports=n.p+"_/oppgaver/src/web/trykkomania/prosent2.f517bf.png"},3450:function(s,e,n){s.exports=n.p+"_/oppgaver/src/web/trykkomania/tilfeldig.b1ba11.png"},3451:function(s,e,n){s.exports=n.p+"_/oppgaver/src/web/trykkomania/tilfeldig_plassering.6dfc57.gif"},3452:function(s,e,n){s.exports=n.p+"_/oppgaver/src/web/trykkomania/trykkomania.66d448.gif"}});