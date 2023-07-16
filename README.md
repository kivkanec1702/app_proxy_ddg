# Proxy App

## Opis

Api proxy project je Web API koji radi kao alat za pretraživanje weba. Koristi Duck Duck Go kao svoj API od kojeg dobiva odgovore na sva pretraživanja koja korisnik želi vidjeti. Ovaj Web API će prvo izlistati odgovore u obliku linkova koje je dobio kao odgovore putem DuckDuckGo Api-ja. Klikom korisnika na određeni link se na WEB API-ju se otvara DuckDuckGo tražilica sa listom dobivenih rezultata.

## Tehnićki pregled:

Ovaj kod koristi Node.js kao serversku okolinu za izvršavanje JavaScript koda. Node.js omogućuje pokretanje servera i izvršavanje serverskih zadataka u JavaScriptu. 
Express.js se koristi kao web okvir za Node.js. Koristi se za definiranje ruta i obradu HTTP zahtjeva i odgovora.
API pozivi: Aplikacija koristi API pozive kako bi pretražila rezultate. API pozivi se generiraju sa fetch metodom. Spremanje povijesti pretraga: Aplikacija sprema prethodne pretrage kako bi korisnik mogao lako pristupiti ranijim pretragama i ponovno ih izvršiti.
Aplikacija je izgrađena koristeći React biblioteku. React reaktivni pristup prilikom izrade korisničkog sučelja.
Redux je korišten za upravljanje globalnim stanjem aplikacije. Koristi se za pohranu rezultata pretraživanja, povijesti pretraga i stanja učitavanja.
Redux Thunk se koristi za asinkrono upravljanje akcijama, posebno za dohvaćanje podataka pretraživanja putem API poziva.
React Redux se koristi za integraciju Redux-a u React aplikaciju. Omogućuje komponentama da pristupaju stanju i akcijama putem Redux store-a.
Bootstrap CSS okvir koristi se za stvaranje modernog i responsivnog dizajna aplikacije. Aplikacija je stilizirana primjenom CSS-a i Bootstrapa

## Upute za instalaciju

1. Klonirajte ovaj repozitorij na svoje računalo.
2. Instalirajte potrebne dependencije pomoću naredbe: `npm install`.
3. Korisnik mora u prvom folderu app_proxy_ddg gdje se nalazi server.js i package.json odraditi komandu npm install. Kada to odradi je instalirao sve potrebno za backend. Onda mora navigirati u folder proxy-app i tamo isto odraditi kako bi instalirao sve potrebno za frontend.
4. Naredbom 'npm start' se pokreće server koji sluša na portu 5000.
5. Korsnik mora otvoriti novi termina i unutar proxy-app folder navigirati u folder koji se isto tako zove proxy-app u kojemu se nalazi frontend.
6. Naredbom 'npm start' se pokreće frontend koji se otvara na portu 3000.
7. U tražilicu upisite sljedeći url: http://localhost:3000/
8. Kada se stranica korisnik može pretraživati DuckDuckGo.

## Autor

Krešimir Ivkanec.

## Dodatne napomene

Sa projektom su pokrivene sve specifikacije osim bonusa."# app_proxy_ddg" 
Nakon izvrsavanja naredbe za kloniranje porojecta se mora odraditi naredba za submodule update kako bi se povukli fileovi iz submodula.
