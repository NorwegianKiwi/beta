webpackJsonp([131,388],{1408:function(e,s,t){e.exports={frontmatter:t(501),content:t(2511)}},2511:function(e,s,t){e.exports="<section class=intro id=huskespill> <h1 class=intro id=huskespill>Huskespill</h1> <p>I denne oppgaven skal du lage et huskespill hvor spilleren skal huske flest mulig ord i riktig rekkefølge. Spilleren skal få opp en liste med ord, deretter skal listen forsvinne og spilleren skal så skrive inn ordene i riktig rekkefølge. Skrives ordene inn i riktig rekkefølge, vil listen utvides med et nytt ord som må huskes. Programmet holder på slik helt til spilleren gjetter feil. Når spillet er ferdig får spilleren vite hvor mange ord han eller hun klarte å huske etter hverandre.</p> <p>Vi vil bygge programmet gradvis steg for steg. I hvert steg vil det gis viktige tips som ligner på slik en bør løse steget.</p> <p>**Eksempel på hvordan programmet skal fungere: **</p> <figure><img src="+t(3212)+" alt=\"\"></figure> </section> <section class=activity id=steg-1-utvid-en-liste-med-tilfeldige-element> <h1 class=activity id=steg-1-utvid-en-liste-med-tilfeldige-element>Steg 1: Utvid en liste med tilfeldige element</h1> <ul> <li>Lag en funksjon som tar inn en liste som parameter.</li> <li>Funksjonen skal legge til et tilfeldig ord på slutten av lista.</li> <li>Funksjonen skal returnere den utvidede lista.</li> <li><strong>Før du går videre til steg 2, sjekk at funksjonen din fungerer som den skal.</strong></li> </ul> <section class=protip id=tips-lister> <h2 class=protip id=tips-lister>Tips: Lister</h2> <p><strong>Hva:</strong> En liste er en variabel som kan lagre flere verdier på en gang.</p> <p><strong>Hvordan lage lister:</strong></p> <pre><code class=python>liste = [<span class=hljs-string>'sau'</span>, <span class=hljs-string>'gris'</span>, <span class=hljs-string>'menneske'</span>]\ntom_liste = []\nprint(liste)\nprint(tom_liste)\n</code></pre> <p><strong>Hvordan hente ut verdier fra en liste:</strong></p> <pre><code class=python>print(liste[<span class=hljs-number>2</span>])\n</code></pre> <p>Husk at vi begynner å telle på 0, så første posisjon i lista er posisjon 0. Deretter teller vi oppover 0,1,2,3...</p> <p><strong>Hvordan finne lengden til liste:</strong></p> <pre><code class=python>lengde = len(liste)\nprint(lengde)\n</code></pre> <p><strong>Hvordan legge til ny verdi på slutten av liste:</strong></p> <pre><code class=python>print(liste)\nliste.append(<span class=hljs-string>'nils'</span>)\nprint(liste)\n</code></pre> <p>Prøv ut eksemplene for å forstå hvordan du kan bruke dem til å løse oppgaven.</p> </section> <section class=protip id=tips-velge-et-tilfeldig-element-i-en-liste> <h2 class=protip id=tips-velge-et-tilfeldig-element-i-en-liste>Tips: Velge et tilfeldig element i en liste</h2> <p>For å hente et tilfeldig element i en liste kan man bruke <a href=https://docs.python.org/3.4/library/random.html#random.choice><code>choice()</code></a> i random-biblioteket.</p> <p><strong>Eksempel:</strong></p> <pre><code class=python><span class=hljs-keyword>import</span> random\nliste = [<span class=hljs-string>'asdf'</span>, <span class=hljs-string>'qwerty'</span>, <span class=hljs-string>'nils'</span>]\n\ntilfeldig = random.choice(liste)\nprint(tilfeldig)\n</code></pre> <p>Prøv å kjør denne koden mange ganger!</p> </section> </section> <section class=activity id=steg-2-hent-inn-tekst-og-lag-liste-av-den> <h1 class=activity id=steg-2-hent-inn-tekst-og-lag-liste-av-den>Steg 2: Hent inn tekst og lag liste av den</h1> <ul> <li>Lag en funksjon som tar inn tekst og lager en liste av den.</li> <li>Teksten som tas inn skal splittes ved <code>-</code>.</li> <li>Funksjonen skal returnere listen.</li> <li><strong>Før du går videre til steg 3, sjekk at funksjonen din fungerer som den skal.</strong></li> </ul> <section class=protip id=tips-hente-innputt> <h2 class=protip id=tips-hente-innputt>Tips: Hente innputt</h2> <p>For å hente innputt og lagre det til en variabel kan vi bruke <a href=https://docs.python.org/3.4/library/functions.html#input><code>input()</code></a>.</p> <p><strong>Eksempel:</strong></p> <pre><code class=python>tekst = input(<span class=hljs-string>'Skriv noe'</span>)\n</code></pre> <p>Det som brukeren skriver inn vil lagres i variabelen <code>tekst</code>.</p> </section> <section class=protip id=tips-splitte-tekst-til-en-liste> <h2 class=protip id=tips-splitte-tekst-til-en-liste>Tips: Splitte tekst til en liste</h2> <p>Siden spilleren ikke kan skrive inn en liste, men kun tekst, må vi forandre teksten til en liste. Dette kan vi gjøre med <a href=https://docs.python.org/3/library/stdtypes.html#str.split><code>split()</code></a>. Hvis vi skiller ordene som skal være i lista med et bestemt tegn, kan <a href=https://docs.python.org/3/library/stdtypes.html#str.split><code>split()</code></a> hente ut alle ordene og legge dem i en liste.</p> <p><strong>Eksempel:</strong></p> <pre><code class=python>tekst = <span class=hljs-string>'giraff-neshorn-bjørn-pelikan'</span>\nliste = tekst.split(<span class=hljs-string>'-'</span>)\nprint(liste)\n</code></pre> <p>Merk <code>'-'</code> som står i parentesen <code>split('-')</code>. Denne forteller hvilket tegn som skiller ordene fra hverandre.</p> <p><strong>Test ut eksempelet for å se hva som skjer.</strong></p> </section> </section> <section class=activity id=steg-3-lag-spillet> <h1 class=activity id=steg-3-lag-spillet>Steg 3: Lag spillet</h1> <ul> <li>Bruk funksjonene fra steg 1 og 2 til å lage programmet.</li> <li>Programmet skal benytte to lister. En som utvides for hver runde, og en som lages ved hjelp av ordene som brukeren skriver inn.</li> <li>Så lenge listene er like skal programmet kjøre.</li> <li>Når programmet er ferdig, skriv ut hvor mange ord spilleren klarte å huske.</li> </ul> <section class=check id=sjekkliste-for-oppgaven> <h2 class=check id=sjekkliste-for-oppgaven>Sjekkliste for oppgaven</h2> <ul> <li>Avsluttes spillet når det huskes feil?</li> <li>Får spilleren vite hvor mange han eller hun husket riktig?</li> <li>Blir lista som skal huskes usynlig for spilleren? (Tips: Skriv ut tomrom mange ganger.)</li> </ul> </section> </section> "},3212:function(e,s,t){e.exports=t.p+"_/oppgaver/src/python/huskespill/memo.78eb2e.gif"}});