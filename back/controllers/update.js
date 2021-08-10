const Patient = require("../model/patient")

exports.updatePatient = (req, res) => {
    Patient.findByIdAndUpdate(req.body._id, { status: req.body.status }, { new: true, useFindAndModify: false }, (err, doc) => {
        if (err) {
            return res.status(400).json({
                message: "Not updated",
                er: err
            })
        }
        return res.status(200).json(doc)
    })
}