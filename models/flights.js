const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: String,
    arrival: Date
});

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            let oneYearFromNow = new Date();
            return oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        }
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);