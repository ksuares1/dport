import React from "react";
// import { MDBJumbotron, MDBContainer } from "mdbreact";

const AboutPage = () => {
    return (
        <main className="about-bg">
            <img className="about-pic" src={require("../../assets/img/deshaun-about.png")} alt=" Deshaun" />
        
            <div>
            <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        </main>
    )
}

export default AboutPage;