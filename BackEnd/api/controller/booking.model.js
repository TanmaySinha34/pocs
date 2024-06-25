const mongoose = require("mongoose");
const Booking = require("../model/bookingModel");

//code for post request
exports.create_booking = async (req, res, next) => {
  try {
    const bookingObj = new Booking({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      TableFor: req.body.TableFor,
      BookingFrom: req.body.BookingFrom,
      BookingTo: req.body.BookingTo,
    });

    const data = await bookingObj.save();
    res.status(200).json({
      code: 1,
      msg: "booking created successfully",
      createdbooking: data,
      error: null,
    });
  } catch (err) {
    res.status(500).json({
      code: 0,
      msg: "Kuch galat hua",
      createdbooking: null,
      error: err,
    });
  }
};

//code for get booking list
exports.get_bookings = async (req, res, next) => {
  try {
    const data = await Booking.find();
    if (data) {
      res.status(200).json({
        code: 1,
        msg: "This is simple get request for booking",
        data: data,
        error: null,
      });
    } else {
      res.status(200).json({
        code: 1,
        msg: "No data found",
        data: null,
        error: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      msg: "Kuch galat hua",
      data: null,
      error: error,
    });
  }
};

//code for getting single booking
exports.get_booking_ById = async (req, res, next) => {
  try {
    const data = await Booking.findById(req.params.bookingId);
    if (data) {
      res.status(200).json({
        code: 1,
        msg: "This is simple get request for one booking",
        data: data,
        error: null,
      });
    } else {
      res.status(200).json({
        code: 1,
        msg: "No booking available for given ID",
        data: null,
        error: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      msg: "Kuch galat hua",
      data: null,
      error: error,
    });
  }
};

//code for update single booking
exports.update_booking = async (req, res, next) => {
  try {
    const data = await Booking.findByIdAndUpdate(
      req.params.bookingId,
      req.body,
      { new: true, runValidator: true }
    );
    if (data) {
      res.status(200).json({
        code: 1,
        msg: "This is simple put request for single booking",
        data: data,
        error: null,
      });
    } else {
      res.status(200).json({
        code: 1,
        msg: "No booking available for given ID",
        data: null,
        error: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      msg: "Kuch galat hua",
      data: null,
      error: error,
    });
  }
};

//code for delete single booking
exports.delete_booking = async (req, res, next) => {
  try {
    const data = await Booking.findByIdAndDelete(req.params.bookingId);
    if (!data) {
      res.status(404).json({
        code: 1,
        msg: "No booking found",
        data: data,
        error: null,
      });
    } else {
      res.status(404).json({
        code: 1,
        msg: "Data Deleted",
        data: data,
        error: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      msg: "Kuch galat hua",
      data: null,
      error: error,
    });
  }
};
