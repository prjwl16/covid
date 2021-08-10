const mongoose = require("mongoose")
const schema = mongoose.Schema

const patientSchema = new schema({
    name: {
        type: String,
        required: true,
        maxlength: 32
    },
    lastname: {
        type: String,
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        required: false,
        maxlength: 32
    },
    status: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        // required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("user", patientSchema)