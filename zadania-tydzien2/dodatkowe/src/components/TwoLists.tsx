import { useState } from "react";
import { List } from "./List";

function TwoLists() {
  const [itemsA, setItemsA] = useState<string[]>([
    "Item 0",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
  ]);
  const [itemsB, setItemsB] = useState<string[]>([]);

  const [selectedA, setSelectedA] = useState<string[]>([]);
  const [selectedB, setSelectedB] = useState<string[]>([]);

  const handleCheckboxChangeA = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    if (event.target.checked) {
      setSelectedA([...selectedA, item]);
    } else {
      setSelectedA(selectedA.filter((i) => i !== item));
    }
  };

  const handleCheckboxChangeB = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    if (event.target.checked) {
      setSelectedB([...selectedB, item]);
    } else {
      setSelectedB(selectedB.filter((i) => i !== item));
    }
  };

  const moveSelectedAB = () => {
    setItemsA(itemsA.filter((i) => !selectedA.includes(i)));
    setItemsB([...itemsB, ...selectedA]);
    setSelectedA([]);
  };

  const moveSelectedBA = () => {
    setItemsB(itemsB.filter((i) => !selectedB.includes(i)));
    setItemsA([...itemsA, ...selectedB]);
    setSelectedB([]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <List
        title="A"
        items={itemsA}
        selected={selectedA}
        handleCheckboxChange={handleCheckboxChangeA}
      />
      <button
        style={{
          height: "100px",
          margin: "auto",
        }}
        onClick={moveSelectedBA}
      >
        &lt;
      </button>
      <button
        style={{
          height: "100px",
          margin: "auto",
        }}
        onClick={moveSelectedAB}
      >
        &gt;
      </button>
      <List
        title="B"
        items={itemsB}
        selected={selectedB}
        handleCheckboxChange={handleCheckboxChangeB}
      />
    </div>
  );
}

export { TwoLists };
