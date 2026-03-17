const express= require("express")
const notemodel=require("./models/notes.model")
const app=express()
app.use(express.json())
app.post("/notes", async(req,res)=>{
    const{title,description}=req.body
  const note=await notemodel.create({
    title,description
  })
  res.status(201).json({
    message:"note created succesfully",
    note
  })
})

app.get("/notes", async(req,res)=>{
  const notes= await   notemodel.find()

  res.status(200).json({
    message:"fetched the data",
    notes
  })

})

module.exports=app