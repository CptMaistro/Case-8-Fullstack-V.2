import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./localstorage");

export default class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  save() {
    // Convert the user object to a JSON string
    const userJson = JSON.stringify(this);

    // Save the user JSON string to localStorage
    localStorage.setItem("user", userJson);
  }

  static getUser() {
    // Retrieve the user JSON string from localStorage
    const userJson = localStorage.getItem("user");

    // Parse the JSON string and create a User object
    const user = JSON.parse(userJson);

    return user;
  }

  static getAll() {
    // Retrieve all users from localStorage
    const users = [];
    console.log(localStorage.length);

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log(key);

      if (key == "user") {
        const userJson = localStorage.getItem(key);
        const user = JSON.parse(userJson);
        users.push(user);
      }
    }

    return users;
  }
}
