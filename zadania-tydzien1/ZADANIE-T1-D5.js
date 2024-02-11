/*
    ZADANIE T1D5 - 07.02.2024 - (???) NUDNA TEORIA I PUZZLE (???)

    Dziś dostaniecie przyjemne małe zadania które pozwolą wam złapać trochę oddechu.
    Albo przydusi was jak policjant kolanem, poziom trudności rośnie w raz z każdym kolejnym zadaniem.
    Dotrzyj najdalej jak się da!

    Jeśli coś musi mieć określoną nazwę to będzie pomiędzy znakami `` na przykład: `test`.
    Wtedy musisz nazwać zmienną/funckję dokładnie tak jak jest to wskazane.
*/

/* 1 */
/* 
    Witam Cię koleżanko, napisz tu funckje `dodawanko`, co przyjmie dwa argumenty,
    doda je do siebie, zwróci a reszta to już cię je....
*/
// Miejsce na Twój kod.
function dodawanko(a, b) {
  return a + b;
}

/* 2 */
/*
    Tak jak Miszor lubię pociągi a do tego jeszcze ciągi.
    Napisz mi funckje `pociong` która przyjmie jeden parametr - tablice/ciąg/array
    - jak zwał tak zwał
     i go odwróci jak krzywe logo na podróbie Gucci.
*/
// Miejsce na Twój kod.
function pociong(tab) {
  return tab.reverse();
}

/* 3 */
/*
    Kopiować muszę bo się uduszę.
    Napisz funckje `kserokopiarka` która skopiuje otrzymany jako pierwszy parametr obiekt.
    I zwróci jego kopię, bo mutacje to zjadamy na kolacje.
*/
// Miejsce na Twój kod.
function kserokopiarka(obj) {
  return { ...obj };
}

/* 4 */
/*
    W urzędzie jest nie małe zamieszanie przez to kopiowanie.
    Napisz funckje `sprawdzam` co otrzyma dwa parametry.
    I niech sprawdzi czy te dwa obiekty są takie same.
    Jeśli są takie same niech zwróci prawdę - `true` a w przeciwnym wypadku fałsz - `false`.
*/
// Miejsce na Twój kod.
function sprawdzam(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/* 5 */
/*
    Od tyłu wszystko najlepiej smakuje dlatego niech i to Twój string poczuje.
    Napisz funkcje `inzynieriaOdtylcowa` która odwróci otrzymany jako parametr string.
    Zwróć odwrócony string.
*/
// Miejsce na Twój kod.
function inzynieriaOdtylcowa(str) {
  return str.split("").reverse().join("");
}

/* 6 */
/*
   Kompialtor pascala cierpi na demencje, podbudujmy jego potencje.
   Napisz funckje `pascal` która przyjmie jeden parametr typu obiekt.
   Niestety nasz kompilator pascala zapomniał co jest w środku.
   Zwróc wartość skrywaną przez nieznany klucz obiektu.
*/
// Miejsce na Twój kod.
function pascal(obj) {
  return Object.values(obj)[0];
}

/* 7 */
/*
    Chodzą słuchy, że xNzq czyta HTML-a do poduchy.
    Tylko zepsuła mu sie drukarka i poci mu sie marynarka.
    Napisz funkcje `xNzq` która przyjmie jako pierwszy parametr tablice ze stronami książki.
    Usuń duplikaty stron z tej tablicy i posortuj strony w zależności od numeru (rosnąco).
*/
// Miejsce na Twój kod.
function xNzq(tab) {
  return [...new Map(tab.map((item) => [item["strona"], item])).values()].sort(
    (a, b) => a.strona - b.strona
  );
}

/* 8 */
/*
    Zadanie sądu ostatecznego się zbliża i Ci naubliża.
    To ostatnie miłe zadanie w tym secie, na kolejnym utkniesz na godziny na klozecie.
    Napisz funkcje `detektor` która przyjmie dwa parametry typu string.
    Pierwszy otrzyma długi ciąg znaków.
    Drugi otrzyma wzór.
    Zwróc ile razy string wzór zawiera się w pierwszym ciągu znaków.
*/
// Miejsce na Twój kod.
function detektor(str, wzor) {
  return str.split(wzor).length - 1;
}

/* 9 */
/*
    Jeśli tu dotarłeś z mej japy nie schodzi facynacja.
    Pora dostać po twarzy finalnego kapcia.
    To już nie przelewki, to zadanie może wymagać nalewki.
    Odkoduj wiadomość zapisaną kodem Morse'a - bo nie zgadza mi się forsa.
    Napisz funkcje `mors` która przyjmie jako pierwszy parametr string zawierający wiadomość z kodem Morse'a.
    Zwróć wiadomość jako normalny tekst.
    * `.` oznacza kod krótki;
    * `-` oznacza kod długi;
    * `/` oznacza spacje
    * ` ` to przerwa między znakami w słowie.
*/
// Miejsce na Twój kod.
function mors(str) {
  const MORSE_CODE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "/": " ",
  };

  return str
    .split(" ")
    .map((word) => MORSE_CODE[word])
    .join("");
}

