webpackJsonp([7,388],{1280:function(e,n,t){e.exports={frontmatter:t(373),content:t(2379)}},2379:function(e,n,t){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Du må ha et hus så du kan bo i stil! La oss kode en modd som bygger et hus med vegger og tak, flere etasjer, vinduer, dører og trapp mellom hver etasje.</p> <figure><img src="+t(3163)+' alt=""></figure> </section> <section class=activity id=steg-1-vegger> <h1 class=activity id=steg-1-vegger>Steg 1: Vegger</h1> <p>Først skal du kode modden så den bygger fire vegger.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Lag en modd som bygger fire vegger:</p> <figure><img src='+t(3151)+' alt=""></figure> </li> </ul> </section> <section class=flag id=test-prosjektet> <h2 class=flag id=test-prosjektet>Test prosjektet</h2> <p>Da kan du teste modden i Minecraft og se om den bygger 4 vegger.</p> <p>Som du kan se så bygger du med materialet som har ID kode ‘155:2’ for å bygge med ‘Chiseled Quartz Block’. Siden LTM ikke har absolutt alle materialene som er i Minecraft som ferdige klosser så kan du gå til denne siden: <a href=http://www.minecraftinfo.com/idlist.htm><em>http://www.minecraftinfo.com/idlist.htm</em></a> for å finne ID koden for det materialet du vil bygge med.</p> </section> </section> <section class=activity id=steg-2-plass-til-dorer> <h1 class=activity id=steg-2-plass-til-dorer>Steg 2: Plass til dører</h1> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Nå må du bestemme hvor du vil ha dører og vinduer, det kan være lurt å tegne opp en vegg på et ruteark og markere hvor du vil ha dør, vinduer og i hvilke etasjer du vil ha gulv.</p> <p>Du skal legge inn en if-test i den innerste løkken som bygger med riktig materiale i hver posisjon. Det er lurt å begynne if-testen med det materialet som er du skal ha minst av. Denne if-testen kan bli ganske stor etter hvert, så vi lager en egen funksjon som vi kaller velgmateriale.</p> <p>La oss først bestemme hvor dørene skal være. Det som er spesiellt med dører er at de må bygges etter at det som er rundt dem er bygd, så vi lar de posisjonene være tomme i første omgang. Så setter vi inn dører der senere i programmet.</p> <p>Jeg vil ha en dør i X posisjon 8-9 og Y posisjon 1-2, da blir funksjonen min sånn:</p> <figure><img src='+t(3155)+' alt=""></figure> </li> <li> <p>Du må også huske å kalle funksjonen fra den innerste løkken i vegger funksjonen:</p> <figure><img src='+t(3156)+' alt=""></figure> </li> </ul> </section> <section class=flag id=test-prosjektet-2> <h2 class=flag id=test-prosjektet-2>Test prosjektet</h2> <p>Da kan du teste modden!</p> </section> </section> <section class=activity id=steg-3-vinduer> <h1 class=activity id=steg-3-vinduer>Steg 3: Vinduer</h1> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Nå kan du utvide if-testen sånn at den bygger vinduer der du vil ha dem. Jeg vil ha vinduer i Y posisjon 2, 6, 10 og 14, men ikke i hjørnene av hver vegg (X posisjon 1). Da blir min funksjon sånn:</p> <figure><img src='+t(3157)+' alt=""></figure> </li> </ul> </section> </section> <section class=activity id=steg-4-tak-dorer-gulv-og-trapper> <h1 class=activity id=steg-4-tak-dorer-gulv-og-trapper>Steg 4: Tak, dører, gulv og trapper</h1> <p>Nå skal vi bygge tak på huset, la oss prøve noen forskjellige typer tak før du velger den du liker best.</p> <p>Når du bygger tak skal du du bruke noen funksjoner som finnes i ScriptCraft som gjør at du trenger å kode veldig lite. Learn To Mod er bygd på ScriptCraft så alt du kan gjøre med ScriptCraft kan du få til i Learn To Mod. For å se alle mulighetene som finnes kan du gå til denne siden: <a href=https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md>ScriptCraft API Referanse</a></p> <p>Hvis du vil lære mer om hvordan du kan programmere i Javascript med ScriptCraft kan du gå til denne siden: <a href=https://github.com/walterhiggins/ScriptCraft/blob/master/docs/YoungPersonsGuideToProgrammingMinecraft.md#the-young-persons-guide-to-programming-in-minecraft>The young persons guide to programming in Minecraft</a></p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Du skal bruke en drone funksjon som heter prism for å bygge et skråtak. Lag en funksjon som heter tak1 og legg inn følgende kode:</p> <figure><img src='+t(3158)+' alt=""></figure> </li> <li> <p>Husk også å legge inn kall til tak1 funksjonen på slutten av main funksjonen.</p> </li> <li> <p>Nå kan du teste modden i Minecraft, taket mitt ser sånn ut:</p> <figure><img src='+t(3159)+' alt=""></figure> </li> <li> <p>Hvis du ser inni huset så ser du at taket er flatt på innsiden, hvis du bruker prism0 (tallet null tilslutt) funksjonen så får du et tak som er hult på innsiden, prøv det og se hva du liker best.</p> </li> <li> <p>Hvis du vil se hvordan huset blir med et flatt tak kan du prøve det som står i dette punktet. Det flate taket skal stikke en kloss utenfor huset på hver side. Siden huset vårt er 16 klosser i bredde og dypde må taket da bli 18 x 18 klosser. Du kan programmere denne «manuellt» ved å lage en sånn funksjon:</p> <figure><img src='+t(3160)+' alt=""></figure> <p>Eller du kan utnytte en ScriptCraft funksjon som heter box og lage en enklere funksjon som gjør akkurat det samme:</p> <figure><img src='+t(3161)+' alt=""></figure> <p>Det kan lønne seg å lære kode som andre har laget!</p> </li> <li> <p>La oss bygge gulv. Nå som du har lært box funksjonen så bruker du den til å lage gulv på bakken og på 4, 8 og 12 posisjon i høyden. Innsiden av huset vårt er 14x14 klosser og vi bygger med glowstone så det blir lyst også om natten (husk å legge inn kall til gulv funksjonen til slutt i main funksjonen):</p> <figure><img src='+t(3162)+' alt=""></figure> </li> <li> <p>Hm det fungerte for så vidt, men vi trenger hull i gulvene så vi kan bygge trapp mellom hver etasje. La oss bygge en funksjon som lager hull i hver etasje:</p> <figure><img src='+t(3152)+' alt=""></figure> </li> <li> <p>La oss bygge en trapp mellom hver etasje, ScriptCraft har en funksjon for å bygge trapper, men den fungerer dessverre ikke på LTM så vi må bygge trappen litt mer manuellt. Koden du skal lime inn i Javascript klossen er:</p> <p><code>tr.box(blocks.stairs.quartz + &quot;:&quot; + Drone.PLAYER\\_STAIRS\\_FACING\\[tr.dir\\]);</code></p> <p>Funksjonen skal se sånn ut:</p> <figure><img src='+t(3153)+' alt=""></figure> </li> <li> <p>La oss sette inn fire dører, du skal bruke en ScriptCraft funksjon som heter door2 som lager en dobbeltdør:</p> <figure><img src='+t(3154)+' alt=""></figure> <p>Hvis du heller vil ha en jerndør så bruker du door2_iron funksjonen isteden. Hvis du bruker jerndører så må du også legge til en knapp eller noe annet som kan åpne døren.</p> </li> <li> <p>Husk å legge inn kall til trapp og dør funksjonene til slutt i main funksjonen.</p> </li> </ul> </section> <section class=flag id=test-prosjektet-3> <h2 class=flag id=test-prosjektet-3>Test prosjektet</h2> <p>Nå kan du teste modden din i Minecraft! Trykk på den grønne <strong>Mod</strong> knappen øverst og gå til Minecraft og kjør modden din!</p> <p>Hvis den ikke fungerer så må du rette opp litt i modden, det er helt vanlig.</p> </section> <section class=challenge id=utfordring-innredning-i-alle-etasjene> <h2 class=challenge id=utfordring-innredning-i-alle-etasjene>Utfordring: Innredning i alle etasjene</h2> <p>Når du går inn i huset ditt så ser du at alle etasjene mangler innredning. Din utfordring er å lage innredning i alle etasjene. En mulighet er å lage en funksjon som lager en type innredning og teste den i Minecraft. Hvis du vil ha forskjellig innredning i hver etasje så kan du enten lage flere forskjellige funksjoner (f.eks. innredning1, innredning2 osv.) eller du kan lage en liste med de tingene du vil ha som innredning og velge tilfeldige rader fra den listen etterhvert som du styrer dronen din rundt i hver etasje. Lykke til!</p> </section> </section> '},3151:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image1.83f24a.png"},3152:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image10.4a1948.png"},3153:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image11.d41212.png"},3154:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image12.4edd48.png"},3155:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image2.9e0731.png"},3156:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image3.abdb69.png"},3157:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image4.c6ab3b.png"},3158:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image5.d21a9d.png"},3159:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image6.f06998.png"},3160:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image7.5d8aa1.png"},3161:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image8.c80628.png"},3162:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/image9.ca383a.png"},3163:function(e,n,t){e.exports=t.p+"_/oppgaver/src/learntomod/bygge_et_hus/intro.12c6cc.png"}});