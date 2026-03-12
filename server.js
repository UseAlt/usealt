const express=require("express")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
res.send("ALT backend is running")
})

app.post("/search",(req,res)=>{

const product=req.body.product

const results=[

{
retailer:"Amazon",
price:799,
delivery:"Tomorrow"
},

{
retailer:"Currys",
price:789,
delivery:"2 days"
},

{
retailer:"Argos",
price:799,
delivery:"Today"
}

]

res.json({
product:product,
results:results
})

})

app.listen(3000,()=>{

console.log("ALT server running on port 3000")

})
