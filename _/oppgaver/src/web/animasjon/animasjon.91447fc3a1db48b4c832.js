webpackJsonp([85,388],{732:function(e,s,n){e.exports=n.p+"_/oppgaver/src/web/animasjon/ressurser/out.47d412.gif"},1554:function(e,s,n){e.exports={frontmatter:n(647),content:n(2663)}},2663:function(e,s,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne oppgaven skal du lære å animerer HTML-objekter ved hjelp av CSS. Under ser du hvordan resultatet vil bli til slutt:</p> <figure><img src="+n(732)+' alt=""></figure> <p>Men før vi starter å lage animasjonen over må vi lære om hvordan animasjon fungerer ved hjelp av CSS. Så la oss starte med det grunnleggende!</p> <p><strong>For å lære mest mulig bør du åpne en tom <code>.html</code>-fil og skrive koden for hånd når du leser oppgaven, da kommer du til å bli en racer i CSS-animasjon!</strong></p> </section> <section class=activity id=steg-1-animasjons-attributtet> <h1 class=activity id=steg-1-animasjons-attributtet>Steg 1: Animasjons-attributtet</h1> <p>Animasjon i CSS er ganske enkelt, i utgangspunktet har animasjonen 2 stadier: <code>start</code> og <code>slutt</code>. Mellom <code>start</code> og <code>slutt</code> kan du legge inn forskjellige faser, som vi skal se på litt senere. Animasjonen vil heller ikke gå i <code>loop</code> (altså gjenta seg selv) med mindre du forteller at den skal gjøre det.</p> <p>Før vi skal se på et enkelt eksempel skal vi se på <code>animation</code>-attributter. Vi skal bruke disse:</p> <pre><code class=css><span class=hljs-selector-id>#id</span> {\n    <span class=hljs-attribute>animation-name</span>: et-navn;\n    <span class=hljs-attribute>animation-duration</span>: <span class=hljs-number>1s</span>;\n    <span class=hljs-attribute>animation-timing-function</span>: linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end;\n    <span class=hljs-attribute>animation-delay</span>: <span class=hljs-number>1s</span>;\n    <span class=hljs-attribute>animation-iteration-count</span>: nummer|infinite;\n    <span class=hljs-attribute>animation-direction</span>: normal|reverse|alternate|alternate-reverse;\n    <span class=hljs-attribute>animation-fill-mode</span>: none|forwards|backwards|both;\n}\n</code></pre> <ul> <li><code>name</code>: Navnet på animasjonen.</li> <li><code>duration</code>: Hvor lenge (i sekunder) skal animasjonen vare.</li> <li><code>timing-function</code>: Hvordan mellom-fasene er kalkulert.</li> <li><code>delay</code>: Hvor mye forsinkelse det skal være før animasjonen starter. Standard er 0 sekund.</li> <li><code>iteration-count</code>: Hvor mange ganger skal animasjonen gjentas.</li> <li><code>direction</code>: Bestemmer om animasjonen skal gå baklengs eller ikke.</li> <li><code>fill-mode</code>: Hvilke stiler som er lagt til før og etter start av animasjonen.</li> </ul> <p>Her er et enkelt eksempel på en boks som går fra venstre til høyre:</p> <style>#boks{height:50px;width:50px;background-color:#00f;position:relative;animation-name:frem-og-tilbake;animation-duration:2s;animation-iteration-count:infinite;animation-direction:alternate}@keyframes frem-og-tilbake{0%{left:0}100%{left:100px}}</style> <div id=boks></div> <br> <pre><code class=html><span class=hljs-meta>&lt;!DOCTYPE html&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>html</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>head</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>style</span>&gt;</span><span class=css>\n    <span class=hljs-selector-id>#boks</span> {\n        <span class=hljs-attribute>height</span>: <span class=hljs-number>50px</span>;\n        <span class=hljs-attribute>width</span>: <span class=hljs-number>50px</span>;\n        <span class=hljs-attribute>background-color</span>: blue;\n        <span class=hljs-attribute>position</span>: relative;\n        <span class=hljs-attribute>animation-name</span>: frem-og-tilbake;\n        <span class=hljs-attribute>animation-duration</span>: <span class=hljs-number>2s</span>;\n        <span class=hljs-attribute>animation-iteration-count</span>: infinite;\n        <span class=hljs-attribute>animation-direction</span>: alternate;\n    }\n    @<span class=hljs-keyword>keyframes</span> frem-og-tilbake {\n        0% {\n            <span class=hljs-attribute>left</span>: <span class=hljs-number>0px</span>;\n        }\n        100% {\n            <span class=hljs-attribute>left</span>: <span class=hljs-number>100px</span>;\n        }\n    }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>style</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>head</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>body</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"boks"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>body</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>html</span>&gt;</span>\n</code></pre> <p><strong>La oss se nærmere på koden over:</strong></p> <p>Vi har en <code>&lt;div&gt;</code> med ID <code>boks</code>, den er 50x50px med blå bakgrunnsfarge. Posisjonen er <code>relative</code> som vil si at vi har muligheter for å flytte på den.</p> <p><code>animation</code>-attributtene:</p> <ul> <li><code>name</code>: frem-og-tilbake</li> <li><code>duration</code>: 2s (sekunder)</li> <li><code>timing-function</code>: Ikke oppgitt, er <code>ease</code> som standard.</li> <li><code>delay</code>: Ikke oppgitt, siden vi ønsker at animasjonen skal starte med en gang og standard er <code>0s</code>.</li> <li><code>iteration-count</code>: infinite (uendelig, så den vil ikke stoppe).</li> <li><code>direction</code>: alternate (for at den skal gå frem og tilbake)</li> <li><code>fill-mode</code>: Ikke oppgitt, ettersom animasjonen starter med en gang og aldri slutter trenger vi ikke en <code>fill-mode</code> før eller etter animasjonen.</li> </ul> <p><code>@keyframes frem-og-tilbake</code> er det vi bruker for å spesifisere hva som skal skje under animasjonen. I dette tilfellet har vi satt navnet til animasjonen med <code>animation-name: frem-og-tilbake</code>, vi bruker derfor <code>@keyframes frem-og-tilbake</code> for å beskrive animasjonen.</p> <p>Innen for <code>@keyframes</code> kan vi nå spesifisere hva vi vil at animasjonen skal gjøre, vi har to faser, en start og en slutt. <code>0%</code> er animasjonens start og <code>100%</code> er animasjonens slutt. Derfor vil boksen vår starte til venstre (<code>left: 0px</code>) og slutte lengre til høyre (<code>left: 100px</code>).</p> <p><strong>NB!</strong> Verdiene i <code>animation</code>-attributtene kan også skrives som en egen linje, men det er da litt vanskeligere å finne ut hva som er hva:</p> <pre><code class=css><span class=hljs-selector-id>#boks</span> {\n    <span class=hljs-attribute>animation</span>: frem-og-tilbake <span class=hljs-number>2s</span> ...;\n}\n</code></pre> <section class=challenge id=utfordring> <h2 class=challenge id=utfordring>Utfordring</h2> <ul> <li>Skriv koden inn i din favoritt teksteditor, lagre det som en <code>.html</code>-fil og gjør oppgavene under.</li> <li>Få animasjonen til å bytte farge fra blå til rød underveis.</li> <li>Klarer du å få boksen til å flytte seg nedover og oppover?</li> <li>Prøv å få boksen til å bevege seg i en firkant.</li> </ul> </section> </section> <section class=activity id=steg-2-keyframes> <h1 class=activity id=steg-2-keyframes>Steg 2: @keyframes</h1> <p>La oss nå se nærmere på <code>@keyframes</code>. <code>@keyframes</code> er CSS som forteller hvilke steg en animasjon består av.</p> <p>Her kommer noen eksempler:</p> <style>#diagonalt{height:50px;width:50px;background-color:green;position:relative;margin-bottom:100px;animation:diagonalt 2s 0s infinite}@keyframes diagonalt{0%{top:0;left:0}100%{top:100px;left:100px}}</style> <div id=diagonalt></div> <pre><code class=css>@<span class=hljs-keyword>keyframes</span> diagonalt {\n    0% {\n      <span class=hljs-attribute>top</span>: <span class=hljs-number>0px</span>;\n      <span class=hljs-attribute>left</span>: <span class=hljs-number>0px</span>;\n    }\n    100% {\n      <span class=hljs-attribute>top</span>: <span class=hljs-number>100px</span>;\n      <span class=hljs-attribute>left</span>: <span class=hljs-number>100px</span>;\n    }\n}\n</code></pre> <p>Dette eksempelet får et objekt til å gå diagonalt siden det starter på <code>top: 0px; left: 0px;</code> og ender på <code>top: 100px; left: 100px;</code>.</p> <style>#ned{height:50px;width:50px;background-color:red;position:relative;margin-bottom:100px;animation:ned 2s 0s infinite}@keyframes ned{0%{top:0}100%{top:100px}}</style> <div id=ned></div> <pre><code class=css>@<span class=hljs-keyword>keyframes</span> ned {\n    0% {\n      <span class=hljs-attribute>top</span>: <span class=hljs-number>0px</span>;\n    }\n    100% {\n      <span class=hljs-attribute>top</span>: <span class=hljs-number>100px</span>;\n    }\n}\n</code></pre> <p>Her går HTML-objektet nedover ved hjelp av <code>top</code>-attributtet.</p> <style>#skifte_farge{height:50px;width:50px;background-color:#00f;position:relative;animation:skifte_farge 5s 0s infinite}@keyframes skifte_farge{0%{background-color:#00f}50%{background-color:#ff0}100%{background-color:red}}</style> <div id=skifte_farge></div> <br> <pre><code class=css>@<span class=hljs-keyword>keyframes</span> skift-farge {\n    0% {\n      <span class=hljs-attribute>background-color</span>: blue;\n    }\n    50% {\n      <span class=hljs-attribute>background-color</span>: yellow;\n    }\n    100% {\n      <span class=hljs-attribute>background-color</span>: red;\n    }\n}\n</code></pre> <p>Merk at i dette eksempelet har vi lagt inn <code>50%</code>. Dette er et eksempel på at du kan dele inn animasjonen faser mellom <code>0%</code> og <code>100%</code>. Du kan legge til så mange faser du vil ved å bruke <code>%</code>.</p> <p><strong>Merk</strong> at du ikke kan endre animasjonens varighet med <code>@keyframes</code> og <code>%</code>, du må da heller endre på <code>animation-duration</code>.</p> </section> <section class=activity id=steg-3-pakke-ut-filene> <h1 class=activity id=steg-3-pakke-ut-filene>Steg 3: Pakke ut filene</h1> <p>Nå skal vi animere øksen og Minecraft-logoen:</p> <figure><img src='+n(732)+' alt=""></figure> <ul> <li>Last ned og pakk ut <a href=minecraft_animasjon.zip>minecraft_animasjon.zip</a>.</li> <li>Åpne <code>index.html</code> i din favoritt teksteditor og i en nettleser.</li> </ul> <p>Du vil nå ha en nettside som ser noe sånt ut:</p> <p><img src='+n(3386)+' alt=minecraft width=100%></p> <p>I koden til <code>index.html</code> har vi et bakgrunnsbilde og 3 div-er med følgende ID: <code>pickaxe</code>, <code>minecraft</code> og <code>block</code>. Alle disse ID-ene er et bilde på nettsiden, bakgrunnsbildet ligger i CSS-en under <code>body</code>.</p> <p><strong>Dette skal vi programmere:</strong></p> <ol> <li><code>pickaxe</code>-en skal komme flyvende inn og treffe blokkene.</li> <li>Når øksen har truffet blokkene skal logoen skal komme inn.</li> </ol> </section> <section class=activity id=steg-4-flyvende-oks> <h1 class=activity id=steg-4-flyvende-oks>Steg 4: Flyvende øks</h1> <p>Nå skal vi få <code>pickaxe</code>-en til å fly. Vi begynner med å beskrive animasjonen med <code>keyframes</code>.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li>Lag en <code>@keyframes</code> med animasjonsnavnet <code>move-pickaxe</code>.</li> <li>La figuren starte utenfor skjermen. <strong>Hint:</strong> bruk en negativ verdi av <code>left</code>.</li> <li>La <code>pickaxe</code>-bildet bevege seg bort til blokkene. Klarer du å finne ut hvor langt det er? <strong>Hint:</strong> positiv verdi av <code>left</code>.</li> <li>Legg til rotasjon med <code>transform: rotate(antall grader)</code>.</li> <li>Kan du tenke deg hvor <code>transform: rotate()</code> bør være? I <code>0%</code> eller <code>100%</code>?</li> <li>Prøv deg frem med hvor mange grader du trenger for at den skal bli riktig. <strong>Hint:</strong> 360 grader er én gang og 720 grader er to ganger rundt seg selv.</li> </ul> <p>Så legger vi animasjonen til øksen.</p> </section> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li>Finn <code>#pickaxe</code> i CSS-en.</li> <li>Legg til animasjonsnavnet fra <code>keyframes</code> med <code>animation-name</code>.</li> <li>Legg til <code>animation-duration</code> på <code>2s</code>.</li> <li>Legg til et <code>animation-delay</code> på <code>1s</code>.</li> <li>Sett <code>animation-timing-function</code> til <code>linear</code>.</li> <li>Sett <code>animation-fill-mode</code> til <code>forwards</code>.</li> </ul> <style>#pickaxe{background-image:url(ressurser/pickaxe.png);z-index:1;width:150px;height:150px;position:relative;animation:move-pickaxe 2s;animation-timing-function:linear;animation-fill-mode:forwards;animation-iteration-count:infinite}@keyframes move-pickaxe{0%{left:0}100%{left:800px;transform:rotate(720deg)}}</style> <div id=pickaxe></div> <toggle> <strong>Forslag til kode så langt</strong> <hide> <pre><code class=css><span class=hljs-selector-id>#pickaxe</span> {\n    <span class=hljs-attribute>background-image</span>: <span class=hljs-built_in>url</span>(<span class=hljs-string>"pickaxe.png"</span>);\n    <span class=hljs-attribute>z-index</span>: <span class=hljs-number>1</span>;\n    <span class=hljs-attribute>width</span>: <span class=hljs-number>150px</span>;\n    <span class=hljs-attribute>height</span>: <span class=hljs-number>150px</span>;\n    <span class=hljs-attribute>position</span>: absolute;\n    <span class=hljs-attribute>bottom</span>: <span class=hljs-number>150px</span>;\n    <span class=hljs-attribute>left</span>: -<span class=hljs-number>150px</span>;\n    <span class=hljs-attribute>animation</span>: move-pickaxe <span class=hljs-number>2s</span>;\n    <span class=hljs-attribute>animation-delay</span>: <span class=hljs-number>1s</span>;\n    <span class=hljs-attribute>animation-timing-function</span>: linear;\n    <span class=hljs-attribute>animation-fill-mode</span>: forwards;\n}\n@<span class=hljs-keyword>keyframes</span> move-pickaxe {\n    0% {\n        <span class=hljs-attribute>left</span>:-<span class=hljs-number>150px</span>;\n    }\n    100% {\n        <span class=hljs-attribute>left</span>: <span class=hljs-number>800px</span>;\n        <span class=hljs-attribute>transform</span>: <span class=hljs-built_in>rotate</span>(720deg);\n    }\n}\n</code></pre> </hide> </toggle> </section> </section> <section class=activity id=steg-5-flyvende-logo> <h1 class=activity id=steg-5-flyvende-logo>Steg 5: Flyvende logo</h1> <p>Nå som du har klart å få <code>pickaxe</code> til å fly inn med rotasjon er oppgaven din nå å få <code>#minecraft</code> til komme flyvende inn etter at <code>pickaxe</code> har stoppet.</p> <ul> <li>Bruk det du har lært i oppgaven til å og prøv få logoen til å komme inn når <code>pickaxe</code> er ferdig med sin animasjon.</li> </ul> <style>#minecraft{background-image:url(ressurser/minecraft.png);width:616px;height:154px;position:relative;left:-900px;animation:move_minecraft 4s;animation-delay:1s;animation-fill-mode:forwards;animation-iteration-count:infinite}@keyframes move_minecraft{0%{left:-900px}100%{left:250px}}</style> <div id=minecraft></div> <toggle> <strong>Forslag til kode for Minecraft-logo</strong> <hide> <pre><code class=css><span class=hljs-selector-id>#minecraft</span> {\n    <span class=hljs-attribute>background-image</span>: <span class=hljs-built_in>url</span>(<span class=hljs-string>"minecraft.png"</span>);\n    <span class=hljs-attribute>z-index</span>: <span class=hljs-number>1</span>;\n    <span class=hljs-attribute>width</span>: <span class=hljs-number>616px</span>;\n    <span class=hljs-attribute>height</span>: <span class=hljs-number>154px</span>;\n    <span class=hljs-attribute>position</span>: absolute;\n    <span class=hljs-attribute>left</span>: -<span class=hljs-number>900px</span>;\n    <span class=hljs-attribute>animation</span>: move_minecraft <span class=hljs-number>4s</span>;\n    <span class=hljs-attribute>animation-delay</span>: <span class=hljs-number>3s</span>;\n    <span class=hljs-attribute>animation-fill-mode</span>: forwards;\n}\n@<span class=hljs-keyword>keyframes</span> move_minecraft {\n    0% {\n        <span class=hljs-attribute>left</span>: -<span class=hljs-number>900px</span>;\n    }\n    100% {\n        <span class=hljs-attribute>left</span>:<span class=hljs-number>400px</span>;\n    }\n}\n</code></pre> </hide> </toggle> <p><strong>Gratulerer!</strong> Du har nå laget din første animasjon!</p> </section> '},3386:function(e,s,n){e.exports=n.p+"_/oppgaver/src/web/animasjon/ressurser/minecraft_1.3c54cb.png"}});