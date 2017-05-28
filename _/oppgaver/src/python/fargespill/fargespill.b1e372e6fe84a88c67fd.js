webpackJsonp([133,388],{1402:function(s,n,e){s.exports={frontmatter:e(495),content:e(2505)}},2505:function(s,n,e){s.exports="<section id=introduksjon> <h1 id=introduksjon>Introduksjon</h1> <p>Hjernen vår lar seg lett lure, og det kan av og til være vanskelig for den å tolke forskjellig inntrykk samtidig. I det spillet vi nå skal lage vil du både få testet hjernen og skrivehastigheten. Vi skal lage et fargespill!</p> <figure><img src="+e(3206)+" alt=\"\"></figure> </section> <section class=activity id=steg-1-klargjor-og-importerer-bilioteker> <h1 class=activity id=steg-1-klargjor-og-importerer-bilioteker>Steg 1: Klargjør og importerer bilioteker</h1> <p>I dette spillet skal vi lage et grafisk brukergrensesnitt (et GUI). Til dette bruker vi et bibliotek som heter <code>tkinter</code>. Vi trenger også hjelp for å generere tilfeldige tall.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Åpne IDLE, og lag en ny fil.</p> </li> <li> <p>La oss importere bibliotekene. Skriv inn følgende kode:</p> <pre><code class=python><span class=hljs-keyword>import</span> tkinter\n<span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\n</code></pre> </li> <li> <p>Vi vil etterhvert bruke boxtaver som <em>æøå</em>. For å gjøre dette må vi legge til noe øverst i koden vår. Gjør om koden din slik at den ser slik ut:</p> <pre><code class=python><span class=hljs-comment>#!/usr/bin/python</span>\n<span class=hljs-comment># -*- coding: UTF-8 -*-</span>\n\n<span class=hljs-keyword>import</span> tkinter\n<span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\n</code></pre> </li> </ul> </section> <section class=protip id=kommentering-av-kode> <h2 class=protip id=kommentering-av-kode>Kommentering av kode</h2> <p>For å gjøre koden lettere å forstå kan vi legge inn kommentarer som ikke påvirker programmet. Dette gjør vi ved å skrive inn tegnet <code>#</code>. All tekst som kommer på samme linje etter dette tegnet vil bli ignorert av datamaskinen, men er veldig fint for å hjelpe oss mennesker. Heretter bruker jeg dette for å forklare hva som skjer, du trenger ikke å skrive inn kommentarene hvis du ikke vil!</p> </section> </section> <section class=activity id=steg-2-lage-grafisk-brukergrensesnitt> <h1 class=activity id=steg-2-lage-grafisk-brukergrensesnitt>Steg 2: Lage grafisk brukergrensesnitt</h1> <p>Nå skal vi begynne på GUI. Les kommentarene for å forstå hva som skjer.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Vi skal begynne med å lage hovedvinduet. Dette kaller vi <code>root</code> Vi tilkaller funksjoner fra <code>tkinter</code> biblioteket for å hjelpe oss med dette. Legg til dette nederst i koden:</p> <pre><code class=python>root = tkinter.Tk()\n\nroot.title(<span class=hljs-string>\"Fargespill\"</span>)\nroot.geometry(<span class=hljs-string>\"475x300\"</span>)\n\nroot.mainloop()\n</code></pre> </li> <li> <p>Nå har vi laget hovedvinduet. La oss legge til noen felter med tekst. Vi kommer tilbake til hva disse skal fylles med etterhvert, nå skal vi bare definere områdene. Gjør om koden din slik at den ser ut som dette:</p> <pre><code class=python><span class=hljs-comment>#!/usr/bin/python</span>\n<span class=hljs-comment># -*- coding: UTF-8 -*-</span>\n\n<span class=hljs-keyword>import</span> tkinter\n<span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\n\nroot = tkinter.Tk()\n\nroot.title(<span class=hljs-string>\"Fargespill\"</span>)\nroot.geometry(<span class=hljs-string>\"475x300\"</span>)\n\n<span class=hljs-comment># Lager en label kalt instructions  med tekst:</span>\ninstructions = tkinter.Label(root,\n                             text=<span class=hljs-string>\"Skriv inn fargen PÅ ordet, ikke selve ordet!\"</span>,\n                             font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>15</span>))\ninstructions.pack()\n\npoints_label = tkinter.Label(root,\n                             text=<span class=hljs-string>\"Trykk enter for å starte.\"</span>,\n                             font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>30</span>))\npoints_label.pack()\n\nlabel = tkinter.Label(root, font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>100</span>))\nlabel.pack()\n\nbox = tkinter.Entry(root)\n\nroot.mainloop()\n</code></pre> </li> </ul> </section> <section class=protip id=i-koden-over-skjer-det-mye-la-oss-se-pa-noen-deler> <h2 class=protip id=i-koden-over-skjer-det-mye-la-oss-se-pa-noen-deler>I koden over skjer det mye, la oss se på noen deler</h2> <p><code>tkinter.Label</code> lager et felt i vinduet vårt. I disse feltene kan vi putte blant annet tekst eller tall. <code>.pack</code> forteller programmet vårt at den skal &quot;tegne&quot; disse feltene slik at de synes for oss, og hvor den skal tegne de. <code>tkinter.Entry(root)</code> lager et tekstfelt som spilleren kan skrive i.</p> </section> <section class=flag id=test-prosjektet> <h2 class=flag id=test-prosjektet>Test prosjektet</h2> <ul> <li>Kjør koden</li> <li>Viser den et vindu?</li> <li>Det er fortsatt ganske lite som skjer, la oss gå videre.</li> </ul> </section> </section> <section class=activity id=steg-3-vi-lager-tidskontroll> <h1 class=activity id=steg-3-vi-lager-tidskontroll>Steg 3: Vi lager tidskontroll</h1> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Vi skal nå få programmet vårt til å telle 30 sekunder. Vi lager en funksjon <code>countdown()</code> som tar seg av dette. Legg til dette i programmet ditt:</p> <pre><code class=python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>countdown</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>global</span> time_left\n\n    <span class=hljs-keyword>if</span> time_left &gt; <span class=hljs-number>0</span>:\n        <span class=hljs-comment># Tell ned ett sekund</span>\n        time_left = time_left - <span class=hljs-number>1</span>\n        time_label.config(text=<span class=hljs-string>\"Tid igjen: \"</span> + str(time_left))\n\n        <span class=hljs-comment># Denne kjører automatisk countdown() igjen etter 1 sekund</span>\n        time_label.after(<span class=hljs-number>1000</span>, countdown)\n    <span class=hljs-keyword>else</span>:\n        time_label.pack_forget()\n        label.pack_forget()\n        box.pack_forget()\n</code></pre> </li> <li> <p>Denne funksjonen jobber på en global variabel <code>time_left</code>, vi må lage den. Programmet ditt skal nå se slik ut:</p> <pre><code class=python><span class=hljs-comment>#!/usr/bin/python</span>\n<span class=hljs-comment># -*- coding: UTF-8 -*-</span>\n\n<span class=hljs-keyword>import</span> tkinter\n<span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\n\ntime_left = <span class=hljs-number>30</span>\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>countdown</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>global</span> time_left\n\n    <span class=hljs-keyword>if</span> time_left &gt; <span class=hljs-number>0</span>:\n        time_left = time_left - <span class=hljs-number>1</span>\n        time_label.config(text=<span class=hljs-string>\"Tid igjen: \"</span> + str(time_left))\n        time_label.after(<span class=hljs-number>1000</span>, countdown)\n    <span class=hljs-keyword>else</span>:\n        time_label.pack_forget()\n        label.pack_forget()\n        box.pack_forget()\n\nroot = tkinter.Tk()\n\nroot.title(<span class=hljs-string>\"Fargespill\"</span>)\nroot.geometry(<span class=hljs-string>\"475x300\"</span>)\n\n<span class=hljs-comment># Lager en label kalt instructions  med tekst:</span>\ninstructions = tkinter.Label(root,\n                             text=<span class=hljs-string>\"Skriv inn fargen PÅ ordet, ikke selve ordet!\"</span>,\n                             font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>15</span>))\ninstructions.pack()\n\npoints_label = tkinter.Label(root,\n                             text=<span class=hljs-string>\"Trykk enter for å starte.\"</span>,\n                             font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>30</span>))\npoints_label.pack()\n\n\nlabel = tkinter.Label(root, font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>100</span>))\nlabel.pack()\n\nbox = tkinter.Entry(root)\n\nroot.mainloop()\n</code></pre> </li> </ul> </section> </section> <section class=activity id=steg-4-definere-fargene> <h1 class=activity id=steg-4-definere-fargene>Steg 4: Definere fargene.</h1> <p>Nå må vi definere fargene som programmet skal bruke.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Fargene legger vi til som en liste. Legg til denne koden under <code>from random import randint</code></p> <pre><code class=python>colours_eng = [<span class=hljs-string>'Red'</span>, <span class=hljs-string>'Blue'</span>, <span class=hljs-string>'Green'</span>, <span class=hljs-string>'Pink'</span>, <span class=hljs-string>'Black'</span>,\n               <span class=hljs-string>'Yellow'</span>, <span class=hljs-string>'Orange'</span>, <span class=hljs-string>'Purple'</span>, <span class=hljs-string>'Brown'</span>]\n</code></pre> </li> <li> <p>Siden vi vil at programmet vårt skal skrive ut de norske ordene, lager vi en liste til, med de norske navnene. Legg til dette rett under den andre listen.</p> <pre><code class=python>colours = [<span class=hljs-string>'Rød'</span>, <span class=hljs-string>'Blå'</span>, <span class=hljs-string>'Grønn'</span>, <span class=hljs-string>'Rosa'</span>, <span class=hljs-string>'Svart'</span>,\n           <span class=hljs-string>'Gul'</span>, <span class=hljs-string>'Oransje'</span>, <span class=hljs-string>'Lilla'</span>, <span class=hljs-string>'Brun'</span>]\n</code></pre> </li> <li> <p>Vi må også lage en variabel for å holde orden på hvor mange poeng spilleren har. Samt en variabel for å holde nummeret på fargene som skal vises. Disse settes til tilfeldig tall etterpå. Legg til disse over <code>time_left</code>-variabelen.</p> <pre><code class=python><span class=hljs-comment># Brukes til å velge tilfeldig farge</span>\ncolour = <span class=hljs-number>0</span>\npoints = <span class=hljs-number>0</span>\n\n</code></pre> </li> <li> <p>Nå må vi lage funksjonen som genererer en tilfeldig farge og viser denne til spilleren. Her er det mye som skjer, så vi skal ta det stegvis. Først definerer vi funksjonen og legger til variablene. Legg denne funksjonen over <code>countdown()</code>:</p> <pre><code class=python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>next_color</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-comment># Henter inn globale variabler:</span>\n    <span class=hljs-keyword>global</span> points\n    <span class=hljs-keyword>global</span> colour\n</code></pre> </li> <li> <p>Så skal vi sette tekstboxen brukeren kan skrive i aktiv hvis det er tid igjen på klokka. Legg til denne inne i <code>next_color()</code>:</p> <pre><code class=python><span class=hljs-keyword>if</span> time_left &gt; <span class=hljs-number>0</span>:\n    box.focus_set()\n</code></pre> </li> <li> <p>Så vil vi sammenligne det brukeren skriver inn i boxen med den norske fargelisten vår. <code>.lower()</code> gjør om alt til små bokstaver, slik at man ikke får feil om man skriver &quot;Rød&quot; i steden for &quot;rød&quot;. Legg til dette under:</p> <pre><code class=python><span class=hljs-comment># Hvis det spilleren skrev er riktig farge.</span>\n<span class=hljs-keyword>if</span> box.get().lower() == colours[colour].lower():\n    <span class=hljs-comment># Pluss på ett points</span>\n    points = points + <span class=hljs-number>1</span>\n</code></pre> </li> <li> <p>Nå vil vi slette det som brukeren skrev inn. Slik at alt er klart for neste runde. Legg til dette under <code>points = points + 1</code>:</p> <pre><code class=python>box.delete(<span class=hljs-number>0</span>, tkinter.END)\n</code></pre> </li> <li> <p>Nå skal vi få tkinter til å displaye farge og tekst. Til dette bruker vi <code>randint()</code> funksjonen. Den lager et tilfeldig tall mellom to ytterpunkter. Lag denne under <code>box.delete(0, tkinter.END)</code></p> <pre><code class=python><span class=hljs-comment># Lager tilfeldig tall mellom 0 og 8</span>\ncolour = randint(<span class=hljs-number>0</span>, len(colours)<span class=hljs-number>-1</span>)\n\n<span class=hljs-comment># Lager tilfeldig tall til teksten.</span>\ntext = randint(<span class=hljs-number>0</span>, len(colours)<span class=hljs-number>-1</span>)\n</code></pre> </li> <li> <p>Nå gjenstår det bare å vise teksten og fargen i vinduet. Vi oppdaterer feltene, og legger til en poenglabel. Funksjonen skal nå se slik ut:</p> <pre><code class=python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>next_color</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>global</span> points\n    <span class=hljs-keyword>global</span> colour\n\n    <span class=hljs-keyword>if</span> time_left &gt; <span class=hljs-number>0</span>:\n        box.focus_set()\n\n    <span class=hljs-keyword>if</span> box.get().lower() == colours[colour].lower():\n        points = points + <span class=hljs-number>1</span>\n\n    box.delete(<span class=hljs-number>0</span>, tkinter.END)\n\n    colour = randint(<span class=hljs-number>0</span>, len(colours)<span class=hljs-number>-1</span>)\n    text = randint(<span class=hljs-number>0</span>, len(colours)<span class=hljs-number>-1</span>)\n\n    <span class=hljs-comment># Oppdaterer labels</span>\n    label.config(fg=str(colours_eng[colour]), text=str(colours[text]))\n    points_label.config(text=<span class=hljs-string>\"Poeng: \"</span> + str(points))\n</code></pre> </li> </ul> </section> <section class=flag id=test-prosjektet-2> <h2 class=flag id=test-prosjektet-2>Test prosjektet</h2> <ul> <li>Kjør koden, får du noen feilmeldinger?</li> <li>Hvis du får feilmeldinger prøv å se etter hvor de er og fiks de.</li> </ul> </section> </section> <section class=activity id=steg-5-la-oss-starte-programmet> <h1 class=activity id=steg-5-la-oss-starte-programmet>Steg 5: La oss starte programmet!</h1> <p>Det skjer fortsatt lite i spillet vårt, men det er fordi vi ikke har startet selve spilldelen. Det skal vi gjøre nå!</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Vi lager en funksjon som starter spillet. Legg til denne funksjonen i programmet:</p> <pre><code class=python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>start_game</span><span class=hljs-params>(event)</span>:</span>\n    <span class=hljs-keyword>if</span> time_left == <span class=hljs-number>30</span>:\n        countdown()\n    next_color()\n</code></pre> </li> <li> <p>Siste steg er å kjøre denne funksjonen når spilleren trykker <em>enter</em>. Legg til dette rett over <code>root.mainloop</code>:</p> <pre><code class=python><span class=hljs-comment># Kjører funksjonen start_game() når enter trykkes</span>\nroot.bind(<span class=hljs-string>'&lt;Return&gt;'</span>, start_game)\nbox.pack()\nbox.focus_set()\n</code></pre> </li> <li> <p>Programmet ditt skal nå se slik ut:</p> <pre><code class=python><span class=hljs-comment>#!/usr/bin/python</span>\n<span class=hljs-comment># -*- coding: UTF-8 -*-</span>\n\n<span class=hljs-keyword>import</span> tkinter\n<span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\n\n\ncolours_eng = [<span class=hljs-string>'Red'</span>, <span class=hljs-string>'Blue'</span>, <span class=hljs-string>'Green'</span>, <span class=hljs-string>'Pink'</span>, <span class=hljs-string>'Black'</span>,\n               <span class=hljs-string>'Yellow'</span>, <span class=hljs-string>'Orange'</span>, <span class=hljs-string>'Purple'</span>, <span class=hljs-string>'Brown'</span>]\ncolours = [<span class=hljs-string>'Rød'</span>, <span class=hljs-string>'Blå'</span>, <span class=hljs-string>'Grønn'</span>, <span class=hljs-string>'Rosa'</span>, <span class=hljs-string>'Svart'</span>,\n           <span class=hljs-string>'Gul'</span>, <span class=hljs-string>'Oransje'</span>, <span class=hljs-string>'Lilla'</span>, <span class=hljs-string>'Brun'</span>]\ncolour = <span class=hljs-number>0</span>\n\npoints = <span class=hljs-number>0</span>\n\ntime_left = <span class=hljs-number>30</span>\n\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>start_game</span><span class=hljs-params>(event)</span>:</span>\n    <span class=hljs-keyword>if</span> time_left == <span class=hljs-number>30</span>:\n        countdown()\n    next_color()\n\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>next_color</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>global</span> points\n    <span class=hljs-keyword>global</span> colour\n\n    <span class=hljs-keyword>if</span> time_left &gt; <span class=hljs-number>0</span>:\n        box.focus_set()\n\n    <span class=hljs-keyword>if</span> box.get().lower() == colours[colour].lower():\n        points = points + <span class=hljs-number>1</span>\n\n    box.delete(<span class=hljs-number>0</span>, tkinter.END)\n\n    colour = randint(<span class=hljs-number>0</span>, len(colours)<span class=hljs-number>-1</span>)\n    text = randint(<span class=hljs-number>0</span>, len(colours)<span class=hljs-number>-1</span>)\n\n    label.config(fg=str(colours_eng[colour]), text=str(colours[text]))\n    points_label.config(text=<span class=hljs-string>\"Poeng: \"</span> + str(points))\n\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>countdown</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>global</span> time_left\n\n    <span class=hljs-keyword>if</span> time_left &gt; <span class=hljs-number>0</span>:\n        time_left = time_left - <span class=hljs-number>1</span>\n        time_label.config(text=<span class=hljs-string>\"Tid igjen: \"</span> + str(time_left))\n        time_label.after(<span class=hljs-number>1000</span>, countdown)\n    <span class=hljs-keyword>else</span>:\n        time_label.pack_forget()\n        label.pack_forget()\n        box.pack_forget()\n\n\nroot = tkinter.Tk()\n\nroot.title(<span class=hljs-string>\"Fargespill\"</span>)\nroot.geometry(<span class=hljs-string>\"475x300\"</span>)\n\ninstructions = tkinter.Label(root,\n                             text=<span class=hljs-string>\"Skriv inn fargen PÅ ordet, ikke selve ordet!\"</span>,\n                             font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>15</span>))\ninstructions.pack()\n\npoints_label = tkinter.Label(root,\n                             text=<span class=hljs-string>\"Trykk enter for å starte.\"</span>,\n                             font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>30</span>))\npoints_label.pack()\n\ntime_label = tkinter.Label(root,\n                           text=<span class=hljs-string>\"Tid igjen: \"</span> + str(time_left),\n                           font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>30</span>))\ntime_label.pack()\n\nlabel = tkinter.Label(root, font=(<span class=hljs-string>'Helvetica'</span>, <span class=hljs-number>100</span>))\nlabel.pack()\n\nbox = tkinter.Entry(root)\n\nroot.bind(<span class=hljs-string>'&lt;Return&gt;'</span>, start_game)\nbox.pack()\nbox.focus_set()\n\nroot.mainloop()\n</code></pre> </li> </ul> </section> <section class=flag id=test-prosjektet-3> <h2 class=flag id=test-prosjektet-3>Test prosjektet</h2> <ul> <li>Starter spillet og countdownen når du trykker enter?</li> <li>Får du ny farge etter du har skrevet inn svar?</li> <li>Får du +1 points når du skriver riktig farge på ordet?</li> <li>Slutter programmet etter 30 sek?</li> </ul> </section> </section> "},3206:function(s,n,e){s.exports=e.p+"_/oppgaver/src/python/fargespill/fargespill.89e86c.png"}});