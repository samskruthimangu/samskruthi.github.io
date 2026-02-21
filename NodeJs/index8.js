import express from 'express'
const app=express()
app.listen(8080)
app.use(express.json())
let users=[
        {id:1,name:"Sam",age:20},
        {id:2,name:"Zain",age:21},
        {id:3,name:"Zayaan",age:22},
    ]
app.get("/",(req,res)=>
{
    res.json(users)
})
app.get("/:id",(req,res)=>
{
    const id=Number(req.params.id)
    const result=users.find((user)=>user.id===id)
    res.json(result)
})
app.post("/",(req,res)=>
{
    const user=req.body
    users.push(user)
    res.json(users)
})
app.delete("/:id",(req,res)=>{
    const id=Number(req.params.id)
    users=users.filter((user)=>user.id!=id)
    res.json(users)
})
