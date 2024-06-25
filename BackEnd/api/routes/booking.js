const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const bookingModelRequest = require("../controller/booking.model");

//get request
router.get("/", bookingModelRequest.get_bookings);

//post request for booking
router.post("/", bookingModelRequest.create_booking);

//put request
router.put("/:bookingId", bookingModelRequest.update_booking);

//get for single booking
router.get("/:bookingId", bookingModelRequest.get_booking_ById);

//delete booking
router.delete("/:bookingId", bookingModelRequest.delete_booking);

module.exports = router;
