import React from "react";
import { MDBBtn } from "mdbreact";


const HomePage=() => {
    return(
        <div >
            
         <img src={require("../../assets/img/deshaun-home.png")} alt=" Deshaun" />  
         <MDBBtn href="/about" gradient="purple">Welcome</MDBBtn>
        </div>
    )
}

export default HomePage;