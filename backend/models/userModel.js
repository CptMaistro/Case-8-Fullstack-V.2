import { LocalStorage } from "node-localstorage";
import fs from "fs";
const localStorage = new LocalStorage("./localstorage");

export default class User {
  constructor(username, password) {
    if (typeof username === "object") {
      this.username = username.username;
      this.password = username.password;
    } else {
      this.username = username;
      this.password = password;
    }
  }

  static saveAll(users) {
    // Convert the users array to a JSON string
    const usersJson = JSON.stringify(users);


    // Save the users JSON string to a file
    fs.writeFileSync("users.json", usersJson);
  }

  save() {
    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users.json"));

    // Check if username already exists
    const existingUser = users.find((user) => user.username === this.username);
    if (existingUser) {
      console.log("Username already exists.");
      return false;
    }

    // Create user object
    const newUser = { username: this.username, password: this.password };

    // Append new user to the array of users
    users.push(newUser);

    // Store updated users array in localStorage
    localStorage.setItem("users.json", JSON.stringify(users));
    console.log("User registered successfully.");
    return true;
  }

  findOne() {
    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users.json"));

    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
    }

    const existingUser = users.find((user) => user.username === this.username && user.password === this.password);
    if (existingUser) {

      return existingUser;
    }
    else {
      return "User not found!";
    }
  }

  static getAll() {
    // Retrieve all users from localStorage
    const users = [];
    console.log(localStorage.length);

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log(key);

      if (key == "users.json") {
        const userJson = localStorage.getItem(key);
        const user = JSON.parse(userJson);
        users.push(user);
      }
    }

    return users;
  }
}
