import express from "express";
import userRouter from "./routes/userRouter.js";
import bodyParser from "body-parser";
import User from "./models/userModel.js";
// import sessionRouter from "./routes/sessionRouter.js";
import { LocalStorage } from "node-localstorage";

const app = express();
const port = 3000;

const localStorage = new LocalStorage("./localstorage");

// Enable CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(bodyParser.json());

app.use("/api/users", userRouter);

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let user = new User({ username, password })

  try {
    // Find user in the database
    const foundUser = await user.find();

    if (foundUser) {
      res.status(200).json(foundUser);

    } else {
      // User not found, send 401 Unauthorized status
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
