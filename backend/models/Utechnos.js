const mongoose = require("mongoose");

const UtechnosSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pendingRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FundRequest'
    }],
    approvedRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FundRequest'
    }],
    rejectedRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FundRequest'
    }]
});

const Utechnos = mongoose.model("Utechnos", UtechnosSchema);

module.exports = Utechnos;