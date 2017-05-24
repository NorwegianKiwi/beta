webpackJsonp([344,388],{1262:function(s,n,e){s.exports={frontmatter:e(355),content:e(2356)}},2356:function(s,n){s.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Denne oppgaven viser hvordan vi kan bruke musen til å kontrollere elm-programmene våre.</p> </section> <section class=activity id=steg-1-vise-en-posisjon> <h1 class=activity id=steg-1-vise-en-posisjon>Steg 1: Vise en posisjon</h1> <p>Vi starter ut med å vise en sirkel på en gitt posisjon. Her må vi kombinere to ting som har vært i tidligere oppgaver:</p> <ol> <li>Vise en sirkel med musen (Tegning med SVG)</li> <li>Bruke <code>Html.program</code> i stedet for <code>Html.beginnerProgram</code> (Tell sekunder)</li> </ol> <p>Vi trenger <code>Html.program</code> fordi vi skal lytte på musebevegelser på samme måte som vi tidligere lyttet på tid.</p> <p>Først setter vi opp SVG til å vise en ball vi kan styre posisjonen til:</p> <pre><code class=elm><span class=hljs-keyword>import</span> Svg <span class=hljs-keyword>exposing</span> (svg, circle, rect)\n<span class=hljs-keyword>import</span> Svg.Attributes <span class=hljs-keyword>exposing</span> (width, height, viewBox, cx, cy, r, fill, x, y, width, height)\n\n<span class=hljs-keyword>import</span> Mouse <span class=hljs-keyword>exposing</span> (<span class=hljs-type>Position</span>)\n\n\n<span class=hljs-title>p</span> = <span class=hljs-type>Position</span> <span class=hljs-number>10</span> <span class=hljs-number>20</span>\n\n\n<span class=hljs-title>model</span> =\n  { position = p\n  }\n\n\n<span class=hljs-title>main</span> =\n    view model\n\n<span class=hljs-title>view</span> model =\n    svg\n      [ width <span class=hljs-string>"500"</span>, height <span class=hljs-string>"500"</span>, viewBox <span class=hljs-string>"0 0 200 200"</span> ]\n      [ circle [ cx (toString model.position.x)\n               , cy (toString model.position.y)\n               , r <span class=hljs-string>"10"</span>, fill <span class=hljs-string>"blue"</span> ] [  ]\n      ]\n</code></pre> <p>Endre tallene <code>10</code> og <code>20</code> som inngår i verdien <code>p</code>.</p> <ul> <li>Hva gjør det første tallet?</li> <li>Hva gjør det andre tallet?</li> </ul> </section> <section class=activity id=steg-2-bruke> <h1 class=activity id=steg-2-bruke>Steg 2: Bruke <code>Html.program</code></h1> <p>Her er et eksempel på hva <code>Html.program</code> trenger som input:</p> <pre><code class=elm><span class=hljs-title>main</span> =\n  <span class=hljs-type>Html</span>.program\n    { init = init\n    , view = view\n    , update = update\n    , subscriptions = subscriptions\n    }\n</code></pre> <p><code>init</code> er tilstanden til programmet vårt når vi starter opp.</p> <p><code>view</code> er hvordan vi viser tilstanden til programmet vårt.</p> <p><code>update</code> er hvordan tilstanden til programmet vårt reagerer på nye hendelser.</p> <p><code>subscriptions</code> er hvilke hendelser programmet vårt skal reagere på.</p> <p>Verdien vi kalte <code>p</code> i forrige avsnitt kan vi bruke direkte som <code>init</code>. <code>view</code> har vi allerede skrevet. La oss fylle inn update og subscriptions som ikke gjør noe.</p> <p>Vi legger inn en variant hvor <code>update</code> gir tilbake modellen uendret, og <code>subscriptions</code> ignorerer alt som kommer inn:</p> <pre><code class=elm><span class=hljs-keyword>import</span> Svg <span class=hljs-keyword>exposing</span> (svg, circle, rect)\n<span class=hljs-keyword>import</span> Svg.Attributes <span class=hljs-keyword>exposing</span> (width, height, viewBox, cx, cy, r, fill, x, y, width, height)\n\n<span class=hljs-keyword>import</span> Mouse <span class=hljs-keyword>exposing</span> (<span class=hljs-type>Position</span>)\n<span class=hljs-keyword>import</span> Html\n\n\n<span class=hljs-title>p</span> = <span class=hljs-type>Position</span> <span class=hljs-number>10</span> <span class=hljs-number>20</span>\n\n\n<span class=hljs-title>init</span> =\n  ( { position = p\n    }\n  , <span class=hljs-type>Cmd</span>.none\n  )\n\n\n<span class=hljs-title>main</span> =\n  <span class=hljs-type>Html</span>.program\n    { init = init\n    , view = view\n    , update = update\n    , subscriptions = subscriptions\n    }\n\n\n<span class=hljs-title>view</span> model =\n    svg\n      [ width <span class=hljs-string>"500"</span>, height <span class=hljs-string>"500"</span>, viewBox <span class=hljs-string>"0 0 200 200"</span> ]\n      [ circle [ cx (toString model.position.x)\n               , cy (toString model.position.y)\n               , r <span class=hljs-string>"10"</span>, fill <span class=hljs-string>"blue"</span> ] [  ]\n      ]\n\n\n<span class=hljs-keyword>type</span> <span class=hljs-type>Msg</span> =\n  <span class=hljs-type>NoChange</span>\n\n<span class=hljs-keyword>type</span> <span class=hljs-keyword>alias</span> <span class=hljs-type>Model</span> =\n  { position : <span class=hljs-type>Position</span>\n  }\n\n\n<span class=hljs-title>update</span> : <span class=hljs-type>Msg</span> -&gt; <span class=hljs-type>Model</span> -&gt; (<span class=hljs-type>Model</span>, <span class=hljs-type>Cmd</span> <span class=hljs-type>Msg</span>)\n<span class=hljs-title>update</span> msg model =\n  (model, <span class=hljs-type>Cmd</span>.none)\n\n\n<span class=hljs-title>subscriptions</span> model =\n  <span class=hljs-type>Sub</span>.batch [ ]\n</code></pre> </section> <section class=activity id=steg-3-koble-pa-musen> <h1 class=activity id=steg-3-koble-pa-musen>Steg 3: Koble på musen</h1> <p>Vi kobler på mus:</p> <pre><code class=elm><span class=hljs-keyword>import</span> Svg <span class=hljs-keyword>exposing</span> (svg, circle, rect)\n<span class=hljs-keyword>import</span> Svg.Attributes <span class=hljs-keyword>exposing</span> (width, height, viewBox, cx, cy, r, fill, x, y, width, height)\n\n<span class=hljs-keyword>import</span> Mouse <span class=hljs-keyword>exposing</span> (<span class=hljs-type>Position</span>)\n<span class=hljs-keyword>import</span> Html\n\n\n<span class=hljs-title>p</span> = <span class=hljs-type>Position</span> <span class=hljs-number>10</span> <span class=hljs-number>20</span>\n\n\n<span class=hljs-title>init</span> =\n  ( { position = p\n    }\n  , <span class=hljs-type>Cmd</span>.none\n  )\n\n\n<span class=hljs-title>main</span> =\n  <span class=hljs-type>Html</span>.program\n    { init = init\n    , view = view\n    , update = update\n    , subscriptions = subscriptions\n    }\n\n\n<span class=hljs-title>view</span> model =\n    svg\n      [ width <span class=hljs-string>"500"</span>, height <span class=hljs-string>"500"</span>, viewBox <span class=hljs-string>"0 0 200 200"</span> ]\n      [ circle [ cx (toString model.position.x)\n               , cy (toString model.position.y)\n               , r <span class=hljs-string>"10"</span>, fill <span class=hljs-string>"blue"</span> ] [  ]\n      ]\n\n\n<span class=hljs-keyword>type</span> <span class=hljs-type>Msg</span> =\n  <span class=hljs-type>MouseAt</span> <span class=hljs-type>Position</span>\n\n\n<span class=hljs-keyword>type</span> <span class=hljs-keyword>alias</span> <span class=hljs-type>Model</span> =\n  { position : <span class=hljs-type>Position</span>\n  }\n\n\n<span class=hljs-title>update</span> : <span class=hljs-type>Msg</span> -&gt; <span class=hljs-type>Model</span> -&gt; (<span class=hljs-type>Model</span>, <span class=hljs-type>Cmd</span> <span class=hljs-type>Msg</span>)\n<span class=hljs-title>update</span> msg model =\n  <span class=hljs-keyword>case</span> msg <span class=hljs-keyword>of</span>\n    <span class=hljs-type>MouseAt</span> pos -&gt;\n      ( { model | position = pos }\n      , <span class=hljs-type>Cmd</span>.none)\n\n\n<span class=hljs-title>subscriptions</span> model =\n  <span class=hljs-type>Sub</span>.batch [<span class=hljs-type>Mouse</span>.moves <span class=hljs-type>MouseAt</span>]\n</code></pre> <p>Her er det noe rart! Ballen er ikke samme sted som pekeren. Hvorfor?</p> <ul> <li> <p>Prøv å endre viewboxen i SVG:</p> <pre><code class=elm>[ width <span class=hljs-string>"500"</span>, height <span class=hljs-string>"500"</span>, viewBox <span class=hljs-string>"0 0 200 200"</span> ]\n</code></pre> </li> <li> <p>Hvordan henger dette sammen?</p> </li> </ul> </section> '}});