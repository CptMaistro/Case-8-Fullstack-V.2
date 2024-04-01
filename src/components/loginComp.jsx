import React, { useState } from "react";
import axios from "axios";

export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const signInURL = "http://localhost:3000/api/users/login";
    axios.post(signInURL, { username: username, password: password })
      .then(function (response) {
        // Handle success
        authorizeUser()
        alert("User successfully signed in! :D");
      })
      .catch(function (error) {
        // Handle network errors or other unexpected errors
        console.error('There was a problem with the request:', error);
      });
  };

  const authorizeUser = () => {
    let user = ({ username: username, password: password });

    sessionStorage.setItem("Authenticated User", JSON.stringify(user));

    console.log("Authorized new user: Username: " + username + " Password: " + password);
  }

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
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
}
