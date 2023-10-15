"use client";
import { useState } from "react";

export default function Challenge() {
  const [foods, setFoods] = useState([]);

  const onSubmit = async () => {
    try {
      const res = await fetch("/api/todos")
        .then((res) => res.text())
        .then((food) => {
          setFoods(JSON.parse(food));
          // console.log(food);
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <h1>This is Challenge Page New</h1>
      <button onClick={onSubmit}>サブミット</button>
      <ul>
        {foods ? (
          foods.map((food) => (
            <li key={food.name}>
              <p>
                商品名:{food.name}
                <br />
                説明:{food.description}
                <br />
                値段:{food.price}
              </p>
            </li>
          ))
        ) : (
          <p>データなし</p>
        )}
      </ul>
    </>
  );
}
