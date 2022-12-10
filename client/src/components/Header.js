import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#8b2230" }}>
      <MDBContainer>
        <Link
          style={{
            color: "White",
            fontWeight: "600",
            fontSize: "1.6rem",
            fontFamily: "Playfair Display",
          }}
          to="/"
        >
          Vancouver University
        </Link>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label='l="Tpggle navigation'
          onClick={() => {
            setShow(!show);
          }}
          style={{ color: "white" }}
        >
          <MDBIcon fas icon="bars"></MDBIcon>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={show}>
          <MDBNavbarNav right fullWidth={false}>
            <h5
              style={{
                marginRight: "1.2rem",
                marginTop: "0.5rem",
                color: "white",
              }}
            >
              Loggedin as:{" "}
            </h5>
            <Link
              to="/"
              style={{
                color: "white",
                marginRight: "1.2rem",
                paddingTop: "0.5rem",
              }}
            >
              home
            </Link>
            <Link
              to="/"
              style={{
                color: "white",
                marginRight: "1.2rem",
                paddingTop: "0.5rem",
              }}
            >
              Add Students
            </Link>
            <Link
              to="/login"
              style={{
                color: "white",
                marginRight: "1.2rem",
                paddingTop: "0.5rem",
              }}
            >
              Login
            </Link>
            <Link
              to="/login"
              style={{
                color: "white",
                marginRight: "1.2rem",
                paddingTop: "0.5rem",
              }}
            >
              Logout
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
