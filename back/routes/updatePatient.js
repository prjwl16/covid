var express = require('express')
var router = express.Router()

const { updatePatient } = require("../controllers/update")

router.put("/updatePatient", updatePatient)

module.exports = router