//server ko start karna
//database se connect karna
require("dotenv").config() //important  agr ye nhi likhega to acces nhi kar apyenge


const mongoose=require("mongoose")
const app =require("./app")
const connectToDb=require("./config/database")

connectToDb()


app.listen(3000,()=>{
console.log("srever is runnning")
})