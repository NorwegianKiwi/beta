webpackJsonp([87,262],{1097:function(e,s,n){e.exports={frontmatter:n(478),content:n(1700)}},1700:function(e,s,n){e.exports='<section class=intro id=rull-en-ball> <h1 class=intro id=rull-en-ball>Rull-en-ball</h1> <p>Denne uka skal vi lage vårt første spill! Spillet går ut på å være en ball og samle inn kuber for å få poeng. Spillet er over når man har samlet inn alle kubene.</p> <p>Denne oppgaven tar utgangspunkt i <a href=http://unity3d.com/learn/tutorials/projects/roll-ball-tutorial>Roll-a-Ball på Unity sine sider</a>. Titlene i denne oppgaven er lenket direkte til videoene på Unity sine sider der det er aktuelt. Du finner også lenker til alle videoene på <a href=http://unity3d.com/learn/tutorials/projects/roll-ball-tutorial>unity3d.com/learn/tutorials/projects/roll-ball-tutorial</a>.</p> </section> <section class=activity id=steg-1-omgivelser-og-spilleren> <h1 class=activity id=steg-1-omgivelser-og-spilleren>Steg 1: Omgivelser og spilleren</h1> <section id=introduksjon> <h2 id=introduksjon><a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/introduction?playlist=17141">Introduksjon</a></h2> <p>Bildet nedenfor viser hvordan spillet ser ut når man er ferdig! I denne oppgaven lærer vi litt enkel fysikk, hvordan vi kan flytte spillobjekter med tastaturet, og kollisjon mellom objekter.</p> <figure><img src='+n(2355)+' alt=""/></figure> </section> <section class=check id=oppsett-av-spillet> <h2 class=check id=oppsett-av-spillet><a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/set-up?playlist=17141">Oppsett av spillet</a></h2> <ul> <li>Start med å lage et nytt 3D-prosjekt.</li> <li>Lagre Scenen, <strong>File &gt; Save Scene</strong>, legg den i en ny mappe <code>Assets/_Scenes</code> og kall den <code>Minigame</code>.</li> <li>Lag brettet vi skal spille på. Dette er et 3D-plan. Du finner den i hierarkiet under <strong>Create &gt; 3D Objekt &gt; Plane</strong>. Kall dette objektet <code>Ground</code>.</li> <li>Flytt brettet til origo, <code>(0, 0, 0)</code>, ved å trykke på tannhjulet i Transform-komponenten og velge <strong>Reset</strong>.</li> <li>Skru av Grid-lines på Scenen. Dette finner du under <strong>Gizmos &gt; Show Grid</strong>.</li> <li>Lag bakken litt større. Dette kan du gjøre med å dra på pilene eller skrive det manuelt inn på høyresida. Vi setter Scale til <code>2</code> på <code>x</code>, <code>1</code> på <code>y</code> og <code>2</code> på <code>z</code>.</li> <li>Lag en spiller! Fra hierarkiet <strong>Create &gt; 3D Object &gt; Sphere</strong> og gi den navnet <code>Player</code>. Tilbakestill posisjonen på samme måte som vi gjorde med planet.</li> <li>Flytt ballen opp <code>0.5</code> enhet slik at vi får den til å ligge på planet. Husk at ballen er 1 høy og 1 bred. Husk at det er y-posisjonen vi endrer med <code>0.5</code>.</li> <li>La oss bytte farge på brettet. Vi lager en ny mappe i Assets-mappa vår og gir den navnet <code>Materials</code>. Velg denne mappa og lag et nytt material og kall den <code>Background</code>. Endre farge ved å trykke på den hvite boksen til høyre for <code>Albedo</code>-feltet og velg en fin blåfarge. Du kan bruke RGB-verdien <code>(0, 32, 64)</code>.</li> <li>Lag brettet blått ved å dra <code>Background</code>-materialet til brettet i Scenen.</li> <li>For å få bedre lys i spillet kan vi endre rotasjonen på lyset i hierarkiet vårt. Endre rotasjon på y-aksen til <code>60</code>.</li> </ul> </section> <section class=check id=bevege-spilleren> <h2 class=check id=bevege-spilleren><a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/moving-the-player?playlist=17141">Bevege spilleren</a></h2> <ul> <li> <p>Siden vi vil at ballen skal rulle rundt på brettet, kollidere i vegger og treffe forskjellige objekter for å samle poeng trenger vi litt fysikk. Dette får vi ved å legge til en Rigidbody-komponent på <code>Player</code>-objektet. Trykk på <strong>Add Component</strong> når du har valgt spilleren og velg <strong>Physics &gt; Rigidbody</strong>.</p> </li> <li> <p>Lag en ny mappe <code>Assets/Scripts</code> og et nytt C#-script som vi kaller <code>PlayerController</code>. Koden vi skal legge inn der er det best å skrive selv.</p> <figure>Siden noen av dere jobber hjemmefra legger vi inn hele kodesnutten under. Ikke kopier den, men skriv inn alle linjene!</figure> <figure><strong>PlayerController.cs</strong></figure> <pre><code class=language-csharp><span class=hljs-keyword>using</span> UnityEngine;\n<span class=hljs-keyword>using</span> System.Collections;\n\n<span class=hljs-keyword>public</span> <span class=hljs-keyword>class</span> <span class=hljs-title>PlayerController</span> : <span class=hljs-title>MonoBehaviour</span> {\n\n    <span class=hljs-keyword>public</span> <span class=hljs-keyword>float</span> speed = <span class=hljs-number>10.0</span>f;\n\n    <span class=hljs-keyword>private</span> Rigidbody rb;\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>Start</span> (<span class=hljs-params></span>)\n    </span>{\n        rb = GetComponent&lt;Rigidbody&gt;();\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>FixedUpdate</span> (<span class=hljs-params></span>)\n    </span>{\n        <span class=hljs-keyword>float</span> moveHorizontal = Input.GetAxis (<span class=hljs-string>"Horizontal"</span>);\n        <span class=hljs-keyword>float</span> moveVertical = Input.GetAxis (<span class=hljs-string>"Vertical"</span>);\n\n        Vector3 movement = <span class=hljs-keyword>new</span> Vector3 (moveHorizontal, <span class=hljs-number>0.0</span>f, moveVertical);\n\n        rb.AddForce (movement * speed);\n    }\n}\n\n</code></pre> </li> <li> <figure>Siden vi vil at scriptet skal styre ballen må vi dra det inn på <code>Player</code>-objektet.</figure> </li> </ul> </section> <section class=flag id=test-spillet> <h2 class=flag id=test-spillet>Test spillet</h2> <figure><strong>Klikk på Play-knappen øverst i Unity-editoren.</strong></figure> <ul> <li>Trykk på piltastene, flytter ballen seg?</li> <li>Hva skjer hvis du prøver å styre med tastene WASD?</li> </ul> </section> </section> <section class=activity id=steg-2-kamera-og-spilleomrade> <h1 class=activity id=steg-2-kamera-og-spilleomrade>Steg 2: Kamera og spilleområde</h1> <section class=check id=flytte-kameraet> <h2 class=check id=flytte-kameraet><a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/moving-the-camera?playlist=17141"> Flytte kameraet</a></h2> <ul> <li> <figure>Flytt først kameraet opp 10 enheter (på y-aksen) og vipp det ned med 45 grader (x-aksen).</figure> </li> <li> <p>Flytt kameraet til et <em>barn</em> av <code>Player</code>-objektet, dette vil gjøre at kameraet følger etter spilleren. Et <em>barn</em> er et programmeringsbegrep som betyr at noe er <em>under</em> noe annet, f.eks. en undermappe. Du gjør kameraet til et <em>barn</em> av <code>Player</code>-objektet ved å dra det og slippe det på <code>Player</code>-objektet i hierarkiet. Se at kameraet (nesten) flytter seg med spilleren.</p> </li> <li> <p>Test spillet og se hva som skjer.</p> </li> <li> <p>Siden ikke alt gikk etter planen må vi lage et script for å flytte kameraet. Flytt kameraet tilbake ut av <code>Player</code>-objektet slik at det ikke snurrer rundt lengre.</p> </li> <li> <figure>Lag et nytt C#-script som du kaller <code>CameraController</code> og legg til koden:</figure> <figure><strong>CameraController.cs</strong></figure> <pre><code class=language-csharp><span class=hljs-keyword>using</span> UnityEngine;\n<span class=hljs-keyword>using</span> System.Collections;\n\n<span class=hljs-keyword>public</span> <span class=hljs-keyword>class</span> <span class=hljs-title>CameraController</span> : <span class=hljs-title>MonoBehaviour</span> {\n\n    <span class=hljs-keyword>public</span> GameObject player;\n\n    <span class=hljs-keyword>private</span> Vector3 offset;\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>Start</span> (<span class=hljs-params></span>)\n    </span>{\n        offset = transform.position - player.transform.position;\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>LateUpdate</span> (<span class=hljs-params></span>)\n    </span>{\n        transform.position = player.transform.position + offset;\n    }\n}\n\n</code></pre> </li> <li> <p>Dra scriptet over til kameraet og med kameraet valgt dra <code>Player</code>-objektet til Player-referansen på høyresida.</p> </li> </ul> </section> <section class=flag id=test-spillet-2> <h2 class=flag id=test-spillet-2>Test spillet</h2> <figure><strong>Klikk på Play-knappen øverst i Unity-editoren.</strong></figure> <ul> <li>Flytt ballen og se at kameraet følger etter den.</li> </ul> </section> <section class=check id=sette-opp-spilleomradet> <h2 class=check id=sette-opp-spilleomradet><a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/setting-up-the-play-area?playlist=17141">Sette opp spilleområdet</a></h2> <ul> <li>La oss lage noen vegger! Lag et nytt tomt objekt som du kaller <code>Walls</code>. <strong>Create &gt; Create Empty</strong>. Dette blir en mappe for alle veggene. Tilbakestill posisjonen til Walls til <code>(0, 0, 0)</code>.</li> <li>Lag første vegg. <strong>Create &gt; 3D Object &gt; Cube</strong> og tilbakestill posisjonen til denne. Sjekk at ballen havner oppi denne kuben. Legg denne som et barn av Walls og kall den <code>West Wall</code>.</li> <li>Lag veggen lang og tynn. Under Scale setter vi <code>0.5</code>, <code>2</code> og <code>20.5</code>.</li> <li>Flytt veggen til siden ved å sette <code>x</code> til <code>-10</code>.</li> <li>Dupliser veggen vi har og kall den <code>East Wall</code>. Endre x-posisjon til <code>10</code> og se at den kommer på plass.</li> <li>Dupliser <code>East Wall</code> og kall den <code>North Wall</code>. Tilbakestill posisjonen og sett scale til <code>20.5</code>, <code>2</code>, <code>0.5</code>. Sett posisjon på z-aksen til <code>10</code> for å se at den kommer på riktig plass.</li> <li>Dipliser <code>North Wall</code> og kall den <code>South Wall</code>. Sett posisjon på z-aksen til <code>-10</code>.</li> </ul> </section> <section class=flag id=test-spillet-3> <h2 class=flag id=test-spillet-3>Test spillet</h2> <figure><strong>Klikk på Play-knappen øverst i Unity-editoren.</strong></figure> <ul> <li>Prøv spillet og se at veggene er på plass.</li> </ul> </section> </section> <section class=activity id=steg-3-samle-objekter-og-poeng> <h1 class=activity id=steg-3-samle-objekter-og-poeng>Steg 3: Samle objekter og poeng</h1> <section class=check id=lag-objekter-vi-kan-samle-inn> <h2 class=check id=lag-objekter-vi-kan-samle-inn><a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/creating-collectables?playlist=17141">Lag objekter vi kan samle inn</a></h2> <ul> <li> <p>Lag en kube vi kan samle inn. <strong>Create &gt; 3D Object &gt; Cube</strong> og kall den <code>Pick Up</code>. Tilbakestill posisjonen og se at ballen havner inni denne kuben.</p> </li> <li> <figure>Deaktiver <code>Player</code>-objektet.</figure> </li> <li> <figure>Flytt opp kuben med 0.5 enheter og sett scale til 0.5 i alle aksene. La oss tippe den litt over. Endre rotasjon til 45 på alle aksene.</figure> </li> <li> <p>La oss få kuben til å snurre litt for å tiltrekke oppmerksomhet.</p> </li> <li> <figure>Lag et nytt C#-script og kall det <code>Rotator</code>. Legg til koden:</figure> <figure><strong>Rotator.cs</strong></figure> <pre><code class=language-csharp>\n<span class=hljs-keyword>using</span> UnityEngine;\n<span class=hljs-keyword>using</span> System.Collections;\n\n<span class=hljs-keyword>public</span> <span class=hljs-keyword>class</span> <span class=hljs-title>Rotator</span> : <span class=hljs-title>MonoBehaviour</span> {\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>Update</span> (<span class=hljs-params></span>)\n    </span>{\n        transform.Rotate (<span class=hljs-keyword>new</span> Vector3 (<span class=hljs-number>15</span>, <span class=hljs-number>30</span>, <span class=hljs-number>45</span>) * Time.deltaTime);\n    }\n}\n\n</code></pre> </li> <li> <p>Start spillet og se at kuben snurrer rundt. Husk å legge til scriptet i <code>Pick Up</code>-objektet.</p> </li> <li> <p>Siden vi trenger mange kuber må vi gjøre <code>Pick Up</code>-objektet om til en <em>Prefab</em>. En Prefab er en slags skisse for hvordan et spillobjekt skal se ut og oppføre seg.</p> </li> <li> <p>Lag en ny mappe og kall den <code>Prefabs</code>. Dra <code>Pick Up</code>-objektet inn i denne mappa.</p> </li> <li> <p>Lag en nytt tomt objekt for å organisere objektene våre. Kall dette <code>Pick Ups</code> og legg <code>Pick Up</code> til her.</p> </li> <li> <p>Endre synsvinkel til rett over spillebrettet og lag 10 nye kuber ved å duplisere <code>Pick Up</code>-objektet vi har. Legg kubene rundt omkring på brettet.</p> </li> <li> <p>Start spillet og se at alle kubene snurrer.</p> </li> <li> <p>La oss endre fargen på kubene! Dupliser <code>Background</code>-materialet og kall det <code>Pick Up</code>. velg en fin gulfarge under Albedo og dra den ned på <code>Pick Up</code>-prefaben.</p> </li> </ul> </section> <section class=flag id=test-spillet-4> <h2 class=flag id=test-spillet-4>Test spillet</h2> <figure><strong>Klikk på Play-knappen øverst i Unity-editoren.</strong></figure> <ul> <li>Start spillet og se at alle kubene er gule og snurrer rundt!</li> </ul> </section> <section class=check id=samle-inn-objekter> <h2 class=check id=samle-inn-objekter><a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/collecting-pick-up-objects?playlist=17141">Samle inn objekter</a></h2> <ul> <li> <p>Vis spilleren igjen.</p> </li> <li> <p>Legg merke til at <code>Player</code>-objektet har en Sphere Collider-komponent. Denne skal vi bruke til å sjekke kollisjon mot <code>Pick Up</code>-objektene.</p> </li> <li> <p>Åpne <code>PlayerController</code>-scriptet igjen og legg til funksjonen under i PlayerController-klassen:</p> <pre><code class=language-csharp><span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>OnTriggerEnter</span>(<span class=hljs-params>Collider other</span>)\n</span>{\n    <span class=hljs-keyword>if</span> (other.gameObject.CompareTag (<span class=hljs-string>"Pick Up"</span>))\n    {\n        other.gameObject.SetActive (<span class=hljs-keyword>false</span>);\n    }\n}\n</code></pre> </li> <li> <p>Velg <code>Pick Up</code>-prefaben og legg til en ny <strong>Tag</strong> vi kaller <code>Pick Up</code>. Det er veldig viktig at den heter <code>Pick Up</code>. <strong>Husk store bokstaver på P og U!</strong></p> </li> <li> <p>Prøv spillet og se hva som skjer.</p> </li> <li> <p>For å hindre at Unity lager en kollisjon mellom ballen og kubene må vi krysse for <strong>Is trigger?</strong> på <code>Box Collider</code>-komponenten til <code>Pick Up</code>-prefaben. Dette gjør at Unity registrerer at de to objektene har kollidert, men den flytter ikke på noen av objektene.</p> </li> <li> <p>Test spillet og se at alt er som det skal!</p> </li> <li> <p>(BONUS) For å gjøre en liten optimisering kan vi legge til en Rigidbody-komponent til kubene. Prøv å spille spillet nå. Se at alle kubene faller gjennom gulvet. Dette er fordi vi har satt en <code>Trigger-collider</code> til kubene. Sett <strong>Is Kinematic</strong> for å fikse dette. Les mer om dette på <a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/collecting-pick-up-objects?playlist=17141">tutorialen</a>.</p> </li> </ul> </section> <section class=check id=vis-poengscore> <h2 class=check id=vis-poengscore><a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/displaying-text?playlist=17141">Vis poengscore</a> </h2> <ul> <li> <figure>Vi trenger noen variabler for å holde styr på hvor mange objekter vi har samlet inn.</figure> </li> <li> <figure>Åpne <code>PlayerController</code> og endre det til å være som følger:</figure> <figure><strong>PlayerController.cs</strong></figure> <pre><code class=language-csharp><span class=hljs-keyword>using</span> UnityEngine;\n<span class=hljs-keyword>using</span> System.Collections;\n\n<span class=hljs-keyword>public</span> <span class=hljs-keyword>class</span> <span class=hljs-title>PlayerController</span> : <span class=hljs-title>MonoBehaviour</span> {\n\n    <span class=hljs-keyword>public</span> <span class=hljs-keyword>float</span> speed;\n\n    <span class=hljs-keyword>private</span> Rigidbody rb;\n    <span class=hljs-keyword>public</span> <span class=hljs-keyword>int</span> count;                                   <span class=hljs-comment>// Ny linje</span>\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>Start</span> (<span class=hljs-params></span>)\n    </span>{\n        rb = GetComponent&lt;Rigidbody&gt;();\n        count = <span class=hljs-number>0</span>;                                      <span class=hljs-comment>// Ny linje</span>\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>FixedUpdate</span> (<span class=hljs-params></span>)\n    </span>{\n        <span class=hljs-keyword>float</span> moveHorizontal = Input.GetAxis (<span class=hljs-string>"Horizontal"</span>);\n        <span class=hljs-keyword>float</span> moveVertical = Input.GetAxis (<span class=hljs-string>"Vertical"</span>);\n\n        Vector3 movement = <span class=hljs-keyword>new</span> Vector3 (moveHorizontal, <span class=hljs-number>0.0</span>f, moveVertical);\n\n        rb.AddForce (movement * speed);\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>OnTriggerEnter</span>(<span class=hljs-params>Collider other</span>)\n    </span>{\n        <span class=hljs-keyword>if</span> (other.gameObject.CompareTag(<span class=hljs-string>"Pick Up"</span>))\n        {\n            other.gameObject.SetActive (<span class=hljs-keyword>false</span>);\n            count = count + <span class=hljs-number>1</span>;                          <span class=hljs-comment>// Ny linje</span>\n        }\n    }\n\n}\n</code></pre> </li> <li> <figure>Sjekk at <code>count</code> endres når vi treffer kubene.</figure> </li> <li> <p>Vi trenger noe på skjermen som viser poengene våre. Under hierarkiet, lag et nytt <code>Text</code>-objekt (<strong>Create &gt; UI &gt; Text</strong>). Gi objektet navnet <code>CountText</code>.</p> </li> <li> <p>Endre farge på teksten til hvit og endre posisjon til <code>(0, 0, 0)</code>. Størrelsen til CountText skal være 160 bred og 30 høy. Endre teksten som står der til <code>Count Text</code>.</p> </li> <li> <p>Flytt teksten øverst til venstre. Trykk på firkanten inne i Rect Transform og velg <strong>top left</strong> mens du holder inne <strong>shift</strong> og <strong>alt</strong>.</p> </li> <li> <p>Endre Pos X og Pos Y til <code>10</code> og <code>-10</code>.</p> </li> <li> <p>Nå vil vi endre denne teksten med <code>PlayerController</code>-scriptet. Åpne det opp og endre det til:</p> <figure><strong>PlayerController.cs</strong></figure> <pre><code class=language-csharp><span class=hljs-keyword>using</span> UnityEngine;\n<span class=hljs-keyword>using</span> UnityEngine.UI;                                   <span class=hljs-comment>// Ny linje</span>\n<span class=hljs-keyword>using</span> System.Collections;\n\n<span class=hljs-keyword>public</span> <span class=hljs-keyword>class</span> <span class=hljs-title>PlayerController</span> : <span class=hljs-title>MonoBehaviour</span> {\n\n    <span class=hljs-keyword>public</span> <span class=hljs-keyword>float</span> speed;\n    <span class=hljs-keyword>public</span> Text countText;                              <span class=hljs-comment>// Ny linje</span>\n\n    <span class=hljs-keyword>private</span> Rigidbody rb;\n    <span class=hljs-keyword>private</span> <span class=hljs-keyword>int</span> count;\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>Start</span> (<span class=hljs-params></span>)\n    </span>{\n        rb = GetComponent&lt;Rigidbody&gt;();\n        count = <span class=hljs-number>0</span>;\n        SetCountText ();                                <span class=hljs-comment>// Ny linje</span>\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>FixedUpdate</span> (<span class=hljs-params></span>)\n    </span>{\n        <span class=hljs-keyword>float</span> moveHorizontal = Input.GetAxis (<span class=hljs-string>"Horizontal"</span>);\n        <span class=hljs-keyword>float</span> moveVertical = Input.GetAxis (<span class=hljs-string>"Vertical"</span>);\n\n        Vector3 movement = <span class=hljs-keyword>new</span> Vector3 (moveHorizontal, <span class=hljs-number>0.0</span>f, moveVertical);\n\n        rb.AddForce (movement * speed);\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>OnTriggerEnter</span>(<span class=hljs-params>Collider other</span>)\n    </span>{\n        <span class=hljs-keyword>if</span> (other.gameObject.CompareTag(<span class=hljs-string>"Pick Up"</span>))\n        {\n            other.gameObject.SetActive (<span class=hljs-keyword>false</span>);\n            count = count + <span class=hljs-number>1</span>;\n            SetCountText ();                            <span class=hljs-comment>// Ny linje</span>\n        }\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>SetCountText</span> (<span class=hljs-params></span>)                                <span class=hljs-comment>// Ny linje</span>\n    </span>{                                                   <span class=hljs-comment>// Ny linje</span>\n        countText.text = <span class=hljs-string>"Count: "</span> + count.ToString (); <span class=hljs-comment>// Ny linje</span>\n    }                                                   <span class=hljs-comment>// Ny linje</span>\n}\n</code></pre> </li> <li> <figure>Dra CountText inn i Count Text-referansen til <code>Player</code>-objektet.</figure> </li> <li> <p>Lagre og test spillet!</p> </li> <li> <p>Lag et nytt UI Text-ojekt og kall det Win Text. Lag teksten hvit, sett skriftstørrelse til 24 og sett den sentrert i midten. Sett teksten til å være <code>Win Text</code> og flytt den litt opp. Pos X skal være 0 og pos Y skal være 10.</p> </li> <li> <figure>Lagre og gå tilbake til <code>PlayerController</code>-scriptet.</figure> </li> <li> <p>Lag en ny variabel <code>winText</code>, initialiser den i <code>Start</code> og endre den i <code>SetCountText</code>. Når du har kodet ferdig skal det se slik ut:</p> <figure><strong>PlayerController.cs</strong></figure> <pre><code class=language-csharp><span class=hljs-keyword>using</span> UnityEngine;\n<span class=hljs-keyword>using</span> UnityEngine.UI;\n<span class=hljs-keyword>using</span> System.Collections;\n\n<span class=hljs-keyword>public</span> <span class=hljs-keyword>class</span> <span class=hljs-title>PlayerController</span> : <span class=hljs-title>MonoBehaviour</span> {\n\n    <span class=hljs-keyword>public</span> <span class=hljs-keyword>float</span> speed;\n    <span class=hljs-keyword>public</span> Text countText;\n    <span class=hljs-keyword>public</span> Text winText;                                <span class=hljs-comment>// Ny linje</span>\n\n    <span class=hljs-keyword>private</span> Rigidbody rb;\n    <span class=hljs-keyword>private</span> <span class=hljs-keyword>int</span> count;\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>Start</span> (<span class=hljs-params></span>)\n    </span>{\n        rb = GetComponent&lt;Rigidbody&gt;();\n        count = <span class=hljs-number>0</span>;\n        SetCountText ();\n        winText.text = <span class=hljs-string>""</span>;                              <span class=hljs-comment>// Ny linje</span>\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>FixedUpdate</span> (<span class=hljs-params></span>)\n    </span>{\n        <span class=hljs-keyword>float</span> moveHorizontal = Input.GetAxis (<span class=hljs-string>"Horizontal"</span>);\n        <span class=hljs-keyword>float</span> moveVertical = Input.GetAxis (<span class=hljs-string>"Vertical"</span>);\n\n        Vector3 movement = <span class=hljs-keyword>new</span> Vector3 (moveHorizontal, <span class=hljs-number>0.0</span>f, moveVertical);\n\n        rb.AddForce (movement * speed);\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>OnTriggerEnter</span>(<span class=hljs-params>Collider other</span>)\n    </span>{\n        <span class=hljs-keyword>if</span> (other.gameObject.CompareTag(<span class=hljs-string>"Pick Up"</span>))\n        {\n            other.gameObject.SetActive (<span class=hljs-keyword>false</span>);\n            count = count + <span class=hljs-number>1</span>;\n            SetCountText ();\n        }\n    }\n\n    <span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>SetCountText</span> (<span class=hljs-params></span>)\n    </span>{\n        countText.text = <span class=hljs-string>"Count: "</span> + count.ToString ();\n        <span class=hljs-keyword>if</span> (count &gt;= <span class=hljs-number>12</span>)                                <span class=hljs-comment>// Ny linje</span>\n        {                                               <span class=hljs-comment>// Ny linje</span>\n            winText.text = <span class=hljs-string>"You Win!"</span>;                  <span class=hljs-comment>// Ny linje</span>\n        }                                               <span class=hljs-comment>// Ny linje</span>\n    }\n}\n</code></pre> </li> </ul> </section> <section class=flag id=test-spillet-5> <h2 class=flag id=test-spillet-5>Test spillet</h2> <figure><strong>Klikk på Play-knappen øverst i Unity-editoren.</strong></figure> <ul> <li>Prøv spillet og se hvor fort du klarer å samle inn alle kubene!</li> </ul> </section> <section class=challenge id=utfordring-1-bygg-spillet-slik-at-du-kan-dele-det-med-vennene-dine> <h2 class=challenge id=utfordring-1-bygg-spillet-slik-at-du-kan-dele-det-med-vennene-dine>Utfordring 1: Bygg spillet slik at du kan dele det med vennene dine</h2> <p>Akkurat nå er det jo kun du som kan spille spillet ditt. I <a href="http://unity3d.com/learn/tutorials/projects/roll-a-ball/building?playlist=17141">denne videoen</a> vises det hvordan man kan bygge spillet til forskjellige platformer, for eksempel Windows eller Mac. Se om du klarer å bygge det slik at du kan dele det med vennene dine!</p> </section> </section>'},2355:function(e,s,n){e.exports=n.p+"_/oppgaver/src/unity/rull-en-ball/rull-en-ball.4fb5b7.png"}});