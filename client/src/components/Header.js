import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import decode from "jwt-decode"
import { setLogout } from "../redux/features/authSlice";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

const Header = () => {
  const [show, setShow] = useState(false); //for respinsive header -> small screen -> humberger
  const dispatch = useDispatch(); // for logout funtion
  const { user } = useSelector((state) => ({ ...state.auth })); // To change nav menu depends on login or not
  const token = user?.token

  if(token) {
    const decodedToken = decode(token);
    if(decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const logoutHandler = () => {
    dispatch(setLogout());
  }
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
          <MDBIcon fas icon="university" size="sm" className="mb-2 me-2" />
          Vancouver University
        </Link>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => {
            setShow(!show);
          }}
          style={{ color: "white" }}
        >
          <MDBIcon fas icon="bars"></MDBIcon>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={show}>
          <MDBNavbarNav right fullWidth={false} className="mb-4 mb-lg-0">
            {user?.result?._id && (
              <h5
                style={{
                  marginRight: "1.4rem",
                  marginTop: "0.5rem",
                  color: "#efbdc4",
                }}
              >
                Loggedin as:{user?.result?.name}
              </h5>
            )}
            <Link
              to="/"
              style={{
                color: "white",
                marginRight: "1.4rem",
                paddingTop: "0.5rem",
              }}
            >
              home
            </Link>
            {user?.result?._id && (
              <Link
                to="/addStudent"
                style={{
                  color: "white",
                  marginRight: "1.4rem",
                  paddingTop: "0.5rem",
                }}
              >
                Add Students
              </Link>
            )}
            {user?.result?._id ? (
              <Link
                to="/login"
                style={{
                  color: "white",
                  marginRight: "1.4rem",
                  paddingTop: "0.2rem",
                }}
                className="mt-3 mt-md-0"
                onClick={logoutHandler}
              >
                <MDBBtn color='warning'>Logout</MDBBtn>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{
                  color: "white",
                  marginRight: "1.4rem",
                  paddingTop: "0.2rem",
                }}
              >
                <MDBBtn color='warning'>Login</MDBBtn>
              </Link>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
