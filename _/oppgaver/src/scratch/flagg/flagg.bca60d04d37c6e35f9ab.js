webpackJsonp([50,262],{181:function(e,r,s){e.exports=s.p+"_/oppgaver/src/scratch/flagg/flagg.032705.png"},192:function(e,r,s){e.exports=s.p+"_/oppgaver/src/scratch/lunar_lander/sinus_cosinus.f1cb1b.png"},1005:function(e,r,s){e.exports={frontmatter:s(386),content:s(1608)}},1608:function(e,r,s){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne oppgaven vil vi se litt nærmere på hvordan vi kan lage spennende mønstre og animasjoner ved hjelp av litt matematikk. Spesielt skal vi tegne et flagg som ser ut som om det vaier i vinden.</p> <figure><img src="+s(181)+' alt=""/></figure> </section> <section class=activity id=steg-1-ga-i-sirkel> <h1 class=activity id=steg-1-ga-i-sirkel>Steg 1: Gå i sirkel</h1> <p>Vi har tidligere sett flere måter vi kan få figurer til å gå i sirkel på. For eksempel flyttet vi i <a href=../soloball/soloball.html>Soloball</a> figuren vekk fra sentrum og brukte <code class=b>pek mot [musepeker v]</code> for å flytte figuren i sirkel.</p> <p>I denne oppgaven skal vi bruke to funksjoner, <em>sinus</em> og <em>cosinus</em>, for å ta litt mer kontroll over hvordan sirkelbevegelsen skjer. Du har kanskje ikke hørt om <em>sinus</em> og <em>cosinus</em>? Disse er tall som forteller hvor lange sidene i en rettvinklet trekant er i forhold til hverandre. I figuren nedenfor forteller for eksempel <em>cosinus</em>, <code>cos(vinkel)</code> oss hvor lang den vannrette streken er i forhold til den skrå streken.</p> <figure><img src='+s(192)+' alt=""/></figure> <p>La oss se hvordan vi kan bruke dette til å tegne sirkler!</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Start et nytt prosjekt.</p> </li> <li> <p>Skriv det følgende skriptet på kattefiguren:</p> <pre class=blocks>når grønt flagg klikkes\nbegrens rotasjon [ikke roter v]\nfor alltid\n    sett x til ((100) * ([cos v] av (retning)))\n    sett y til ((100) * ([sin v] av (retning)))\n    vend venstre (5) grader\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet> <h2 class=flag id=test-prosjektet>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Hva skjer? Skjønner du hvorfor kattefiguren flytter seg rundt i en sirkel?</p> <p>Tallet <code>100</code> forteller hvor stor sirkelen skal være (det er lengden av den skrå streken i figuren over). Prøv å endre på tallet (begge steder) for å se hva som skjer.</p> </li> <li> <figure>Hva skjer om du bruker forskjellige tall de to stedene i stedet for <code>100</code>?</figure> </li> <li> <p>Hvordan forandrer bevegelsen til katten seg om du forandrer tallet <code>5</code> i <code class=b>vend venstre (5) grader</code>? Prøv gjerne med negative tall også!</p> </li> </ul> </section> <section class=tip id=retning-pa-sirkelbevegelsen> <h2 class=tip id=retning-pa-sirkelbevegelsen>Retning på sirkelbevegelsen</h2> <p>Du legger kanskje merke til at katten flytter seg i motsatt retning av hvordan pilen i <code class=b>vend venstre (5) grader</code> klossen peker? Dette er fordi Scratch måler vinkler i motsatt retning av hva som er vanlig i matematikken (og som vi har tegnet over).</p> </section> </section> <section class=activity id=steg-2-flytt-sirkelen> <h1 class=activity id=steg-2-flytt-sirkelen>Steg 2: Flytt sirkelen</h1> <p>Så langt har vi bare tegnet en sirkel midt på skjermen. La oss se om vi kan flytte den!</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Siden vi allerede flytter figuren langs en sirkel kan vi ikke bruke <code class=b>gå til x: () y: ()</code>-klosser for å flytte hele sirkelen. I stedet vil vi bruke variabler. Lag to variabler som heter <code class=b>(sentrumX)</code> og <code class=b>(sentrumY)</code> og som gjelder kun <em>for denne figuren</em>.</p> </li> <li> <p>Vi kan nå flytte sirkelen over ved å sette <code class=b>(sentrumX)</code>- og <code class=b>(sentrumY)</code>-variablene:</p> <pre class=blocks>når grønt flagg klikkes\nbegrens rotasjon [ikke roter v]\nsett [sentrumX v] til [-100]\nsett [sentrumY v] til [50]\nfor alltid\n    sett x til ((sentrumX) + ((100) * ([cos v] av (retning)))\n    sett y til ((sentrumY) + ((100) * ([sin v] av (retning)))\n    vend venstre (5) grader\nslutt\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-2> <h2 class=flag id=test-prosjektet-2>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li>Flytter sirkelen seg til det nye sentrumet?</li> </ul> </section> <section class=try id=prov-selv> <h2 class=try id=prov-selv>Prøv selv</h2> <ul> <li> <p>Legg til en ny variabel, <code class=b>(radius)</code>, som også gjelder kun <em>for denne figuren</em>. Kan du bruke denne til å styre hvor stor sirkelen er? Det vil si, <code class=b>(radius)</code> skal fortelle lengden av den skrå streken i figuren i begynnelsen av oppgaven.</p> <p>Du trenger en <code class=b>sett [radius v] til []</code>-kloss i tillegg til å bruke <code class=b>(radius)</code> to steder i koden din.</p> </li> </ul> </section> </section> <section class=activity id=steg-3-dansende-disker> <h1 class=activity id=steg-3-dansende-disker>Steg 3: Dansende disker</h1> <p>Nå skal vi prøve å få mange figurer til å gå i sirkel samtidig.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Tegn en ny drakt på figuren din. Bruk vektorgrafikk til å tegne en rød fyllt sirkel (disk). Denne kan være ganske liten, for eksempel <code>20 x 20</code> piksler.</p> <figure><img src='+s(2255)+' alt=""/></figure> </li> <li> <figure>Vi kan lage mange røde disker ved å klone denne ene disken. Del koden din i to deler, og endre den på denne måten:</figure> <pre class=blocks>når grønt flagg klikkes\ngjenta (99) ganger\n    sett [sentrumX v] til (tilfeldig tall fra (-150) til (150))\n    sett [sentrumY v] til (tilfeldig tall fra (-100) til (100))\n    sett [radius v] til [50]\n    lag klon av [meg v]\nslutt\n\nnår jeg starter som klon\nfor alltid\n    sett x til ((sentrumX) + ((radius) * ([cos v] av (retning)))\n    sett y til ((sentrumY) + ((radius) * ([sin v] av (retning)))\n    vend venstre (5) grader\nslutt\n</pre> </li> <li> <figure>Om du kjører programmet ditt nå vil du se 99 disker som danser (og 1 som står i ro) rundt på skjermen i et herlig kaos!</figure> <figure>Kaoset kommer faktisk av at Scratch bruker litt tid på å starte hver klon. Vi kan lage en mindre kaotisk dans på denne måten:</figure> <p>Bytt <code class=b>når jeg starter som klon</code> med <code class=b>når jeg mottar [dans v]</code>, og legg til en <code class=b>send melding [dans v]</code>-kloss etter <code class=b>gjenta (99) ganger</code>-løkken.</p> <figure>Om du kjører programmet ditt igjen vil du se at alle diskene danser i takt. Hva liker du best?</figure> </li> </ul> </section> </section> <section class=activity id=steg-4-flagrende-flagg> <h1 class=activity id=steg-4-flagrende-flagg>Steg 4: Flagrende flagg</h1> <figure>Vi skal nå se hvordan vi kan gjøre om denne kaotiske dansen til noe som ligner på et flagrende flagg.</figure> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <figure>I forrige steg klonet vi disker til tilfeldige steder. Nå skal vi legge dem ut litt mer organisert. Skriv om skriptet som legger ut diskene dine slik:</figure> <pre class=blocks>når grønt flagg klikkes\nvis\nsett [radius v] til [25]\nsett [sentrumX v] til [-160]\ngjenta (19) ganger\n    sett [sentrumY v] til [-100]\n    gjenta (14) ganger\n        lag klon av [meg v]\n        endre [sentrumY v] med (16)\n    slutt\n    endre [sentrumX v] med (16)\nslutt\nsend melding [flagre v]\nskjul\n</pre> </li> <li> <figure>La så <code>flagre</code>-skriptet være det samme som du brukte til å danse tidligere:</figure> <pre class=blocks>når jeg mottar [flagre v]\nfor alltid\n    sett x til ((sentrumX) + ((radius) * ([cos v] av (retning)))\n    sett y til ((sentrumY) + ((radius) * ([sin v] av (retning)))\n    vend venstre (5) grader\nslutt\n</pre> </li> <li> <p>Kjør programmet ditt. Du vil nå se et flagg bestående av mange røde disker som beveger seg i sirkel. Men nå kommer det morsomme: Vi kan la de røde diskene bevege seg litt i utakt!</p> <p>Legg til klossen <code class=b>vend høyre (1) grader</code> etter <code class=b>lag klon av [meg v]</code>-klossen, og prøv programmet ditt igjen. Hva har skjedd?</p> </li> </ul> </section> </section> <section class=activity id=steg-5-det-norske-flagget> <h1 class=activity id=steg-5-det-norske-flagget>Steg 5: Det norske flagget</h1> <p>Nå skal vi se hvordan vi kan tegne flagget i forskjellige farger.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Tegn først to nye drakter, begge kopier av den røde disken. Den første skal være en hvit disk mens den andre skal være en blå disk. Gi de tre diskfigurene dine navnene <code>r</code>, <code>h</code> og <code>b</code> slik at navnet er første bokstaven i fargen på disken: <code>r</code>ød, <code>h</code>vit og <code>b</code>lå.</p> <figure><img src='+s(2257)+' alt=""/></figure> </li> <li> <p>Vi skal nå bruke en ny variabel <code class=b>(flagg)</code> som beskriver fargene i flagget. Lag variabelen <em>for alle figurer</em> og legg deretter til koden:</p> <pre class=blocks>når grønt flagg klikkes\nsett [flagg v] til [rrrrrhbbhrrrrr]\n</pre> <p>Bokstavene <code>rrrrrhbbhrrrrr</code> beskriver at vi først vil ha 5 røde disker, deretter 1 hvit, 2 blå, 1 hvit og 5 røde disker.</p> </li> <li> <p>For å kunne bruke den nye <code class=b>(flagg)</code>-variabelen må også hver disk vite hvilket nummer den har. Lag en ny variabel <code class=b>(nummer)</code> som gjelder kun <em>for denne figuren</em>.</p> </li> <li> <p>Legg til <code class=b>sett [nummer v] til [1]</code> rett under <code class=b>vis</code> og <code class=b>endre [nummer v] med (1)</code> rett under <code class=b>lag klon av [meg v]</code>-klossen.</p> </li> <li> <p>Til slutt skal vi endre drakt på diskene. Legg til</p> <pre class=blocks>bytt drakt til (bokstav (nummer) i (flagg))\n</pre> <p>øverst i <code class=blockcontrol>for alltid</code>-løkken i <code>flagre</code>-skriptet.</p> </li> <li> <p>Kjør programmet ditt. Den venstre delen av flagget ditt skal nå ha fått fargene til det norske flagget. For å fargelegge hele flagget må vi gi mange flere bokstaver til <code class=b>(flagg)</code>-variabelen. Hele det norske flagget vil ha bokstavene</p> <pre><code><span class=hljs-title>rrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrr</span>\nhhhhhhbbhhhhhhbbbbbbbbbbbbbbbbbbbbbbbbbbbbhhhhhhbbhhhhhhrrrrrhbbhrrrrr\nrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrr\nrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrr\n</code></pre> </li> <li> <p>En enklere måte å tegne flagg på er å si at vi vil at mønsteret skal gjenta seg selv. Da trenger vi ikke skrive en bokstav for hver disk. Til dette kan vi bruke <code class=b>() mod ()</code>-klossen.</p> <p>Bytt <code class=b>(bokstav (nummer) i (flagg))</code> med <code class=b>(bokstav ((nummer) mod (lengden av (flagg))) i (flagg))</code> i <code class=b>bytt drakt til [ v]</code>-klossen. Om du prøver programmet igjen vil du se at flaggmønsteret gjentas (sett for eksempel <code class=b>(flagg)</code> til <code>rhb</code> for å se dette).</p> </li> </ul> </section> <section class=try id=prov-selv-2> <h2 class=try id=prov-selv-2>Prøv selv</h2> <ul> <li> <figure>Tegn egne flagg. Om du trenger flere farger er det bare å lage flere drakter. Pass på at hver drakt har en bokstav eller tall som navn.</figure> </li> <li> <p>Du kan også leke litt med de forskjellige tallene for en litt annerledes animasjon. Prøv for eksempel med <code class=b>vend høyre (25) grader</code> i klossen etter <code class=b>lag klon av [meg v]</code>.</p> </li> <li> <p>Du kan endre utseendet på flagget underveis. For eksempel om du bruker en <code class=b>når [ v] trykkes</code>-kloss kan du endre verdien av <code class=b>(flagg)</code> basert på hvilke taster som trykkes. Fargene i flagget vil da også oppdatere seg.</p> </li> </ul> </section> </section>'},2255:function(e,r,s){e.exports=s.p+"_/oppgaver/src/scratch/flagg/rod_disk.a0ad6c.png"},2257:function(e,r,s){e.exports=s.p+"_/oppgaver/src/scratch/flagg/tre_disker.c6a390.png"}});