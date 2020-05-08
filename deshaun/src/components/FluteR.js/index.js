import React from "react";
import flute from '../../assets/img/music-sheet.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';


const FlutePage = () => {
  return (
    <main>
      <Jumbotron className="flute-wrapper" style={{ backgroundImage: `url(${flute})` }} fluid>
        <Container>
          <h1 className="flute-head">Flute Repairs</h1>
        </Container>
      </Jumbotron>

      <br>
      </br>
      <br>
      </br>

      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
            <p className="flute-form h4 text-center mb-4">Flute Repair Shop</p>
              <p className="flute-form"> Harmony is the key to your musicial success.</p> 
                <p className="flute-form">Let me help you make the necessary repairs to your instrument.</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Your name
        </label>
              <input type="text" id="defaultFormContactNameEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Your email
        </label>
              <input type="email" id="defaultFormContactEmailEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                Subject
        </label>
              <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                Your message
        </label>
              <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
              <div className="text-center mt-4">
                <MDBBtn color="warning" outline type="submit">
                  Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      );
    };

    export default FormPage;

    </main>
  )
}

export default FlutePage;

