import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PreviewIcon from "@mui/icons-material/Preview";
import Data from "../shared/constant/constantData";

const CartCrudComp = () => {
  const [product, setProduct] = useState([]);

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
      .get(`http://localhost:3333/products`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {});
  };

  const deleteProduct = (id) => {
    if (window.confirm(`Are you sure to delete record with id:${id}`)) {
      axios
        .delete(`http://localhost:3333/products/${id}`)
        .then(() => {})
        .catch((error) => {});
      window.alert("Product deleted Successfully");
      fetchData();
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <Link to="/main/store" className="btn btn-primary">
        Add
        <AddIcon />
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Dish Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product.length > 0 &&
            product.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.dish}</td>
                  <td>{val.Price}</td>
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
                      to={`/editprod/${val.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      <EditNoteIcon />
                    </Link>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteProduct(val.id)}
                    >
                      <DeleteIcon></DeleteIcon>
                    </button>
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
          <Modal.Title>{show.pname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            Id:<strong>{show.id}</strong>
          </label>
          <br></br>
          <label>
            Name:<strong>{show.name}</strong>
          </label>
          <br></br>
          <label>
            Price:<strong>{show.Price}</strong>
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

export default CartCrudComp;
