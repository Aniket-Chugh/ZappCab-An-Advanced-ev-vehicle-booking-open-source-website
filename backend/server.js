const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const router = require("./routers/userRouter");
const loginRouter = require("./routers/loginRoute")
const db = require("./Connection/db.connection");
const config = require("./Config/dev.config");

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/register", router);
app.use("/login" , loginRouter);

app.get("/", (req, res) => {
  console.log("Backend is up working");
  res.send("Backend is working");
});

app.listen(config.port, () => {
  console.log(`Backend started on port ${config.port}!`);
});
