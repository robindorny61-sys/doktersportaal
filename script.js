async function login(){

const username = document.getElementById("username").value
const password = document.getElementById("password").value

const response = await fetch("/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({username,password})
})

const data = await response.json()

if(data.success){
window.location.href="dashboard.html"
}else{
document.getElementById("error").innerText="Foute login"
}

}

async function loadPatients(){

const response = await fetch("/patients")
const patients = await response.json()

const list = document.getElementById("patients")

if(!list) return

patients.forEach(p=>{
const li = document.createElement("li")
li.innerText = p.name + " (" + p.age + ") - " + p.condition
list.appendChild(li)
})

}

loadPatients()
