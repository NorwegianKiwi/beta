webpackJsonp([35,262],{3:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAZNJREFUOE+dk0lPwkAUx/tBcTmw6QELmojWBTFuKILKIkuECiZqtAh6QTyBQkgwMRzkKmfOnJ99ozOZsW1KnORlZtr3fv2/pRIASHamqiXdxdrPFoDBjqkZ6HS7liBbSPQ4BgiR/YH/QdLpDAFQw7tZWqZK2p0OuNxeAUBBqdS5AWSAFIuXpsG8otrjkwASIG/tti0AYaiST0t61QPpg+CqMhEEQdc3tySu0XgBqVqtkcBCQZ0YQNWgIjSSDp8vnt2eOfgcDECrPICytgGO6Vlwe+fJ/tc3mUz/QCJHUeFlqXyFUtkajUaA1my1QA4sCb4YzwrLtxQhaDu7ewykaRXIZHMQi58ySL3+TOoidAelKso6sa/hkKQ0Ho8JqNd7J3smm9endxESiRRriAAJhbdJPWgAgqgqPOPCu0/2W88JSqvoxXTqFY/FT6DZbBE1aAhWS2U44xTQ0bD8AX0LsqEToa2wYeQNNeGn8CByyCDLwRXTYFslufwFOF0eZnjnP8KfLdO5u9dg81f+vq7qo9+3hHwDiSt9l+qqTUcAAAAASUVORK5CYII="},1014:function(e,t,s){e.exports={frontmatter:s(395),content:s(1617)}},1617:function(e,t,s){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <figure>I dag skal vi lage et nyttig spill, nemlig et spill som hjelper oss å lære andre ting. Vi skal få hjelp til å lære gangetabellen!</figure> <figure><img src="+s(2260)+' alt=""/></figure> </section> <section class=activity id=steg-1-laeremesteren> <h1 class=activity id=steg-1-laeremesteren>Steg 1: Læremesteren</h1> <p>Vi skal etterhvert lage et spill hvor vi får tilfeldige spørsmål fra gangetabellen. Etter at vi svarer får vi vite om vi klarte å svare riktig, og vi vil også få litt hjelp fra tegninger på skjermen. Men først introduserer vi <code>Læremester</code> som skal hjelpe oss med gangetabellen.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Start et nytt prosjekt og slett kattefiguren.</p> </li> <li> <p>Legg til en ny figur ved å klikke på <img src='+s(3)+' alt="Velg figur fra biblioteket"/>. Velg en av <em>Wizard</em>-figurene nesten nederst i <code>Mennesker</code>-kategorien. Kall figuren <code>Læremester</code>.</p> </li> <li> <p>Vi skal nå bruke <code class=blockoperators>tilfeldig tall</code>-klosser slik at <code>Læremester</code> kan spørre oss om tilfeldige gangestykker. Skriv dette skriptet:</p> <pre class=blocks>når grønt flagg klikkes\nsi (tilfeldig tall fra (2) til (10)) i (2) sekunder\nsi [ganger] i (2) sekunder\nsi (tilfeldig tall fra (2) til (10)) i (2) sekunder\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet> <h2 class=flag id=test-prosjektet>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <figure>Stiller <code>Læremester</code> deg et gangestykke?</figure> </li> <li> <p>Vi skal etterhvert se hvordan vi kan få <code>Læremester</code> til å si hele teksten, i stedet for bare et ord om gangen.</p> </li> <li> <p>Foreløpig kan du ikke svare <code>Læremester</code> (ihvertfall ikke med datamaskinen, prøv gjerne å regne ut svaret og si det til dem som sitter ved siden av deg).</p> </li> </ul> </section> </section> <section class=activity id=steg-2-datamaskinen-er-en-kalkulator> <h1 class=activity id=steg-2-datamaskinen-er-en-kalkulator>Steg 2: Datamaskinen er en kalkulator</h1> <p>Du har kanskje ikke tenkt på det, men datamaskinen er en veldig flink kalkulator. Det engelske ordet <em>computer</em> betyr til og med <em>regnemaskin</em>. Vi skal nå se på hvordan vi får Scratch til å gange sammen tall.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>For å få Scratch til å regne bruker vi <code class=blockoperators>Operatorer</code>-klosser. Prøv for eksempel å dra gangeklossen - med <code class=blockoperators>*</code>-tegnet - til skriptområdet på høyresiden. Skriv inn to tall og klikk på klossen. Scratch regner da ut svaret på gangestykket.</p> <figure><img src='+s(2261)+' alt=""/></figure> </li> <li> <p>Vi vil nå kombinere gangeklossen med <code class=blockoperators>tilfeldig tall</code>-klossen, men for å få dette til trenger vi en måte å huske de tilfeldige tallene: <strong>Variabler</strong>. Gå til <code class=blockdata>Data</code>-kategorien og lag tre nye variabler: <code class=blockdata>tall1</code>, <code class=blockdata>tall2</code>, og <code class=blockdata>riktig svar</code>. La de gjelde for alle figurer.</p> </li> <li> <p>Skriv nå et <strong>helt nytt skript</strong> (la det ligge ved siden av det skriptet du skrev i forrige steg).</p> <pre class=blocks>når jeg mottar [Nytt spørsmål v]\nsett [tall1 v] til (tilfeldig tall fra (2) til (10))\nsett [tall2 v] til (tilfeldig tall fra (2) til (10))\nsett [riktig svar v] til ((tall1) * (tall2))\n</pre> </li> <li> <p>Prøv å klikke på skriptet for å teste det (siden det ikke starter med et grønt flagg kan vi ikke teste det på den vanlige måten). Om du ser på variablene på scenen skal de endre seg hver gang du klikker på skriptet. Er <code class=blockdata>riktig svar</code> rett?</p> <figure><img src='+s(2263)+' alt=""/></figure> </li> </ul> </section> </section> <section class=activity id=steg-3-et-skikkelig-sporsmal> <h1 class=activity id=steg-3-et-skikkelig-sporsmal>Steg 3: Et skikkelig spørsmål</h1> <p>La oss se om vi kan sette sammen disse tallene til et skikkelig spørsmål.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Lag en ny variabel, <code class=blockdata>spørsmål</code>. Også denne skal gjelde for alle figurer.</p> </li> <li> <p>Klossen <code class=blockoperators>sett sammen</code> kan brukes for å sette sammen flere tall og ord. Vi skal nå bruke to <code class=blockoperators>sett sammen</code>-klosser på denne måten:</p> <pre class=blocks>sett sammen (sett sammen [] []) []\n</pre> <p>Dette gir oss plass til tre tall eller ord. Her kan vi putte inn <code class=blockdata>tall1</code>, teksten <code>ganger</code> og <code class=blockdata>tall2</code>. Pass på at du har mellomrom før og etter <code>ganger</code>, det ser best ut da. Om du klikker på den første <code class=blockoperators>sett sammen</code>-klossen vil du se hvordan den ferdige teksten blir.</p> <figure><img src='+s(2262)+' alt=""/></figure> </li> <li> <figure>Legg denne klossen til nederst i <code>Nytt spørsmål</code>-skriptet:</figure> <pre class=blocks>når jeg mottar [Nytt spørsmål v]\nsett [tall1 v] til (tilfeldig tall fra (2) til (10))\nsett [tall2 v] til (tilfeldig tall fra (2) til (10))\nsett [riktig svar v] til ((tall1) * (tall2))\nsett [spørsmål v] til (sett sammen (sett sammen (tall1) [ ganger ]) (tall2))\n</pre> </li> <li> <p>Nå skal vi få <code>Læremester</code> til å stille oss spørsmålet vi har satt sammen. <strong>Bytt ut</strong> det første skriptet (med det grønne flagget) du skrev med dette:</p> <pre class=blocks>når grønt flagg klikkes\nsend melding [Nytt spørsmål v] og vent\nspør (spørsmål) og vent\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-2> <h2 class=flag id=test-prosjektet-2>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Stiller <code>Læremester</code> deg et skikkelig spørsmål, for eksempel <code>9 ganger 6</code>?</p> </li> <li> <p>Er spørsmålene forskjellige hver gang?</p> </li> <li> <p>Om du vil ha en liten utfordring kan du prøve å bruke flere <code class=blockoperators>sett sammen</code>-klosser slik at spørsmålet blir for eksempel <code>Hva er 9 ganger 6?</code>.</p> </li> </ul> </section> </section> <section class=activity id=steg-4-er-svaret-riktig-da> <h1 class=activity id=steg-4-er-svaret-riktig-da>Steg 4: Er svaret riktig da?</h1> <p>Nå som vi kan svare på spørsmål vil vi også vite om vi svarer riktig.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Du ser kanskje at <code class=blockdata>riktig svar</code> vises på scenen? Da blir det jo ikke særlig vanskelig! Ta bort alle variablene fra scenen ved å gå til <code>Data</code>-kategorien og fjern haken foran hver variabel.</p> </li> <li> <p>Nå skal vi bruke en <code class=blockcontrol>hvis ellers</code>-kloss for å gjøre forskjellige ting ettersom du svarer riktig eller feil på gangestykkene. <strong>Utvid</strong> det ene skriptet ditt på denne måten:</p> <pre class=blocks>når grønt flagg klikkes\nsend melding [Nytt spørsmål v] og vent\nspør (spørsmål) og vent\nhvis &lt;(svar) = (riktig svar)&gt;\n    si [Ja, så flink du er!] i (2) sekunder\nellers\n    si [Nei, det ble visst feil.] i (2) sekunder\nslutt\n</pre> <p>Klossen <code class=blocksensing>svar</code> husker svaret du skriver når <code>Læremester</code> spør om gangestykket.</p> </li> </ul> </section> <section class=flag id=test-prosjektet-3> <h2 class=flag id=test-prosjektet-3>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Hva skjer om du svarer riktig?</p> </li> <li> <figure>Klikk det grønne flagget igjen for å få en ny oppgave. Hva skjer om du ikke svarer riktig?</figure> </li> </ul> </section> </section> <section class=activity id=steg-5-flere-gangestykker> <h1 class=activity id=steg-5-flere-gangestykker>Steg 5: Flere gangestykker</h1> <p>I stedet for å måtte trykke det grønne flagget hele tiden, kan vi be <code>Læremester</code> om å stille oss flere spørsmål!</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Vi bruker først en <code class=blockcontrol>gjenta</code>-kloss slik at vi kan få flere oppgaver. Legg merke til at vi også sender en <code class=blockevents>Nytt spørsmål</code>-melding hvis svaret er riktig. Hvis svaret er feil stiller vi det samme spørsmålet en gang til.</p> <pre class=blocks>når grønt flagg klikkes\nsend melding [Nytt spørsmål v] og vent\ngjenta (10) ganger\n    spør (spørsmål) og vent\n    hvis &lt;(svar) = (riktig svar)&gt;\n        si [Ja, så flink du er!] i (2) sekunder\n        send melding [Nytt spørsmål v] og vent\n    ellers\n        si [Nei, det ble visst feil.] i (2) sekunder\n    slutt\nslutt\n</pre> </li> <li> <p>Vi kan også telle poeng hver gang du svarer riktig. For å gjøre dette trenger vi en ny variabel, <code class=blockdata>Poeng</code>. Denne skal gjelde for alle figurer, og denne lar vi være på scenen slik at vi ser den.</p> </li> <li> <p>Legg til en kloss i skriptet som setter <code class=blockdata>Poeng</code> til <code>0</code> rett etter at det grønne flagget klikkes.</p> </li> <li> <p>Legg også til en kloss som endrer <code class=blockdata>Poeng</code> med <code>1</code> hvis <code class=blocksensing>svar</code> er riktig.</p> </li> </ul> </section> <section class=flag id=test-prosjektet-4> <h2 class=flag id=test-prosjektet-4>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Får du flere oppgaver uten at du må trykke på det grønne flagget?</p> </li> <li> <p>Får du et poeng hver gang du svarer riktig?</p> </li> <li> <p>Klarer du 10 poeng?</p> </li> </ul> </section> </section> <section class=activity id=steg-6-litt-hjelp-kanskje> <h1 class=activity id=steg-6-litt-hjelp-kanskje>Steg 6: Litt hjelp kanskje ...</h1> <p>Til slutt skal vi se på hvordan <code>Læremester</code> kan gi oss litt hjelp med gangestykkene. En måte å tenke på gangestykker er at vi har mange ting som vi plasserer i et rutenett. For eksempel kan vi tenke på <strong>3 ganger 4</strong> som <strong>3</strong> rader med <strong>4</strong> elefanter i hver som dette:</p> <figure><img src='+s(2259)+' alt=""/></figure> <p>Hvis vi ikke husker hvor mye 3 ganger 4 er, kan vi da telle elefanter og finne ut at svaret er <strong>12</strong>.</p> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>Legg til en ny figur som vi kan få litt hjelp fra. Du kan velge hvilken figur du vil, men vi har brukt <code>Dyr/Elephant</code>. Gi figuren navnet <code>Hjelper</code>.</p> </li> <li> <p>For å tegne et rutenett med Hjelpere bruker vi to <code class=blockcontrol>gjenta</code>-klosser i tillegg til <code class=blockpen>stemple avtrykk</code> som tegner Hjelperne på skjermen. Skriv dette skriptet på <code>Hjelper</code>-figuren:</p> <pre class=blocks>når jeg mottar [Tegn hjelper v]\nslett\nsett størrelse til (20)%\nvis\nsett y til (140)\ngjenta (tall1) ganger\n    sett x til (-140)\n    gjenta (tall2) ganger\n        stemple avtrykk\n        endre x med (40)\n    slutt\n    endre y med (-25)\nslutt\nskjul\n</pre> <p>Om du har brukt en annen figur som <code>Hjelper</code> kan det hende du må bruke noen andre tall i dette skriptet. Prøv i så fall først å forandre på <code class=blocklooks>sett størrelse til 20%</code>-klossen.</p> </li> <li> <p>Nå skal vi tegne dette rutenettet hver gang vi lager et nytt spørsmål. Klikk på <code>Læremester</code>, og legg til en kloss nederst i <code>Nytt spørsmål</code>-skriptet:</p> <pre class=blocks>når jeg mottar [Nytt spørsmål v]\nsett [tall1 v] til (tilfeldig tall fra (2) til (10))\nsett [tall2 v] til (tilfeldig tall fra (2) til (10))\nsett [riktig svar v] til ((tall1) * (tall2))\nsett [spørsmål v] til (sett sammen (sett sammen (tall1) [ ganger ]) (tall2))\nsend melding [Tegn hjelper v]\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-5> <h2 class=flag id=test-prosjektet-5>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li>Tegnes det et rutenett av hjelpere til hver oppgave?</li> </ul> </section> <section class=challenge id=flere-utfordringer> <h2 class=challenge id=flere-utfordringer>Flere utfordringer</h2> <ul> <li> <p>Du kan forandre hvor vanskelige gangestykkene er ved å forandre tallene i <code class=blockoperators>tilfeldig tall</code>-klossene.</p> </li> <li> <p>Om du gir <code>Hjelper</code> flere drakter kan du bruke en <code class=blocklooks>neste drakt</code>-kloss i <code>Tegn hjelper</code>-skriptet for å få litt variasjon i hjelperfigurene. Om du gjør dette er det enklest om draktene er omtrent like store.</p> </li> <li> <p>Kanskje <code>Læremester</code> kan gi litt mer hjelp når man svarer feil? Klarer du få henne til å si <code>Nei, det riktige svaret er større</code> eller <code>Nei, det riktige svaret er mindre</code>?</p> </li> <li> <p><code>Læremester</code> kan mye rart! Kanskje hun kan lære bort andre ting enn gangestykker?</p> </li> </ul> </section> </section>'},2259:function(e,t,s){e.exports=s.p+"_/oppgaver/src/scratch/gangemesteren/elefanter.621374.png"},2260:function(e,t,s){e.exports=s.p+"_/oppgaver/src/scratch/gangemesteren/gangemesteren.58dfa9.png"},2261:function(e,t){e.exports="data:image/png;base64,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"},2262:function(e,t,s){e.exports=s.p+"_/oppgaver/src/scratch/gangemesteren/sett_sammen.4bae4b.png"},2263:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAABRCAIAAACRy+krAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wsKFQw2TjNuIQAADJhJREFUeNrtnGlYU1cax997c5ObhSRARJAIYQm41SqbQAVBUdsiqK2OVRBt0S7WqnXrzLSO+zJOxQVFO1ZBVDY3tOIum1M3RA0ooCAKAgICMYSwZJ8PoZbKllRNQrn/Jx/y5J7ce3P+57znvO/9PUHUajUQMrRQoguMQdjLd1VVVXn37jWIxc9rauQyWe/pAiaTye3f38PTk8ViGeoeEE1QkslkJ5NP4lQaGccpFJyC473HBplUWvu8qknSMHToUA9PT0PacOHc+RaZ3KyPRa8NC81NjeUlTwYMcPYZNcpgQelRUeHgYa6GGQgtdX1ZdBMW28SUw7bkvb0LNQkr6ysellXWtjD6tz9KozN4jk45AoEhbQAAEobp//JqeQvPkpN3IUYlKgNRmVJUjqGAIm/BbATofWwGBs5z85xY8UJWUlHdvo0BQzFm2FDQlyrLu5DwIivJmoWa01CqBaaNDSauU83GLSeZWktLb9ccWaQQlmplOVQiqauanqb3m7iVROEVPykFo1FXG9bEhLiY6H0KhaKLNhnpaX4+3hE/bgaA7Vu3+Pl4p16+BABpqZfDZ4eN8fPx8/HOSE/r7OuDvMbXCs72Z6M2bJIVE+3DQMxoiCkN7eLFsR9qMT0K6suaTizEuUP7hUR13f73FxXBaEx1s0iWGcG17tdj8oakhPgD0fuVSuWfOG9Lc/M7777L5zt125KhauDQURaOUEgIiiAI0s1cwOy8AUGld5Nk908pyrIxnidqxtMuLiEIQkIwCqgUPSZ9C/lkqlAoBIDxAf5+Pt4AsGNbxEcTJwT4+04ODlyz6l/19fVdnDcwKHjJ0uW2vO47iIohNAzBtM4j1ZIaAMDsvFAzHqnvAABAzWx1WyZIFONN317RgkWL169dLZFIvl+xEsMwAOA7OQ93cWWyWIK7d2Jjolks9uKly97AQEAARaDbSfD7Nj8/BS/OxN1n4e6z1C1iAABFi87rdU+xwfu9kRQKBQD8R4/BcRwAZDLpgZik2poamUwGAIWFDw1zyyplQ+w01MIZQRCq/zLK4AnK2sd/6ZpSm1FTWlKyfWuEXCbfsnXHug2bNMmnoW6aPmEjZj2MMvwTypBgmSBJ3VSn9TxAAUEBes5sAAAWkyWsqzt1MtnW1pbD4QAAmUKm4JTMjPRuz/u4uDg/P6+iogIA7tzOlkgko8cEMBiMNxIhMNsRuFuoWiGV3olvOrtC6yFHAgwHDAcS1pNsCA2btSdqZ9TOHba2vEPxidOmzzhz+pfvli4Z5eff7Xmzsm7sidqleX/qZDIADHdx7dAGEoro6oR4z1jdpz0JoTBQuhlCZSEko6uYtdaUoiIjh7qN0P/lB5nJnycusIZKhMp6i7ECQQGjoHRzlM1F2VwYFipn2+fcz2/f8N7trPkLF/a6LLqsWjh8SUrD4ZkImYqQsLflBIIACUdobJRlTR/3Q0Nj0/2Chz0mKOlBEoplhbCxX0hsS9pmhERGUOzt7CYRQEkIRkWHTSuvePa4vLonrQ360ZPKFyiVx526Ww/Xqq8Xl5Y+BONTqw02tjyZVGqoEmPxk1JjKLQ9KyvlcrmGzBt8/UY9LixQKhTQK6VUKPIEt6lkLDA42JA7JQC4dfNmbu49B+eBBnnwYOCdQsljZ76joZ6A/mFt8PD0lEqlOYI7vXA2cLncYS4uhs8bCBlWBKdE2ECIsIGwgVDnOyUCniTgSUOKgCeNSAQ8ScCTBDzZRgQ8qRs8idLYnMmbGIM/ABRtKc2u2jtVK8t7ITy5a+eO0BnTxgf4Twz6cPXKFRryrL3+BDxpSkOtZ0SauEyRZh9sOvNPVFTyF4Anu5oNSQnxQqEwJDQM0z1eCe7ecXP3sLe3P3/ubHpaqkqlWrt+Y4ctGaoGDh1j4QiZpFUwQs145EGBspxjzZfWgVotu5ukdVwyXniy0/5tC08CQOav13dsi8hITxOLxUwm08XV7dsly9hsdmdfj9qzVwOZ2ds7Llrw9ePi4s5a6gpPkiycAQDjDjf7VwkoFc1Xd7dkROi2TPQeeBL/bbnLzEwHgC6YGl3hScBwAAAKXZIQTh05jzbmO0XxFUXZLd3W655iw+vDk2q1+qc9USeOHfXzHx0+9/M3dccqURkAKEpvyotSUTNbzMEX5diDTjYYczGj61GjgSdtbGy3bN1RXy9avnRx1/CkVCrduH5tRnrax1OmLli0GEXfWPFK+SxH+fwB2e498qBAyjuTQKVQlGv9qMpY4cmueofFZAHAqZPJN65fk8mkoAs8ueL7v2ekp/W3sTEzNz98KDYh7vAbjBCNR79S1Zeb/O0n1MSi8djXqtpH2v3W3gdPPi0tBYDysrL9P+8FABqNNiN0ZsdLru7wpLK6QLw3UMfxRsCTnYuAJ40iiybgSaOwgYAnjcIGIODJtjYQ8CQQ8KTBRcCTRiECnjQKEfAkoe6KGYQIGwgbCBE29E4R8KRe1RmoScCTelVnoCYBTxpA7UFNw8OTes2SjBXUNDA8qU8ZM6jZi8pH2oOavHXFKLV1CW0uulK1d0pr/+IMm+XXSGxrYcqq+syuKvO6gpo6bFjbspGfhoX6+XjX1f3h/6QePCiIid6XfauVVWnLVRqDtAc1EQDF06zmS+ubL61XCeJeft4veCWJbgoANPIbBjW1nQ1yudxjhCeNRrezs++szcMHDw5E7w8JDXP38AAAWx4vJDRs8JAh+u9xuVxOJpPbf649qKl8liu9Fdv6X36anrJxx91CmtMjaON+0CIu6QZqdmqDSCSaFPQhl8t1cXO/kpH+5bz5j4oKk08c5zs5OfL5L5vl5gi+W7aUbcr+eMrU3bt2AkB83KH4uEOfhs+xt3eIjzs0cdJk31F+IpFo88b1d+7cdnDk29ranj93dt78b6bPCG17xdiY6NO/nHzx4oWJCdPF1XXl6rUzpk0RCoUnT59lMBiXL11ct2bVlKnTFn67+MvPw8vLy1uam83NOeM/+GDu518iCLJ965bkE8cnfzTlXm5OY6Mk6Vhy+x+lPaiJe83FveaqG2uazq2U5Z4AFKNPimi+EqmsKdJtmdAO1OxmNlRUVNjZO8yZ+4WjI/9RUeErR3NzBJs3behraRmxLVKpVJSWlJxJOT3Sxzdg7Dh7BwcNI6PRrsjt165d9R3lN2z48Jj9+9pfqKqqMnr/z65u7t+vWCkUCkuePEFRNDAoOHrfz5npaYFBwRcvnAeA4EmTAMDHZ5Qjn4/jePKJ44cPxvL5TqPHBGjOk3r5YujMWTiV2nEI1g7UlN7cp6jKR2mmtPdXMT7aIX+USXn3Y4TKkuWdJtt5AwBCN0NopupmkVbr9evbwGAw1qzboJngF86ffeXo+rWrLS0tI3ftMTU1BYABAwedSTnN49kFjB0Hv6FKGt28cR0A/vH9ChMTk6rKqmNHX8WwWSyWCZNZkJ+fmBDv4Ojo7z8aAAInBMfGRF+8cN575MjsW1lD3hlqb+8gk8mEwrpzkSkikUgulwNAUWHhSxtCQsM6A6J02Nentq5nZP5o8uAJqDkPZVujLGv2gv+1zirfhaCQNaf/qKeaEofTp8Mgq5G5OaeysjL7VpaWxqOdbw/pdMa+/QdmfxZubm6e8supr7/6ovLZMwsLixGeXgLB3cT4OKVSGRQ8EQDOnkk5cfwY38l5z3/3zQybDQDSNhinpZXV65Z3bNxNZh7Gvb+g+i8lOweoW8SqmiKZ4IgkcY4kcU7Lr7sAQCY4Ir1/qrt5oAOo+VqlvQ2bNltaWWlYVQBgMlkAcC835/Kli9XVVW1benp5A8B//r3p2NGk8+fOtD+VWCw+eiTJysoqYOw4np2dUqkUi8UAEBQ8Ua1WJyUmMBiMMQFjNXUXAMBxqkqtunr1V1139N1KJa4CFKP5L6X5fqOovC+JC1NLG5TVBfL8FHl+iuJpNgAoqwtUNYVd9qtuoOZr5Q2cPn22botcMP+rdWtWYRjm6eXt4uKal3d/3ZpVK1evJZFIL1t+s2CRRCK5eeN6bW2txwjP9LRUDSDbZqKgjx4VXr50obGx0czcfPZn4QMGDgQAL+/3OJw+dXW1Y8e/T6VSAWBCUHB21s0rmelFhQ+dnAc8fFCg/Q1rA2qq6sslB6d3ugd7cO7FSsvuxrbOoKae4MnS0pIcwV0ut39dXd1Pu6MaGyUHDsb1s7bWa95gxKCmnrJouVx+NCmpqqoSx3E+3+nT8Ll69gCMG9TUkw18vtOh+ETDZtHGDGr2LiTJaEFNo4An9SnjBDUJeFLf6hDUJOBJfatDUJOAJ/WtDkFNAp40ChGcEmEDod/0f6P4YBquXgJfAAAAAElFTkSuQmCC"}});