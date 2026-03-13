const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(express.static("public"))

let patients = [
{ id:1, name:"Jan Peeters", email:"jan@email.com", age:34 },
{ id:2, name:"Sara Janssen", email:"sara@email.com", age:29 }
]

let appointments = []

const doctor = {
username:"doctor",
password:"1234"
}

app.post("/login",(req,res)=>{
const {username,password}=req.body

if(username===doctor.username && password===doctor.password){
res.json({success:true})
}else{
res.json({success:false})
}

})

app.get("/patients",(req,res)=>{
res.json(patients)
})

app.post("/addPatient",(req,res)=>{
const patient = req.body
patient.id = patients.length + 1
patients.push(patient)
res.json({success:true})
})

app.get("/appointments",(req,res)=>{
res.json(appointments)
})

app.post("/addAppointment",(req,res)=>{
appointments.push(req.body)
res.json({success:true})
})

app.listen(3000,()=>{
console.log("Server gestart op 3000")
})
