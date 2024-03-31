import express from "express";
import userRouter from "./routes/userRouter.js";
import bodyParser from "body-parser";
import User from "./models/userModel.js";
// import sessionRouter from "./routes/sessionRouter.js";
import { LocalStorage } from "node-localstorage";

const app = express();
const port = 3000;

const localStorage = new LocalStorage("./localstorage");

app.use(bodyParser.json());

app.use("/api/users", userRouter);

userRouter.post("/login", (req, res) => {
  // res.send("Login route");
  const { username, password } = req.body;
  const userToLogin = new User({ username, password });

  let foundUser = userToLogin.findOne();
  if (foundUser) {
    res.send(foundUser);
  }

  console.log("username: " + username, "\npassword: " + password);
});
userRouter.post("/register", (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password }); // Initialize the User variable as newUser
  newUser.save();
  res.send(newUser);
});

// create a new user router for getting all users in localstorage
userRouter.get("/all", (req, res) => {
  const users = User.getAll(); // Use the User variable to get all users
  res.json(users);
});

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
