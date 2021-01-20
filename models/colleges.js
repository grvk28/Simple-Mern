const mongoose= require('mongoose');

const Schema = mongoose.Schema;
const collegesSchema = new Schema({
    id:String,
    name: String,
    year: String,
    city: String,
    state: String,
    country: String,
    noofstudents: String,
    courses: String 
});

const colleges = mongoose.model('colleges', collegesSchema);

module.exports = colleges;