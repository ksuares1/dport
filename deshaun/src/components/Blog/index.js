import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function BlogComponent() {
    return (
        <main>
            <Jumbotron>
                <h1>More than a Lyric </h1>
                <p> A blog chronicling my musicial journey.</p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </main>

    )
}
export default BlogComponent;