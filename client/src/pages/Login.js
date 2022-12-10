import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
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
  email:"",
  password:""
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialState);
  const {email, password} = formValue;
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    error && toast.error(error)
  }, [error])

  const onInputChange = (e) => {
    let {name, value} = e.target;
    setFormValue({...formValue, [name]:value});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(email && password) {
      dispatch(login({formValue, navigate, toast}));
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "auto",
        marginTop: "120px",
        padding: "1rem",
      }}
    >
      <MDBCard alignment="center" style={{ padding: "1rem" }}>
        <MDBIcon fas icon="user-circle" size="2x" className="mb-2" />
        <h5>Login</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={submitHandler} noValidate>
            <MDBRow>
              <MDBCol md="12" className="g-3">
                <MDBInput
                  label="Email"
                  type="email"
                  name="email"
                  onChange={onInputChange}
                  required
                  invalid
                  validation="Please provide your email"
                />
              </MDBCol>
              <MDBCol md="12" className="g-3">
                <MDBInput
                  label="Password"
                  type="password"
                  name="password"
                  onChange={onInputChange}
                  required
                  invalid
                  validation="Please provide your email"
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
                  Login
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/signup">Dont's you have an account? Sign Up</Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Login;
