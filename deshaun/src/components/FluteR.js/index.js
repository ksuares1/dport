import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import flute from '../../assets/img/music-sheet.png';
  
    const FlutePage = () => {
      return (
        <MDBJumbotron className="flute-wrapper" style={{backgroundImage: `url(${flute})`}}fluid>
          <MDBContainer>
            <h2 className="display-4">Flute Repairs</h2>
            <p className="lead">Harmony is the key to your musicial successs. Let me help you get in tune!</p>
          </MDBContainer>
        </MDBJumbotron>
      )
    }
    
    export default FlutePage;
    
    