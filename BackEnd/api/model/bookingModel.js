const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
  TableFor: { type: String, require: true },
  BookingFrom: { type: String, require: true },
  BookingTo: { type: String, require: true },
});

module.exports = mongoose.model("booking", bookingSchema);
