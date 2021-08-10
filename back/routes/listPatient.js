var express = require('express')
var router = express.Router()

const { SearchPatients } = require("../controllers/searchByNumber")
const { listAllPatients } = require('../controllers/listAll')

router.post("/searchpatients", SearchPatients)
router.get("/listpatients",listAllPatients)
module.exports = router