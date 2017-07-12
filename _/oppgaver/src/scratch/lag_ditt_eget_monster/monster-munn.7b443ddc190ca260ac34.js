webpackJsonp([194,418],{1596:function(e,n,t){e.exports={frontmatter:t(623),content:t(2761)}},2761:function(e,n){e.exports="<section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_0><label for=cbx_0> For å få monsteret til å snakke, kan du bruke en <code class=blocklooks>si</code>-kloss.</label></p> <pre class=blocks>når [mellomrom v] trykkes\nsi [Hallo!] i (2) sekunder\n</pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_1><label for=cbx_1> For å gjøre det litt mer imponerende, kan du få monsteret til å <strong>åpne</strong> og <strong>lukke munnen</strong> mens det prater. For å gjøre dette, rediger figuren som inneholder munnen - opprett en ny <code>drakt</code> som har lukket munn. Ved å bytte mellom de to, kan du animere at munnen åpner og lukker seg.</label></p> <pre class=blocks>gjenta (8) ganger\n    vent (0.1) sekunder\n    bytt drakt til [munnLukket v]\n    vent (0.1) sekunder\n    bytt drakt til [munnÅpen v]\nslutt\n</pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_2><label for=cbx_2> For å koble de to skriptene sammen, kan du få <code class=blocklooks>si</code>-klossen til å sende en melding, som den andre blokken kan reagere på.</label></p> <pre class=blocks>når [mellomrom v] trykkes\nsend melding [snakk v]\nsi [Hallo!] i (2) sekunder\n\nnår jeg mottar [snakk v]\ngjenta (8) ganger\n    vent (0.1) sekunder\n    bytt drakt til [munnLukket v]\n    vent (0.1) sekunder\n    bytt drakt til [munnÅpen v]\nslutt\n</pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_3><label for=cbx_3> For å gjøre det litt mer fleksibelt, bruk en variabel for å kontrollere <code class=blockdata>snakketid</code>, hvor lenge monsteret sier noe, og for å kontrollere hvor mange ganger animasjonsløkken er gjentatt.</label></p> <pre class=blocks>når [mellomrom v] trykkes\nsett [snakketid v] til [2]\nsend melding [snakk v]\nsi [Hallo!] i (snakketid) sekunder\n\nnår [a v] trykkes\nsett [snakketid v] til [4]\nsend melding [snakk v]\nsi [Noe litt lengre] i (snakketid) sekunder\n\nnår jeg mottar [snakk v]\ngjenta ((snakketid) * (4)) ganger\n    vent (0.1) sekunder\n    bytt drakt til [munnLukket v]\n    vent (0.1) sekunder\n    bytt drakt til [munnÅpen v]\nslutt\n</pre> </li> </ul> <p><strong>(Merk at vi multipliserer snakketid med 4 for å være sikre på at løkken gjentas nok ganger)</strong></p> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_4><label for=cbx_4> Du kan også få monsteret ditt til å si lyder ved å bruke en av lydklossene. Husk å importere lydene under <code>Lyd</code>-fanen.</label></p> <pre class=blocks>når jeg mottar [snakk v]\nspill lyden [Screech v]\n</pre> </li> </ul> <p><strong>Prøv å legge til lyder til andre hendelser, du kan bruke en skummel svevende lyd for et spøkelse som flyr rundt på skjermen! Har du mikrofon på datamaskinen kan du ta opp dine egne lyder, overrask de andre ved å ta opp et høyt monster BRØØØØØØØØØL!!!</strong></p> </section> "}});