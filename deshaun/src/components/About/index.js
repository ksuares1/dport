import React from "react";


const AboutPage = () => {
    return (
        // row column issue
        <main className="text-align:center">
            <br>
            </br>
            <br>
            </br>
            <img className="about-pic" src={require("../../assets/img/deshaun-about.png")} alt=" Deshaun" />
            <div className="about-wrapper">
            <p className="about-text" style={{ display: "inline-block", width:'50%', height:'50%'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
        
        </main>
    )
}

export default AboutPage;