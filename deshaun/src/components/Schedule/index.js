import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const SchedulePage = () => {
  return (
    <MDBJumbotron className="schedule-wrapper" fluid>
      <MDBContainer>
        <h2 className="display-4">Schedule a consultation today!</h2>
        <p className="lead"> Finding the right instructor is the key to your musical sucess!</p>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default SchedulePage;