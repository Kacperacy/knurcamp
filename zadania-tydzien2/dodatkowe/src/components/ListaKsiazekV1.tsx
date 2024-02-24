import { useState } from "react";
import { Book } from "./Book";

const books = [
  "Don Quixote by Miguel de Cervantes",
  "A Tale of Two Cities by Charles Dickens",
  "The Lord of the Rings by J.R.R. Tolkien",
  "The Little Prince by Antoine de Saint-Exupéry",
  "Harry Potter and the Philosopher’s Stone by J.K. Rowling",
  "Alice’s Adventures in Wonderland by Lewis Carroll",
  "And Then There Were None",
  "Dream of the Red Chamber",
];

function ListaKsiazekV1() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <input
        type="text"
        style={{
          padding: "10px",
          margin: "10px",
          fontSize: "20px",
          width: "300px",
        }}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {books
        .filter((book) => {
          return book.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .map((book, index) => {
          return <Book key={index} title={book} />;
        })}
    </div>
  );
}

export { ListaKsiazekV1 };
