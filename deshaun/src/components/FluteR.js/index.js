import React from "react";
import flute from '../../assets/img/music-sheet.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

  
    const FlutePage = () => {
      return (
        <Jumbotron className="flute-wrapper" style={{backgroundImage: `url(${flute})`}} fluid>
        <Container>
          <h1 className="flute-head">Flute Repairs</h1>
          {/* <p className="flute-text">
          Harmony is the key to your musicial successs.
          </p> */}
          {/* Let me help you get in tune!</p> */} 
        </Container>
      </Jumbotron>
      )
    }
    
    export default FlutePage;
    
  