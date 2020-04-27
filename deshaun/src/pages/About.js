import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const AboutPage = () => {
    return (
        <main>
            <MDBJumbotron className="about-container" fluid>
                <MDBContainer>
                    <h2 className="display-4">Deshaun is the future of music </h2>
                    <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </MDBContainer>
            </MDBJumbotron>

            <br>
            </br>
            <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </main>
    )
}

export default AboutPage;