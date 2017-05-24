webpackJsonp([136,388],{1227:function(s,e,n){s.exports={frontmatter:n(320),content:n(2319)}},2319:function(s,e,n){s.exports="<section id=informasjon-til-veiledere> <h1 id=informasjon-til-veiledere>Informasjon til veiledere</h1> <section id=laeringsmal> <h2 id=laeringsmal>Læringsmål</h2> <p>Oppgaven «Ultralydsensor» introduserer flere konsepter:</p> <ul> <li>Bruk av ultralydsensor</li> <li>Seriellkonsoll</li> </ul> </section> </section> <section id=koblingsskjema> <h1 id=koblingsskjema>Koblingsskjema</h1> <p>Elevene skal allerede ha løst en del oppgaver før de begynner på denne, men hittil alltid fått koblingsskjema utlevert. Denne oppgaven kan være en god anledning til å la dem prøve å koble opp komponentene uten skjema. Det kan dog være greit å ha et koblingsskjema eller tre i bakhånd for å dele ut:</p> <figure><img src="+n(3017)+' alt=kobling></figure> </section> <section id=hjelp-til-7-segment-utfordringen> <h1 id=hjelp-til-7-segment-utfordringen>Hjelp til 7-segment-utfordringen</h1> <p>I oppgaven <a href=../7_segment_display/7_segment_display.html>7-Segment Display</a> har vi laget koden som kan vise et tall mellom 0 og 9 på et display. Koden under vil bare skrive ut «Om du hadde hatt et display burde det vist tallet (tall)» om og om igjen på seriellkonsollet.</p> <pre><code class=cpp><span class=hljs-keyword>const</span> <span class=hljs-keyword>auto</span> ekko = <span class=hljs-number>2</span>; <span class=hljs-comment>// Echo pin</span>\n<span class=hljs-keyword>const</span> <span class=hljs-keyword>auto</span> sender = <span class=hljs-number>3</span>; <span class=hljs-comment>// Trig pin</span>\n<span class=hljs-keyword>const</span> <span class=hljs-keyword>auto</span> lydens_hastighet = <span class=hljs-number>0.034029</span>; <span class=hljs-comment>// 340.29 m/s</span>\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>setup</span><span class=hljs-params>()</span> </span>{\n  Serial.begin(<span class=hljs-number>9600</span>);\n  pinMode(ekko, INPUT);\n  pinMode(sender, OUTPUT);\n\n  digitalWrite(sender, LOW);\n}\n\n<span class=hljs-function><span class=hljs-keyword>void</span> <span class=hljs-title>loop</span><span class=hljs-params>()</span> </span>{\n  digitalWrite(sender, HIGH);\n  delayMicroseconds(<span class=hljs-number>5</span>);\n  digitalWrite(sender, LOW);\n\n  <span class=hljs-keyword>auto</span> tid = pulseIn(ekko);\n  <span class=hljs-keyword>auto</span> avstand = (tid * hastighet) / <span class=hljs-number>2</span>;\n\n  <span class=hljs-keyword>auto</span> syvsegment = <span class=hljs-built_in>map</span>(avstand, <span class=hljs-number>0</span>, <span class=hljs-number>127</span>, <span class=hljs-number>0</span>, <span class=hljs-number>9</span>);\n  Serial.print(<span class=hljs-string>"Om du hadde hatt et display burde det vist tallet "</span>);\n  Serial.println(constrain(syvsegment, <span class=hljs-number>0</span>, <span class=hljs-number>9</span>));\n\n  delay(<span class=hljs-number>100</span>);\n}\n</code></pre> <p><code>map</code> vil lineært skalere <code>avstand</code> fra verdiområdet 0-127 til en verdi fra 0 til 9. En avstand på over 127 cm vil gi høyere verdier enn 9.</p> <p>Tallet 127 cm er litt tilfeldig valgt som et tall som kan gi mening for å oppdage gjenstander rundt pulten. Ultralydsensoren skal kunne «se» opp til 4 meter fremfor seg, men da må de være store og flate (f.eks. en vegg).</p> <p>For formelen brukt i <code>map</code>, se referansen for hos <a href=https://www.arduino.cc/Reference/Map>arduino.cc</a>. Dette kan være relevant om man vil vinkle denne oppgaven inn mot matematikk.</p> <p><code>constrain</code> vil her gjøre at alle verdier høyere enn 9 vil bli satt til 9.</p> </section> '},3017:function(s,e,n){s.exports=n.p+"_/oppgaver/src/arduino/ultralydsensor/ultra.8fb419.png"}});