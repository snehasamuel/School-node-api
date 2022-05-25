const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")


let app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())


app.post("/api/addstudent",(req,res)=>{
var getAdmnno=req.body.admnno 
var getRollno=req.body.rollno 
var getName=req.body.name 
var getClass=req.body.classes
var getParent=req.body.parent 
var getPhn=req.body.phone 
var getAddress=req.body.address 
var data={"Admissionno":getAdmnno,"Rollno":getRollno,"Name":getName,"Class":getClass,"Parent":getParent,"Phone":getPhn,"Address":getAddress}
res.send(data)
})

app.get("/api/viewstudent",(req,res)=>{
    res.send("Hello")
})

app.listen(5000,()=>{
    console.log("Server running")
})