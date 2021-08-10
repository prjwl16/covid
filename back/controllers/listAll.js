const Patient = require("../model/patient")

exports.listAllPatients = (req, res) => {
    const number=req.body
    Patient.find((err,docs) =>{
        if (err) {
            return res.status(400).json({
                message: "No patients"
            })
        }
        return res.status(200).json(docs)
    })
    }