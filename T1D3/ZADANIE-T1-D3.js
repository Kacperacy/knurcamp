/*
    === INTRO ===

    Witaj knurze w pierwszym offline zadaniu pierwszego tygodnia KNURCAMP.

    Te zadania mają utrwalić Twoją wiedzę z wykładów oraz ją poszerzyć.
    Nie będą długie ale będą zazwyczaj z pułapką myślową.

    Jak natrafisz na ścianę to pisz na discordzie i pinguj knurcamp support 
      lub przejrzyj VODy i kanał z materiałami.
    Albo użyj oszustw załączonych niżej -
      możesz nawet od razu dostać gotowe rozwiązanie - ale ufam, że tego nie zrobisz :3

    Nie używaj GPT, gdy nie masz pomysłu użyj podpowiedzi, popytaj innych uczestników
      WŁĄCZ MYŚLENIE, NIE IDŹ NA SKRÓTY - jak wolisz skróty
      to w 92 linijce wpisz "TAK" i dostaniesz gotowe rozwiązanie natychmiast.
    
    Celem zadania nie jest skopiowanie gotowca z internetu tylko dojście samemu do rozwiązania.

    Dla uczciwości, jeśli użyleś podpowiedzi/rozwiązania nie wyłączaj już tej opcji
      bądź uczciwy dla innych uczestników i samego siebie.
    To nie są zawody, nie konkurujesz tu z nikim.
    To pomoże samemu Tobie zobaczyć gdzie leży największy problem w Twoim rozumowaniu.

    Miłej zabawy, KNUR.
*/

/*
    ZADANIE T1D3 - 05.02.2024 - ZŁODZIEJSKI RZĄD

    Piszesz program dla b0lskiego rządu którego zadaniem jest kupienie dużej ilości luksusowych towarów.
    Tak żeby zmieścic się w budżecie.

    Jaki to towar? Najdroższy, rząd lubi drogie towary bo sam za nie nie płaci.
    W pierwszej kolejności ładuj najdroższy towar i dopchaj koszyk pod korek tańszymi produktami.

    Na dole masz funckje zakupy w której będziesz pracować i otrzyma ona parametry:
     -balansPortfela (typ number) zawierający ile pieniędzy jest do wydania;
     -towary - tablica obiektów które zawierają pola:
        -koszt (number) - cena jednej sztuki przedmiotu;
        -liczbaSztuk (number) - ile jest dostępnych sztuk produktu;
        -nazwa (string) - nazwa produktu

    Margines błędu to zaokrąglenie więc nie musisz sie martwić liczbami po przecinku.

    Zwróć z funkcji pozostały stan portfela po zakupach (domyślnie ta funckja zwraca cały hajs jaki dostała).

    Po uruchomieniu uzyskasz informacje w konsoli czy udało Ci się osiągnąć optymalny (zawierający najdroższe produkty) 
      koszt koszyka.
    Twoja funkcja zostanie wywołana 3 razy z różnymi towarami i balansem portfela.
    Aby ukończyć zadanie Twoja funkcja musi przejść wszystkie 3 testy pomyślnie.

    To zadanie testuje sie samodzielnie, po uruchomieniu zobaczysz czy Twoja funkcja zdaje testy czy nie.

    Przydatne w którymś miejscu może się tu okazać sortowanie więc tutaj mały drogowskaz:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    Pisz kod tylko pomiędzy MIEJSCE NA TWÓJ KOD i KONIEC MIEJSCA NA TWÓJ KOD.

    Sekcja kontroli oszustw znajduje się na samym dole.
*/

/**
 *
 * @param {number} balansPortfela - wielkość budżetu
 * @param {Array<{koszt: number, liczbaSztuk: number, nazwa: string}>} towary - lista towarów
 * @returns stan portfela po zakupach
 */
