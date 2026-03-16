const express= require("express")

const app= express()// server create kar rahe hiai
app.use(express.json())

const notes=[]

app.post("/notes",(req,res)=>{
    console.log(req.body)
    res.send("note created")
    notes.push(req.body)
})
app.get("/notes",(req,res)=>{
    res.send(notes)
    
})
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("deleted")

})
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description=req.body.description
    res.send("note update")
})

module.exports = app // server ko export kar arhe
