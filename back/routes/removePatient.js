var express = require('express')
var router = express.Router()

const { removePatient } = require("../controllers/remove")

router.delete("/removepatient", removePatient)

module.exports = router