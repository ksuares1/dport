import React from "react";


const AboutPage = () => {
    return (
        // row column issue
        <main style={{flexDirection:"row"}}>
            <img className="about-pic" src={require("../../assets/img/deshaun-about.png")} alt=" Deshaun" />
            <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </main>
    )
}

export default AboutPage;