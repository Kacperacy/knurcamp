# Wykład nr 3 - 10/02/2024

## Temat: JavaScript + przeglądarka

## HTML CSS JS

HTML - HyperText Markup Language

CSS - Cascading Style Sheets

JS - JavaScript

HTML definiuje strukturę dokumentu, CSS wygląd, a JS zachowanie.
HTML i CSS są statyczne, JS jest dynamiczny.
JS pozwala na przesyłanie danych, zmianę zawartości strony, obsługę zdarzeń, itp.

Przykład statycznej strony:

```html
<html>
  <body>
    <p>ABC</p>
  </body>
</html>
```

## DOM

DOM - Document Object Model

DOM to reprezentacja dokumentu HTML w postaci drzewa obiektów.
Przeglądarka tworzy drzewo obiektów na podstawie kodu HTML.
Po załadowaniu strony, JS może modyfikować DOM.

## document.getElementById('id')

W JavaScript document to obiekt reprezentujący cały dokument HTML pozwalający na modyfikację go.

document.getElementById('id') - zwraca element o podanym identyfikatorze

### Przykłady:

**HTML**

```html
<img id="A" src="a.jpg" />
```

**JS**

```js
const img = document.getElementById("A"); // zwraca obiekt img
img.src = "b.jpg"; // zmienia src obrazka
```

---

**HTML**

```html
<p id="B">ABC</p>
```

**JS**

```js
const B = document.getElementById("B"); // zwraca obiekt paragrafu
B.innerHTML = "<p id='C'>DEF</p>"; // istnieje również innerText którym ustawia się sam tekst
// B.innerHTML = ""; <-- usuwa zawartość paragrafu
```

**WYNIK W HTML**

```html
<p id="B">
    <p id="C">DEF</p>
</p>
```

---

Przeglądarka aktualizuje każdą zmianę w DOM.

## document.body, document.createElement('tag'), object.appendChild(element)

document.body - zwraca obiekt reprezentujący ciało dokumentu (`<body></body>`)

document.createElement('tag') - tworzy nowy element o podanym tagu i zwraca do niego referencję

object.appendChild(element) - dodaje element do innego elementu

### Przykład:

**HTML**

```html
<html>
  <head></head>
  <body></body>
</html>
```

**JS**

```js
const img = document.createElement("img"); // tworzy nowy obiekt img
img.src = "a.jpg"; // ustawia src obrazka
document.body.appendChild(img); // dodaje obrazek do ciała dokumentu
```

**WYNIK W HTML**

```html
<html>
  <head></head>
  <body>
    <img src="a.jpg" />
  </body>
</html>
```

## Odpalanie JS w przeglądarce

JS można umieścić w pliku HTML, w tagu `<script>` lub w osobnym pliku.
Skrypt można umieścić w tagu `<head>` lub `<body>`.
Skrypt w tagu `<head>` jest wykonywany przed załadowaniem strony, a w `<body>` po załadowaniu.
Więc jeśli skrypt modyfikuje zawartość strony, to powinien być umieszczony w `<body>`.

### Przykład:

**HTML**

```html
<html>
  <head></head>
  <body>
    <script>
      console.log("Hello, World!");
    </script>
  </body>
</html>
```

## defer

defer - atrybut tagu `<script>` który oznacza, że skrypt jest wykonywany po załadowaniu strony
Działa tylko w przypadku skryptów z pliku.
Przykład:

```html
<html>
  <head></head>
  <body>
    <script src="script.js" defer></script>
  </body>
</html>
```

## window.addEventListener

window - obiekt reprezentujący okno przeglądarki

window.addEventListener('event', function) - dodaje funkcję do obsługi zdarzenia

Przykładowe zdarzenia:

- load - załadowanie strony
- DOMContentLoaded - załadowanie DOM
- click - kliknięcie
- mouseover - najechanie myszką
- mouseout - zjechanie myszką
- keydown - naciśnięcie klawisza
- keyup - puszczenie klawisza

### Przykład:

**JS**

```js
function s() {
  console.log("Hello, World!");
}

window.addEventListener("load", s); // wywołuje funkcję s po załadowaniu strony
window.addEventListener("DOMContentLoaded", s); // wywołuje funkcję s po załadowaniu DOM

// window nie trzeba pisać, bo jest to obiekt globalny, więc można napisać samo addEventListener.
// np.
addEventListener("load", s); // wywołuje funkcję s po załadowaniu strony
```

## Tagi HTML

`<input id="i" onchange="f()">` - tag do wprowadzania danych, `onchange` wywołuje funkcję podaną w cudzysłowie przy zmianie inputa

Przykład:

**HTML**

```html
<input id="i" onchange="f()" />
```

**JS**

```js
function f() {
  console.log("Hello, World!");
}

const i = document.getElementById("i");
const login = i.value; // pobiera wartość wpisaną w input
```
