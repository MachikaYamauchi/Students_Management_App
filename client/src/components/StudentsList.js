import React from "react";
import { Link } from "react-router-dom";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const StudentsList = ({
  _id,
  imageFile,
  name,
  email,
  faculty,
  department,
  year,
}) => {

  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={imageFile}
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{name}</p>
              <p className="text-muted mb-0">{email}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{faculty}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">{department}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">{year}</p>
        </td>
        <td>
          <MDBIcon
            fas
            icon="trash"
            style={{ color: "#dd4b39" }}
            size="lg"
            onClick={() => {}}
          />
          <Link>
            <MDBIcon
              fas
              icon="edit"
              style={{ color: "#55acee", marginLeft: "10px" }}
              size="lg"
            />
          </Link>
        </td>
        <td>
          <Link to={`/student/${_id}`}>
            <MDBBtn color='primary' outline>More Details</MDBBtn>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default StudentsList;
