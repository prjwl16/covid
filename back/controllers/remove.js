const Patient = require("../model/patient")

exports.removePatient = (req, res) => {
    Patient.findByIdAndRemove(req.body._id, { useFindAndModify: false }, (err, doc) => {
        if (doc == null) {
            return res.status(400).json({
                error: "Not able to remove patient"
            })
        }
        return res.status(200).json({
            message: "Patient removed successfully",
            d: doc
        })
    })
}



