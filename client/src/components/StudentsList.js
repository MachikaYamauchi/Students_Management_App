import React from "react";
import { Link } from "react-router-dom";
import { deleteStudent } from "../redux/features/studentSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const StudentsList = ({_id, imageFile, firstName, lastName, email, faculty, department, year,}) => {
  const name = `${firstName} ${lastName}`;
  const dispatch = useDispatch();

  const deleteHandler =(id) => {
    if(window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent({id, toast}));
    }
  };

  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={imageFile}
              style={{ width: "45px", height: "45px", objectFit:"cover" }}
              className="rounded-circle"
              alt={_id}
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
            style={{ color: "#dd4b39", cursor:"pointer" }}
            size="lg"
            onClick={() => deleteHandler(_id)}
          />
          <Link to={`/editStudent/${_id}`}>
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
