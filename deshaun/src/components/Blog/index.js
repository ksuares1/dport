import React from "react";
import "./index.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function BlogComponent() {
    return (
        <main>
            <br>
            </br>
            <Jumbotron  className="blog-jumbo" >
                <h1>More than a Lyric </h1>
                <p> A blog chronicling my musicial journey.</p>
                <p>
                    <Button className="blog-btn" variant="default">Coming Soon</Button>
                </p>
            </Jumbotron>
        </main>

    )
}
export default BlogComponent;