import React from "react";
import FooterComp from "./FooterComp";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Testimonials from "./testimonial";
import LogoCollection from "./logo";

function MainDashBoardComp() {
  return (
    <div className="container">
      <h1
        className="heading"
        style={{ textAlign: "center", fontFamily: "sans-serif" }}
      >
        Desi Tadka
      </h1>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="/main">Desi Tadka</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/main/menu">Service</Nav.Link>
              <Nav.Link href="/main/about"> About</Nav.Link>
              <Nav.Link href="/main/contact"> Contact</Nav.Link>
              <Nav.Link href="/main/booking"> Book a Seat</Nav.Link>
              <Nav.Link href="/main/cart"> Cart</Nav.Link>
              {sessionStorage.user === "admin@gmail.com" && (
                <Nav.Link href="/main/bookings"> Bookings</Nav.Link>
              )}
              {/* <NavDropdown title="Store" id="basic-nav-dropdown">
                <NavDropdown.Item href="/main/store">
                  Fast Food
                </NavDropdown.Item>
                <NavDropdown.Item href="/main/desserts">
                  Beverages and Desserts
                </NavDropdown.Item>
                <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="/main/cart">
                  Go to Cart
                </NavDropdown.Item> */}
              {/* </NavDropdown> */}
              {/* <Nav.Link
                href="/main/cart"
                style={{
                  float: "right",
                  position: "relative",
                  right: "-400px",
                }}
              >
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </Nav.Link> */}
              <Nav.Link
                href="/login"
                style={{
                  float: "right",
                  position: "relative",
                  right: "-330px",
                }}
                className="btn btn-outline-success"
              >
                {" "}
                Login
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link
                href="/main/signup"
                style={{
                  float: "right",
                  position: "relative",
                  right: "-335px",
                }}
                className="btn btn-outline-success"
              >
                {" "}
                Register
              </Nav.Link>
              &nbsp;&nbsp;
              {sessionStorage.user && (
                <Nav.Link
                  href="/main"
                  style={{
                    float: "right",
                    position: "relative",
                    right: "-340px",
                  }}
                  className="btn btn-outline-danger"
                  onClick={() => {
                    window.alert("Are you sure??");
                    sessionStorage.removeItem("user");
                  }}
                >
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Testimonials />

      <LogoCollection />
      <FooterComp></FooterComp>
    </div>
  );
}

export default MainDashBoardComp;
