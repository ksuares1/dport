import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import flute from '../../assets/img/music-sheet.png';
  
    const FlutePage = () => {
      return (
        <MDBJumbotron className="flute-wrapper" style={{backgroundImage: `url(${flute})`}}fluid>
          <MDBContainer>
            <h2 className="flute-head display-4">Flute Repairs</h2>
            {/* <p className="flute-text lead">Harmony is the key to your musicial successs.</p>
            <p className="flute-secline lead">Let me help you get in tune!</p> */}
          </MDBContainer>
        </MDBJumbotron>
      )
    }
    
    export default FlutePage;
    
    