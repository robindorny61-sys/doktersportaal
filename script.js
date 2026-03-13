async function login(){

const username=document.getElementById("username").value
const password=document.getElementById("password").value

const res=await fetch("/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})

const data=await res.json()

if(data.success){
window.location="dashboard.html"
}else{
document.getElementById("error").innerText="Login fout"
}

}

async function loadPatients(){

const res=await fetch("/patients")
const patients=await res.json()

const list=document.getElementById("patients")
if(!list) return

patients.forEach(p=>{
const li=document.createElement("li")

li.innerHTML = p.name+" ("+p.age+") "+
"<a href='mailto:"+p.email+"'>Mail</a>"

list.appendChild(li)
})

}

async function addPatient(){

const name=document.getElementById("pname").value
const email=document.getElementById("pemail").value
const age=document.getElementById("page").value

await fetch("/addPatient",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,email,age})
})

location.reload()

}

async function loadAppointments(){

const res=await fetch("/appointments")
const data=await res.json()

const list=document.getElementById("appointments")
if(!list) return

data.forEach(a=>{
const li=document.createElement("li")
li.innerText=a.name+" - "+a.date
list.appendChild(li)
})

}

async function addAppointment(){

const name=document.getElementById("aname").value
const date=document.getElementById("adate").value

await fetch("/addAppointment",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,date})
})

location.reload()

}

loadPatients()
loadAppointments()
