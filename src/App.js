import React, { useState } from "react";
import Item from "./components/Item";
import "./styles.css";

const initList = [
  { name: "tomato", calorie: 30 },
  { name: "rice", calorie: 40 },
  { name: "candy", calorie: 100 }
];

export default function App() {
  const [list, setList] = useState(initList);
  const removeUnhealthyandle = () => {
    const filteredList = list.filter(value => value.calorie <= 50);
    setList(filteredList);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Groceries</h1>
      {list.map((v, i) => {
        return <Item key={`${i} ${v.name}`} item={v} />;
      })}
      <button
        onClick={removeUnhealthyandle}
        style={{ padding: "10px", borderRadius: "4px" }}
      >
        {" "}
        Remove Unhealty
      </button>
    </div>
  );
}
