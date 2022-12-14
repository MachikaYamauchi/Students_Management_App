import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCard,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../redux/features/studentSlice";
import StudentsList from "../components/StudentsList";
import Spinner from "../components/Spinner";

const Home = () => {
  const { students, loading } = useSelector((state) => ({ ...state.student }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(loading) {
    return <Spinner />
  }

  return (
    <div style={{ margin: "auto", marginTop: "120px", maxWidth: "900px" }}>
      <MDBCard style={{ padding: "1rem" }}>
        <MDBTable align="middle" responsive>
          <MDBTableHead style={{ backgroundColor: "#58001b", color: "white" }}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Faculty</th>
              <th scope="col">Department</th>
              <th scope="col">Year</th>
              <th scope="col">Actions</th>
              <th scope="col">Details</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {students &&
              students.map((student) => (
                <StudentsList key={student._id} {...student} />
              ))}
          </MDBTableBody>
        </MDBTable>
      </MDBCard>
    </div>
  );
};

export default Home;
