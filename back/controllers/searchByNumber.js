const Patient = require("../model/patient")

exports.SearchPatients = (req, res) => {
    const number=req.body.number
    Patient.find({phone:number},(err,docs) =>{
        if (err) {
            return res.status(400).json({
                message: "Not able to show patients"
            })
        }
        return res.status(200).json(docs)
    })
    }