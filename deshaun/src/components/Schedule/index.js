import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const SchedulePage = () => {
  return (
    <MDBJumbotron fluid>
      <MDBContainer>
        <h2 className="text-align:center display-4">Schedule a consultation today!</h2>
        <p className="text-align:center lead"> Finding the right instructor is the key to musical sucess!</p>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default SchedulePage;