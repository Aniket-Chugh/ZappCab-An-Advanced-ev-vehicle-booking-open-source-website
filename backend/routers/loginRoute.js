const express = require("express");
const app = express();
const router = express.Router();
const db = require("../Connection/db.connection");
const cors = require("cors");




app.use(cors({
  origin: "http://localhost:5173",
  credentials: true // if you're using cookies
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/" , (req , res)=>{
    res.send("login page working very good");
});

router.post("/" , (req ,res)=>{
const {email , pass} = req.body;
const query = "SELECT * FROM users where email = ?;";
if (query == null) {
res.send("no user found");
}



db.query(query , [email] , (err , result)=>{
    if(err) return console.log("error found");
    res.json(result);

})
})


module.exports = router;
