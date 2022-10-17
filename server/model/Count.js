const mongoose = require("mongoose");
const CountSchema = new mongoose.Schema({
countPunch: {
  type: Number,
  required: true
},
phoneNo: {
  type: Number,
  required: true
  //max: 10,
  //min:  10
},
punch: {
  type: String,
  required: true,
  enum:["Threading","Facials","waxing"]
},

});
const Count = mongoose.model('Count', CountSchema);

module.exports = Count;
