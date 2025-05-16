const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

const db = require("../Connection/db.connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

// Middlewares

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true // if you're using cookies
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
router.get("/", (req, res) => {
  const query = "SELECT * FROM users;";
  db.query(query, (err, result) => {
    if (err) return console.log("error found");
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const { phone_num, username, email, pass } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).send("Salt generation error");

    bcrypt.hash(pass, salt, (err, hash) => {
      if (err) return res.status(500).send("Hashing error");

      const query = "INSERT INTO users(phone_num, username, email, pass) VALUES (?, ?, ?, ?)";
      db.query(query, [phone_num, username, email, hash], (err, result) => {
        if (err) return res.status(500).send("Database error");

        const secret = uuidv4();
        const token = jwt.sign({ email, secret }, secret);

        res.cookie("email", token, { httpOnly: true, maxAge: 3600000 });
        res.status(201).json({ message: "User registered", userId: result.insertId });
      });
    });
  });
});

module.exports = router;
