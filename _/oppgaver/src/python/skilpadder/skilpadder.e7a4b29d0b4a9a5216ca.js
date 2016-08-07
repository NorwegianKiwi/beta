webpackJsonp([175,262],{981:function(e,s,n){e.exports={frontmatter:n(362),content:n(1584)}},1584:function(e,s){e.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon:</h1> <p>I denne modulen skal vi lære et programmeringsspråk som heter Python. Personen som laget det kalte det opp etter sitt favorittprogrammet på TV: Monthy Pythons Flyvende Cirkus. Python brukes av mange forskjellige programmerere til mange forskjellige ting. Python brukes av YouTube, NASA, CERN og andre. Hvis din Kodeklubb har en Raspperry Pi kan du bruke Python til å programmere den. Mange elsker Python fordi de synes det er lett å lese (i motsetning til språk de synes er vanskeligere å lese). Her er meningene mange, når du lærer flere språk får du sikkert også sterke meninger om dem. Å være i stand til å lese kode er viktig for en programmerer, kanskje like viktig som å kunne skrive den.</p> </section> <section class=activity id=steg-1-hei-skilpadde> <h1 class=activity id=steg-1-hei-skilpadde>Steg 1: Hei, Skilpadde!</h1> <p>Nå skal vi ha det litt gøy med skilpadder. En skilpadde er en liten robot som tegner seg selv på skjermen din, vi kan få den til å bevege seg rundt med Python-kommandoer.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Åpne et nytt kodevindu og skriv dette:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nforward(<span class=hljs-number>100</span>)\n\n</code></pre> </li> <li> <figure>Lagre programmet ditt som myturtle.py og velg <code>Run -&gt; Run Module</code>. Ser du hvordan skilpadden beveget seg 100 punkter fremover på skjermen? Skilpadden har en penn festet til seg, så den tegner linjer når den beveger seg rundt.</figure> </li> </ul> <section class=protip id=tips> <h3 class=protip id=tips>Tips</h3> <figure>Python-filer skal alltid ha filnavn som slutter med <code>.py</code>.</figure> </section> </section> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>La oss få skilpadden til å bevege seg rundt på skjermen! Forsøk å bruke <code>backward(distance)</code> i tillegg til å snu den ved å bruke <code>right(angle)</code> og <code>left(angle)</code>. Instruksjonen <code>backward(20)</code> forteller for eksempel skilpadden at den skal bevege seg bakover 20 pixler, og <code>right(90)</code> forteller den at den skal snu seg 90 grader til høyre. Du kan gi den mer enn en instruksjon om gangen, de blir utført i rekkefølge.</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>120</span>)\nforward(<span class=hljs-number>100</span>)\nleft(<span class=hljs-number>90</span>)\nbackward(<span class=hljs-number>100</span>)\nleft(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>50</span>)\n\n</code></pre> </li> </ul> <section id=vinkler-og-grader> <h3 id=vinkler-og-grader>Vinkler og grader</h3> <p>Lek deg litt med å lage dine egne figurer ved å bruke <code>forward</code>, <code>backward</code>, <code>left</code>, <code>right</code>. Husk at <code>forward</code> og <code>backward</code> bruker pixler, mens <code>left</code> og <code>right</code> bruker grader. La oss undersøke en skilpadde som bever seg til høyre.</p> <pre><code>        Nord\n          <span class=hljs-number>0</span>\n          <span class=hljs-string>|</span>\nVest      <span class=hljs-string>|     Øst</span>\n <span class=hljs-number>270</span> -----+----- <span class=hljs-number>90</span>\n          <span class=hljs-string>|</span>\n          <span class=hljs-string>|</span>\n         <span class=hljs-number>180</span>\n         Syd\n</code></pre> <p>Når skilpadden ser nordover og du ber den snu seg 90 grader til høyre, ser den østover. Snur du den 180 grader fra nord, ser den sydover, og snur du den 270 grader fra nord ser den vestover. Snur du 360 grader stopper den der den begynte. Kanskje er det lettere å tenke på som snowboard-triks?</p> <p>Hva med å snu mot venstre?</p> <pre><code>        Nord\n          <span class=hljs-number>0</span>\n          <span class=hljs-string>|</span>\nVest      <span class=hljs-string>|      Øst</span>\n  <span class=hljs-number>90</span> -----+----- <span class=hljs-number>270</span>\n          <span class=hljs-string>|</span>\n          <span class=hljs-string>|</span>\n         <span class=hljs-number>180</span>\n         Syd\n</code></pre> <p>Når skilpadden ser nordover og du ber den snu seg 90 grader mot venstre, ser den vestover. Når skilpadden ser nordover og du ber den snu seg 180 grader mot venstre ser den sydover, og om den ser nordover og du ber den snu seg 270 grader ser den østover. Snur du 360 grader er du tilbake der du starter, 360 grader er alltid helt rundt.</p> </section> <section class=protip id=hva-gjor-koden-pa-starten-av-programmet-vart> <h3 class=protip id=hva-gjor-koden-pa-starten-av-programmet-vart>Hva gjør koden på starten av programmet vårt?</h3> <ul> <li><code>from turtle import *</code> forteller Python at vi vil bruke skilpadde-biblioteket (turtle), en samling av kode vi kan bruke for å tegne på skjermen. Å bruke et ferdig bibliotek gjør at vi kan spare tid og gjenbruke andres arbeid.</li> <li><code>speed()</code> bestemmer farten til skilpadden. Vi må gi inn en verdi mellom 1 og 11, der 11 er det raskeste og 1 er det treigeste.</li> <li><code>shape()</code> Vi bruker formen(shape) &quot;turtle&quot; (skilpadde), men vi kan også si at vi vil at figuren skal se ut som &quot;arrow&quot; (pil), &quot;circle&quot; (sirkel), &quot;square&quot; (kvadrat), &quot;triangle&quot; (trekant) eller &quot;classic&quot; (klassisk).</li> </ul> <p>Vi kommer til å bruke disse instruksjonene på toppen av alle programmene våre i denne leksjonen. Hvis du vil kan du forsøke å gi skilpadden en av de andre formene, som pil, og få den til å gå så fort eller sakte som du vil.</p> </section> </section> </section> <section class=activity id=steg-2-tegne-figurer> <h1 class=activity id=steg-2-tegne-figurer>Steg 2: Tegne figurer!</h1> <p>La oss lage et kvadrat ved å fortelle skilpadden hvordan den skal bevege seg rundt.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Åpne en ny fil i IDLE og skriv inn følgende kode:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\n</code></pre> <figure>Lagre programmet ditt og velg <code>Run -&gt; Run Module</code>. Ser du en firkant? Skilpadden snur seg 90 grader fire ganger, og ender opp med å se den samme retningen som den starten. å snu 90, 90, 90 og så 90 grader igjen snur skilpadden totalt 360 grader.</figure> <p>Hva med en trekant? En trekant har tre hjørner, så vi må snu tre ganger. Hvis vi vil ende opp i samme retning, må vi snu 360 grader, akkurat som med firkanten. Derfor snur vi 120 grader, deretter 120 grader og så en gang til.</p> </li> <li> <figure>Endre koden din til å se ut som koden under for å få den til å tegne en trekant:</figure> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>120</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>120</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>120</span>)\n</code></pre> </li> <li> <p>Kjør koden. Ser du en trekant?</p> </li> </ul> <section id=velg-en-farge> <h3 id=velg-en-farge>Velg en farge</h3> <p>Hva er yndlingsfargen din? Du kan endre fargen på linjene ved å bruke funksjonen <code>pencolor</code> (Python staver på amerikansk, og amerikanerne staver colour uten u.). Du kan også endre størrelsen på pennen ved å bruke <code>pensize</code>:</p> </section> </section> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Endre koden fra eksemplet over til å se ut som det neste eksemplet, ved å legge til disse nye kommandoene:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\npensize(<span class=hljs-number>10</span>)\npencolor(<span class=hljs-string>"red"</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>120</span>)\npencolor(<span class=hljs-string>"blue"</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>120</span>)\npencolor(<span class=hljs-string>"green"</span>)\nforward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>120</span>)\n</code></pre> </li> <li> <figure>Kjør koden din, hva tegner den på skjermen? Denne koden tegner en tykk trekant i tre forskjellige farver.</figure> </li> <li> <p>Forsøk å endre fargene i koden din, kjør den og se hva som skjer. Skilpadden kan mange hundre forskjellige farger, ikke bare blå, rød og grønn. Forsøk med din yndlingsfarge! Du kan også bruke farger i <strong>hex</strong>, som du kanskje har gjort med CSS før. Istedenfor å bruke <code>pencolor(&quot;red&quot;)</code> kan du bruke hex <code>pencolor(&quot;#FF0000&quot;)</code>. Hvilken farge er #FF4F00?</p> </li> </ul> </section> </section> <section class=activity id=steg-3-gjenta-deg-selv-med-en-for-lokke> <h1 class=activity id=steg-3-gjenta-deg-selv-med-en-for-lokke>Steg 3: Gjenta deg selv (med en for-løkke)</h1> <p>Det siste programmet var de samme kommandoene igjen og igjen. Istedenfor å skrive dem ned, la oss be maskinen om å gjenta dem for oss. Du har vært borti <em>iterasjon</em> i Scratch ved å bruke <code>Forever</code> og <code>Repeat</code>/<code>Repeat until</code> blokker. I Python brukes <strong>for-løkker</strong> når du har kode som du vil gjenta n ganger. I dette eksemplet vil vi gjenta koden (den som er skjøvet inn) 4 ganger fordi en firkant har 4 sider.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Åpne en ny fil og skriv inn følgende:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\n<span class=hljs-keyword>for</span> count <span class=hljs-keyword>in</span> range(<span class=hljs-number>4</span>):\n    forward(<span class=hljs-number>100</span>)\n    right(<span class=hljs-number>90</span>)\n\n</code></pre> </li> <li> <p>Lagre programmet og velg: Run -&gt; Run module.</p> <p>Legg merke til at koden er skjøvet inn, <em>indentert</em>, eller dyttet til høyre under for-løkken. Python bruker mellomrom for å vite hvilke kommandoer som skal gjentas. Du kan bruke Tab-tasten for å få IDLE til å <em>indentere</em>, eller bruke Shift-Tab til å ta dem bort.</p> </li> <li> <figure>La oss se hva som skjer hvis vi bare indenterer (skyver inn) <code>forward</code>. Gjør om programmet ditt så det ser ut som dette:</figure> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\n<span class=hljs-keyword>for</span> count <span class=hljs-keyword>in</span> range(<span class=hljs-number>4</span>):\n    forward(<span class=hljs-number>100</span>)\nright(<span class=hljs-number>90</span>)\n</code></pre> </li> <li> <p>Legg merke til at <code>forward</code> er indendert og <code>right</code> ikke er det. Hva tror du dette programmet gjør? Forsøk å kjøre det og finn det ut.</p> <figure>Fikk du en rett linje? Python vil gjenta <code>forward</code> fire ganger, og deretter snu til høyre. Python bruker mellomrom for å gruppere kommandoer sammen, akkurat som Scratch bruker blokker. Python klager til deg om du ikke har fått mellomrommene riktig.</figure> </li> <li> <p>La oss endre programmet tilbake slik at det lager en firkant igjen, men istedenfor å bruke tall i koden skal vi gi tallene navn. Dette gjør det lettere å se hva programmet gjør, og gjør at vi slipper å gjenta oss selv.</p> <p>Endre filen så den ser slik ut:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\nsides = <span class=hljs-number>4</span>\nlength = <span class=hljs-number>100</span>\nangle = <span class=hljs-number>90</span>\n<span class=hljs-keyword>for</span> count <span class=hljs-keyword>in</span> range(sides):\n    forward(length)\n    right(angle)\n</code></pre> </li> <li> <figure>Lagre programmet og velg: <code>Run -&gt; Run module</code>.</figure> </li> </ul> </section> <section class=challenge id=oppgave-tegn-de-andre-formene> <h2 class=challenge id=oppgave-tegn-de-andre-formene>Oppgave: Tegn de andre formene</h2> <p>Kan du tegne noen av figurene under bare ved å endre verdiene?</p> <ul> <li>En trekant? (tre sider)</li> <li>Et pentagram? (fem sider)</li> <li>Et hexagram? (seks sider)</li> <li>Et oktagram? (åtte sider)</li> </ul> <figure>Husk, en trekant har tre sider og vi må derfor snu 120 grader i hvert av de tre hjørnene for at det skal bli 360 grader tilsammen. For en firkant må vi snu 90 grader i hvert hjørne, som også blir 360 grader.</figure> <figure>Hvis du snur seks ganger, hvor mange ganger må du snu for at det skal bli 360 grader? Prøv med forskjellige tall og se hva som skjer.</figure> </section> </section> <section class=activity id=steg-4-snu-snu-snu> <h1 class=activity id=steg-4-snu-snu-snu>Steg 4: Snu, snu, snu</h1> <p>Istedenfor å regne ut vinklene, kan vi ikke heller få datamaskinen til å gjøre det for oss? Python lar deg plusse, trekke fra, gange og dele. Vi kan skrive <code>sides = 4 + 1</code> istedenfor 5, eller <code>sides = 4 - 1</code> istedenfor 3. For multiplikasjon bruker Python <code>*</code>, og for divisjon skriver vi <code>/</code>. Hvis vi må snu 360 grader tilsammen, kan vi regne ut vinkelen vi trenger. For en firkant er <code>360 / 4</code> lik 90, for trekanten er <code>360 / 3</code> lik 120.</p> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>Endre programmet ditt til å regne ut vinkelen.</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\nsides = <span class=hljs-number>4</span>\nlength = <span class=hljs-number>20</span>\n\nangle = <span class=hljs-number>360</span>/sides\n<span class=hljs-keyword>for</span> count <span class=hljs-keyword>in</span> range(sides):\n    forward(length)\n    right(angle)\n</code></pre> </li> <li> <figure>Nå kan du endre antall sider, klarer Python å gjøre jobben riktig? Prøv med så mange kanter du vil!</figure> </li> </ul> </section> </section> <section class=activity id=steg-5-fylte-figurer> <h1 class=activity id=steg-5-fylte-figurer>Steg 5: Fylte figurer</h1> <section class=check id=sjekkliste-7> <h2 class=check id=sjekkliste-7>Sjekkliste</h2> <ul> <li> <p>Vi kan be skilpadden om å fylle figurene med en farge ved å bruke <code>begin_fill()</code> og <code>end_fill()</code>. Endre koden din til å bruke disse kommandoene:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\nsides = <span class=hljs-number>4</span>\nlength = <span class=hljs-number>20</span>\n\nfillcolor(<span class=hljs-string>\'red\'</span>)\npencolor(<span class=hljs-string>\'red\'</span>)\nbegin_fill()\n\nangle = <span class=hljs-number>360</span>/sides\n<span class=hljs-keyword>for</span> count <span class=hljs-keyword>in</span> range(sides):\n    forward(length)\n    right(angle)\nend_fill()\n</code></pre> <p>Akkurat som med <code>pencolor</code> velger <code>fillcolor</code> fargen skilpadden skal bruke for å fylle inn figurene du tegner. Denne koden tegner en rød firkant med en rød strek rundt.</p> <p>Du kan bruke <code>begin_fill()</code> for å fortelle skilpadden at den skal fargelegge figuren du tegner, og si <code>end_fill()</code> for å si at du er ferdig.</p> </li> <li> <p>Forsøk å endre fargene, sidene og lengdene og se hvilke figurer du kan tegne!</p> </li> </ul> </section> </section> <section class=activity id=steg-6-pennen-gar-opp-pennen-gar-ned> <h1 class=activity id=steg-6-pennen-gar-opp-pennen-gar-ned>Steg 6: Pennen går opp, pennen går ned</h1> <p>Hvis du vil flytte skilpadden uten at den skal sette spor etter seg, kan du bruke <code>penup()</code> og <code>pendown()</code> for å slå av og på at skilpadden skal tegne.</p> <section class=check id=sjekkliste-8> <h2 class=check id=sjekkliste-8>Sjekkliste</h2> <ul> <li> <p>Forsøk dette i en ny fil:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> turtle <span class=hljs-keyword>import</span> *\n\nspeed(<span class=hljs-number>11</span>)\nshape(<span class=hljs-string>"turtle"</span>)\n\npencolor(<span class=hljs-string>\'red\'</span>)\n\n<span class=hljs-keyword>for</span> count <span class=hljs-keyword>in</span> range(<span class=hljs-number>20</span>):\n    penup()\n    forward(<span class=hljs-number>10</span>)\n    pendown()\n    forward(<span class=hljs-number>20</span>)\n</code></pre> </li> <li> <p>Dette burde tegne en stiplet strek over skjermen din. Kjør det og se!</p> </li> </ul> <section class=protip id=hjem-kjaere-hjem-pa-skjermen> <h3 class=protip id=hjem-kjaere-hjem-pa-skjermen>Hjem, kjære hjem på skjermen</h3> <p>Et par triks på slutten: <code>home()</code> får skilpadden til å gå hjem dit den begynte, <code>clear()</code> tørker alle sporene av skjermen, og <code>reset()</code> flytter skilpadden og renser opp skjermen.</p> </section> </section> </section> <section class=activity id=steg-7-gjor-hva-du-vil> <h1 class=activity id=steg-7-gjor-hva-du-vil>Steg 7: Gjør hva du vil!</h1> <p>Du kan <code>forward()</code>, <code>backward()</code>, <code>left()</code>, <code>right()</code>, du kan gjenta ting med <code>for count in range(4)</code>, endre farger, endre fart og til og med fylle figurer!</p> <p>Kan du tegne et hus, en fugl? En slange? En katt? En hund? En løve? Du kan kombinere figurer og se hva du kan lage. Kan du tegne en robot?</p> </section>'}});