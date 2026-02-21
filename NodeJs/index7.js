import express from 'express'
const app=express()
app.listen(8080)
app.get("/",(req,res)=>{
    const user={
        name:"Sam",
        age:20
    }
    res.json(user)
})