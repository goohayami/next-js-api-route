"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://next-js-api-route-lilac.vercel.app/api/hello"
      );
      const data = await response.json();

      setApi([data.name, data.age, data.country]);
    };
    fetchUsers();
    console.log(api);
  }, []);

  return (
    <>
      <h1>This is AboutPage</h1>
      <p>And api router testing</p>
      <h1>{api[0]}</h1>
      <h1>{api[1]}</h1>
      <h1>{api[2]}</h1>
      <div>
        {/* <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
