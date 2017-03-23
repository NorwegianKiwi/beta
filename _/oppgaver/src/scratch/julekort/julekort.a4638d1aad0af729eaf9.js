webpackJsonp([21,385],{62:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAIAAAC63aDhAAAAA3NCSVQICAjb4U/gAAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAASNJREFUOI3llK9uwzAQxt1pwDeWspnmFQI7uLKU1X2DFa6oe41mrGMpq8fisYbV0GbzoNmsog6aDnjKouVPF6mVKvVDJ+u7n+/OOvfsboeOpKtjgc6YdV1EabrSWnfNJ4TMZo9/Wc656fQhDMNOrPn8qaauqj6tzTc5YByPYgA4yG2bV77JtdZSKSVV+QLnXGdWIQzYB1LKZJGk6arW1tYjpePt9vYGIIoiD2LsFSFkjGFrRif0MOtrvw/6fYQQAAyH9/6QrZlUv51KpQghg7tBGyvLuBBiFMeFzznHM14G/Tg5L3qvYWn9IYTwvnetJ3SMAZbLF2tt7RA4f2tkeZCXMWaRPAdB0ATyJTeyqtam56/Vue72aVj/2biqylm9C/ijvwFjEHjPhVu+swAAAABJRU5ErkJggg=="},226:function(e,t,n){e.exports=n.p+"_/oppgaver/src/scratch/julekort/julekort.6a7b0f.png"},1435:function(e,t,n){e.exports={frontmatter:n(563),content:n(2339)}},2339:function(e,t,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Vi skal lage et julekort i Scratch. Det skal ha noen enkle funksjoner og animasjoner. Når det er ferdig vil det se omtrent slik ut.</p> <figure><img src="+n(226)+' alt=""/></figure> </section> <section class=activity id=steg-1-endre-bakgrunn-og-finne-figurer> <h1 class=activity id=steg-1-endre-bakgrunn-og-finne-figurer>Steg 1: Endre bakgrunn og finne figurer</h1> <p>Når du er klar til å starte velger du <code>Programmering</code> i menyen øverst på siden <a href=http://scratch.mit.edu/ >http://scratch.mit.edu/</a>. Da kommer vi inn i Scratch.</p> <figure><img src='+n(2982)+' alt=""/></figure> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Klikk på scenen ved siden av kattefiguren <code>Sprite1</code> i vinduet for figurer. Trykk på <img src='+n(62)+' alt=""/> for å importere en ferdig bakgrunn. Velg den bakgrunnen du vil. Slett deretter den tomme bakgrunnen som ligger der.</p> <figure><img src='+n(2981)+' alt=""/></figure> </li> <li> <p>Slett kattefiguren <code>Sprite1</code> ved å høyreklikke på ham og slette.</p> </li> <li> <p>Velg nye figurer fra biblioteket. Legg til isbjørnen, snømannen og juletreet.</p> <figure><img src='+n(2983)+' alt=""/></figure> </li> </ul> </section> </section> <section class=activity id=steg-2-legge-til-kode> <h1 class=activity id=steg-2-legge-til-kode>Steg 2: Legge til kode</h1> <p>Nå skal vi få figurene til å gjøre ting når de blir klikket på.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Velg isbjørnen og fanen <code class=blocklightgrey>Skript</code> og lag denne koden. Når isbjørnen blir klikket på skal den si <code>God jul!</code>. Deretter skal den skifte utseende hvert sekund, 10 ganger.</p> <pre class=blocks>når denne figuren klikkes\nsi [God jul!] i (2) sekunder\ngjenta (10) ganger\n    neste drakt\n    vent (1) sekunder\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-ditt> <h2 class=flag id=test-prosjektet-ditt>Test prosjektet ditt</h2> <p><strong>Klikk på isbjørnen og se om koden din virker.</strong></p> <ul> <li> <p>Sier isbjørnen <code>God jul!</code>?</p> </li> <li> <p>Forandrer isbjørnen stilling?</p> </li> </ul> </section> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Velg snømannen og fanen <code>Skript</code> og lag denne koden. Snømannen skal spørre etter navnet ditt. Den setter svaret inn i en ny setning. Deretter skal den skifte farge.</p> <pre class=blocks>når denne figuren klikkes\nspør [Hva er navnet ditt?] og vent\nsi (sett sammen [God jul ] (svar)) i (2) sekunder\nfor alltid\n    endre [farge v] effekt med (25)\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-ditt-2> <h2 class=flag id=test-prosjektet-ditt-2>Test prosjektet ditt</h2> <p><strong>Klikk på snømannen og se om koden din virker.</strong></p> <ul> <li> <p>Spør snømannen om navnet ditt?</p> </li> <li> <p>Svarer snømannen med navnet ditt når du har skrevet det inn?</p> </li> <li> <p>Forandrer snømannen farge?</p> </li> </ul> </section> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Velg juletreet og fanen <code class=blocklightgrey>Skript</code> og lag denne koden. Nå skal juletreet skifte farge og utseende.</p> <pre class=blocks>når grønt flagg klikkes\nfor alltid\n    vent (0.3) sekunder\n    endre [farge v] effekt med (25)\n    neste drakt\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-ditt-3> <h2 class=flag id=test-prosjektet-ditt-3>Test prosjektet ditt</h2> <p><strong>Trykk på det grønne flagget og se om alt virker.</strong></p> <ul> <li> <p>Endrer treet farge?</p> </li> <li> <p>Danser treet fra side til side?</p> </li> </ul> </section> </section> <section class=activity id=steg-3-har-du-ledig-tid-sier-du> <h1 class=activity id=steg-3-har-du-ledig-tid-sier-du>Steg 3: Har du ledig tid, sier du?</h1> <p>Da har du jobbet godt! Om du fortsatt har ledig tid kan du:</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Legge til din egen velkomsthilsen, for eksempel &quot;God jul&quot; eller du kan synge din egen julesang.</p> <p>Klikk på <code>Scene</code>, og velg fanen <code class=blocklightgrey>Lyder</code>.</p> <figure><img src='+n(2980)+' alt=""/></figure> <p>Ta op din egen lyd, og gi den et navn, for eksempel <code>julehilsen</code>. Gå deretter inn på <code class=blocklightgrey>Skript</code>, og legg inn følgende kode:</p> <pre class=blocks>når grønt flagg klikkes\nspill lyden [julehilsen v] til den er ferdig\n</pre> </li> <li> <p>Kanskje finne på noen andre morsomme animasjoner? Snømannen kan danse eller turne litt? Kan vi ha snakkende eller hoppende gale julepresanger? Du bestemmer!</p> </li> </ul> </section> </section> <section class=activity id=steg-4-lagre-og-publisere> <h1 class=activity id=steg-4-lagre-og-publisere>Steg 4: Lagre og publisere</h1> <p>Gi julekortet ditt et navn. Velg deretter <code>Lagre nå</code> fra <code>Fil</code>menyen.</p> <figure><img src='+n(2978)+' alt=""/></figure> <p>Deretter kan du publisere julekortet ditt ved å velge <code>Legg ut</code>.</p> <figure><img src='+n(2979)+' alt=""/></figure> </section> '},2978:function(e,t,n){e.exports=n.p+"_/oppgaver/src/scratch/julekort/lagre.390868.png"},2979:function(e,t,n){e.exports=n.p+"_/oppgaver/src/scratch/julekort/leggut.d0cac0.png"},2980:function(e,t,n){e.exports=n.p+"_/oppgaver/src/scratch/julekort/lyder.7e1834.png"},2981:function(e,t,n){e.exports=n.p+"_/oppgaver/src/scratch/julekort/ny_bakgrunn.a57b76.png"},2982:function(e,t,n){e.exports=n.p+"_/oppgaver/src/scratch/julekort/programmering.8f72d0.png"},2983:function(e,t,n){e.exports=n.p+"_/oppgaver/src/scratch/julekort/velg_figurer.f5ac10.png"}});