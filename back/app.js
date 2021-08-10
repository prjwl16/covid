require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 6000
const cors = require("cors")


app.use(cors())

const addPatient = require("./routes/addPatient")
const updatePatient = require("./routes/updatePatient")
const removePatient = require("./routes/removePatient")
const listAllUsers = require("./routes/listPatient")


mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database connected")
})

app.use(express.json())
app.use("/api", addPatient)
app.use("/api", updatePatient)  
app.use("/api", removePatient)
app.use("/api", listAllUsers)


app.listen(port, () => console.log(`App running: http://localhost/${port}!`))