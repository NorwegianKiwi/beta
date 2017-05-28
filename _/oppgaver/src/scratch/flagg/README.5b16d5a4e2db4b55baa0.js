webpackJsonp([96,388],{231:function(e,r,n){e.exports=n.p+"_/oppgaver/src/scratch/flagg/flagg.032705.png"},1448:function(e,r,n){e.exports={frontmatter:n(541),content:n(2553)}},2553:function(e,r,n){e.exports="<section class=intro id=informasjon-til-veiledere> <h1 class=intro id=informasjon-til-veiledere>Informasjon til veiledere</h1> <p>Flagg viser hvordan man kan bruke kloner til å animere et flagg. I animasjonen bruker <em>sinus</em> og <em>cosinus</em> for enkle sirkelbevegelser. Disse funksjonene blir raskt introdusert og elevene får muligheten til å eksperimentere litt med dem.</p> <figure><img src="+n(231)+' alt=""></figure> </section> <section class=activity id=bakgrunn> <h1 class=activity id=bakgrunn>Bakgrunn</h1> <p>Flagg ble opprinnelig skrevet av Sverre Oskar Konestabo som et bidrag til programmeringskonkurransen som ble avholdt for barn som deltok på Kodeklubben Blindern våren 2016.</p> </section> <section class=activity id=forberedelser> <h1 class=activity id=forberedelser>Forberedelser</h1> <ul> <li> <p><strong>Antatt tidbruk</strong>: 1.5 - 2 timer for hele prosjektet.</p> </li> <li> <p><strong>Nødvendige forkunnskaper</strong>: God kjennskap til Scratch. Elevene bør ha gjort flere prosjekter på Introduksjon- og Nybegynner-nivå før de starter med Flagg.</p> </li> </ul> <p>Benytt gjerne anledningen til å snakke om <a href=#tema-sirkelbevegelser>forskjellige måter å kode sirkelbevegelse i Scratch</a>.</p> </section> <section class=activity id=typiske-utfordringer> <h1 class=activity id=typiske-utfordringer>Typiske utfordringer</h1> <p>Nedenfor er en liste over utfordringer vi har opplevd at noen elever kommer borti.</p> <ul> <li> <p>Det er viktig at variablene, spesielt <code class=b>(sentrumX)</code> og <code class=b>(sentrumY)</code>, gjelder kun <em>for denne figuren</em>. Hvis variablene er felles for alle figurer vil ikke klonene kunne ha forskjellige sentrum de roterer rundt. I stedet vil klonene være mer eller mindre stablet over hverandre.</p> </li> <li> <p>Dimensjonene på flagget er litt feil. I følge <a href=https://lovdata.no/dokument/NL/lov/1898-12-10-1>flaggloven</a> skal forholdet mellom flaggets bredde og lengde være 16 til 22, mens i oppgaven tegnes flagget 14 til 19. Dette er på grunn av en begrensning i Scratch hvor det kun er mulig å lage 300 kloner av en figur, mens 16 ganger 22 ville krevd 352 kloner.</p> </li> </ul> </section> <section class=activity id=variasjoner> <h1 class=activity id=variasjoner>Variasjoner</h1> <p>Hovedpoengene i denne oppgaven er å gi elevene litt kjennskap til funksjonene <em>sinus</em> og <em>cosinus</em>, samt vise hvordan man kan bruke mange kloner sammen for å skape en større animasjon. La gjerne elevene eksperimentere underveis, for eksempel ved å</p> <ul> <li> <p>Endre på tallene underveis. Spesielt tallene i de forskjellige <code class=b>vend høyre () grader</code>-klossene kan ha en stor effekt.</p> </li> <li> <p>Tegne sine egne flagg. Slik sirklene legges ut starter man nederst i venstre hjørne og går oppover og etterhvert mot høyre når man bruker den lange teksten (<code>rrrrrhbbhrrrrrrrrrrhbbhrrrrr...</code>) for å beskrive fargene i flagget.</p> </li> </ul> </section> <section class=activity id=tema-sirkelbevegelser> <h1 class=activity id=tema-sirkelbevegelser>Tema: Sirkelbevegelser</h1> <p>Det er flere måter å få figurer til å utføre sirkelbevegelser i Scratch. I denne presentasjonen viser vi flere av dem, og ser på begrensninger til de enkleste, og viser hvorfor <em>sinus</em> og <em>cosinus</em> gir oss ekstra muligheter.</p> <p>I dette prosjektet introduserer vi <em>sinus</em> og <em>cosinus</em> som forholdet mellom sider i en trekant, og holder stort sett fokus på at effekten av å bruke disse funksjonene er at figurene våre kan gå i sirkel. Andre del av presentasjonen nedenfor er ment å illustrere dette visuelt.</p> <section class=check id=presentasjon> <h2 class=check id=presentasjon>Presentasjon</h2> <ul> <li>Start et nytt Scratchprosjekt ved å klikke <code>Programmering</code> fra hovedsiden, eller <code>Ny</code> i <code>Fil</code>-menyen.</li> </ul> <p>Vi vil først se på enkle sirkelbevegelser som barna sannsynligvis allerede er kjent med. Spør gjerne barna hvordan de vil kode en figur som beveger seg i sirkel før du viser dem eksemplene under.</p> <ul> <li> <p>Det enkleste er nok å gi en figur denne koden:</p> <pre class=blocks>for alltid\n    gå (10) steg\n    vend høyre (5) grader\nslutt\n</pre> <p>Her er det ikke veldig farlig akkurat hva tallene er. Eksperimenter gjerne med verdiene for å se hvordan det påvirker sirkelbevegelsen.</p> </li> <li> <p>En annen måte å få en figur til å gå i sirkel på er vist frem i <a href=../soloball/soloball.html>Soloball-oppgaven</a>.</p> <p>Stopp det forrige skriptet, og dra figuren tilbake omtrent midt på skjermen. Klikk på <code>Drakter</code>-fanen, og dra figuren i drakteditoren (vinduet til høyre på skjermen) litt vekk fra sentrum. Gå tilbake til <code>Skript</code>-fanen og forenkle skriptet:</p> <pre class=blocks>for alltid\n    vend høyre (5) grader\nslutt\n</pre> <p>Igjen skal figuren gå i sirkel! Hvordan endrer man størrelsen på sirkelen i dette eksempelet? (<em>Flytter figuren i drakteditoren.</em>)</p> </li> </ul> <p>Spør barna om de ser noen begrensninger i denne måten å programmere på? Spesielt spør hvordan man kan få figuren til å se i spesielle retninger mens den beveger seg i sirkel? <em>Siden vi bruker retningen til figuren i sirkelbevegelsen kan vi ikke samtidig få den til å se i en gitt annen retning.</em></p> <ul> <li> <p>Lag en ny figur (fordi den forrige figuren er flyttet vekk fra sentrum).</p> </li> <li> <p>Lag en variabel, <code class=b>(vinkel)</code>. I denne presentasjonen er det ikke viktig om den gjelder for alle eller kun denne figuren.</p> </li> <li> <p>Skriv denne koden:</p> <pre class=blocks>sett [vinkel v] til [45]\ngå til x: (0) y: (0)\npenn på\nsett x til ((150) * ([cos v] av (vinkel))\nsett y til ((150) * ([sin v] av (vinkel))\ngå til x: (0) y: (0)\npenn av\n</pre> <p>Dette vil tegne en rettvinklet trekant hvor den ene vinkelen er 45 grader.</p> </li> <li> <p>Legg gjerne inn <code class=b>vent (3) sekunder</code>-klosser etter de to <code class=b>sett x til ()</code>- og <code class=b>sett y til ()</code>-klossene for å vise hva henholdsvis <code class=b>[cos v] av (vinkel)</code> og <code class=b>[sin v] av (vinkel)</code> tilsvarer.</p> </li> <li> <p>Tegn trekanter med forskjellige vinkler (ved å endre på tallet i <code class=b>sett [vinkel v] til []</code>-klossen). Vis gjerne hva som skjer om <code class=b>(vinkel)</code> er 0, 90, større enn 90, eller til og med negativ.</p> </li> </ul> <p>Om du trenger å slette noen av trekantene som har blitt tegnet kan du bruke <code class=b>slett</code>-klossen.</p> <ul> <li> <p>Når du har tegnet en del trekanter kan du spørre om noen av barna ser at du har begynt å tegne en sirkel? <em>De ytterste hjørnene i trekantene vil etterhvert danne en sirkel fordi den skrå streken, hypotenusen, er like lang i alle trekantene.</em></p> <figure><img src='+n(3273)+' alt=""></figure> </li> <li> <p>For å vise frem at trekantene virkelig danner en sirkel kan du bruke en <code class=blockcontrol>gjenta</code>-løkke på denne måten:</p> <pre class=blocks>sett [vinkel v] til [0]\ngå til x: (0) y: (0)\npenn på\ngjenta (72) ganger\n    sett x til ((150) * ([cos v] av (vinkel))\n    sett y til ((150) * ([sin v] av (vinkel))\n    gå til x: (0) y: (0)\n    endre [vinkel v] med (5)\nslutt\npenn av\n</pre> </li> </ul> </section> </section> '},3273:function(e,r,n){e.exports=n.p+"_/oppgaver/src/scratch/flagg/sirkel_trekant.75fc1b.png"}});