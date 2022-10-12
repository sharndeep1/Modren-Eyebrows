const mongoose = require("mongoose");
const UserPunchSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  phoneNo: {
    type: Number,
    required: true,
    //max: 10,
    //min:  10
  },
  punch: {
    type: String,
    required: true,
    enum:["Threading","Facials","waxing"]
  },

});

const UserPunch = mongoose.model('UserPunch', UserPunchSchema);

module.exports = UserPunch;

