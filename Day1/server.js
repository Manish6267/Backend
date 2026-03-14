const express =require("express")

const app=express()
 app.use(express.json())
const notes=[]


app.post("/about",(req,res)=>{
    res.send("note created")
    notes.push(req.body)
})
app.get("/about",(req,res)=>{
    res.send(notes)
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})