/* NIE DOTYKAJ KODU PONIŻEJ TEJ LINII */
eval(
  Buffer.from(
    "Y29uc3QgdG90YWxUYXNrcyA9IDk7CgpmdW5jdGlvbiBzdHJSZXYoc3RyKSB7CiAgICByZXR1cm4gc3RyLnNwbGl0KCIiKS5yZXZlcnNlKCkuam9pbigiIik7Cn0KCmNvbnN0IGRlZXBFcXVhbEFycmF5ID0gKGEsIGIpID0+IHsKICAgIGlmKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7aSsrKQogICAgewogICAgICAgIGlmKHR5cGVvZiBhW2ldID09PSAib2JqZWN0IikgCiAgICAgICAgewogICAgICAgICAgICBpZighZGVlcEVxdWFsT2JqZWN0KGFbaV0sIGJbaV0pKQogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmKGFbaV0gIT09IGJbaV0pCiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KICAgIHJldHVybiB0cnVlOwp9Cgpjb25zdCBkZWVwRXF1YWxPYmplY3QgPSAoYSwgYikgPT4gewogICAgaWYoIWRlZXBFcXVhbEFycmF5KE9iamVjdC5rZXlzKGEpLCBPYmplY3Qua2V5cyhiKSkpIHJldHVybiBmYWxzZTsKICAgIGZvcihsZXQga2V5IGluIGEpCiAgICB7CiAgICAgICAgaWYodHlwZW9mIGFba2V5XSA9PT0gIm9iamVjdCIpIAogICAgICAgIHsKICAgICAgICAgICAgaWYoIWRlZXBFcXVhbE9iamVjdChhW2tleV0sIGJba2V5XSkpCiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgfQogICAgICAgIGVsc2UgaWYoYVtrZXldICE9PSBiW2tleV0pCiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KICAgIHJldHVybiB0cnVlOwp9CgpmdW5jdGlvbiBwYXR0ZXJuSGxwKHRleHQsIHBhdHRlcm4pIHsKICAgIGxldCBjb3VudCA9IDA7CiAgICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7CiAgICBjb25zdCB0ZXh0TGVuZ3RoID0gdGV4dC5sZW5ndGg7CiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0ZXh0TGVuZ3RoIC0gcGF0dGVybkxlbmd0aDsgaSsrKSB7CiAgICAgICAgaWYgKHRleHQuc3Vic3RyaW5nKGksIGkgKyBwYXR0ZXJuTGVuZ3RoKSA9PT0gcGF0dGVybikgewogICAgICAgICAgICBjb3VudCsrOwogICAgICAgIH0KICAgIH0KICAgIHJldHVybiBjb3VudDsKfQoKCmNvbnN0IHRlc3RGdW5jdGlvbnMgPSBbCiAgICAoKSA9PiB7CiAgICAgICAgcmV0dXJuIHR5cGVvZiBkb2Rhd2Fua28gPT09ICJmdW5jdGlvbiIgJiYgZG9kYXdhbmtvKDEwLCAyMCkgPT09IDMwICYmIGRvZGF3YW5rbygtMjAsIC0yMCkgPT09IC00MDsKICAgIH0sCiAgICAoKSA9PiB7CiAgICAgICAgaWYodHlwZW9mIHBvY2lvbmcgIT09ICJmdW5jdGlvbiIpIHJldHVybiBmYWxzZTsKCiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDtpKyspCiAgICAgICAgewogICAgICAgICAgICBjb25zdCB0bXAgPSBbXTsKICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IDEwMDt4KyspCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHRtcC5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmKCFkZWVwRXF1YWxBcnJheShwb2Npb25nKHRtcCksIHRtcC5yZXZlcnNlKCkpKQogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgIH0KCgogICAgICAgIHJldHVybiB0cnVlOwogICAgfSwKICAgICgpID0+IHsKICAgICAgICBpZih0eXBlb2Yga3Nlcm9rb3BpYXJrYSAhPT0gImZ1bmN0aW9uIikgcmV0dXJuIGZhbHNlOwogICAgICAgIGNvbnN0IHBhcGlleiA9IHtrcmVtdXdrYTogMjEzN307CiAgICAgICAgY29uc3QgcmV0ID0ga3Nlcm9rb3BpYXJrYShwYXBpZXopOwogICAgICAgIGlmKHJldCA9PT0gcGFwaWV6IHx8ICFkZWVwRXF1YWxPYmplY3QocGFwaWV6LCByZXQpKQogICAgICAgIHsKICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgIH0KICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0sCiAgICAoKSA9PiB7CiAgICAgICAgaWYodHlwZW9mIHNwcmF3ZHphbSAhPT0gImZ1bmN0aW9uIikgcmV0dXJuIGZhbHNlOwogICAgICAgCiAgICAgICAgY29uc3Qgb2JqQSA9IHtwYXBhajogMjEzN307CiAgICAgICAgY29uc3Qgb2JqQiA9IHtpbWllOiAiSmFjZWsiLCBuYXp3aXNrbzogIkphd29yZWsifTsKICAgICAgICBjb25zdCBvYmpDID0ge2R1cGE6ICJrdXBhIn07CgogICAgICAgIGlmKHNwcmF3ZHphbShvYmpBLCB7Li4ub2JqQX0pICE9PSB0cnVlKSByZXR1cm4gZmFsc2U7CiAgICAgICAgaWYoc3ByYXdkemFtKHsuLi5vYmpBLCBrcmVtdXdrYTogdHJ1ZX0sIG9iakEpICE9PSBmYWxzZSkgcmV0dXJuIGZhbHNlOwogICAgICAgIGlmKHNwcmF3ZHphbShvYmpBLCBvYmpCKSAhPT0gZmFsc2UpIHJldHVybiBmYWxzZTsKICAgICAgICBpZihzcHJhd2R6YW0ob2JqQSwgb2JqQSkgIT09IHRydWUpIHJldHVybiBmYWxzZTsKICAgICAgICBpZihzcHJhd2R6YW0ob2JqQywgey4uLm9iakJ9KSAhPT0gZmFsc2UpIHJldHVybiB0cnVlOwoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0sCiAgICAoKSA9PiB7CiAgICAgICAgaWYodHlwZW9mIGluenluaWVyaWFPZHR5bGNvd2EgIT09ICJmdW5jdGlvbiIpIHJldHVybiBmYWxzZTsKCiAgICAgICAgaWYoaW56eW5pZXJpYU9kdHlsY293YSgicGFwaWV6IikgIT09IHN0clJldigicGFwaWV6IikpIHJldHVybiBmYWxzZTsKICAgICAgICBpZihpbnp5bmllcmlhT2R0eWxjb3dhKCJrb3dhZGxvIikgIT09IHN0clJldigia293YWRsbyIpKSByZXR1cm4gZmFsc2U7CiAgICAgICAgaWYoaW56eW5pZXJpYU9kdHlsY293YSgibG9wYXRhIikgIT09IHN0clJldigibG9wYXRhIikpIHJldHVybiBmYWxzZTsKICAgICAgICBpZihpbnp5bmllcmlhT2R0eWxjb3dhKCIxMTExMSIpICE9PSBzdHJSZXYoIjExMTExIikpIHJldHVybiBmYWxzZTsKCiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9LAogICAgKCkgPT4gewoKICAgICAgICBpZih0eXBlb2YgcGFzY2FsICE9PSAiZnVuY3Rpb24iKSByZXR1cm4gZmFsc2U7CgogICAgICAgIGNvbnN0IGtleSA9IChNYXRoLnJhbmRvbSgpICsgMSkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTsKICAgICAgICBjb25zdCB2YWx1ZSA9IChNYXRoLnJhbmRvbSgpICsgMSkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTsKCiAgICAgICAgaWYocGFzY2FsKHtba2V5XTogdmFsdWV9KSAhPT0gdmFsdWUpIHJldHVybiBmYWxzZTsKCiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9LAogICAgKCkgPT4gewoKICAgICAgICBpZih0eXBlb2YgeE56cSAhPT0gImZ1bmN0aW9uIikgcmV0dXJuIGZhbHNlOwoKICAgICAgICBjb25zdCBrc2lhemthR2l0ID0gWwogICAgICAgICAgICB7c3Ryb25hOiAxLCB0cmVzYzogImtvY2hhbSBodG1sIn0sCiAgICAgICAgICAgIHtzdHJvbmE6IDIsIHRyZXNjOiAiY3NzIGRsYSBvcG9ybnljaCJ9LAogICAgICAgICAgICB7c3Ryb25hOiAzLCB0cmVzYzogImphayBkb2RhxIcgbGluayJ9LAogICAgICAgICAgICB7c3Ryb25hOiA0LCB0cmVzYzogImJhcmR6byBwcm9zemUga2FzenRhbnkgbm9zemUifSwKICAgICAgICBdOwoKICAgICAgICBjb25zdCBrc2lhemthTmllR2l0ID0gW107CiAgICAgICAgZm9yKGxldCBrIG9mIGtzaWF6a2FHaXQpCiAgICAgICAgewogICAgICAgICAgICBrc2lhemthTmllR2l0LnB1c2goayk7CiAgICAgICAgICAgIGtzaWF6a2FOaWVHaXQucHVzaCh7Li4ua30pOwogICAgICAgIH0KCiAgICAgICAgaWYoIWRlZXBFcXVhbEFycmF5KHhOenEoa3NpYXprYU5pZUdpdC5zb3J0KCgpID0+IC01ICsgMTAgKiBNYXRoLnJhbmRvbSgpKSksIGtzaWF6a2FHaXQpKSByZXR1cm4gZmFsc2U7CgogICAgICAgIHJldHVybiB0cnVlOwogICAgfSwKICAgICgpID0+IHsKICAgICAgICBpZih0eXBlb2YgZGV0ZWt0b3IgIT09ICJmdW5jdGlvbiIpIHJldHVybiBmYWxzZTsKICAgICAgICBjb25zdCBwYWlycyA9IFsKICAgICAgICAgICAgWyJkdXBhIiwgImR1cGFkdXNkZ3BhZHVwYWR1cGFkdXBhYWFhYWR1cGRhZGFhZGEiXSwKICAgICAgICAgICAgWyJrYXN6dGFuIiwgInNkYXNmZ2thZmpzZmhkc2hka2FzenRhbmthc3p0aGhoZ3NhZmdrYXN6YW5hIl0sCiAgICAgICAgICAgIFsia2Frb2xkIiwgInNpZ21hc2lnbWFzaWdtYXNpZ21hIl0KICAgICAgICBdCiAgICAgICAgZm9yKGxldCBwYWlyIG9mIHBhaXJzKQogICAgICAgIHsKICAgICAgICAgICAgaWYoZGV0ZWt0b3IocGFpclsxXSwgcGFpclswXSkgIT09IHBhdHRlcm5IbHAocGFpclsxXSwgcGFpclswXSkpCiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0sCiAgICAoKSA9PiB7CgogICAgICAgIGlmKHR5cGVvZiBtb3JzICE9PSAiZnVuY3Rpb24iKSByZXR1cm4gZmFsc2U7CgogICAgICAgIGNvbnN0IHBhaXJzID0gWwogICAgICAgICAgICBbImtvY2hhYyBkaXNhIiwgIi0uLSAtLS0gLS4tLiAuLi4uIC4tIC0uLS4gLyAtLi4gLi4gLi4uIC4tIl0sCiAgICAgICAgICAgIFsia29jaGFjIHBvbGljamUiLCAiLS4tIC0tLSAtLi0uIC4uLi4gLi0gLS4tLiAvIC4tLS4gLS0tIC4tLi4gLi4gLS4tLiAuLS0tIC4iXSwKICAgICAgICAgICAgWyJrb2NoYWMgd2lkenV3IGtvY2hhbnljaCB1d3UgbWVvdyBtZW93IGFyYSBhcmEgICAgICIsICItLi0gLS0tIC0uLS4gLi4uLiAuLSAtLi0uIC8gLi0tIC4uIC0uLiAtLS4uIC4uLSAuLS0gLyAtLi0gLS0tIC0uLS4gLi4uLiAuLSAtLiAtLi0tIC0uLS4gLi4uLiAvIC4uLSAuLS0gLi4tIC8gLS0gLiAtLS0gLi0tIC8gLS0gLiAtLS0gLi0tIC8gLi0gLi0uIC4tIC8gLi0gLi0uIC4tIC8gLyAvIC8gLyJdCiAgICAgICAgXQogICAgICAgIGZvcihsZXQgcGFpciBvZiBwYWlycykKICAgICAgICB7CiAgICAgICAgICAgIGlmKG1vcnMocGFpclsxXSkgIT09IHBhaXJbMF0pCiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KXTsKCmxldCBjb21wbGV0ZWQgPSAwOwpmb3IobGV0IGkgPSAwOyBpIDwgdG90YWxUYXNrcztpKyspCnsKICAgIHRyeSB7CiAgICAgICAgaWYodGVzdEZ1bmN0aW9uc1tpXSgpID09PSB0cnVlKQogICAgICAgIHsKICAgICAgICAgICAgY29tcGxldGVkKys7CiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHtpICsgMX0vJHt0b3RhbFRhc2tzfV06IFJvendpxIV6YcWCZcWbIHByYXdpZMWCb3dvIHRvIHphZGFua28gOjNgKTsKICAgICAgICB9CiAgICAgICAgZWxzZQogICAgICAgIHsKICAgICAgICAgICAgY29uc29sZS5sb2coYFske2kgKyAxfS8ke3RvdGFsVGFza3N9XTogTmllIHJvendpxIV6YcWCZcWbIHRlZ28gemFkYW5rYSBqZXN6Y3plLCBwcsOzYnVqIGRhbGVqIDozYCk7CiAgICAgICAgfQogICAgfQogICAgY2F0Y2goZSkgewogICAgICAgIGNvbnNvbGUubG9nKGBbJHtpICsgMX0vJHt0b3RhbFRhc2tzfV06IE5pZSByb3p3acSFemHFgmXFmyB0ZWdvIHphZGFua2EgamVzemN6ZSwgcHLDs2J1aiBkYWxlaiA6M2ApOwogICAgfQp9CmlmKGNvbXBsZXRlZCA9PT0gdG90YWxUYXNrcykKewogICAgY29uc29sZS5sb2coIkdSQVRVTEFDSkUsIHBva29uYcWCZcWbIHdzenlzdGtpZSB6YWRhbmlhLCBtYXN6IHphZGF0a2kgbmEgc2tyeXB0b3dlZ28gaW1wZXJhdG9yYS4iKTsKfQ==",
    "base64"
  ).toString("utf-8")
);
