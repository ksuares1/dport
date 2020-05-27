import React from "react";
 import { MDBBtn } from "mdbreact";
import './index.css';
// import deshaun from '../../assets/img/deshaun-home.png';

function HomePage() {
    return(
            <div className="home">
            <img className="home-pic" src={require("../../assets/img/deshaun-home.png")}  width="1000px" alt=" Deshaun" />   
             <br>
             </br>
             <br>
             </br>
             <br>
             </br>
             <br>
             </br> <br>
             </br>
             <br>
             </br> <br>
             </br>
             <br>
             </br> <br>
             </br>
             <br>
             </br> <br>
             </br>
             <br>
             </br> <br>
             </br>
             <br>
             </br>
            <MDBBtn className="text-align:center" href="/about" gradient="purple">Welcome</MDBBtn>   
          
       </div> 
    )
}

export default HomePage;