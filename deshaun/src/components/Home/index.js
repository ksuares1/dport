import React from "react";
 import { MDBBtn } from "mdbreact";


const HomePage=() => {
    return(
        <main >
            
         <img className="home-pic" src={require("../../assets/img/deshaun-home.png")}  width="1000px" alt=" Deshaun" />  
        
         <div>
          <MDBBtn href="/about" gradient="purple">Welcome</MDBBtn> 
          </div>
        </main>
    )
}

export default HomePage;