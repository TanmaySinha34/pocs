import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditbookingComp = () => {
  const nav = useNavigate();
  const { _id } = useParams();
  const [booking, setbooking] = useState({
    _id: "",
    name: "",
    phone: "",
    email: "",
    TableFor: "",
    BookingFrom: "",
    BookingTo: "",
  });

  const inputChangeHandler = (event) => {
    const { type, name, value } = event.target;
    setbooking({ ...booking, [name]: value });
  };

  const Editbooking = (event) => {
    event.preventDefault();

    //form val

    if (!booking.name.trim()) {
      document.getElementById("nameError").innerHTML =
        "Name field can't be empty";
      return false;
    } else {
      document.getElementById("nameError").innerHTML = " ";
    }
    if (!booking.name.match("[a-zA-Z]{3,15}")) {
      document.getElementById("nameError").innerHTML =
        "Name must contain only character min-3 and max-15";
      return false;
    } else {
      document.getElementById("nameError").innerHTML = " ";
    }
    if (!booking.phone.trim()) {
      document.getElementById("phError").innerHTML = "Phone is required";
      return false;
    } else {
      document.getElementById("phError").innerHTML = " ";
    }
    if (!booking.phone.match("[0-9]{10}")) {
      document.getElementById("phError").innerHTML = "Phone Number invalid";
      return false;
    } else {
      document.getElementById("phError").innerHTML = " ";
    }
    if (!booking.email.trim()) {
      document.getElementById("mailError").innerHTML = "Email is required";
      return false;
    } else {
      document.getElementById("mailError").innerHTML = " ";
    }
    if (!booking.email.match("[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}")) {
      document.getElementById("mailError").innerHTML = "Email invalid";
      return false;
    } else {
      document.getElementById("mailError").innerHTML = " ";
    }

    if (!booking.TableFor.trim()) {
      document.getElementById("taError").innerHTML =
        "Table amount is required !";
      return false;
    } else {
      document.getElementById("taError").innerHTML = " ";
    }
    if (!booking.TableFor.match("[0-9,]{1}")) {
      document.getElementById("taError").innerHTML =
        "max 0-9 tables can be booked ata a time";
      return false;
    } else {
      document.getElementById("taError").innerHTML = " ";
    }

    // if (!booking.address.trim()) {
    //   document.getElementById("adError").innerHTML = "Address is required";
    //   return false;
    // } else {
    //   document.getElementById("adError").innerHTML = " ";
    // }
    // if (!booking.address.match("[a-zA-Z]{5,50}")) {
    //   document.getElementById("adError").innerHTML =
    //     "Address must contain only character min-5 and max-50";
    //   return false;
    // } else {
    //   document.getElementById("adError").innerHTML = " ";
    // }
    if (!booking.BookingFrom) {
      document.getElementById("tError").innerHTML = "Time is required";
      return false;
    } else {
      document.getElementById("tError").innerHTML = " ";
    }

    if (!booking.BookingTo) {
      document.getElementById("tuError").innerHTML = "Time is required";
      return false;
    } else {
      document.getElementById("tuError").innerHTML = " ";
    }

    //val end

    console.log(booking);
    axios
      .put(`http://localhost:12121/booking/${_id}`, booking)
      .then(() => {
        window.alert("Booking Updated Successfully");
        nav("/main/bookings");
      })
      .catch((error) => {});
  };
  useEffect(() => {
    console.log(_id);
    axios
      .get(`http://localhost:12121/booking/${_id}`)
      .then((res) => {
        console.log(res.data.data);
        setbooking(res.data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Update Booking</h2>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <form onSubmit={(e) => Editbooking(e)}>
            <div>
              <label>Enter Your Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => inputChangeHandler(e)}
                value={booking.name}
              />
              <p id="nameError" style={{ color: "red", fontSize: "11px" }}></p>
            </div>

            <div>
              <label>Enter Your Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={booking.phone}
                onChange={(e) => inputChangeHandler(e)}
              />
              <p id="phError" style={{ color: "red", fontSize: "11px" }}></p>
            </div>

            <div>
              <label>Enter booking Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={booking.email}
                onChange={(e) => inputChangeHandler(e)}
              />
              <p id="mailError" style={{ color: "red", fontSize: "11px" }}></p>
            </div>

            <div>
              <label>Table for ?</label>
              <input
                type="text"
                name="TableFor"
                className="form-control"
                value={booking.TableFor}
                onChange={(e) => inputChangeHandler(e)}
              />
              <p id="taError" style={{ color: "red", fontSize: "11px" }}></p>
            </div>

            <div>
              <label>Booking Time</label>
              <input
                type="time"
                name="BookingFrom"
                className="form-control"
                value={booking.BookingFrom}
                onChange={(e) => inputChangeHandler(e)}
              />
              <p id="tError" style={{ color: "red", fontSize: "11px" }}></p>
            </div>

            <div>
              <label>Booking Upto</label>
              <input
                type="time"
                name="BookingTo"
                className="form-control"
                value={booking.time}
                onChange={(e) => inputChangeHandler(e)}
              />
              <p id="tuError" style={{ color: "red", fontSize: "11px" }}></p>
            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default EditbookingComp;
