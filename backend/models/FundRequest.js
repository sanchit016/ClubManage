const mongoose = require("mongoose");

const fundRequestSchema = new mongoose.Schema({
    club: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club'
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: int,
        required: true
    },
    isVerified: {
        type: Boolean,
    }    
});

const FundRequest = mongoose.model("FundRequest", fundRequestSchema);

module.exports = FundRequest;