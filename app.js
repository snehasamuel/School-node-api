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
var facultyModel=Mongoose.model("faculties",
new Mongoose.Schema(
    {Name:String,
    Mobile:String,
    Education:String,
    Address:String,
    Pincode:String,
    District:String
    }))

Mongoose.connect("mongodb+srv://snehasam:snehasa4@cluster0.yyrcr.mongodb.net/Collegedb")

app.post("/api/addstudent",(req,res)=>{
var getAdmnno=req.body.Admissionno 
var getRollno=req.body.Rollno 
var getName=req.body.Name 
var getClass=req.body.Class
var getParent=req.body.Parent 
var getPhn=req.body.Phone 
var getAddress=req.body.Address 
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
    var getName=req.body.Name 
    var getMobile=req.body.Mobile 
    var getEducation=req.body.Education 
    var getAddress=req.body.Address 
    var getPin=req.body.Pincode
    var getDistrict=req.body.District 
    var details={"Name":getName,"Mobile":getMobile,"Education":getEducation,"Address":getAddress,"Pincode":getPin,"District":getDistrict}
    let facultydata= new facultyModel(details)
    facultydata.save((error,details)=>{
        if(error)
        {
            res.send({"status":"error","data":error})
        }
        else
        {
            res.send({"status":"success","data":details})
        }
    })
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