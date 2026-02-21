import express from 'express'
const app=express()
app.listen(8080)
app.get("/",(req,res)=>
{
    const users=[
        {id:1,name:"Sam",age:20},
        {id:2,name:"Zain",age:21},
        {id:3,name:"Zayaan",age:22},
    ]
    res.json(users)
})