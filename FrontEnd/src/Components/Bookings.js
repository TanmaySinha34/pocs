import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PreviewIcon from "@mui/icons-material/Preview";

const Bookingscomp = () => {
  const [booking, setbooking] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setShow(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://localhost:12121/booking`)
      .then((res) => {
        console.log(res.data.data);
        setbooking(res.data.data);
      })
      .catch((error) => {});
  };

  const deletebooking = (_id) => {
    if (window.confirm(`Are you sure to delete record with id:${_id}`)) {
      axios
        .delete(`http://localhost:12121/booking/${_id}`)
        .then(() => {})
        .catch((error) => {});
      window.alert("booking deleted Successfully");
      fetchData();
    }
  };

  return (
    <div>
      <h2>Bookings </h2>
      {/* <Link to="/main/" className="btn btn-primary">
        Add
        <AddIcon />
      </Link> */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>TableFor</th>
            <th>BookingFrom</th>
            <th>BookingTo</th>
          </tr>
        </thead>
        <tbody>
          {booking.length > 0 &&
            booking.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.phone}</td>
                  <td>{val.email}</td>
                  <td>{val.TableFor}</td>
                  <td>{val.BookingFrom}</td>
                  <td>{val.BookingTo}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => handleShow(val)}
                    >
                      <PreviewIcon />
                    </button>
                    &nbsp;
                    <Link
                      to={`/main/booking/${val._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      <EditNoteIcon />
                    </Link>
                    {/* <Link to={`/editprod/${val.id}`} className='btn btn-outline-success btn-sm' /><EditNoteIcon /> */}
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deletebooking(val._id)}
                    >
                      <DeleteIcon></DeleteIcon>
                    </button>
                    |
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            Id:<strong>{show.index}</strong>
          </label>
          <br></br>
          <label>
            Name:<strong>{show.name}</strong>
          </label>
          <br></br>
          <label>
            Price:<strong>{show.phone}</strong>
          </label>
          <br></br>
          <label>
            Email:<strong>{show.email}</strong>
          </label>
          <br></br>
          <label>
            Table For:<strong>{show.TableFor}</strong>
          </label>
          <br></br>
          <label>
            Booking For:<strong>{show.BookingFrom}</strong>
          </label>
          <br></br>
          <label>
            Booking Upto:<strong>{show.BookingTo}</strong>
          </label>
          <br></br>
          <label>
            Id:<strong>{show._id}</strong>
          </label>
          <br></br>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Bookingscomp;
