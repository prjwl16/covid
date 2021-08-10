const Patient = require("../model/patient")
const { body, validationResult } = require('express-validator');


exports.addPatient = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const patient = new Patient(req.body)
    patient.save((err, patient) => {
        if (err) {
            return res.status(400).json({
                message: "Not able to store patient data",
                error: err
            })
        }
        return res.json({
            message: "Data Strored Successfully",
            patient: patient
        })
    })
}