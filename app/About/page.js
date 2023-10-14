"use client";
import { useState, useEffect } from "react";

export default function About() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://next-js-api-route-lilac.vercel.app/api/hello"
      );
      const data = await response.json();
      setUsers(data.users);
      console.log(data);
      console.log(users);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1>This is AboutPage</h1>
      <p>And api router testing</p>
      <div>
        {users}
        {/* <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
