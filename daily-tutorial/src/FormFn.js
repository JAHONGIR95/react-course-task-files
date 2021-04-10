// import React from "react";
import {useState} from 'react';

export default function FormFn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChanger = (e) => {
    e.preventDefault();
    console.log(`
    Email: ${email}
    Password: ${password}`);
  }

  return (
    <form onSubmit={handleChanger}>
      <h2>Login</h2>

      <div>
        <label htmlFor="email">
          Email:
          <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password:
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}
