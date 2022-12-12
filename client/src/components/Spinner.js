import { MDBSpinner } from 'mdb-react-ui-kit';
import React from 'react';

const Spinner = () => {
  return (
    <MDBSpinner role='status' style={{marginTop:"150px"}}>
        <span className='visually-hidden'>Loading...</span>
    </MDBSpinner>
  )
}

export default Spinner;