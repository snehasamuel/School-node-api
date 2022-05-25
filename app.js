const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")


let app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

var studentModel=Mongoose.model("students",
new Mongoose.Schema(
    {
        Admissionno:String,
        Rollno:String,
        Name:String,
        Class:String,
        Parent:String,
        Phone:String,
        Address:String
    }
))

Mongoose.connect("mongodb+srv://snehasam:snehasa4@cluster0.yyrcr.mongodb.net/Collegedb")

app.post("/api/addstudent",(req,res)=>{
var getAdmnno=req.body.admnno 
var getRollno=req.body.rollno 
var getName=req.body.name 
var getClass=req.body.classes
var getParent=req.body.parent 
var getPhn=req.body.phone 
var getAddress=req.body.address 
var datas={"Admissionno":getAdmnno,"Rollno":getRollno,"Name":getName,"Class":getClass,"Parent":getParent,"Phone":getPhn,"Address":getAddress}
let studentadd=new studentModel(datas)
studentadd.save((error,datas)=>{
    if(error)
    {
        res.send({"status":"error","datas":error})
    }
    else{
        res.send({"status":"success","datas":datas})
    }
})
})

app.post("/api/addfaculty",(req,res)=>{
    var getName=req.body.name 
    var getMobile=req.body.mobile 
    var getEducation=req.body.education 
    var getAddress=req.body.address 
    var getPin=req.body.pincode
    var getDistrict=req.body.district 
    var details={"Name":getName,"Mobile":getMobile,"Education":getEducation,"Address":getAddress,"Pincode":getPin,"District":getDistrict}
    res.send(details)
})

app.get("/api/viewstudent",(req,res)=>{
    res.send("Hello")
})

app.get("/api/viewfaculty",(req,res)=>{
    res.send("Welcome")
})

app.listen(5000,()=>{
    console.log("Server running")
})