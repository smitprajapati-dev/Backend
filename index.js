// console.log("Chai aur code ")
require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/linkedin", (req,res)=>{
    res.send("smitprajapati")
})
app.get("/instagram", (req, res)=>{
    res.send("<h1>Smitprajapat_i</h1>")
})
app.get("/google" ,(req,res)=>{
    res.send("https://www.google.com/")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
