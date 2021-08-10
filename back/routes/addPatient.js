var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator');
const { addPatient } = require("../controllers/add")

router.post("/addpatient", [
    check("email", "Enter Valide email address").isEmail()
], addPatient)

module.exports = router