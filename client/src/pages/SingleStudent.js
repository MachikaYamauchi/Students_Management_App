import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../redux/features/studentSlice";
import { useParams } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

const SingleStudent = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {student} = useSelector(state => ({...state.student}));

  useEffect(() => {
    id && dispatch(getStudent(id))
  }, [id]);

  return (
    <div style={{ margin: "auto", marginTop: "120px", maxWidth: "800px" }}>
      <MDBCard style={{ padding: "1rem" }}>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src={student.imageFile}
              fluid
              className="mb-3"
              style={{ height: "180px", width: "180px", objectFit: "cover" }}
            />
            <h4>{student.name}</h4>
            <p>{student.year}</p>
            <p>{student.email}</p>
            <p>{student.phoneNumber}</p>
          </MDBCol>
          <MDBCol md="8">
            <MDBListGroup>
              <MDBListGroupItem className="d-flex justify-content-between">
                <h5>Faculty</h5>
                <p>{student.faculty}</p>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between">
                <h5>Department</h5>
                <p>{student.department}</p>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between">
                <h5>Address</h5>
                <p>{student.address}</p>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between">
                <h5>Graduated School</h5>
                <p>{student.graduatedSchool}</p>
              </MDBListGroupItem>
              <MDBListGroupItem className="text-start">
                <h5>Description</h5>
                <p>{student.description}</p>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between">
                <h5>Staff event Counts</h5>
                <p style={{ fontSize: "1.2rem" }}>{student.participationNumber}</p>
              </MDBListGroupItem>
            </MDBListGroup>
            <div style={{ marginTop: "1rem" }} className="d-flex justify-content-end" >
              <Link to="/">
                <MDBBtn color="primary" size="lg">
                  Close
                </MDBBtn>
              </Link>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
};

export default SingleStudent;
