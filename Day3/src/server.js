const app = require("./app")
const mongoose = require("mongoose")

function connectToDb(){
  mongoose.connect("mongodb+srv://manish:manish%402004@cluster0.aicwnho.mongodb.net/Day3")
  .then(()=>{
    console.log("connected to database")
  })
  .catch((err)=>{
    console.log(err)
  })
}

connectToDb() // 👈 ye line add karo

app.listen(3000, () => {
  console.log("app is running on port 3000")
})