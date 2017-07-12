webpackJsonp([159,418],{1673:function(e,t,a){e.exports={frontmatter:a(700),content:a(2842)}},2842:function(e,t){e.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne oppgaven skal vi ta utgangspunkt i animasjone vi lagde i oppgaven <a href=../partikkel_animasjon/partikkel_animasjon.html>Partikkel-animasjon</a>. Dersom du ikke har gjort denne oppgaven anbefaler vi deg om å gå tilbake å gjøre den før du fortsetter her.</p> <p>Oppgaven her går ut på å legge til gravitasjon på <code>Partikkel</code>-objektet. Du vil få presentert hva du skal gjøre, så du må selv finne ut hvordan man skriver kode for å få det til. Til slutt kommer det til å se noe slik ut:</p> <script>function draw(){ctx.clearRect(0,0,250,250),ctx.fillStyle="red",ctx.fillRect(particle.x,particle.y,particle.size,particle.size),particle.gravitySpeed+=particle.gravity,particle.y+=particle.gravitySpeed,kant=canvas.height-particle.size,particle.y>kant&&(particle.y=kant,particle.gravitySpeed=0,setTimeout(function(){particle.y=0},2e3))}var canvas,ctx,particle={x:125,y:0,gravity:.05,gravitySpeed:0,size:10};window.onload=function(){canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),setInterval(draw,30)}</script> <p><canvas id=canvas width=250 height=250></canvas></p> </section> <section class=activity id=steg-1-fa-partikkelet-til-a-falle> <h1 class=activity id=steg-1-fa-partikkelet-til-a-falle>Steg 1: Få partikkelet til å falle</h1> <p>Det første vi skal gjøre er å få partikkelet til å falle, for å få det til å skje må du programmere følgende:</p> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_0><label for=cbx_0> Legg til to attributter i <code>particle</code> som skal holde styr på <code>gravitasjonen</code> og <code>hastigheten</code> den faller med. <code>Gravitasjons</code>-attributtet bør være et lite tall, som for eksempel <code>0.01</code>. <code>Hastigheten</code> bør være <code>0</code> fra starten av.</label></li> <li class=task-list-item><input type=checkbox id=cbx_1><label for=cbx_1> Sett et passende startsted for <code>particle</code>, helst høyt oppe</label></li> </ul> <p>For hver gang <code>draw()</code> kjører, skal følgende skje:</p> <ul> <li><code>gravitasjons</code>-attributtet skal endres med <code>hastighets</code>-attributtet</li> <li><code>particle</code> sin <code>y</code>-posisjon blir endret med <code>hastighets</code>-attributtet</li> </ul> <toggle> <strong> Hint </strong> <hide> objekt.gravitasjon += objekt.hastighet eller objekt.gravitasjon = objekt.gravitasjon + objekt.hastighet </hide> </toggle> <p>Faller partiklet nå? Nå som partikkelet faller ser du kanskje også at det faller igjennom skjermen, derfor må vi legge til en sjekk om gjør at den stopper nederst.</p> </section> <section class=activity id=steg-2-stopp-nederst-pa-skjermen> <h1 class=activity id=steg-2-stopp-nederst-pa-skjermen>Steg 2: Stopp nederst på skjermen</h1> <p>For at partikkelet vårt skal stoppe nederst på skjermen trenger vi enkelt og greit en sjekk hver gang vi kjører <code>draw()</code>:</p> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_2><label for=cbx_2> Lag en sjekk som sjekker om <code>particle</code> sin <code>y</code>-verdi er større enn høyden på <code>canvas</code>-objektet. OBS! Du vil sikkert merke at den &quot;rister&quot; helt nederst, derfor må du også ta hensyn til størrelsen på partikkel-objektet når du sjekker hvor langt ned den er.</label></li> </ul> <toggle> <strong> Hint </strong> <hide> Lag en variabel som holder på verdien til canvas.heigh - particle.size. </hide> </toggle> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_3><label for=cbx_3> I sjekken må du stoppe partikkelet ved å sette <code>y</code>-verdien. Kan du tenke deg til hva <code>y</code>-verdien bør være?</label></li> </ul> <p>Nå har du et fallende objekt!</p> <section class=challenge id=utfordringer> <h2 class=challenge id=utfordringer>Utfordringer</h2> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_4><label for=cbx_4> Når partikkelet treffer kanten, snu gravitasjonen sånn at partikkelet går oppover</label></li> <li class=task-list-item><input type=checkbox id=cbx_5><label for=cbx_5> Klarer du å få partikkelet til å gå til venster eller høyre også?</label></li> <li class=task-list-item><input type=checkbox id=cbx_6><label for=cbx_6> &quot;Steng&quot; alle kantene i <code>canvas</code> ved hjelp av flere <code>if</code>-setninger</label></li> </ul> </section> </section> <section class=activity id=steg-3-fa-partikkelet-til-a-fly> <h1 class=activity id=steg-3-fa-partikkelet-til-a-fly>Steg 3: Få partikkelet til å fly!</h1> <p>Nå som vi har fått gravitasjon på partikkelet vårt kan vi legge til styring på partikkelet ved hjelp av knapper. Vi skal nå programmere slik at når du trykker <code>pil opp</code> så gir vi partikkelet negativ akselerasjon og når vi slipper så blir den påvirket av gravitasjonen. Får å gjøre dette bruker vi noe som heter <code>onkeyup</code>, <code>onkeydown</code> og <code>keyCode</code>.</p> <p>For å kunne utføre en operasjon når vi trykker på en knapp må vi ha denne koden:</p> <pre><code class=js><span class=hljs-built_in>window</span>.onkeydown = <span class=hljs-function><span class=hljs-keyword>function</span>(<span class=hljs-params>inputKey</span>) </span>{\n    <span class=hljs-keyword>var</span> key = inputKey.keyCode ? inputKey.keyCode : inputKey.which;\n\n    <span class=hljs-keyword>if</span> (key == <span class=hljs-comment>//knapp-koden) {</span>\n        <span class=hljs-comment>// Kode som skal utføres</span>\n    }\n}\n</code></pre> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_7><label for=cbx_7> Bruk <a href=http://keycode.info>keycode.info</a> til å finne ut hvilke <code>knapp-kode</code> knappen du vil bruke har.</label></li> </ul> <section class=try id=forklaring> <h2 class=try id=forklaring>Forklaring</h2> <ul> <li><code>window.onkeydown</code> er en funksjon som sjekker om en knapp trykkes ned, dersom den gjør det, så kjøres funksjonen med <code>knapp-kode</code> <code>inputKey</code>.</li> <li><code>var key = inputKey.keyCode ? inputKey.keyCode : inputKey.which;</code> er en enklere måte å skrive dette på:</li> </ul> <pre><code class=js><span class=hljs-keyword>if</span>(inputKey.keyCode) {\n    <span class=hljs-keyword>var</span> key = inputKey.keyCode;\n} <span class=hljs-keyword>else</span> {\n    <span class=hljs-keyword>var</span> key = inputKey.which;\n}\n</code></pre> <p>Grunnen til at du må bruke <code>keyCode</code> og <code>which</code> er fordi ikke alle nettlesere støtter <code>keyCode</code>, men bruker <code>which</code> istedet.</p> <ul> <li>I <code>if (key == //knapp-kode)</code> må du skrive kode for at gravitasjonen skal være negativ, prøv med forskjellige tall.</li> </ul> </section> <section id=""> <h2 id=""></h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_8><label for=cbx_8> For at du skal få gravitasjonen tilbake når du slipper knappen må du lage en funksjon for <code>window.onkeyup</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_9><label for=cbx_9> Les mer om <code>window.onkeyup</code> osv her: <a href=http://www.w3schools.com/jsref/event_onkeydown.asp>w3school</a></label></p> </li> </ul> <p>Dersom du står bomfast: <a href=https://jsbin.com/sezumakiyo/edit?html,output>Forlag til kode</a></p> </section> </section> '}});