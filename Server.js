const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

const doctor = {
    username: "doctor",
    password: "1234"
}

const patients = [
    { id: 1, name: "Jan Peeters", age: 34, condition: "Griep" },
    { id: 2, name: "Sara Janssen", age: 29, condition: "Hoofdpijn" },
    { id: 3, name: "Tom Vermeulen", age: 41, condition: "Controle" }
]

app.post("/login", (req, res) => {

    const { username, password } = req.body

    if (username === doctor.username && password === doctor.password) {
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }

})

app.get("/patients", (req, res) => {
    res.json(patients)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
