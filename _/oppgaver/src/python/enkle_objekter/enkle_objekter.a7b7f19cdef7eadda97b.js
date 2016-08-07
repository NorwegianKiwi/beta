webpackJsonp([186,262],{959:function(s,e,a){s.exports={frontmatter:a(340),content:a(1562)}},1562:function(s,e){s.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne oppgaven skal vi gi en enkel innføring til klasser og objekter (ordene forklares senere i teksten).</p> </section> <section class=activity id=ordboker> <h1 class=activity id=ordboker>Ordbøker</h1> </section> <section class=protip id=""> <h1 class=protip id=""></h1> <figure>Tenk deg at du skal lage en sirkel, og ønsker å lagre variabler som beskriver radius og farge. Ved hjelp av ordbøker kan dette gjøres slik:</figure> <pre><code class=language-python>circle = {\n    <span class=hljs-string>"radius"</span> : <span class=hljs-number>3</span>,\n    <span class=hljs-string>"color"</span> : <span class=hljs-string>"red"</span>\n}\n</code></pre> <p>Vi kan også hente ut og endre variablene:</p> <pre><code class=language-python><span class=hljs-comment># endrer radiusen til 5</span>\ncircle[<span class=hljs-string>"radius"</span>] = <span class=hljs-number>5</span>\n\n<span class=hljs-comment># skriver ut fargen på sirkelen</span>\nprint(circle[<span class=hljs-string>"color"</span>])\n</code></pre> <p>Hva om vi ønsker å lage en variabel som regner ut arealet til sirkelen? Vi kan for eksempel lage en funksjon <code>circle_area()</code>:</p> <pre><code class=language-python><span class=hljs-keyword>import</span> math\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>circle_area</span><span class=hljs-params>(circle)</span>:</span>\n    radius = circle[<span class=hljs-string>"radius"</span>]\n    <span class=hljs-comment># formula: A = pi * r * r</span>\n    area = math.pi * radius * radius\n    <span class=hljs-keyword>return</span> area\n</code></pre> <p>Så kaller vi funksjonen:</p> <pre><code class=language-python>print(circle_area(circle))\n</code></pre> </section> <section class=activity id=klasser-og-objekter> <h1 class=activity id=klasser-og-objekter>Klasser og objekter</h1> </section> <section class=protip id=-2> <h1 class=protip id=-2></h1> <p>Vi ønsker å bruke <strong>objekter</strong> i stedet for ordbøker i de neste spillene våre. Vi kan la et <code>Circle</code>-objekt ha to variable <code>radius</code> og <code>color</code>. En <strong>klasse</strong> er en slags \'mal\' for et objekt. Klassen forteller oss hva slags verdier objektet kan ha. Vi kan lage en <code>Circle</code>-klasse, også lage et objekt av typen <code>Circle</code> som vi kaller <code>circle</code> basert på klassen.</p> <p>Dette er enklere å forstå med ett eksempel:</p> <pre><code class=language-python><span class=hljs-comment># Vi lager Circle-klassen:</span>\n<span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>Circle</span>:</span>\n    radius = <span class=hljs-number>3</span>\n    color = <span class=hljs-string>"red"</span>\n\n<span class=hljs-comment># Så lager vi circle-objektet</span>\ncircle = Circle()\n</code></pre> <p>Vi lager først <code>Circle</code>-klassen, før vi så lager et <code>Circle</code>-objekt som vi kaller for <code>circle</code>. <code>class</code>-nøkkelordet forteller datamaskinen at nå lager vi en klasse, du kan sammenlikne det med f.eks. <code>def</code> som forteller datamaskinen at nå kommer en funksjon.</p> <p>Vi kan hente ut og endre variablene til objektet:</p> <pre><code class=language-python><span class=hljs-comment># Endrer på radiusen</span>\ncircle.radius = <span class=hljs-number>5</span>\n\n<span class=hljs-comment># Skriver ut fargen</span>\nprint(circle.color)\n</code></pre> <figure>Nå ønsker vi å lage en funksjon som kan regne ut arealet til sirkelen. Vi kan lage denne funksjonen som en del av klassen:</figure> <pre><code class=language-python><span class=hljs-keyword>import</span> math\n\n<span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>Circle</span>:</span>\n    radius = <span class=hljs-number>3</span>\n    color = <span class=hljs-string>"red"</span>\n\n    <span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>area</span><span class=hljs-params>(self)</span>:</span>\n        area = math.pi * self.radius * self.radius\n        <span class=hljs-keyword>return</span> area\n</code></pre> <p><strong>Legg merke til innrykket av <code>area()</code> i eksempelet over!</strong></p> <p>Så kaller vi funksjonen:</p> <pre><code class=language-python>print(circle.area())\n</code></pre> <p>Du lurer kanskje på hvorfor vi brukte <code>self.radius</code> i funksjonen <code>area()</code>? Dette er fordi vi sier at vi vil bruke <code>radius</code>-variabelen som er en del av klassen. Du må alltid bruke <code>self</code> når du skal bruke funksjoner eller variabler du har lagd i klassen.</p> <p>Som vi ser så er det ikke så stor forskjell mellom bruk av funksjoner og klasser:</p> <div class=col-sm-6> **Ordbøker** <pre><code class=language-python><span class=hljs-keyword>import</span> math\n\ncircle = {\n    <span class=hljs-string>"radius"</span>: <span class=hljs-number>3</span>,\n    <span class=hljs-string>"color"</span>: <span class=hljs-string>"red"</span>\n}\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>circle_area</span><span class=hljs-params>(circle)</span>:</span>\n    area = math.pi * circle[<span class=hljs-string>"radius"</span>] ** <span class=hljs-number>2</span>\n    <span class=hljs-keyword>return</span> area\n\n\n\n\ncircle[<span class=hljs-string>"radius"</span>] = <span class=hljs-number>5</span>\nprint(circle[<span class=hljs-string>"color"</span>])\nprint(circle_area(circle))\n</code></pre> </div> <div class=col-sm-6> **Klasser** <pre><code class=language-python><span class=hljs-keyword>import</span> math\n\n<span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>Circle</span>:</span>\n    radius = <span class=hljs-number>3</span>\n    color = <span class=hljs-string>"red"</span>\n\n\n    <span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>area</span><span class=hljs-params>(self)</span>:</span>\n        area = math.pi * self.radius ** <span class=hljs-number>2</span>\n        <span class=hljs-keyword>return</span> area\n\n\ncircle = Circle()\n\ncircle.radius = <span class=hljs-number>5</span>\nprint(circle.color)\nprint(circle.area())\n</code></pre> </div> <figure>Vi kommer dermed til å bruke klasser i de neste oppgavene - det er minst like enkelt som ordbøker, og man kan gjøre mer avanaserte ting med klasser.</figure> </section> <section class=check id=-3> <h1 class=check id=-3></h1> <figure>Nå kommer det et program som er skrevet ved bruk av ordbøker. Du skal prøve å &quot;oversette&quot; dette til et program som bruker klasser.</figure> <pre><code class=language-python>rectangle = {\n    <span class=hljs-string>"width"</span>: <span class=hljs-number>3</span>,\n    <span class=hljs-string>"length"</span>: <span class=hljs-number>5</span>,\n    <span class=hljs-string>"color"</span>: <span class=hljs-string>"blue"</span>\n}\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>rectangle_area</span><span class=hljs-params>(rectangle)</span>:</span>\n    area = rectangle[<span class=hljs-string>"width"</span>] * rectangle[<span class=hljs-string>"length"</span>]\n    <span class=hljs-keyword>return</span> area\n\nrectangle[<span class=hljs-string>"width"</span>] = <span class=hljs-number>10</span>\nprint(rectangle[<span class=hljs-string>"color"</span>])\nprint(rectangle_area(rectangle))\n</code></pre> </section> <section class=flag id=test-programmet-ditt> <h1 class=flag id=test-programmet-ditt>Test programmet ditt</h1> <p>Programmet over skriver ut det følgende:</p> <pre><code><span class=hljs-keyword>blue\n</span><span class=hljs-number>50</span>\n</code></pre> <p>Pass på at din &quot;oversettelse&quot; gjør det samme.</p> </section>'}});