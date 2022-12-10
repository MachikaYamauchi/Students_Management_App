import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../redux/features/authSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const [formValue, setFormValue] = useState(initialState);
  const {firstName, lastName, email, password, confirmPassword} = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error)
  }, [error])

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({...formValue, [name]:value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      return toast.error("Password should match");
    }
    if(firstName && lastName && email && password && confirmPassword) {
      dispatch(signup({formValue, navigate, toast}))
    }
  }


  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "500px",
        marginTop: "120px",
        padding: "1rem",
      }}
    >
      <MDBCard alignment="center" style={{ padding: "1rem" }}>
        <MDBIcon fas icon="user-circle" size="2x" className="mb-2"/>
        <h5>Sign Up</h5>
        <MDBCardBody>
          <MDBValidation noValidate onSubmit={submitHandler}>
            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  label="First Name"
                  type="text"
                  name="firstName"
                  required
                  invalid
                  onChange={onInputChange}
                  validation="Please provide first name"
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Last Name"
                  type="text"
                  name="lastName"
                  required
                  invalid
                  onChange={onInputChange}
                  validation="Please provide last name"
                />
              </MDBCol>
              <MDBCol md="12" className="g-3">
                <MDBInput
                  label="Email"
                  type="email"
                  name="email"
                  required
                  invalid
                  onChange={onInputChange}
                  validation="Please provide email"
                />
              </MDBCol>
              <MDBCol md="12" className="g-3">
                <MDBInput
                  label="Password"
                  type="password"
                  name="password"
                  required
                  invalid
                  onChange={onInputChange}
                  validation="Please provide password"
                />
              </MDBCol>
              <MDBCol md="12" className="g-3">
                <MDBInput
                  label="Password Confirm"
                  type="password"
                  name="confirmPassword"
                  required
                  invalid
                  onChange={onInputChange}
                  validation="Please provide confirm password"
                />
              </MDBCol>
              <MDBCol md="12" className="g-3">
                <MDBBtn style={{ width: "100%" }}>
                  {loading && (
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                  )}
                  Sign Up
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">Already have an account? Log in</Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Signup;
