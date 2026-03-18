require("dotenv").config()

const app=require("./app")
const connectToDb =require("./config/databse")

connectToDb()



app.listen(3000,()=>{
    console.log("server is running 3000")
})