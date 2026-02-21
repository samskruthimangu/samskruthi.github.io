// import express from 'express'
// const app=express()
// app.listen(8080)
// //Query String
// app.get("/",(req,res)=>{
//     res.send(req.query.id)
// })

// //  http://localhost:8080/?id=20

// app.get("/",(req,res)=>{
//     res.send(req.query.id+" "+req.query.name)
// })

// //  http://localhost:8080/?id=20&name=Sam


import express from "express";
const app = express();
app.listen(8080);
//query string
app.get("/", (req, res) => {
  res.send(req.query.id+req.query.name);
});