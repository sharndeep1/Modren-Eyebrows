const {Router} = require("express");
const UserPunch= require("../model/UserPunch");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newUserPunch = new UserPunch(request.body);
  newUserPunch.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
// Get (read) all records from the collection
router.get("/count", (request, response) => {
  UserPunch.find({phoneNo: Number(request.query.id), punch: request.query.type}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json({count:record.length});
  });
});
// Get (read) all records from the collection
router.get("/", (request, response) => {
  UserPunch.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});



module.exports = router;