function zakupy(balansPortfela, towary) {
  // TU ZACZNIJ (tę funkcje wywoła kod sprawdzający wyniki gdy uruchomisz program)
  // MIEJSCE NA TWÓJ KOD
  towary.sort((a, b) => b.koszt - a.koszt);
  for (const towar of towary) {
    const ileMoznaKupic = Math.floor(balansPortfela / towar.koszt);
    const ileKupimy = Math.min(ileMoznaKupic, towar.liczbaSztuk);
    balansPortfela -= ileKupimy * towar.koszt;
  }

  return balansPortfela;
  // KONIEC MIEJSCA NA TWÓJ KOD
}

/* KOD SPRAWDZAJĄCY - NIE RUSZAJ - SPECJALNIE ZAKODOWANY ŻEBYŚ NIE PODGLĄDAŁ I SIĘ NIE INSPIROWAŁ BEZ POMYŚLENIA */
eval(
  Buffer.from(
    "Y29uc3QgVEVTVF9TVUlURVMgPSBbCiAgewogICAgYmFsYW5zOiAzMCwKICAgIHRvd2FyeTogWwogICAgICB7IG5hendhOiAiSmFixYJrYSIsIGtvc3p0OiAxLCBsaWN6YmFTenR1azogMTkgfSwKICAgICAgeyBuYXp3YTogIkNobGViIiwga29zenQ6IDMsIGxpY3piYVN6dHVrOiA3IH0sCiAgICAgIHsgbmF6d2E6ICJNbGVrbyIsIGtvc3p0OiA0LCBsaWN6YmFTenR1azogMiB9LAogICAgICB7IG5hendhOiAiRHpiYW4iLCBrb3N6dDogMjAsIGxpY3piYVN6dHVrOiAxIH0sCiAgICBdLAogICAgcmVzdWx0OiAwLAogIH0sCiAgewogICAgYmFsYW5zOiAxMjAsCiAgICB0b3dhcnk6IFsKICAgICAgeyBuYXp3YTogIk11c3p0YXJkYSIsIGtvc3p0OiAyLjUsIGxpY3piYVN6dHVrOiA1IH0sCiAgICAgIHsgbmF6d2E6ICJDem9zbmVrIiwga29zenQ6IDUsIGxpY3piYVN6dHVrOiAxOCB9LAogICAgICB7IG5hendhOiAiWmVzdGF3IGRvIG9icm9ueSBrb25zdHl0dWNqaSIsIGtvc3p0OiA2OSwgbGljemJhU3p0dWs6IDIgfSwKICAgICAgeyBuYXp3YTogIktyZW11d2thIiwga29zenQ6IDIxLjM3LCBsaWN6YmFTenR1azogMSB9LAogICAgXSwKICAgIHJlc3VsdDogMiwKICB9LAogIHsKICAgIGJhbGFuczogNTAwMDAsCiAgICB0b3dhcnk6IFsKICAgICAgeyBuYXp3YTogIlRlbGV3aXpvciIsIGtvc3p0OiA1NTU1LCBsaWN6YmFTenR1azogNCB9LAogICAgICB7IG5hendhOiAiUHJhbGthIiwga29zenQ6IDEyMDAsIGxpY3piYVN6dHVrOiAxNyB9LAogICAgICB7IG5hendhOiAiV3lwcmF3a2EgZG8gd2nEmXppZW5pYSIsIGtvc3p0OiAxNTAsIGxpY3piYVN6dHVrOiA0IH0sCiAgICAgIHsgbmF6d2E6ICJNb3J0YWRlbGEiLCBrb3N6dDogNywgbGljemJhU3p0dWs6IDE3fSwKICAgICAgeyBuYXp3YTogIld1emVrIiwga29zenQ6IDg3NjUuMTQsIGxpY3piYVN6dHVrOiAxfSwKICAgICAgeyBuYXp3YTogIlBvbW5payBKYW5hIFBhd8WCYSBJSSIsIGtvc3p0OiAyMTM3MCwgbGljemJhU3p0dWs6IDEgfSwKICAgICAgeyBuYXp3YTogIlN1YnNrcnlwY2phIHUgZnZsdnRlIiwga29zenQ6IDIwLjk5LCBsaWN6YmFTenR1azogMTcyIH0sCiAgICBdLAogICAgcmVzdWx0OiA0LAogIH0sCl07CgpsZXQgX18gPSAxOwpmb3IgKGNvbnN0IHN1aXRlIG9mIFRFU1RfU1VJVEVTKSB7CiAgY29uc3QgcmV0ID0gemFrdXB5KHN1aXRlLmJhbGFucywgc3VpdGUudG93YXJ5KTsKICBpZiAoTWF0aC5yb3VuZChyZXQpICE9PSBzdWl0ZS5yZXN1bHQpIHsKICAgIGNvbnNvbGUubG9nKAogICAgICBgWyR7X199LyR7VEVTVF9TVUlURVMubGVuZ3RofV0gV3luaWsgcG96b3N0YcWCeWNoICR7cmV0fSB6xYIgZGxhIHBvZGFuZWdvIHRvd2FydSBuaWUgamVzdCBwcmF3aWTFgm93eS5gLAogICAgKTsKICAgIGJyZWFrOwogIH0KCiAgY29uc29sZS5sb2coCiAgICBgWyR7X199LyR7VEVTVF9TVUlURVMubGVuZ3RofV0gV3luaWsgcG96b3N0YcWCeWNoICR7cmV0fSB6xYIgZGxhIHBvZGFuZWdvIHRvd2FydSBqZXN0IHByYXdpZMWCb3d5LCBHUkFUVUxBQ0pFIWAsCiAgKTsKCiAgX18rKzsKfQoKaWYgKF9fID09PSA0KSB7CiAgY29uc29sZS5sb2coIkdyYXR1bGFjamUhIFJvendpxIV6YcWCZcWbIHphZGFuaWUgcG9tecWbbG5pZSAtIHBvbcOzxbwgaW5ueW0gbmEgREMgOjMiKTsKfSBlbHNlIHsKICBjb25zb2xlLmxvZygKICAgICJOaWUgcG9kZGF3YWogc2nEmSwgc3Byw7NidWogcG9ub3duaWUsIGxpY3piYSBwcsOzYiBuaWVvZ3Jhbmljem9uYSAtIGFsYm8gcG9zenVrYWogcG9tb2N5IG5hIERDISIsCiAgKTsKfQoKZnVuY3Rpb24gcG9kcG93aWVkxbpQaWVyd3N6YShlbmFibGVkKQp7CiAgaWYoZW5hYmxlZCAhPT0gIk5JRSIpCiAgewogICAgICBjb25zb2xlLmxvZygiPT09IFBPRFBPV0lFRMW5IDEgPT09Iik7CgogICAgICBjb25zb2xlLmxvZyhgClphY3puaWogb2Qgd3lwaXNhbmlhIHphd2FydG/Fm2NpIGtvc3p5a2E6CgogICAgICBmdW5jdGlvbiB6YWt1cHkoYmFsYW5zUG9ydGZlbGEsIHRvd2FyeSkgewogICAgICAgICAgY29uc29sZS5sb2coIk1hbSB3IHBvcnRmZWx1ICIgKyBiYWxhbnNQb3J0ZmVsYSArICIgesWCIik7CiAgICAgICAgICBjb25zb2xlLmxvZygiVyBza2xlcGllIHpuYWpkdWrEhSBzacSZIG5hc3RlcHVqYWNlIHRvd2FyeToiKTsKICAgICAgICAgIGZvcihsZXQgdG93YXIgb2YgdG93YXJ5KQogICAgICAgICAgewogICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvd2FyLmxpY3piYVN6dHVrICsgIiB4ICIgKyB0b3dhci5uYXp3YSArICIgemEgIiArIHRvd2FyLmtvc3p0ICsgIiB6xYIgemEgc3p0dWvEmSIpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIGJhbGFuc1BvcnRmZWxhOwogICAgICAgIH0KClBvc29ydG93YW5pZSByb3NuxIVjbyBwcm9kdWt0w7N3IHcgdGFibGljeSB3ZWTFgnVnIGtvc3p0dSBtb8W8ZSBva2F6YcSHIHNpxJkgcsOzd25pZcW8IHBvbW9jbmUuCiAgICAgIGApCiAgICAgIGNvbnNvbGUubG9nKCI9PT0gS09OSUVDIFBPRFBPV0lFRFpJIDEgPT09Iik7CiAgfQp9CgpmdW5jdGlvbiBwb2Rwb3dpZWTFukRydWdhKGVuYWJsZWQpCnsKICBpZihlbmFibGVkICE9PSAiTklFIikKICB7CiAgICAgIGNvbnNvbGUubG9nKCI9PT0gUE9EUE9XSUVExbkgMiA9PT0iKTsKCiAgICAgIGNvbnNvbGUubG9nKApgU3Byw7NidWogcG9zb3J0b3dhxIcgdG93YXJ5IHJvc27EhWNvLCDFgmF0d2llaiBiZWR6aWUgQ2kgd3RlZHkgZG9icmHEhyBvcHR5bWFsbmllIHByb2R1a3R5LgpUYSBsaW5pamthIHBvc29ydHVqZSBUd29qxIUgdGFibGljZSByb3NuxIVjby4KICAgICAgICB0b3dhcnkuc29ydCgoYSwgYikgPT4gYi5rb3N6dCAtIGEua29zenQpOyAKICAgICAgYCkKCiAgICAgIGNvbnNvbGUubG9nKCI9PT0gS09OSUVDIFBPRFBPV0lFRFpJIDIgPT09Iik7CiAgfQp9CgpmdW5jdGlvbiBwb2Rwb3dpZWTFulRyemVjaWEoZW5hYmxlZCkKewogIGlmKGVuYWJsZWQgIT09ICJOSUUiKQogIHsKICAgICAgY29uc29sZS5sb2coIj09PSBQT0RQT1dJRUTFuSAzID09PSIpOwoKICAgICAgY29uc29sZS5sb2coCmBacsOzYiBwxJl0bGUgZm9yLW9mIG5hIHBvc29ydG93YW55Y2ggcm9zbsSFY28gdG93YXJhY2ggaSBvYmxpY3ogaWxlIG1vxbxuYSBpY2gga3VwacSHIHV3emdsxJlkbmlhasSFYyBsaWN6YmUgc3p0dWsuClN0d8OzcnogdGFibGljZSAiY29uc3Qga29zenlrID0gW10iIG5hIFR3w7NqIGtvc3p5ayBwcm9kdWt0w7N3LgpEb2RhaiBkbyBrb3N6eWthIG5handpxJljZWogc3p0dWsgaWxlIGplc3RlxZsgdyBzdGFuaWUgYm8gcG9zb3J0b3dhbmUgcm9zbsSFY28gcHJvZHVrdHkgcG96d29sxIUgQ2kKbmEgemFwZcWCbmllbmllIHJlc3p0eSBwcm9kdWt0w7N3IHBvZCBrb3JlayAobmFzdMSZcG5lIHByb2R1a3R5IGLEmWTEhSB0YcWEc3plIGR6acSZa2kgc29ydG93YW5pdSkgY28gcG96d29saSBjaSB1enlza2HEhyBvcHR5bWFsbnkga29zenlrLmApCgogICAgICBjb25zb2xlLmxvZygiPT09IEtPTklFQyBQT0RQT1dJRURaSSAzID09PSIpOwogIH0KCn0KCmZ1bmN0aW9uIHBva2F6Um96d2lhemFuaWUoZW5hYmxlZCkKewogIGlmKGVuYWJsZWQgIT09ICJOSUUiKQogIHsKICAgICAgY29uc29sZS5sb2coIj09PSBST1pXScSEWkFOSUUgPT09Iik7CgogICAgICBjb25zb2xlLmxvZygKICAgICAgICAgIGAKCiAgICAgICAgICBmdW5jdGlvbiB6YWt1cHkoYmFsYW5zUG9ydGZlbGEsIHRvd2FyeSkKICAgICAgICAgIHsKICAgICAgICAgICAgdG93YXJ5LnNvcnQoKGEsIGIpID0+IGIua29zenQgLSBhLmtvc3p0KTsKICAgICAgICAgIAogICAgICAgICAgICBjb25zdCBrb3N6eWsgPSBbXTsKICAgICAgICAgIAogICAgICAgICAgICBmb3IgKGNvbnN0IHRvd2FyIG9mIHRvd2FyeSkgewogICAgICAgICAgICAgICAgY29uc3QgbWF4SWxvc2MgPSBNYXRoLmZsb29yKGJhbGFuc1BvcnRmZWxhIC8gdG93YXIua29zenQpOwogICAgICAgICAgICAgICAgY29uc3Qga3VwaW9uZVN6dHVraSA9IE1hdGgubWluKG1heElsb3NjLCB0b3dhci5saWN6YmFTenR1ayk7CiAgICAgICAgICAgICAgICBiYWxhbnNQb3J0ZmVsYSAtPSBrdXBpb25lU3p0dWtpICogdG93YXIua29zenQ7CiAgICAgICAgICAgICAgICBrb3N6eWsucHVzaCh7bmF6d2E6IHRvd2FyLm5hendhLCBsaWN6YmFTenR1azoga3VwaW9uZVN6dHVraSwga29zenQ6IHRvd2FyLmtvc3p0LCBjYcWCeUtvc3p0OiB0b3dhci5rb3N6dCAqIGt1cGlvbmVTenR1a2l9KTsKICAgICAgICAgICAgfQogICAgICAgICAgCiAgICAgICAgICAgIGNvbnNvbGUubG9nKCJLb3N6eWsgemF3aWVyYToiKTsKICAgICAgICAgICAgZm9yIChjb25zdCB0b3dhciBvZiBrb3N6eWspIHsKICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvd2FyLm5hendhICsgIiB4ICIgKyB0b3dhci5saWN6YmFTenR1ayArICIgc3p0ID0gIiArIHRvd2FyLmNhxYJ5S29zenQgKyAiIHrFgiIpOwogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIH0KICAgICAgICAgICAgY29uc29sZS5sb2coIlBvem9zdGHFgm8gdyBwb3J0ZmVsdSAiICsgYmFsYW5zUG9ydGZlbGEgKyAiIHrFgiIpOwogICAgICAgICAgCiAgICAgICAgICAgIHJldHVybiBiYWxhbnNQb3J0ZmVsYTsKICAgICAgICAgIH0KCiAgICAgIGApCiAgICAgIGNvbnNvbGUubG9nKCI9PT0gS09OSUVDIFJPWldJxIRaQU5JQSA9PT0iKTsKICB9Cn0=",
    "base64"
  ).toString("utf-8")
);

/*
    Zamień "NIE" na "TAK" aby uruchomić podpowiedź albo nawet wypisać całe rozwiązanie po uruchomieniu programu.

    Jak już odpalisz oszustwo, zostaw je włączone w zadaniu, 
      to pomoże mi lepiej robić wykłady a Tobie zobaczyć swoje braki.

    No chyba, że poprawnie przeszły Ci testy i chcesz zobaczyć moje rozwiązanie to droga wolna.

    SEKCJA KONTROLI OSZUSTW:
*/
podpowiedźPierwsza("NIE"); // Mała podpowiedź od czego zacząć.
podpowiedźDruga("NIE"); // Większa podpowiedź od czego zacząć.
podpowiedźTrzecia("NIE"); // Duża podpowiedź algorytmu.
pokazRozwiazanie("NIE"); // Wypisuje kompletne rozwiązanie (nikt sie nie dowie, nie musisz używać GPT jak VR).
