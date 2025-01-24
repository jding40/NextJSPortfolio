"use client";
import React, { useState } from "react";
export default function ItemList() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <ul>
        {["Item1", "Item2", "Item3"].map((item) => (
          <li key={item}>
            <button onClick={() => handleSelect(item)}>Select {item}</button>
          </li>
        ))}
      </ul>
      <p>Selected Item is {selectedItem}</p>
    </>
  );
}
