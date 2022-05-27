const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")


let app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.use((req, res, next) => { 
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"   ); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"   ); 
    next(); });
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
var data={"Admissionno":getAdmnno,"Rollno":getRollno,"Name":getName,"Class":getClass,"Parent":getParent,"Phone":getPhn,"Address":getAddress}
let studentadd=new studentModel(data)
studentadd.save((error,data)=>{
    if(error)
    {
        res.send({"status":"error","datas":error})
    }
    else{
        res.send({"status":"success","data":data})
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
    var data={"Name":getName,"Mobile":getMobile,"Education":getEducation,"Address":getAddress,"Pincode":getPin,"District":getDistrict}
    let facultydata= new facultyModel(data)
    facultydata.save((error,data)=>{
        if(error)
        {
            res.send({"status":"error","data":error})
        }
        else
        {
            res.send({"status":"success","data":data})
        }
    })
})

app.get("/api/viewstudent",(req,res)=>{
    studentModel.find((error,data)=>{
if(error)
{
    res.send(error)
}
else
{
    res.send(data)
}
    })
})

app.get("/api/viewfaculty",(req,res)=>{
   facultyModel.find((error,data)=>{
if(error)
{
    res.send(error)
}
else
{
    res.send(data)
}
   })
})

app.listen(5000,()=>{
    console.log("Server running")
})