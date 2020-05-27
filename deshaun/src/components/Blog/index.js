import React from "react";
import "./index.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function BlogComponent() {
    return (
        <main>
            <br>
            </br>
            <Jumbotron className="blog-jumbo" >
                <h1>More than a Lyric </h1>
                <h4> A blog chronicling my musicial journey.</h4>
                <br>
                </br>
                <p>
                    <Button className="blog-btn" variant="default">Coming Soon</Button>
                </p>
            </Jumbotron>
            {/* <footer className="footer-bg">
                <div className="footer-text">© 2020
            <a className="footer-text" href="https://dgktheflutist.com/"> dgktheflutist.com</a>
                </div>
            </footer> */}
        </main >

    )
}
export default BlogComponent;