"use client";
import { useState } from "react";
export default function FetchDataButton() {
  const [data, setData] = useState(null);

  //   const handleClick = async () => {
  //     const response = await fetch("https://reqres.in/api/users/2");
  //     const result = await response.json();
  //     setData(result);
  //   };

  const handleClick2 = () =>
    fetch("https://reqres.in/api/users/2")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));

  return (
    <div>
      <button onClick={handleClick2}>Fetch Data</button>
      {data && <div>name: {data.data.first_name}</div>}
    </div>
  );
}

import React from "react";
