	<script async type="text/javascript" src="src/index.js"></script>
## Uputstva
- Nakon otvaranja ovog linka, isti **obavezno** forkujte pre nego što počnete sa radom.
- Zadatak rešavajte isključivo unutar `src` direktorijuma, druge fajlove **nemojte** dirati.
- Slobodni ste da istalirate i koristite biblioteke po izboru, kao i da koristite pretprocesore za CSS, ili CSS-IN-JS.
- Nakon što ste uspešno rešili zadatak i zadovoljni ste svojom implementacijom, link za primer koji ste prethodno forkovali pošaljite nam kao odgovor na mail u kome ste dobili zadatak.

---

# Weather App
Web aplikacija koja je u mogućnosti da pokazuje nedeljnu prognozu vremena za 2 grada - Beograd i Novi Sad.

![gif](https://bot.thehive.rs/api/storage/5b7b2c1b599bbd0024ee5064/5b7c284a599bbd0024ee517c.gif)

- Aplikacija može preuzimati podatke o vremenskoj prognosi sa bilo kog dostupnog API-a.
- Klikom na "refresh" ikonicu aplikacija treba ažurirati prikazane podatke.
- Prelaskom kursora preko imena grada (na dizajnu 'Norway') treba se prikazati drugi grad u padajućem meniju. Naš predlog je da samo postepeno izbledite datum ispod imena trenutnog grada i animirate padajući meni sa imenom drugog uz postepeno pojavljivanje i blago pomeranje od gore, sve uz odgovarajuću "easing" funkciju.
- Prelazak kursora preko narednih 7 dana u nedelji nema nikakvu funkcionalnost već je tu isključivo zbog vizualnog efekta. Verujemo da će blur efekat i sama animacija određenim kandidatima predstavljati i najteži deo zadatka. Ukoliko ne uspete da dođete do rešenja koje oponaša primer dovoljno je odraditi efekat bez pomeranja kartice, što svakako ne znači da Vas ne podstičemo da pokušate osmisliti neko kreativno rešenje! :)
- Kao pozadinu koristite slike koje imate u folderu `assets/images`. Za tranziciju između slika koristite samo promenu "opacity" CSS atributa.
- Za boje leve dve kartice savetujemo da koristite boje koje preovlađuju u slikama umesto nijansi zelene i plave iz dizajn primera.
- Ilustracija grafikona u gornjoj levoj kartici koristi SVG ilustraciju koja je konvertovana u React komponentu, i istu je potrebno animirati. Ukoliko nemate iskustva sa SVG animacijom, predlažemo Vam da pogledate [ovaj članak](https://css-tricks.com/svg-line-animation-works/).
- Za "layout" predlažemo da koristite Flexbox, međutim, ukoliko imate drugo rešenje, svakako je podjednako validno. Maksimalna širina ukupne postavke ne bi trebala biti veći od 800px. Ukoliko želite, aplikaciju možete adaptirati za mobilne platforme, ali to nije obavezno.
- Font je potrebno da sami da odaberete iz kolekcije Google fonotva. Izaberite onaj koji vizualno najviše odgovara fontu sa dizajna i isti učitate u aplikaciju.
- Ikonicu na gornjoj levoj kartici nije potrebno animirati. Ikonice za druge vremenske uslove zahtevale bi procerudu direktnog uključivanje koda SVG ilustracija u izvorni kod ("inlineing") kako bi njihovi elementi postali dostupni za animaciju. Verujemo da bi taj deo zadatka bio izuzetno naporan i stoga ga zanemarite.
- Vodite računa da sve animacije poseduju korektnu "easing" funkciju kako bi sve animacije i tranzicije izgledale organski.