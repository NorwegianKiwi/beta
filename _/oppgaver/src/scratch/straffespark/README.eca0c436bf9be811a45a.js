webpackJsonp([91,262],{198:function(e,r,t){e.exports=t.p+"_/oppgaver/src/scratch/straffespark/straffespark.954087.png"},1077:function(e,r,t){e.exports={frontmatter:t(458),content:t(1680)}},1680:function(e,r,t){e.exports="<section class=intro id=informasjon-til-veiledere> <h1 class=intro id=informasjon-til-veiledere>Informasjon til veiledere</h1> <p>Straffespark er et enkelt fotballspill, hvor man skal prøve å score på så mange straffespark som mulig. Dette prosjektet passer bra som en introduksjon til Scratch.</p> <figure><img src="+t(198)+' alt=""/></figure> </section> <section class=activity id=forberedelser> <h1 class=activity id=forberedelser>Forberedelser</h1> <ul> <li> <p><strong>Antatt tidbruk</strong>: 1.5 - 2 timer for hele prosjektet.</p> </li> <li> <p><strong>Nødvendige forkunnskaper</strong>: Ingen.</p> </li> </ul> <p>Dersom dette prosjektet brukes som en introduksjon til Scratch anbefaler vi at du følger veiledningen <a href=../veiledninger/kom_i_gang_med_scratch.html>Kom i gang med Scratch</a>.</p> <p>Om elevene allerede er komfortable med Scratch kan du benytte anledningen til å snakke om <a href=#tema-skript-tilhorer-figuren>hvordan man programmerer ulik oppførsel på forskjellige figurer</a>.</p> </section> <section class=activity id=typiske-utfordringer> <h1 class=activity id=typiske-utfordringer>Typiske utfordringer</h1> <figure>Nedenfor er en liste over utfordringer vi har opplevd at noen elever kommer borti.</figure> <ul> <li> <p>I Straffespark må man holde styr på tre figurer i tillegg til scenen, og passe på at hvert skript kodes på riktig sted. Vær nøye med at skriptene ligger på riktig figur som beskrevet i oppgaven.</p> </li> <li> <p>Katten skyter ballen før man klikker på den, eller den må gå flere steg før den når frem til ballen. Om dette skjer bør man flytte på hvor <code>Leo</code> og <code>Ball</code> plasseres ved å endre på <code class=b>gå til x: () y: ()</code>-klossene. Om problemet er at katten må gå flere steg kan man også endre på hvor langt <code>Leo</code> <code class=blockmotion>går</code> når han klikkes. Dersom elevene allerede kan litt om koordinatsystemet er det en fin øvelse å tenke på hvilke koordinater man bør endre for å flytte figurene. Alternativt kan man flytte på figurene ved å klikke og dra, og deretter se på koordinatene øverst til høyre i skriptvinduet.</p> </li> <li> <p>I steg 4 jobber vi videre med skriptet som ble skrevet på <code>Ball</code> i steg 2. Pass på at elevene ikke lager to forskjellige skript. Om de lager to forskjellige skript vil effekten stort sett være at ballen beveger seg fortere enn normalt fordi begge skriptene flytter ballen.</p> </li> <li> <p>I steg 4 og 5 lages det mange små skript som starter på meldingene <code>Mål</code> og <code>Redning</code>. Pass på at disse havner på korrekt figur. Det vil si at <code>Ball</code> og <code>Keeper</code> har skript med <code class=b>stopp [andre skript i figuren v] :: control</code>, <code>Leo</code> har skript hvor han <code class=blocklooks>sier</code> noe, mens Scenen har skript som teller <code class=b>(Mål)</code> og <code class=b>(Redninger)</code></p> <p>Dersom elevene vil at også <code>Ball</code> eller <code>Keeper</code> skal si noe kan det være utfordrende på grunn av <code class=blockcontrol>stopp</code>-klossen. En mulig løsning er som følger:</p> <pre class=blocks>når jeg mottar [Redning v]\nsi [Hurra, jeg reddet!]\nstopp [andre skript i figuren v] :: control\n</pre> <p>Det er her viktig å <em>ikke</em> bruke <code class=b>si [Hello!] i (2) sekunder</code> siden den klossen vil gjøre at <code>Ball</code> eller <code>Keeper</code> ikke slutter å bevege seg før etter 2 sekunder. For at snakkeboblen skal bli borte kan man bruke en <code class=b>si []</code>-kloss (uten tekst). Denne kan legges øverst i <code class=b>når grønt flagg klikkes</code>- eller <code class=b>når jeg mottar [Nytt spark v]</code>-skriptet.</p> </li> <li> <p>For enkelhets skyld settes aldri retningen på <code>Ball</code> i dette prosjektet. Siden ballen aldri forandrer retning - den beveger seg alltid horisontalt fra venstre mot høyre - er dette sjelden et problem. Men dersom elevene har endret retning på <code>Ball</code> slik at den spretter på skrå over skjermen må retningen tilbakestilles. Dette gjøres enklest ved å klikke på klossen <code class=b>pek i retning (90 v)</code> (eller ved å legge denne klossen øverst i <code>Ball</code> sitt hovedskript).</p> </li> </ul> </section> <section class=activity id=variasjoner> <h1 class=activity id=variasjoner>Variasjoner</h1> <p>Dette er et introduksjonsprosjekt, og elevene ledes derfor ganske detaljert gjennom hvordan spillet skal programmeres. Det er likevel rom for en del kreativitet. Elevene kan gjerne oppfordres til å</p> <ul> <li> <p>velge sine egne figurer og bakgrunner. <code>Leo</code> trenger absolutt ikke å være en katt, og det har blitt scoret mange mål med noe annet enn en fotball.</p> </li> <li> <p>eksperimentere med hastigheten til <code>Ball</code> og <code>Keeper</code>. Ved å endre på tallene i <code class=b>gå () steg</code>-klossene vil figurene flytte seg saktere eller raskere. Det er nyttig læring å teste effekten av slike endringer, og observere hvordan vanskelighetsgraden i spillet forandrer seg (se også boksen <strong>Endre farten</strong> på slutten av steg 4).</p> </li> <li> <p>forandre på tekstene i snakkeboblene til <code>Leo</code>, eller tekstene som vises når man vinner eller taper spillet.</p> </li> <li> <p>legge på passende lydeffekter. Dette nevnes i oppgaven mot slutten av steg 5, men om elevene har litt erfaring med Scratch fra tidligere kan de gjerne gjøre dette underveis i programmeringen også.</p> </li> </ul> </section> <section class=activity id=tema-skript-tilhorer-figuren> <h1 class=activity id=tema-skript-tilhorer-figuren>Tema: Skript tilhører figuren</h1> <p>Dersom elevene allerede er komfortable med Scratch er dette prosjektet en bra anledning for å snakke om hvordan man gir forskjellige figurer en unik oppførsel ved å legge ulike skript på dem.</p> <p>Et viktig konsept i Scratch er at man koder ved å beskrive egenskapene (utseende, posisjon, retning, osv.) og oppførselen (skript) til figurer. På fagspråket kalles dette <strong>objektorientert programmering</strong> (mer presist er Scratch <em>prototypeorientert programmering</em>, men forskjellen er ikke relevant her). Dette virker så naturlig at elevene sjelden bevisst tenker på dette, og samtidig skaper det sjelden problemer.</p> <section class=check id=presentasjon> <h2 class=check id=presentasjon>Presentasjon</h2> <ul> <li> <p>Start et nytt Scratchprosjekt ved å klikke <code>Programmering</code> fra hovedsiden, eller <code>Ny</code> i <code>Fil</code>-menyen.</p> </li> <li> <p>Legg til en ekstra figur - for eksempel <code>Bat1</code> - slik at det er to figurer i prosjektet. Dra dem rundt på scenen slik figurene er i hvert sitt hjørne.</p> </li> <li> <p>Spør elevene hvordan de vil kode at katten beveger seg mot flaggermusa (den andre figuren)? Spesielt, pass på at de er bevisst hvilken figur som må programmeres (<em>Katten</em>). Spør om det det samme kan programmeres ved å legge et skript på den andre figuren (<em>Nei, siden Katten beveger seg er det Kattens oppførsel vi må beskrive</em>).</p> <pre class=blocks>for alltid\n    pek mot [Bat1 v]\n    gå (10) steg\nslutt\n</pre> </li> <li> <p>Hvordan kan vi programmere at flaggermusa rømmer fra katten når katten tar (berører) den? Igjen, hvilken figur må programmeres? Kanskje begge? <em>Vi må programmere flaggermusa siden den rømmer (oppførsel).</em> Her trenger vi ikke noe nytt program for katten så lenge den ikke reagerer på at den berører flaggermusa (<em>ingen ny oppførsel å beskrive</em>).</p> <figure>Det er mange måter å skrive kode for at flaggermusa rømmer. Det følgende er et eksempel (husk at koden hører til flaggermusa):</figure> <pre class=blocks>for alltid\n    vent til &lt;berører [Sprite1 v]&gt;\n    gli (0.2) sekunder til x: (tilfeldig tall fra (-240) til (240)) y: (tilfeldig tall fra (-180) til (180))\nslutt\n</pre> </li> <li> <p>Spør elevene om de kan tenke seg noen annen måte (enn objektorientert) å programmere på? Hvor man ikke knytter skriptene til figurene?</p> <p>Et eksempel på en annen type programmering er <strong>imperativ programmering</strong> hvor programmer skrives som en serie kommandoer uten at det skilles mellom hvilken figur som kommanderes. I et slikt språk ville de to skriptene over skrives som <em>ett</em> skript omtrent som dette (ikke alle disse klossene eksisterer i Scratch):</p> <pre class=blocks>for alltid\n    flytt [katten v] mot [flaggermusa v] :: motion\n    hvis &lt;[katten v] berører [flaggermusa v] :: sensing&gt;\n        flytt [flaggermusa v] til x: (tilfeldig tall fra (-240) til (240)) y: (tilfeldig tall fra (-180) til (180)) :: motion\n    slutt\nslutt\n</pre> <p>Vis gjerne denne koden til elevene. I tillegg til at det bare er ett skript, hvilke andre forskjeller ser de? <em>Den andre store forskjellen er at man alltid må fortelle hvilken figur som skal utføre kommandoene. Dette er underforstått i Scratch</em>.</p> </li> </ul> </section> </section>'}});