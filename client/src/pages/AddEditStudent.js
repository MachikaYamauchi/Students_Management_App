import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBValidation,
  MDBBtn,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addStudent } from "../redux/features/studentSlice";
import FileBase from "react-file-base64";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  year: "",
  address: "",
  graduatedSchool: "",
  description: "",
};

const AddEditStudent = () => {
  const [studentData, setStudentData] = useState(initialState);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    year,
    address,
    graduatedSchool,
    description,
  } = studentData;
  const { loading, error } = useSelector((state) => ({ ...state.student }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      year &&
      address &&
      graduatedSchool &&
      description
    ) {
      const newStudentdata = { ...studentData, name: user?.result?.name };
      dispatch(addStudent({ newStudentdata, navigate, toast }));
    }
    handleClear();
  };

  const handleClear = () => {
    setStudentData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      year: "",
      address: "",
      graduatedSchool: "",
      description: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "auto",
        marginTop: "120px",
        padding: "1rem",
      }}
      className="container"
    >
      <MDBCard alignment="center">
        <h5>Add Student</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-6">
              <MDBInput
                label="First Name"
                placeholder="Enter First Name"
                type="text"
                value={firstName}
                name="firstName"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please Provide first name"
              />
            </div>
            <div className="col-md-6">
              <MDBInput
                label="Last Name"
                placeholder="Enter Last Name"
                type="text"
                value={lastName}
                name="lastName"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please Provide last name"
              />
            </div>
            <div className="col-md-6">
              <MDBInput
                label="Email"
                placeholder="Enter Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please Provide Email"
              />
            </div>
            <div className="col-md-6">
              <MDBInput
                label="Phone Number"
                placeholder="Enter Phone Number"
                type="text"
                value={phoneNumber}
                name="phoneNumber"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please Provide Phone Number"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Year"
                placeholder="Enter Year"
                type="text"
                value={year}
                name="year"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please Provide year"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Address"
                placeholder="Address"
                type="address"
                value={address}
                name="address"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please Provide address"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Graduated School"
                placeholder="Graduated School"
                type="text"
                value={graduatedSchool}
                name="graduatedSchool"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please Provide Graduated school"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Description"
                placeholder="description"
                type="text"
                value={description}
                name="description"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                textarea
                rows={3}
                validation="Please Provide description"
              />
            </div>
            <div className="d-flex justify-content-start mb-4">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setStudentData({ ...studentData, imageFile: base64 })
                }
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }}>Submit</MDBBtn>
              <MDBBtn
                style={{ width: "100%" }}
                className="mt-2"
                color="danger"
                onClick={handleClear}
              >
                Clear
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddEditStudent;
