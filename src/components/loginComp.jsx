import React, { useState } from "react";
export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`username: ${username}, password: ${password}`);


    
  };
  return (
    <>
      <div>
        <h1>Login page, with nothing for now</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input type="submit" value="Submit" onClick={handleSubmit}></input>
        </form>
      </div>
    </>
  );
}
