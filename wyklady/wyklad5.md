# Wyklad 5 - React.js

## Czym jest React.js?

Nieślubne dziecko HTML + JS = JSX.
W pliku JSX można pisać kod HTML i JS razem.

Zamiast `document.getElementById('tag')` możemy zwrócić tag.

React to reaktywny czyli jeżeli zmienimy coś w kodzie to zmieni się to w przeglądarce. Przykładowo zmieniając zmienną ze stringiem na inny string, to zmieni się to również w przeglądarce.

VDOM - Virtual DOM - React tworzy wirtualny obiekt DOM, który jest klonem prawdziwego DOM. React porównuje VDOM z prawdziwym DOM i aktualizuje tylko te elementy, które się zmieniły.

React to biblioteka więc poza Reactem można używać innych bibliotek i Reacta można używać w konkretnym punkcie aplikacji. Można go przypiąć do tagu np. `<div>`.

React jest lekką biblioteką.

## Jak używać Reacta?

1. Montujemy Reacta w pliku HTML podając element, w którym ma się pojawić.
2. Tworzymy komponenty, które zwracają elementy.

## Element a komponent

Komponent to funkcja, która zwraca element a element to obiekt reprezentujący tag HTML.

## index.tsx / index.jsx

W pliku `index.tsx` lub `index.jsx` montujemy Reacta podając tag z `index.html`.

## Komponenty

Komponenty to funkcje, które zwracają elementy (tagi HTML). Pozwalają na tworzenie wielokrotnie używanych elementów.

Komponent może zwrócić tylko jeden element, ale ten element może zawierać inne elementy.

## <> </>

`<>` i `</>` to skróty do `React.Fragment`. Pozwalają na zwracanie wielu elementów.

Przykład:

**JSX**

```jsx
function App() {
  return (
    <>
      <h1>Header</h1>
      <p>Paragraph</p>
    </>
  );
}
```

**WYNIK W HTML**

```html
<h1>Header</h1>
<p>Paragraph</p>
```

## Przykładowy komponent

**JSX**

```jsx
function App() {
  return (
    <div>
      <h1>Header</h1>
      <p>Paragraph</p>
    </div>
  );
}
```

## export i import

`export` pozwala na eksportowanie komponentu, a `import` na importowanie komponentu.

**JSX**

```jsx
// Komponent.jsx
export function Komponent() {
  return (
    <div>
      <h1>Header</h1>
      <p>Paragraph</p>
    </div>
  );
}
```

```jsx
// App.jsx
import { Komponent } from "./Komponent";

function App() {
  return <Komponent />;
}
```

## Klamerki {}

Klamerki `{}` pozwalają na wstawianie kodu JS w pliku JSX.

**JSX**

```jsx
function App() {
  const text = "Hello World";

  return <h1>{text}</h1>;
}
```

## Hook - useState

State - pozwala na przechowywanie stanu komponentu w zmiennej i odświeżanie komponentu po zmianie stanu.

**JSX**

```jsx
import { useState } from "react";

function App() {
  const [text, setText] = useState("Hello World");

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Hello React")}>Change</button>
    </div>
  );
}
```

Chcąc zmienić zawartość `text` wywołujemy `setText` z nową wartością i reaktywnie zmienia się zawartość `text` w przeglądarce.

W `setText` można podać funkcję, która zwraca nową wartość i przyjmuje starą wartość jako parametr. Pozwala to na zmianę wartości na podstawie starej wartości. Pozwala to na uniknięcie problemów z asynchronicznością.

## Hook - useEffect

`useEffect` - funckja, która wywołuje się po podanych zdarzeniach, podając pustą tablicę wywoła się tylko raz po załadowaniu komponentu. Podając zmienną wywoła się po zmianie tej zmiennej. Bez podania tablicy wywoła się za każdym razem po zmianie komponentu.

Zwracając `() => {}` wywoła się po odmontowaniu komponentu. Można zwrócić `clearInterval` lub `clearTimeout` które pozwalają na zatrzymanie interwału lub timeoutu.

W środku `useEffect` można wywoływać funkcje które będą reagować na zmiany w komponencie.

**JSX**

```jsx
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("Hello World");

  useEffect(() => {
    console.log("Hello World");
  }, [text]);

  setText("Hello React");

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Hello React")}>Change</button>
    </div>
  );
}
```

W konsole wyświetli się "Hello World" po zmianie `text` na "Hello React".

## If i else w JSX

W JSX nie można używać ifów i else'ów. Można użyć operatora trójargumentowego lub `&&`. `&&` pozwala na wyświetlenie elementu jeżeli warunek jest spełniony.

**JSX**

```jsx
function App() {
  const [text, setText] = useState("Hello World");

  return (
    <div>
      {text === "Hello World" ? <h1>{text}</h1> : <h2>{text}</h2>}
      <button onClick={() => setText("Hello React")}>Change</button>
    </div>
  );
}
```

```jsx
function App() {
  const [text, setText] = useState("Hello World");

  return (
    <div>
      {text === "Hello World" && <h1>{text}</h1>}
      {text === "Hello React" && <h2>{text}</h2>}
      <button onClick={() => setText("Hello React")}>Change</button>
    </div>
  );
}
```

## CSS w JSX

W JSX można używać CSS w stylu obiektowym.

**JSX**

```jsx
function App() {
  const style = {
    color: "red",
    backgroundColor: "black",
  };

  return <h1 style={style}>Hello World</h1>;
}
```

lub

```jsx
function App() {
  return (
    <h1 style={{ color: "red", backgroundColor: "black" }}>Hello World</h1>
  );
}
```
