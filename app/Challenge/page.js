"use client";
import { useState } from "react";

export default function Challenge() {
  const [foods, setFoods] = useState([]);
  const [visible, setVisible] = useState(false);

  const onSubmit = async () => {
    try {
      const res = await fetch(
        "https://next-js-api-route-snowy.vercel.app/api/todos"
      )
        .then((res) => res.text())
        .then((food) => {
          setFoods(JSON.parse(food));
        });
    } catch (err) {
      alert(err);
    }
    setVisible(!visible);
    console.log(visible);
  };

  return (
    <>
      <h1>This is Challenge Page New</h1>
      <button onClick={onSubmit}>サブミット</button>

      {visible ? (
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
      ) : null}
    </>
  );
}
