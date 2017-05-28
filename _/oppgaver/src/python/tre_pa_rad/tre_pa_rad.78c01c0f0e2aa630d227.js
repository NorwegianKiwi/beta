webpackJsonp([202,388],{1431:function(s,n,a){s.exports={frontmatter:a(524),content:a(2535)}},2535:function(s,n){s.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>På tide med et nytt spill! I dag skal vi lage tre på rad, hvor spillerne etter tur merker ruter med X eller O inntil en av spillerne får tre på rad.</p> </section> <section class=activity id=steg-1-tegne-rutenettet> <h1 class=activity id=steg-1-tegne-rutenettet>Steg 1: Tegne rutenettet</h1> <p>Vi vil tegne fire linjer, i et #-mønster, som dette:</p> <pre><code><span class=hljs-keyword>_</span>|<span class=hljs-type>_</span>|<span class=hljs-type>_</span>\n<span class=hljs-keyword>_</span>|<span class=hljs-type>_</span>|<span class=hljs-type>_</span>\n | <span class=hljs-type>|\n</span></code></pre> <p>Vi kunne brukt skilpadde-kommandoer for å tegne rutenettet, men i dag skal vi i stedet lære å bruke tk-biblioteket til tegning.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Åpne IDLE, lag en ny fil og lagre den som \'<a href=http://xox.py>xox.py</a>\'</p> </li> <li> <p>Skriv følgende kode</p> <pre><code class=python><span class=hljs-keyword>from</span> tkinter <span class=hljs-keyword>import</span> *\n\nmain = Tk()\n\nc = Canvas(main, width=<span class=hljs-number>600</span>, height=<span class=hljs-number>600</span>)\nc.pack()\n\nc.create_line(<span class=hljs-number>200</span>, <span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>)\nc.create_line(<span class=hljs-number>400</span>, <span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>)\n\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>, <span class=hljs-number>200</span>)\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>, <span class=hljs-number>400</span>)\n\nmainloop()\n</code></pre> </li> <li> <p>Lagre og kjør programmet ditt. Du vil se et rutenett tegnet på skjermen! Steng vinduet rutenettet ble tegnet i for å avslutte programmet ditt.</p> </li> </ul> </section> <section class=protip id=lerretet> <h2 class=protip id=lerretet>Lerretet</h2> <p>På samme måte som vi brukte <code>turtle</code>-biblioteket når vi tegnet med skilpadder bruker vi her <code>tkinter</code>-biblioteket. Vi lager et 600 ganger 600-piksler lerret som tegnes i et vindu med kommandoen <code>c = Canvas(main, width=600, height=600)</code>. For datamaskinen ser dette slik ut:</p> <pre><code>    <span class=hljs-number>0</span>       <span class=hljs-number>200</span>      <span class=hljs-number>400</span>      <span class=hljs-number>600</span>   ...\n   <span class=hljs-number>0</span>+--------+--------+--------+-----&gt; bortover\n    <span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n <span class=hljs-number>200</span><span class=hljs-string>|        A        B</span>\n    <span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n <span class=hljs-number>400</span><span class=hljs-string>|        C        D</span>\n    <span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n <span class=hljs-number>600</span><span class=hljs-string>|</span>\n    <span class=hljs-string>|</span>\n ...<span class=hljs-string>|</span>\n    V\n  nedover\n</code></pre> <p>Her er punkt <code>A</code> ved 200 bortover, 200 nedover. Punkt <code>B</code> er ved 400 bortover, 200 nedover. Punkt <code>C</code> er ved 200 bortover, 400 nedover. Til slutt er punkt <code>D</code> ved 400 bortover, 400 nedover.</p> <p>Hver av kodelinjene <code>c.create_line(bortover1, nedover1, bortover2, nedover2)</code> tegner en linje på skjermen, hvor de fire tallene beskriver hvor linjer starter og slutter. For eksempel, om vi vil tegne en linje fra <code>A</code> til <code>D</code> kan vi bruke <code>c.create_line(200, 200, 400, 400)</code>.</p> <pre><code>     <span class=hljs-number>0</span>       <span class=hljs-number>200</span>      <span class=hljs-number>400</span>      <span class=hljs-number>600</span>   ...\n   <span class=hljs-number>0</span> +--------A--------B--------+-----&gt; bortover\n     <span class=hljs-string>|</span>\n     <span class=hljs-string>|</span>\n     <span class=hljs-string>|</span>\n     <span class=hljs-string>|</span>\n <span class=hljs-number>200</span> M                          O\n     <span class=hljs-string>|</span>\n     <span class=hljs-string>|</span>\n     <span class=hljs-string>|</span>\n     <span class=hljs-string>|</span>\n <span class=hljs-number>400</span> N                          P\n     <span class=hljs-string>|</span>\n     <span class=hljs-string>|</span>\n     <span class=hljs-string>|</span>\n     <span class=hljs-string>|</span>\n <span class=hljs-number>600</span> <span class=hljs-string>|        C        D</span>\n     <span class=hljs-string>|</span>\n ... <span class=hljs-string>|</span>\n     V\n   nedover\n</code></pre> <p>Med punktene som i den siste figuren vil vi tegne linjer fra A til C, B til D, M til O og N til P.</p> <pre><code class=python>c.create_line(<span class=hljs-number>200</span>, <span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>) <span class=hljs-comment># A til C</span>\nc.create_line(<span class=hljs-number>400</span>, <span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>) <span class=hljs-comment># B til D</span>\n\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>, <span class=hljs-number>200</span>) <span class=hljs-comment># M til O</span>\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>, <span class=hljs-number>400</span>) <span class=hljs-comment># N til P</span>\n\n</code></pre> <p>Når vi koder kaller vi ofte bortover for <code>x</code>, mens nedover ofte kalles <code>y</code>. Dette rutenettet ligner ganske mye på koordinatene du kanskje har lært om i mattetimen. Forskjellen er at her begynner vi i øvre, i stedet for nedre, venstre hjørne, slik at <code>y</code> blir større når vi går nedover.</p> </section> </section> <section class=activity id=steg-2-tegne-en-sirkel> <h1 class=activity id=steg-2-tegne-en-sirkel>Steg 2: Tegne en sirkel</h1> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>I den samme filen vil vi nå legge til en prosedyre som kan tegne en sirkel når du klikker med musen!</p> <pre><code class=python><span class=hljs-keyword>from</span> tkinter <span class=hljs-keyword>import</span> *\n\nmain = Tk()\n\nc = Canvas(main, width=<span class=hljs-number>600</span>, height=<span class=hljs-number>600</span>)\nc.pack()\n\nc.create_line(<span class=hljs-number>200</span>, <span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>)\nc.create_line(<span class=hljs-number>400</span>, <span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>)\n\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>, <span class=hljs-number>200</span>)\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>, <span class=hljs-number>400</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n    c.create_oval(<span class=hljs-number>200</span>, <span class=hljs-number>200</span>, <span class=hljs-number>400</span>, <span class=hljs-number>400</span>)\n\nc.bind(<span class=hljs-string>"&lt;Button-1&gt;"</span>, click)\n\nmainloop()\n</code></pre> </li> <li> <p>Kjør koden din, og klikk et sted i rutenettet. Hva skjer?</p> <p>Du skal se en sirkel i den midterste ruta på skjermen.</p> </li> <li> <p>La oss endre på koden slik at vi tegner sirkelen i den samme ruta som du klikker i.</p> <p>For å gjøre dette må vi finne posisjonen til muspekeren og regne ut hvilken rute i rutenettet dette tilsvarer. Dette gjør vi ved å endre på <code>click</code>-prosedyren.</p> <pre><code class=python><span class=hljs-keyword>from</span> tkinter <span class=hljs-keyword>import</span> *\n\nmain = Tk()\n\nc = Canvas(main, width=<span class=hljs-number>600</span>, height=<span class=hljs-number>600</span>)\nc.pack()\n\nc.create_line(<span class=hljs-number>200</span>, <span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>)\nc.create_line(<span class=hljs-number>400</span>, <span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>)\n\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>, <span class=hljs-number>200</span>)\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>, <span class=hljs-number>400</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n    across = int(c.canvasx(event.x) / <span class=hljs-number>200</span>)\n    down = int(c.canvasy(event.y) / <span class=hljs-number>200</span>)\n\n    c.create_oval(\n            across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>\n    )\n\nc.bind(<span class=hljs-string>"&lt;Button-1&gt;"</span>, click)\n\nmainloop()\n</code></pre> <p>Linjen <code>int(c.canvasx(event.x) / 200)</code> finner først posisjonen til muspekeren <code>event.x</code>, gjør om denne til en lerret-posisjon, <code>c.canvas(event.x)</code> og deler denne på 200 og runder nedover slik at vi får et tall som er enten 0, 1 eller 2. Dette tallet forteller oss i hvilken kolonne muspekeren er. Linjen <code>int(c.canvasy(event.y) / 200)</code> finner på samme måte ut hvilken rad muspekeren befinner seg i.</p> </li> <li> <p>Kjør koden. Legg merke til at hver gang du klikker i en rute tegnes en sirkel i den ruten.</p> <p>Koden <code>c.create_oval(across * 200, down * 200, (across+1) * 200, (down+1) * 200)</code> gjør om \'Bortover 1, Nedover 2\' til posisjoner på lerretet som Bortover 200, Nedover 400.</p> </li> </ul> </section> </section> <section class=activity id=steg-3-holde-oversikten> <h1 class=activity id=steg-3-holde-oversikten>Steg 3: Holde oversikten</h1> <p>Tilsvarende slik vi gjorde i forrige leksjon om Hangman, vil vi nå innføre en liste som kan holde oversikten over hvor vi allerede har klikket. Dette vil være viktig når vi senere vil sjekke om man har tre på rad.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Vi lager først en liste <code>grid</code> med ni elementer, en for hver rute. Legg til følgende kode rett før definisjonen av prosedyren <code>click</code>:</p> <pre><code class=python>grid = [\n    <span class=hljs-string>"0"</span>, <span class=hljs-string>"1"</span>, <span class=hljs-string>"2"</span>,\n    <span class=hljs-string>"3"</span>, <span class=hljs-string>"4"</span>, <span class=hljs-string>"5"</span>,\n    <span class=hljs-string>"6"</span>, <span class=hljs-string>"7"</span>, <span class=hljs-string>"8"</span>,\n]\n</code></pre> <p>Vi kunne ha startet listen med ni tomme strenger, <code>grid = [&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;]</code>, men ved å skrive listen som vi gjør er det enklere å huske hvordan rutene på brettet er nummerert.</p> </li> <li> <p>Nå vil vi registrere at vi tegner sirkler i denne listen. Bytt ut <code>click</code>-prosedyren med følgende:</p> <pre><code class=python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n    across = int(c.canvasx(event.x) / <span class=hljs-number>200</span>)\n    down = int(c.canvasy(event.y) / <span class=hljs-number>200</span>)\n    square = across + (down * <span class=hljs-number>3</span>)\n\n    <span class=hljs-keyword>if</span> grid[square] == <span class=hljs-string>"O"</span>:\n        print(<span class=hljs-string>"Du har allerede klikket i rute "</span> + str(square))\n    <span class=hljs-keyword>else</span>:\n        print(<span class=hljs-string>"Du klikket i rute "</span> + str(square))\n\n    c.create_oval(\n            across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>\n    )\n    grid[square] = <span class=hljs-string>"O"</span>\n</code></pre> <p>For å teste at listen virker bruker vi en enkel <code>print</code>-kommando som forteller oss hvilken rute vi klikker i, og om vi klikker i samme rute to ganger. <code>str</code> gjør om et tall til tekst (en streng) slik at den kan skrives ut sammen med den forklarende teksten.</p> </li> <li> <p>Kjør koden. Klikk i forskjellige ruter slik at du skjønner hvordan vi har nummerert rutene på brettet.</p> </li> </ul> </section> </section> <section class=activity id=steg-4-tegne-et-kryss> <h1 class=activity id=steg-4-tegne-et-kryss>Steg 4: Tegne et kryss</h1> <p>Vi vil nå legge til en spiller til, som tegner kryss i stedet for sirkel.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Vi lager en prosedyre som bestemmer hvem sin tur det er. <code>choose_shape</code> undersøker <code>grid</code>-listen vår og lar det være <code>X</code> sin tur dersom det allerede er flere <code>O</code> enn <code>X</code> i listen.</p> </li> <li> <p>Vi utvider også <code>click</code>-prosedyren slik at den kan tegne både sirkler og kryss. Koden ser nå slik ut:</p> <pre><code class=python><span class=hljs-keyword>from</span> tkinter <span class=hljs-keyword>import</span> *\n\nmain = Tk()\n\nc = Canvas(main, width=<span class=hljs-number>600</span>, height=<span class=hljs-number>600</span>)\nc.pack()\n\nc.create_line(<span class=hljs-number>200</span>, <span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>)\nc.create_line(<span class=hljs-number>400</span>, <span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>)\n\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>, <span class=hljs-number>200</span>)\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>, <span class=hljs-number>400</span>)\n\ngrid = [\n    <span class=hljs-string>"0"</span>, <span class=hljs-string>"1"</span>, <span class=hljs-string>"2"</span>,\n    <span class=hljs-string>"3"</span>, <span class=hljs-string>"4"</span>, <span class=hljs-string>"5"</span>,\n    <span class=hljs-string>"6"</span>, <span class=hljs-string>"7"</span>, <span class=hljs-string>"8"</span>,\n]\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n    shape = choose_shape()\n    across = int(c.canvasx(event.x) / <span class=hljs-number>200</span>)\n    down = int(c.canvasy(event.y) / <span class=hljs-number>200</span>)\n    square = across + (down * <span class=hljs-number>3</span>)\n\n    <span class=hljs-keyword>if</span> grid[square] == <span class=hljs-string>"X"</span> <span class=hljs-keyword>or</span> grid[square] == <span class=hljs-string>"O"</span>:\n      <span class=hljs-keyword>return</span>\n\n    <span class=hljs-keyword>if</span> shape == <span class=hljs-string>"O"</span>:\n        c.create_oval(\n            across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>\n        )\n        grid[square] = <span class=hljs-string>"O"</span>\n    <span class=hljs-keyword>else</span>:\n        c.create_line(\n            across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>\n        )\n        c.create_line(\n            across * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>\n        )\n        grid[square] = <span class=hljs-string>"X"</span>\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>choose_shape</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>if</span> grid.count(<span class=hljs-string>"O"</span>) &gt; grid.count(<span class=hljs-string>"X"</span>):\n        <span class=hljs-keyword>return</span> <span class=hljs-string>"X"</span>\n    <span class=hljs-keyword>else</span>:\n        <span class=hljs-keyword>return</span> <span class=hljs-string>"O"</span>\n\nc.bind(<span class=hljs-string>"&lt;Button-1&gt;"</span>, click)\n\nmainloop()\n</code></pre> </li> <li> <p>Kjør programmet ditt. Prøv å trykk på en rute. Det skal tegnes en O. Klikk på en annen rute. Nå tegnes en X.</p> </li> </ul> </section> </section> <section class=activity id=steg-5-a-finne-en-vinner> <h1 class=activity id=steg-5-a-finne-en-vinner>Steg 5: Å finne en vinner</h1> <p>Nå er vi nesten ferdige med spillet, vi mangler bare å sjekke om noen får tre på rad!</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>I den samme filen vil vi nå skrive en ny prosedyre <code>winner</code>. Vi kaller denne etter hvert klikk for å sjekke om en av spillerene har vunnet.</p> <p>Den ferdige koden ser ut som følger:</p> <pre><code class=python><span class=hljs-keyword>from</span> tkinter <span class=hljs-keyword>import</span> *\n\nmain = Tk()\n\nc = Canvas(main, width=<span class=hljs-number>600</span>, height=<span class=hljs-number>600</span>)\nc.pack()\n\nc.create_line(<span class=hljs-number>200</span>, <span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>)\nc.create_line(<span class=hljs-number>400</span>, <span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>)\n\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>, <span class=hljs-number>200</span>)\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>, <span class=hljs-number>400</span>)\n\ngrid = [\n    <span class=hljs-string>"0"</span>, <span class=hljs-string>"1"</span>, <span class=hljs-string>"2"</span>,\n    <span class=hljs-string>"3"</span>, <span class=hljs-string>"4"</span>, <span class=hljs-string>"5"</span>,\n    <span class=hljs-string>"6"</span>, <span class=hljs-string>"7"</span>, <span class=hljs-string>"8"</span>,\n]\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n    shape = choose_shape()\n    across = int(c.canvasx(event.x) / <span class=hljs-number>200</span>)\n    down = int(c.canvasy(event.y) / <span class=hljs-number>200</span>)\n    square = across + (down * <span class=hljs-number>3</span>)\n\n    <span class=hljs-keyword>if</span> grid[square] == <span class=hljs-string>"X"</span> <span class=hljs-keyword>or</span> grid[square] == <span class=hljs-string>"O"</span>:\n        <span class=hljs-keyword>return</span>\n\n    <span class=hljs-keyword>if</span> winner():\n        <span class=hljs-keyword>return</span>\n\n    <span class=hljs-keyword>if</span> shape == <span class=hljs-string>"O"</span>:\n        c.create_oval(\n            across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>\n        )\n        grid[square] = <span class=hljs-string>"O"</span>\n    <span class=hljs-keyword>else</span>:\n        c.create_line(\n            across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>\n        )\n        c.create_line(\n            across * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>\n        )\n        grid[square] = <span class=hljs-string>"X"</span>\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>choose_shape</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>if</span> grid.count(<span class=hljs-string>"O"</span>) &gt; grid.count(<span class=hljs-string>"X"</span>):\n        <span class=hljs-keyword>return</span> <span class=hljs-string>"X"</span>\n    <span class=hljs-keyword>else</span>:\n        <span class=hljs-keyword>return</span> <span class=hljs-string>"O"</span>\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>winner</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>for</span> across <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n        row = across * <span class=hljs-number>3</span>\n        line = grid[row] + grid[row+<span class=hljs-number>1</span>] + grid[row+<span class=hljs-number>2</span>]\n        <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    <span class=hljs-keyword>for</span> down <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n        line = grid[down] + grid[down+<span class=hljs-number>3</span>] + grid[down+<span class=hljs-number>6</span>]\n        <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    line = grid[<span class=hljs-number>0</span>] + grid[<span class=hljs-number>4</span>] + grid[<span class=hljs-number>8</span>]\n    <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    line = grid[<span class=hljs-number>2</span>] + grid[<span class=hljs-number>4</span>] + grid[<span class=hljs-number>6</span>]\n    <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\nc.bind(<span class=hljs-string>"&lt;Button-1&gt;"</span>, click)\n\nmainloop()\n</code></pre> </li> <li> <p>Prøv å spill spillet slik at du får tre på rad. Kan du klikke i noen flere ruter?</p> <p>Prosedyren <code>winner</code> undersøker de fire forskjellige måtene man kan få tre på rad på:</p> <ol> <li> <p>Sjekk hver rad om det er tre X\'er eller O\'er,</p> </li> <li> <p>Sjekk hver kolonne om det er tre X\'er eller O\'er,</p> </li> <li> <p>Sjekk diagonalen fra øvre venstre til nedre høyre hjørne,</p> </li> <li> <p>Sjekk diagonalen fra øvre høyre til nedre venstre hjørne.</p> </li> </ol> </li> </ul> </section> </section> <section class=activity id=steg-6> <h1 class=activity id=steg-6>Steg 6:</h1> <p>Du er ferdig med en enkel versjon av tre på rad! Prøv å endre koden, for eksempel slik at den tegner andre symboler.</p> </section> '}});