import express from "express";
import userRouter from "./routes/userRouter.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api/users", userRouter);

userRouter.post("/login", (req, res) => {
  res.send("Login route");
  const { username, password } = req.body;
  console.log("username: " + username, "\npassword: " + password);
});

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
