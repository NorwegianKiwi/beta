webpackJsonp([363,388],{1225:function(s,n,a){s.exports={frontmatter:a(318),content:a(2317)}},2317:function(s,n){s.exports="<section id=informasjon-til-veiledere> <h1 id=informasjon-til-veiledere>Informasjon til veiledere</h1> <section id=laeringsmal> <h2 id=laeringsmal>Læringsmål</h2> <ul> <li><code>for</code>- og <code>while</code>-løkker</li> <li>Styre en RGB-lysdiode</li> </ul> </section> </section> <section class=activity id=losningsforslag-for-fargekombinasjonssykling> <h1 class=activity id=losningsforslag-for-fargekombinasjonssykling>Løsningsforslag for fargekombinasjonssykling</h1> <pre><code class=cpp><span class=hljs-keyword>const</span> <span class=hljs-keyword>auto</span> roed_pinne = <span class=hljs-number>9</span>;\n<span class=hljs-keyword>const</span> <span class=hljs-keyword>auto</span> groenn_pinne = <span class=hljs-number>10</span>;\n<span class=hljs-keyword>const</span> <span class=hljs-keyword>auto</span> blaa_pinne = <span class=hljs-number>11</span>;\n\n<span class=hljs-keyword>const</span> <span class=hljs-keyword>auto</span> roed_styrke = <span class=hljs-number>255</span> * <span class=hljs-number>0.7</span>;\n<span class=hljs-keyword>const</span> <span class=hljs-keyword>auto</span> groenn_styrke = <span class=hljs-number>255</span> * <span class=hljs-number>0.85</span>;\n<span class=hljs-keyword>const</span> <span class=hljs-keyword>auto</span> blaa_styrke = <span class=hljs-number>255</span>;\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>setup</span><span class=hljs-params>()</span> </span>{\n  <span class=hljs-keyword>for</span> (<span class=hljs-keyword>auto</span> led = <span class=hljs-number>9</span>; led &lt;= <span class=hljs-number>11</span>; ++led) {\n    pinMode(led, OUTPUT);\n    digitalWrite(led, LOW);\n  }\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>loop</span><span class=hljs-params>()</span> </span>{\n  <span class=hljs-keyword>for</span> (<span class=hljs-keyword>auto</span> roed = <span class=hljs-number>0</span>; roed &lt;= <span class=hljs-number>1</span>; ++roed) {\n    analogWrite(roed_pinne, roed * roed_styrke);\n\n    <span class=hljs-keyword>for</span> (<span class=hljs-keyword>auto</span> groenn = <span class=hljs-number>0</span>; groenn &lt;= <span class=hljs-number>1</span>; ++groenn) {\n      analogWrite(groenn_pinne, groenn * groenn_styrke);\n\n      <span class=hljs-keyword>for</span> (<span class=hljs-keyword>auto</span> blaa = <span class=hljs-number>0</span>; blaa &lt;= <span class=hljs-number>1</span>; ++blaa) {\n        analogWrite(blaa_pinne, blaa * blaa_styrke);\n        delay(<span class=hljs-number>1000</span>);\n      }\n    }\n  }\n}\n</code></pre> <section class=protip id=kommentar> <h2 class=protip id=kommentar>Kommentar</h2> <p>Vi har testet dette med RGB-lysdioden som er med i kodegenet sin pakke. For å kunne se blå og grønn mens rød hadde full intensitet måtte vi skalere intensiteten til rød med 0.7. Det er også grunnen til at vi har skalert grønn med 0.85, denne gangen for å kunne se blå.</p> <p>Skaleringsfaktorene kan variere mellom lysdioder, så hvis disse faktorene ikke fungerer må en prøve seg frem.</p> </section> </section> "}});